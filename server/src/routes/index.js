import { Router } from "express";
import rateLimit from "express-rate-limit";
import authRoutes from "./auth.routes.js";
import bookingRoutes from "./booking.routes.js";

const globalLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 150, standardHeaders: "draft-7", legacyHeaders: false });
const bookingLimiter = rateLimit({ windowMs: 60 * 60 * 1000, limit: 30, standardHeaders: "draft-7", legacyHeaders: false });

const router = Router();
router.get("/health", (req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));
router.use(globalLimiter);
router.use("/auth", authRoutes);
router.use("/bookings", bookingLimiter, bookingRoutes);
export default router;
