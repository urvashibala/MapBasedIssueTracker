import express from "express";
import cors from "cors";
import authRoutes from "./api/routes/authRoutes";

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
