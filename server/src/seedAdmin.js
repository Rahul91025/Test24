import "dotenv/config";
import bcrypt from "bcryptjs";
import { connectDatabase } from "./config/db.js";
import Admin from "./models/Admin.js";

async function seed() {
  const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD are required");
  if (ADMIN_PASSWORD.length < 10) throw new Error("ADMIN_PASSWORD must be at least 10 characters");

  await connectDatabase();
  const password = await bcrypt.hash(ADMIN_PASSWORD, 12);
  await Admin.findOneAndUpdate(
    { email: ADMIN_EMAIL.toLowerCase() },
    { name: ADMIN_NAME || "Admin", email: ADMIN_EMAIL.toLowerCase(), password },
    { upsert: true, new: true, runValidators: true }
  );
  console.log(`Admin account ready: ${ADMIN_EMAIL}`);
  process.exit(0);
}

seed().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
