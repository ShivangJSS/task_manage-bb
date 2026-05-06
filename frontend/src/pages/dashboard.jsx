import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/dashboard.css";

function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [projectName, setProjectName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
    loadTasks();
  }, []);

  const loadProjects = async () => {

    try {

      const res = await API.get("/projects");

      setProjects(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  const loadTasks = async () => {

    try {

      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  const createProject = async () => {

    if (!projectName) return;

    try {

      await API.post("/projects", {
        name: projectName
      });

      setProjectName("");

      loadProjects();

    } catch (err) {

      console.log(err);

    }
  };

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <div className="dashboard">

      <div className="topbar">

        <div>
          <h1 className="dashboard-title">
            Team Task Manager
          </h1>

          <p className="dashboard-subtitle">
            Manage projects and tasks efficiently
          </p>
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h2>{projects.length}</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>{tasks.length}</h2>
          <p>Tasks</p>
        </div>

      </div>

      <div className="card">

        <h2>Create Project</h2>

        <div className="project-form">

          <input
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="project-input"
          />

          <button
            onClick={createProject}
            className="create-btn"
          >
            Create
          </button>

        </div>

      </div>

      <div className="dashboard-grid">

        <div className="card">

          <h2>Projects</h2>

          {
            projects.length === 0 ? (
              <p className="empty-text">
                No projects yet
              </p>
            ) : (
              projects.map((project) => (
                <div
                  key={project._id}
                  className="project-item"
                >
                  {project.name}
                </div>
              ))
            )
          }

        </div>

        <div className="card">

          <h2>Tasks</h2>

          {
            tasks.length === 0 ? (
              <p className="empty-text">
                No tasks yet
              </p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task._id}
                  className="task-item"
                >
                  <h3>{task.title}</h3>

                  <p>Status: {task.status}</p>
                </div>
              ))
            )
          }

        </div>

      </div>

    </div>
  );
}

export default Dashboard;