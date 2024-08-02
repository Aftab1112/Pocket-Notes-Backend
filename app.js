import express from "express";
import { config } from "dotenv";
import cors from "cors";
import groupRoutes from "./routes/groupRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

export const app = express();

config({
  path: "./data/config.env",
});

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/api", groupRoutes);
app.use("/api", noteRoutes);

app.get("/", (req, res) => {
  res.send("Notes Backend");
});
