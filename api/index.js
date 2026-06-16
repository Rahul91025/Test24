import "dotenv/config";
import mongoose from "mongoose";
import app from "../server/src/app.js";

// Reuse DB connection across warm serverless invocations
let isConnected = false;

async function ensureDbConnected() {
  if (isConnected && mongoose.connection.readyState === 1) return;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI environment variable is not set");
  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 8000,
    bufferCommands: false,
  });
  isConnected = true;
}

export default async function handler(req, res) {
  await ensureDbConnected();
  return app(req, res);
}
