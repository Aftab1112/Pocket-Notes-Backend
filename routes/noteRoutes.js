import express from "express";
import { createNote, getNotesByGroups } from "../controllers/note.js";

const router = express.Router();

router.post("/note", createNote);
router.get("/notes/:groupId", getNotesByGroups);

export default router;
