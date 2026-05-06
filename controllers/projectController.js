const Project = require("../models/Project");


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


exports.addMember = async (req, res) => {
  try {
    const { userId } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }


    if (!project.members.includes(userId)) {
      project.members.push(userId);
    }

    await project.save();

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};