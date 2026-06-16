import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BadgeCheck, CalendarCheck, Clock3, IndianRupee, LogOut, MessageCircle } from "lucide-react";
import Logo from "../../components/ui/Logo.jsx";
import api from "../../lib/api.js";
import { phone, whatsappLink } from "../../config/site.js";

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0, revenue: 0, today: 0, customers: 0 });
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function logout() { localStorage.removeItem("adminToken"); localStorage.removeItem("adminName"); navigate("/admin/login"); }

  async function load() {
    try {
      const [{ data: bd }, { data: sd }] = await Promise.all([api.get("/bookings"), api.get("/bookings/stats")]);
      setBookings(bd.bookings); setStats(sd);
    } catch (err) { if (err.response?.status === 401) logout(); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  const visible = useMemo(() => filter === "All" ? bookings : bookings.filter(b => b.status === filter), [bookings, filter]);

  async function updateBooking(id, updates) { await api.patch(`/bookings/${id}`, updates); await load(); }

  const statCards = [
    ["Total Bookings", stats.total, CalendarCheck, "bg-indigo-50 text-indigo-600 border-indigo-100", "+8% this week"],
    ["Pending", stats.pending, Clock3, "bg-amber-50 text-amber-600 border-amber-100", "Requires action"],
    ["Completed", stats.completed, BadgeCheck, "bg-emerald-50 text-emerald-600 border-emerald-100", "Good progress"],
    ["Revenue", `₹${Number(stats.revenue).toLocaleString("en-IN")}`, IndianRupee, "bg-purple-50 text-purple-600 border-purple-100", "Total earnings"],
  ];

  return (
    <div className="min-h-screen bg-zinc-50/50">
      <header className="sticky top-0 z-30 bg-white border-b border-zinc-200/50 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="hidden text-xs font-bold text-zinc-500 sm:block">
              Hello, <strong className="text-zinc-900 font-extrabold">{localStorage.getItem("adminName") || "Admin"}</strong>
            </span>
            <button onClick={logout} className="btn-secondary px-3.5 py-1.5 text-xs"><LogOut size={13} /> Logout</button>
          </div>
        </div>
      </header>
      <main className="container py-10 text-left">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Business Overview</span>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-zinc-950 tracking-tight">Admin Dashboard</h1>
            <p className="mt-2 text-xs font-semibold text-zinc-500">Today: {stats.today} new booking{stats.today === 1 ? "" : "s"} · {stats.customers} total customers</p>
          </div>
          <a href="/" target="_blank" className="btn-secondary text-xs px-4 py-2 bg-white">View Website <ArrowRight size={13} /></a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map(([label, value, Icon, colorCls, trendText]) => (
            <div key={label} className="rounded-2xl bg-white p-6 border border-zinc-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{label}</span>
                  <span className={`grid h-9 w-9 place-items-center rounded-xl border ${colorCls}`}><Icon size={16} /></span>
                </div>
                <strong className="mt-5 block font-display text-3xl font-extrabold text-zinc-950 tracking-tight">{value}</strong>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-zinc-400 tracking-wide uppercase">Performance</span>
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  label.includes("Pending") ? "bg-amber-50 text-amber-600 border border-amber-100" :
                  label.includes("Completed") ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                  label.includes("Revenue") ? "bg-purple-50 text-purple-600 border border-purple-100" :
                  "bg-indigo-50 text-indigo-600 border border-indigo-100"
                }`}>{trendText}</span>
              </div>
            </div>
          ))}
        </div>
        <section className="mt-8 overflow-hidden rounded-3xl bg-white border border-zinc-200/60 shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-zinc-100 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-lg font-extrabold text-zinc-950">Service Bookings</h2>
              <p className="mt-1 text-xs font-semibold text-zinc-400">Update status and record completed-job revenue.</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map(item => (
                <button key={item} onClick={() => setFilter(item)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-300 ${filter === item ? "bg-indigo-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800"}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>{["Booking", "Customer", "Service Details", "Address", "Status", "Revenue (₹)", "Action"].map(h => (
                  <th key={h} className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">{h}</th>
                ))}</tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {loading ? (
                  <tr><td colSpan="7" className="p-12 text-center text-zinc-400 font-semibold text-sm">Loading bookings...</td></tr>
                ) : visible.length === 0 ? (
                  <tr><td colSpan="7" className="p-12 text-center text-zinc-400 font-semibold text-sm">No bookings found.</td></tr>
                ) : visible.map(b => (
                  <tr key={b._id} className="align-middle hover:bg-zinc-50/50">
                    <td className="px-6 py-4">
                      <strong className="text-zinc-900 font-bold">{b.bookingId}</strong>
                      <span className="mt-1 block text-[10px] text-zinc-400 font-semibold">{new Date(b.createdAt).toLocaleDateString("en-IN")}</span>
                    </td>
                    <td className="px-6 py-4">
                      <strong className="block text-zinc-900 font-bold">{b.name}</strong>
                      <a href={`tel:${b.phone}`} className="text-indigo-600 hover:underline font-semibold">{b.phone}</a>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <strong className="text-zinc-700 font-bold block">{b.service}</strong>
                      <span className="mt-1 block text-[10px] text-zinc-400 font-semibold leading-relaxed truncate">{b.description}</span>
                    </td>
                    <td className="px-6 py-4 text-zinc-500 font-medium max-w-[200px] truncate">{b.address}</td>
                    <td className="px-6 py-4">
                      <select value={b.status} onChange={e => updateBooking(b._id, { status: e.target.value })}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-bold outline-none cursor-pointer ${
                          b.status === "Pending" ? "bg-amber-50 text-amber-700 border-amber-200" :
                          b.status === "Confirmed" ? "bg-indigo-50 text-indigo-700 border-indigo-200" :
                          b.status === "Completed" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                          "bg-rose-50 text-rose-700 border-rose-200"
                        }`}>
                        <option>Pending</option><option>Confirmed</option><option>Completed</option><option>Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="relative flex items-center">
                        <span className="absolute left-2.5 text-zinc-400 font-bold">₹</span>
                        <input type="number" min="0" defaultValue={b.revenue || 0}
                          onBlur={e => Number(e.target.value) !== b.revenue && updateBooking(b._id, { revenue: Number(e.target.value) })}
                          className="w-20 rounded-xl border border-zinc-200 bg-white pl-5 pr-2 py-1.5 text-xs font-bold outline-none focus:border-indigo-500" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a href={whatsappLink(`Hello ${b.name}, regarding your ${b.service} booking (${b.bookingId})`)}
                        target="_blank" rel="noreferrer"
                        className="inline-flex rounded-xl p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-100 transition-all duration-300">
                        <MessageCircle size={15} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
