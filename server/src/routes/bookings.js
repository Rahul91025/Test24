import { Router } from "express";
import Booking from "../models/Booking.js";
import { protect } from "../middleware/auth.js";
import { sendBookingNotification } from "../utils/email.js";

const router = Router();

function bookingReference() {
  const date = new Date().toISOString().slice(2, 10).replaceAll("-", "");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `GEE-${date}-${random}`;
}

router.post("/", async (req, res, next) => {
  try {
    const fields = ["name", "phone", "address", "service", "description"];
    const missing = fields.find((field) => !String(req.body[field] || "").trim());
    if (missing) return res.status(400).json({ message: `${missing} is required` });

    const cleanPhone = String(req.body.phone).replace(/[^\d+]/g, "");
    if (cleanPhone.replace(/\D/g, "").length < 10) return res.status(400).json({ message: "Enter a valid phone number" });

    const booking = await Booking.create({
      bookingId: bookingReference(),
      name: String(req.body.name).trim(),
      phone: cleanPhone,
      address: String(req.body.address).trim(),
      service: String(req.body.service).trim(),
      description: String(req.body.description).trim()
    });

    sendBookingNotification(booking).catch((error) => console.error("Email notification failed:", error.message));
    res.status(201).json({
      message: "Booking submitted successfully",
      booking: { bookingId: booking.bookingId, status: booking.status }
    });
  } catch (error) {
    if (error.code === 11000) {
      req.body.bookingId = bookingReference();
      return res.status(409).json({ message: "Please submit the booking again" });
    }
    next(error);
  }
});

router.get("/", protect, async (req, res, next) => {
  try {
    const { status, search } = req.query;
    const query = {};
    if (status && status !== "All") query.status = status;
    if (search) {
      const term = String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      query.$or = [
        { name: { $regex: term, $options: "i" } },
        { phone: { $regex: term, $options: "i" } },
        { bookingId: { $regex: term, $options: "i" } }
      ];
    }
    const bookings = await Booking.find(query).sort({ createdAt: -1 }).limit(500);
    res.json({ bookings });
  } catch (error) {
    next(error);
  }
});

router.get("/stats", protect, async (req, res, next) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const [total, pending, completed, today, revenue, customers] = await Promise.all([
      Booking.countDocuments(),
      Booking.countDocuments({ status: "Pending" }),
      Booking.countDocuments({ status: "Completed" }),
      Booking.countDocuments({ createdAt: { $gte: start } }),
      Booking.aggregate([{ $match: { status: "Completed" } }, { $group: { _id: null, total: { $sum: "$revenue" } } }]),
      Booking.distinct("phone")
    ]);
    res.json({ total, pending, completed, today, revenue: revenue[0]?.total || 0, customers: customers.length });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", protect, async (req, res, next) => {
  try {
    const updates = {};
    if (req.body.status) {
      if (!["Pending", "Confirmed", "Completed", "Cancelled"].includes(req.body.status)) {
        return res.status(400).json({ message: "Invalid booking status" });
      }
      updates.status = req.body.status;
      updates.completedAt = req.body.status === "Completed" ? new Date() : null;
    }
    if (req.body.revenue !== undefined) {
      const revenue = Number(req.body.revenue);
      if (!Number.isFinite(revenue) || revenue < 0) return res.status(400).json({ message: "Revenue must be a positive number" });
      updates.revenue = revenue;
    }
    const booking = await Booking.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ booking });
  } catch (error) {
    next(error);
  }
});

export default router;
