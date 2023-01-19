import { getAllEducation, feedEducation } from "../controllers/eduController.js";
import express from "express";

const router = express.Router();

router.get("/seed", feedEducation);
router.get("/", getAllEducation);

export default router;
