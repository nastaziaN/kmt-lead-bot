import express from "express";
import cors from "cors";
import leadRouter from "./routes/leadRouter";

const app = express();

app.use(
  cors({
    origin: "https://km-trade.net",
  }),
);

app.use(express.json());

app.get("/", (_, res) => {
  res.send("API is running");
});

app.use("/api", leadRouter);

app.use((_, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
