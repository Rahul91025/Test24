import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export async function protect(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) return res.status(401).json({ message: "Authentication required" });

    const decoded = jwt.verify(header.slice(7), process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(401).json({ message: "Admin account not found" });

    req.admin = admin;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired login" });
  }
}
