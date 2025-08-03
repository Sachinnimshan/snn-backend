import { contactValidation } from "../validations/contactValidate.js";
import express from "express";
import { postContactMessage } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", contactValidation, postContactMessage);

export default router;
