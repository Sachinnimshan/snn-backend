import {
  feedCertifications,
  getAllCertifications,
} from "../controllers/certificateController.js";
import express from "express";

const router = express.Router();

router.get("/seed", feedCertifications);
router.get("/", getAllCertifications);

export default router;
