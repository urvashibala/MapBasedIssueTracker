import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./api/routes/authRoutes";
import { FRONTEND_URL } from "./appconfig";

const app = express();
const port = 3000;

app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
