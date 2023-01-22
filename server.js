import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./Routes/Email.js";
import userRouter from "./Routes/userRoutes.js";
import projectRouter from "./Routes/projectRoutes.js";
import contactRouter from "./Routes/contactRouter.js";
import resumeRouter from "./Routes/resumeRouter.js";
import experienceRouter from "./Routes/expRouter.js";
import educationRouter from "./Routes/eduRouter.js";
import http from "http";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.DB_CONNECTION;

mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Database Connected`))
  .catch((error) => console.log(error));

//app.use("/email", emailRouter);
app.use("/api/user", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/contact", contactRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/education", educationRouter);
// if(process.env.ENV === "PROD"){
//   const __dirname = path.dirname(fileURLToPath(import.meta.url));
//   app.use(express.static(path.join(__dirname, 'build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// }

app.use("/", (req, res) => {
  res.send("Server is Ready");
});

server.listen(PORT, () => console.log(`Server Started at ${PORT}`));
