import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Logo from "../../components/ui/Logo.jsx";
import api from "../../lib/api.js";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault(); setLoading(true); setError("");
    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminName", data.admin.name);
      navigate("/admin");
    } catch (err) { setError(err.response?.data?.message || "Login failed"); }
    finally { setLoading(false); }
  }

  return (
    <main className="relative grid min-h-screen place-items-center p-5"
      style={{ background: "radial-gradient(circle at 50% 50%, rgba(79,70,229,0.04) 0%, transparent 60%), #FAF9F6" }}>
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="orb-blue pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 animate-float" />
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 border border-zinc-200/60 text-left"
        style={{ boxShadow: "0 24px 60px -15px rgba(24,24,27,0.07)" }}>
        <div className="flex justify-center"><Logo /></div>
        <h1 className="mt-8 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">Admin Login</h1>
        <p className="mt-2 text-xs text-zinc-500 font-semibold leading-relaxed">Manage bookings, customers and revenue.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="field"><span>Email</span><input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="admin@example.com" /></label>
          <label className="field"><span>Password</span><input type="password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Your password" /></label>
          {error && <p className="rounded-xl bg-red-50 p-3.5 text-xs font-semibold text-red-700 border border-red-100">{error}</p>}
          <button className="btn-primary w-full justify-center text-xs py-3.5" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"} <ArrowRight size={16} />
          </button>
        </form>
        <Link to="/" className="mt-6 block text-center text-xs font-bold text-zinc-500 hover:text-zinc-800 transition-colors">← Back to website</Link>
      </div>
    </main>
  );
}
