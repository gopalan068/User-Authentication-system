# User-Authentication-system
A secure, RESTful authentication API built using Node.js, Express.js, and MongoDB.
This project provides user registration, login, JWT-based authentication, and role-based access control.

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT, bcrypt

Email Service: NodeMailer

Deployment: Render (Backend), Netlify (Frontend Optional)

🧩 Features

User Registration & Login

Password Reset via Email

JWT Token-based Authentication

Role-Based Access Control (User/Admin)

MongoDB Integration for Secure Data Storage

REST API tested with Postman

📁 Folder Structure
backend/      → Node.js source code
database/     → Exported database or SQL file
docs/         → All project phase reports
output/       → Screenshots and demo images

🧰 Setup Instructions

Clone the repository:

git clone https://github.com/<your-username>/user-authentication-system.git
cd user-authentication-system/backend


Install dependencies:

npm install


Configure environment variables:

cp .env.example .env


Fill in the following fields:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password


Start the server:

npm run dev


Test the API:

Register: POST /api/auth/register

Login: POST /api/auth/login

Get Users (Admin): GET /api/users

🧪 Example API Responses

Register

POST /api/auth/register
{
  "name": "Alice",
  "email": "alice@mail.com",
  "password": "StrongPass123"
}


Login Response

{
  "msg": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

🧑‍💻 Developer Info

Developer: Your Full Name

College: Government College of Engineering, Bodi

Department: Computer Science and Engineering

🌐 Live Demo

Backend API: https://your-api.onrender.com

Frontend (Optional): https://yourfrontend.netlify.app
