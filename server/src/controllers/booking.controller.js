import { createBooking, getBookings, getBookingStats, updateBooking } from "../services/booking.service.js";
import { sendBookingNotification } from "../utils/email.js";

export async function create(req, res, next) {
  try {
    const booking = await createBooking(req.body);
    sendBookingNotification(booking).catch(err => console.error("Email error:", err.message));
    res.status(201).json({ message: "Booking submitted successfully", booking: { bookingId: booking.bookingId, status: booking.status } });
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: "Please submit the booking again" });
    next(err);
  }
}

export async function list(req, res, next) {
  try {
    const bookings = await getBookings(req.query);
    res.json({ bookings });
  } catch (err) { next(err); }
}

export async function stats(req, res, next) {
  try {
    res.json(await getBookingStats());
  } catch (err) { next(err); }
}

export async function update(req, res, next) {
  try {
    const booking = await updateBooking(req.params.id, req.body);
    res.json({ booking });
  } catch (err) { next(err); }
}
