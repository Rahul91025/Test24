import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export async function loginAdmin(email, password) {
  const admin = await Admin.findOne({ email: email.toLowerCase().trim() }).select("+password");
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    const err = new Error("Incorrect email or password");
    err.status = 401;
    throw err;
  }
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
  return { token, admin: { id: admin._id, name: admin.name, email: admin.email } };
}
