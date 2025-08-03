import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { connectDB } from "./db.js";

// Import your routers here
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import contactRouter from "./routes/contactRouter.js";
import resumeRouter from "./routes/resumeRouter.js";
import experienceRouter from "./routes/expRouter.js";
import educationRouter from "./routes/eduRouter.js";
import certificationRouter from "./routes/certificationRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

// Use your routers
app.use("/api/user", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/contact", contactRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/education", educationRouter);
app.use("/api/certifications", certificationRouter);

// Base route
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

// Connect to DB first, then start server
connectDB()
  .then(() => {
    server.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to start server due to DB connection error", err);
  });
