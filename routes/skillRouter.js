import { feedSkills, getAllSkills } from "../controllers/skillController.js";
import express from "express";

const router = express.Router();

router.get("/seed", feedSkills);
router.get("/", getAllSkills);

export default router;
