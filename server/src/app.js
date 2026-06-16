import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/error.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173").split(",").map(o => o.trim());

app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({
  origin(origin, cb) {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error("Origin not allowed by CORS"));
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
