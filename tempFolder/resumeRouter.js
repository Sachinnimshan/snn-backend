import express from "express";
import { downloadResume, uploadResume } from "../controllers/fileController.js";

const router = express.Router();

router.get("/seed", uploadResume);
router.get("/", downloadResume);

export default router;
