Team Task Manager
A full-stack Team Task Manager web application where users can create projects, assign tasks, and track progress with role-based authentication.

🚀 Live Demo
Frontend
task-manage-bb.vercel.app 
Backend API
https://taskmanage-bb-production.up.railway.app

📌 Features


User Signup & Login


JWT Authentication


Role-Based Access (Admin / Member)


Create Projects


Assign Tasks


Task Status Tracking


Dashboard View


REST API Integration


MongoDB Database


Fully Deployed



🛠 Tech Stack
Frontend


React.js


Vite


Axios


React Router DOM


CSS


Backend


Node.js


Express.js


MongoDB


Mongoose


JWT Authentication


bcryptjs


Deployment


Railway (Backend)


Vercel (Frontend)



📂 Project Structure
task_manager/│├── frontend/│   ├── src/│   ├── public/│   └── package.json│├── controllers/├── middleware/├── models/├── routes/├── server.js├── package.json└── .env

⚙️ Installation
1. Clone Repository
git clone https://github.com/YOUR_USERNAME/task_manage-bb.git

2. Install Backend Dependencies
npm install

3. Install Frontend Dependencies
cd frontendnpm install

🔐 Environment Variables
Create .env file in root folder:
MONGO_URI=your_mongodb_connectionJWT_SECRET=your_secret_keyPORT=5000

▶️ Run Backend
npm start

▶️ Run Frontend
cd frontendnpm run dev

📡 API Endpoints
Authentication
Signup
POST /api/auth/signup
Login
POST /api/auth/login

Projects
Create Project
POST /api/projects
Get Projects
GET /api/projects

Tasks
Create Task
POST /api/tasks
Get Tasks
GET /api/tasks

👨‍💻 Author
Shivang JSS

📹 Demo Video
https://drive.google.com/file/d/1M-4rQmwIUWYHuzGp6pkbJVSiGmEjfPeY/view?usp=drive_link

📄 License
This project is created for assignment purposes.
