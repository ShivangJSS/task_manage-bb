import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import "../styles/auth.css";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Member");

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      console.log({
        name,
        email,
        password,
        role
      });

      const res = await API.post("/auth/signup", {
        name,
        email,
        password,
        role
      });

      console.log(res.data);

      alert("Signup successful");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.msg ||
        err.response?.data?.error ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2 className="auth-title">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth-input"
        />

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

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="auth-input"
        >
          <option value="Member">Member</option>
          <option value="Admin">Admin</option>
        </select>

        <button
          onClick={handleSignup}
          className="auth-button"
        >
          Signup
        </button>

        <p className="auth-footer">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;