import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { create, list, stats, update } from "../controllers/booking.controller.js";

const router = Router();
router.post("/", create);
router.get("/", protect, list);
router.get("/stats", protect, stats);
router.patch("/:id", protect, update);
export default router;
