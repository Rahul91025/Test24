import "dotenv/config";
import { validateEnv } from "./config/env.js";
import { connectDatabase } from "./config/db.js";
import app from "./app.js";

const port = process.env.PORT || 5000;

async function start() {
  try {
    validateEnv();
    await connectDatabase();
    app.listen(port, () => console.log(`API running on port ${port}`));
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

start();
