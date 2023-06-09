import express from "express";
import {
  getLikes,
  addLike,
  deleteLike,
  getNewClubLikes,
  addNewClubLike,
  deleteNewClubLike,
} from "../controllers/like.js";

const router = express.Router();

router.get("/", getLikes);
router.post("/", addLike);
router.delete("/", deleteLike);
router.get("/pollsNewClub", getNewClubLikes);
router.post("/pollsNewClub", addNewClubLike);
router.delete("/pollsNewClub", deleteNewClubLike);
export default router;
