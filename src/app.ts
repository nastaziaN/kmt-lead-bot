import express from "express";
import cors from "cors";
import leadRouter from "./routes/leadRoutes";
import { success } from "zod";

const app = express();

// TODO: change cors access (for production)
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://staging.company.com",
//       "https://company.com",
//     ],
//   })
// );

app.use(cors());
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
