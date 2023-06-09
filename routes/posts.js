import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  getClubPosts,
  getClubDiscussions,
  getNewClubs,
  postNewClubs,
  deleteNewClubs,
  getPresidents,
  postNewPresident,
} from "../controllers/post.js";

const router = express.Router();

router.get("/president", getPresidents);
router.get("/newclubs", getNewClubs);
router.get("/", getPosts);
router.get("/club/:adminId", getClubPosts);
router.get("/club/discussions/:targetClubId", getClubDiscussions);
router.post("/", addPost);
router.post("/newclubs", postNewClubs);
router.post("/president", postNewPresident);
router.delete("/:id", deletePost);
router.delete("/newclubs/:id", deleteNewClubs);

export default router;
