import { loginAdmin } from "../services/auth.service.js";

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });
    const result = await loginAdmin(email, password);
    res.json(result);
  } catch (err) { next(err); }
}
