import express from "express";
import {
  getNewClubDislikes,
  addNewClubDislike,
  deleteNewClubDislike,
} from "../controllers/like.js";

const router = express.Router();

router.get("/pollsNewClub", getNewClubDislikes);
router.post("/pollsNewClub", addNewClubDislike);
router.delete("/pollsNewClub", deleteNewClubDislike);

export default router;
