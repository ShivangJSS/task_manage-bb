const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createTask,
  getTasks,
  updateTask
} = require("../controllers/taskController");

// 🔹 Create Task (Admin)
router.post("/", auth, role("Admin"), createTask);

// 🔹 Get Tasks (logged-in user)
router.get("/", auth, getTasks);

// 🔹 Update Task (any logged-in user)
router.put("/:id", auth, updateTask);

module.exports = router;