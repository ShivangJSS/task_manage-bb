import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import "../styles/auth.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await API.post("/auth/login", {
        email,
        password
      });

      console.log(res.data);

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.msg ||
        err.response?.data?.error ||
        "Login failed"
      );
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2 className="auth-title">
          Team Task Manager
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />

        <button
          onClick={handleLogin}
          className="auth-button"
        >
          Login
        </button>

        <p className="auth-footer">
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;