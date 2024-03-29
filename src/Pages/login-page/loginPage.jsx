import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import {User} from "../../Classes/User";


function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await User.auth(username, password);
      if (response) {
        setError("");
        navigate("/homepage");
      } else {
        setError("An error occurred during login.");
      }
    } catch (error) {
      setError("An unexpected error occurred." || error);
    }
  };

  return (
    <div className="LoginPage">
      <div className="login-container">
        <div className="title">
          <h2>Binary Bloom</h2>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="submit-btn" type="submit">Login</button>
        </form>
      </div>
      {error && <div className="error-box">{error}</div>}
    </div>
  );
}

export default LoginPage;
