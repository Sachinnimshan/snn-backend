import express from "express";
import {
  feedIndustryProjects,
  getAllIndustryProjects,
} from "../controllers/industryProjectController.js";

const router = express.Router();

router.get("/seed", feedIndustryProjects);
router.get("/", getAllIndustryProjects);

export default router;
