import { Note } from "../models/note.js";
import { Group } from "../models/group.js";

export const createNote = async (req, res) => {
  try {
    const { groupId, content } = req.body;

    const group = await Group.findById(groupId);
    if (!group)
      return res.status(400).json({
        message: "Group does not exist",
      });

    const note = await Note.create({ groupId, content });
    res.status(200).json({
      note,
      message: "Note added successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotesByGroups = async (req, res) => {
  try {
    const { groupId } = req.params;

    const group = await Group.findById(groupId);
    if (!group)
      return res.status(400).json({
        message: "Group does not exist",
      });

    const notes = await Note.find({ groupId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
