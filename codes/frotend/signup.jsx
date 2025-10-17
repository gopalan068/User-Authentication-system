Signup.jsx

// Register.jsx
import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    alert(JSON.stringify(form));
  };

  return (
    <div className="register-bg">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <div className="login-link">
          Already Have an Account? <a href="#">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
