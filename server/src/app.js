import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/error.js";

const app = express();

// Build allowed origins: CLIENT_URL env + Vercel auto-set VERCEL_URL + localhost dev
const allowedOrigins = [
  ...(process.env.CLIENT_URL || "").split(",").map(o => o.trim()).filter(Boolean),
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  "http://localhost:5173",
  "http://localhost:3000",
].filter(Boolean);

app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({
  origin(origin, cb) {
    // Allow same-origin requests (no Origin header) and whitelisted origins
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    // Allow any *.vercel.app preview deployment
    if (origin.endsWith(".vercel.app")) return cb(null, true);
    cb(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
}));
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));
app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

export default app;
