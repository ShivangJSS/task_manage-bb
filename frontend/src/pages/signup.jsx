import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Member");

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      await API.post("/auth/signup", {
        name,
        email,
        password,
        role
      });

      alert("Signup successful");

      navigate("/");

    } catch (err) {

      alert(err.response?.data?.msg || "Signup failed");

    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Signup</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="Member">Member</option>
        <option value="Admin">Admin</option>
      </select>

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>
  );
}

export default Signup;