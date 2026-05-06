const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createTask,
  getTasks,
  updateTask
} = require("../controllers/taskController");

router.post("/", auth, role("Admin"), createTask);

router.get("/", auth, getTasks);


router.put("/:id", auth, updateTask);

module.exports = router;