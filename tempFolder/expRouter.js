import {
  getAllExperience,
  feedExperience,
} from "../controllers/expController.js";
import express from "express";

const router = express.Router();

router.get("/seed", feedExperience);
router.get("/", getAllExperience);

export default router;
