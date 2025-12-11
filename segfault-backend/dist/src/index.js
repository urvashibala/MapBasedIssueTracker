import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./api/routes/authRoutes";
import issueRoutes from "./api/routes/issueRoutes";
import commentRoutes from "./api/routes/commentRoutes";
import notificationRoutes from "./api/routes/notificationRoutes";
import routeRoutes from "./api/routes/routeRoutes";
import analyticsRoutes from "./api/routes/analyticsRoutes";
import userRoutes from "./api/routes/userRoutes";
import adminRoutes from "./api/routes/adminRoutes";
import { FRONTEND_URL } from "./appconfig";
// TODO check this
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('exit', (code) => {
    console.log(`Process exiting with code: ${code}`);
});
// --
const app = express();
const port = 3000;
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.get("/", (_req, res) => {
    res.send("Public Issues Tracker API");
});
app.use("/auth", authRoutes);
app.use("/issues", issueRoutes);
app.use("/", commentRoutes);
app.use("/notifications", notificationRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/user", userRoutes);
app.use("/admin", adminRoutes);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
    // Prevent process from exiting by keeping event loop active
    setInterval(() => { }, 1 << 30);
});
//# sourceMappingURL=index.js.map