
import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

// ==========================================
// Express Configuration
// ==========================================
const app = express();
const PORT = process.env.PORT || 5001;

// ==========================================
// CORS Configuration
// ==========================================
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean).map((origin) => origin.replace(/\/$/, ""));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ==========================================
// Middleware
// ==========================================
app.use(express.json());
app.use(cookieParser());

// ==========================================
// Health Check Routes
// ==========================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MUSTREAMIFY Backend is running",
  });
});

app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MUSTREAMIFY API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "MUSTREAMIFY Backend",
  });
});

// ==========================================
// Database Middleware
// ==========================================
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);

    res.status(503).json({
      success: false,
      message: "Database unavailable",
    });
  }
});

// ==========================================
// API Routes
// ==========================================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// ==========================================
// Local Development
// ==========================================
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// ==========================================
// Export for Vercel
// ==========================================
export default app;
