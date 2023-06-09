import express from "express";
import {
  getAffiliations,
  addAffiliation,
  deleteAffiliation,
} from "../controllers/affiliation.js";

const router = express.Router();

router.get("/", getAffiliations);
router.post("/", addAffiliation);
router.delete("/", deleteAffiliation);

export default router;
