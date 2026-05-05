const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects,
  addMember
} = require("../controllers/projectController");

// 🔹 Create project (Admin only)
router.post("/", auth, role("Admin"), createProject);

// 🔹 Get projects (logged-in user)
router.get("/", auth, getProjects);

// 🔹 Add member (Admin only)
router.post("/:id/add-member", auth, role("Admin"), addMember);

module.exports = router;