import express from "express";
import { createGroup, getGroups } from "../controllers/group.js";

const router = express.Router();

router.post("/group", createGroup);
router.get("/groups", getGroups);

export default router;
