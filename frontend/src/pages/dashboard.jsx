import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    loadProjects();
    loadTasks();
  }, []);

  const loadProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createProject = async () => {
    await API.post("/projects", {
      name: projectName
    });

    setProjectName("");

    loadProjects();
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Dashboard</h2>

      <h3>Create Project</h3>

      <input
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <button onClick={createProject}>Create</button>

      <h3>Projects</h3>

      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>

      <h3>Tasks</h3>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;