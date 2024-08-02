import { Group } from "../models/group.js";

export const createGroup = async (req, res) => {
  try {
    const { name, color } = req.body;

    const existingGroup = await Group.findOne({ name });
    if (existingGroup)
      return res.status(400).json({ message: "Group already exists" });

    const group = await Group.create({ name, color });
    res.status(201).json({
      success: true,
      message: "Group created successfully",
      group,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();

    if (!groups)
      return res.status(400).json({
        message: "No groups Created yet",
      });
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
