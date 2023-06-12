import express from "express";
import { getChats, addChat } from "../controllers/chat.js";

const router = express.Router();

router.get("/", getChats);
router.post("/", addChat);

export default router;
