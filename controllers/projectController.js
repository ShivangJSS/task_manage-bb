const Project = require("../models/Project");

// 🔹 Create Project (Admin only)
exports.createProject = async (req, res) => {
  try {
    const { name } = req.body;

    const project = new Project({
      name,
      createdBy: req.user.id,
      members: [req.user.id]
    });

    await project.save();

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Get all projects (for logged user)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user.id
    }).populate("members", "name email");

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Add member to project (Admin only)
exports.addMember = async (req, res) => {
  try {
    const { userId } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    // avoid duplicates
    if (!project.members.includes(userId)) {
      project.members.push(userId);
    }

    await project.save();

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};