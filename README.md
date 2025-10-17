# User Authentication System

A simple full-stack user registration system with React frontend and Node.js backend using MongoDB.

## Features
- User registration with name, email, and password
- Password hashing with bcrypt
- REST API with Express
- MongoDB database with Mongoose
- Responsive React signup form

## Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** bcrypt, JWT

## Setup

### Backend
1. Install dependencies:
- cd backend
- npm install

2. Create `.env` with:
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_secret_key

3. Run server:
- npm run start


### Frontend
1. Install dependencies:
- cd frontend
- npm install

2. Run app:
- npm start


## Usage
- Register users via the React form at `http://localhost:3000`.
- Form data submits to backend API at `http://localhost:5000/api/register`.

## Example Register Component
import React, { useState } from "react";

function Register() {
const [form, setForm] = useState({ name: "", email: "", password: "" });

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
e.preventDefault();
const res = await fetch("http://localhost:5000/api/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});
if (res.ok) alert("Registration successful!");
else alert("Registration failed");
};

return (
<form onSubmit={handleSubmit}>
<input name="name" placeholder="Name" onChange={handleChange} required />
<input name="email" type="email" placeholder="Email" onChange={handleChange} required />
<input name="password" type="password" placeholder="Password" onChange={handleChange} required />
<button type="submit">Register</button>
</form>
);
}


export default Register;
