
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
  "https://streamify-video-calls-master-eu9e.vercel.app",
].filter(Boolean).map((origin) => origin.replace(/\/$/, ""));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    const cleanOrigin = origin.replace(/\/$/, "");
    if (allowedOrigins.includes(cleanOrigin)) {
      res.setHeader("Access-Control-Allow-Origin", cleanOrigin);
      res.setHeader("Access-Control-Allow-Credentials", "true");
    } else {
      res.setHeader("Access-Control-Allow-Origin", allowedOrigins[allowedOrigins.length - 1] || origin);
      res.setHeader("Access-Control-Allow-Credentials", "true");
    }
  } else {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigins[allowedOrigins.length - 1] || "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
  res.setHeader("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});

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
