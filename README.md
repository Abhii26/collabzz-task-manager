# 📋 Team Task Manager API

A simple REST API for managing team tasks built with Node.js, Express, and MongoDB.
The API allows users to register, login, and manage tasks while securing routes using JWT authentication.

This project was created as part of the Backend Developer Intern Screening Task.

---

## 🚀 Features

- 👤 User registration and login system.
- 🔐 JWT-based authentication for protected routes.
- 📋 Create, read, update, and delete tasks.
- 🔑 Passwords securely hashed using bcrypt.
- 📦 Structured REST API with proper routing.
- ⚠️ Only the task creator can update or delete a task.


---


## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcrypt password hashing
- **API Testing:** Postman

These technologies are widely used for building scalable backend APIs.

---

## 📂 Project Structure


<pre>

collabzz-task-manager
├── config/                 # Database configuration
│   ├── db.js               
├── controllers/            # Business logic for API routes
│   ├── authController.js               
    ├── taskController.js 
├── middleware/             # Custom middleware
├── public/                 # Static assets (CSS, JS, etc.)
│   ├── authMiddleware.js
├── models/                 # Mongoose schemas
│   └── User.js
    └── Task.js
├── routes/                 # API routes
│   └── authRoutes.js
    └── taskRoutes.js
├── .env                    # Environment variables  
├── .gitignore              # Git ignore rules
├── server.js               # Main Express server file
├── package-lock.json       # Auto-generated lock file for dependencies
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
</pre>

---

## ⚙️ How It Works

- Users first register an account with name, email, and password.
- Passwords are hashed using bcrypt before storing in the database.
- Users then login to receive a JWT token.
- This token must be included in the Authorization header to access protected routes.
- Authenticated users can create, update, view, and delete tasks.
- A user can only modify tasks they created.

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/collabzz-task-manager.git
cd collabzz-task-manager


 2. Install Dependencies

npm install

 3. Configure Environment Variables

Create a .env file in the root directory.

Example:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


### 4. Run the Application

Development mode:
npm run dev

Production mode:
npm start

Server will start at:
http://localhost:5000


🔑 Authentication

All task routes require a JWT token.

Include the token in request headers:
Authorization: Bearer <your_token>


📡 API Endpoints
👤 Authentication Routes

Register User:
POST /auth/register

Request Example:
{
 "name": "Abhishek",
 "email": "user@example.com",
 "password": "123456"
}

Login User:
POST /auth/login

Request Example:
{
 "email": "user@example.com",
 "password": "123456"
}

Response Example:
{
 "token": "jwt_token_here"
}

📋 Task Routes (Protected)

Create Task:
POST /tasks

Request Example
{
 "title": "Build API",
 "description": "Complete backend assignment",
 "status": "todo"
}

Get All Tasks:
GET /tasks

Get Single Task:
GET /tasks/:id

Update Task:
PUT /tasks/:id

Example Request
{
 "title": "Updated Task",
 "status": "in-progress"
}

Delete Task:
DELETE /tasks/:id

🧪 API Testing (Postman)

You can test all API endpoints using Postman.

🔗 Postman Collection Link

https://web.postman.co/workspace/new-postman~27d6ecd4-b82d-4eb9-9225-83b24acbd208/collection/42487126-299bff02-9994-40e8-809f-1c9ffa0c7816?action=share&source=copy-link&creator=42487126

 Testing flow:
- Register a user
- Login to receive JWT token
- Add token to Authorization header
- Test task CRUD APIs

Header example:
Authorization: Bearer your_token_here

🤝 Contributing

Contributions are welcome!
Fork the repository, create a new branch, and submit a pull request.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Abhishek Tiwari
🔗 GitHub
