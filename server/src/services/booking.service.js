import Booking from "../models/Booking.js";

export function generateBookingId() {
  const date = new Date().toISOString().slice(2, 10).replaceAll("-", "");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `GEE-${date}-${random}`;
}

export async function createBooking(body) {
  const fields = ["name", "phone", "address", "service", "description"];
  const missing = fields.find(f => !String(body[f] || "").trim());
  if (missing) { const e = new Error(`${missing} is required`); e.status = 400; throw e; }

  const cleanPhone = String(body.phone).replace(/[^\d+]/g, "");
  if (cleanPhone.replace(/\D/g, "").length < 10) {
    const e = new Error("Enter a valid phone number"); e.status = 400; throw e;
  }

  return Booking.create({
    bookingId: generateBookingId(),
    name: String(body.name).trim(),
    phone: cleanPhone,
    address: String(body.address).trim(),
    service: String(body.service).trim(),
    description: String(body.description).trim(),
  });
}

export async function getBookings({ status, search } = {}) {
  const query = {};
  if (status && status !== "All") query.status = status;
  if (search) {
    const term = String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    query.$or = [
      { name: { $regex: term, $options: "i" } },
      { phone: { $regex: term, $options: "i" } },
      { bookingId: { $regex: term, $options: "i" } },
    ];
  }
  return Booking.find(query).sort({ createdAt: -1 }).limit(500);
}

export async function getBookingStats() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const [total, pending, completed, today, revenue, customers] = await Promise.all([
    Booking.countDocuments(),
    Booking.countDocuments({ status: "Pending" }),
    Booking.countDocuments({ status: "Completed" }),
    Booking.countDocuments({ createdAt: { $gte: start } }),
    Booking.aggregate([{ $match: { status: "Completed" } }, { $group: { _id: null, total: { $sum: "$revenue" } } }]),
    Booking.distinct("phone"),
  ]);
  return { total, pending, completed, today, revenue: revenue[0]?.total || 0, customers: customers.length };
}

export async function updateBooking(id, body) {
  const updates = {};
  if (body.status) {
    if (!["Pending", "Confirmed", "Completed", "Cancelled"].includes(body.status)) {
      const e = new Error("Invalid booking status"); e.status = 400; throw e;
    }
    updates.status = body.status;
    updates.completedAt = body.status === "Completed" ? new Date() : null;
  }
  if (body.revenue !== undefined) {
    const revenue = Number(body.revenue);
    if (!Number.isFinite(revenue) || revenue < 0) {
      const e = new Error("Revenue must be a positive number"); e.status = 400; throw e;
    }
    updates.revenue = revenue;
  }
  const booking = await Booking.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
  if (!booking) { const e = new Error("Booking not found"); e.status = 404; throw e; }
  return booking;
}
