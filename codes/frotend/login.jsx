import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Reuse the same CSS for consistency

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        // Handle post-login logic, e.g., redirect to dashboard
        // navigate("/dashboard"); 
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="register-bg">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="login-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
