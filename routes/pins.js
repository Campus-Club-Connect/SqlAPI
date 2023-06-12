import express from "express";
import { getPins, addPin, deletePin } from "../controllers/pin.js";

const router = express.Router();

router.get("/", getPins);
router.post("/", addPin);
router.delete("/", deletePin);

export default router;
