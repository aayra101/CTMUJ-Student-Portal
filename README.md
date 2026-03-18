# CTMUJ-Student-Portal
Full Stack PBL Project -> A fully functional college student portal for Manipal University Jaipur (MUJ) students, built as a long-term Project Based Learning (PBL) initiative.
📌 About the Project
CTMUJ Student Portal is a web-based platform designed to simplify academic life for MUJ students. It provides a unified dashboard to manage quizzes, assignments, timetables, announcements, and more — with a real backend, login system, and admin panel for teachers.
This is a long-term PBL project being built incrementally across phases.

🚀 Features
✅ Phase 1 — Frontend (Completed)

 Animated glassmorphism UI
 Quiz section with tab-switch detection
 Assignment upload interface
 Announcements board
 Academic calendar
 Weekly timetable
 AI Assistant chatbot (rule-based)
 Dark mode toggle

🔄 Phase 2 — Authentication (In Progress)

 Student registration & login
 Teacher registration & login
 JWT-based session management
 Password hashing with bcrypt
 Role-based access (Student / Teacher / Admin)

🔄 Phase 3 — Backend & Database

 REST API with Node.js + Express
 MongoDB database integration
 Store & retrieve assignments with deadlines
 Submit and grade quizzes
 Student marks & CGPA tracker
 Attendance tracking system

🔄 Phase 4 — Admin Panel (Teacher Dashboard)

 Teacher login portal
 Upload/manage assignments
 Create & manage quizzes
 Post announcements
 View student submissions
 Export marks as CSV

🔄 Phase 5 — Notifications System

 In-app notifications (new assignment, quiz, announcement)
 Email notifications (Nodemailer)
 Notification read/unread status
 Notification history

🔄 Phase 6 — Advanced Features (Planned)

 Real-time chat between students & teachers (Socket.io)
 AI-powered chatbot upgrade (NLP-based)
 Mobile responsive design
 Progressive Web App (PWA) support


🛠️ Tech Stack
LayerTechnologyFrontendHTML5, CSS3, Vanilla JavaScriptBackendNode.js, Express.jsDatabaseMongoDB (Mongoose ODM)AuthenticationJWT (JSON Web Tokens), bcryptNotificationsNodemailer, custom in-app systemVersion ControlGit & GitHub

📁 Project Structure
CTMUJ-Portal/
│
├── frontend/                  # Phase 1 — Static UI
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/                   # Phase 2+ — Server & API
│   ├── server.js              # Entry point
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/                # Mongoose schemas
│   │   ├── User.js
│   │   ├── Assignment.js
│   │   ├── Quiz.js
│   │   └── Notification.js
│   ├── routes/                # Express routes
│   │   ├── auth.js
│   │   ├── assignments.js
│   │   ├── quiz.js
│   │   └── notifications.js
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   └── controllers/           # Route logic
│       ├── authController.js
│       ├── assignmentController.js
│       └── quizController.js
│
├── admin/                     # Phase 4 — Teacher dashboard
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env.example               # Environment variables template
├── .gitignore
├── package.json
└── README.md

⚙️ Getting Started
Prerequisites

Node.js v18+
MongoDB (local or Atlas)
Git

1. Clone the repository
bashgit clone https://github.com/Aayra06/PortalPal.git
cd PortalPal
2. Install dependencies
bashnpm install
3. Set up environment variables
bashcp .env.example .env
Edit .env with your values:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
4. Run the development server
bashnpm run dev
5. Open the frontend
Open frontend/index.html in your browser or serve with Live Server.

🗺️ Development Roadmap
Phase 1 ──► Phase 2 ──► Phase 3 ──► Phase 4 ──► Phase 5 ──► Phase 6
Frontend   Auth/Login   Database   Admin Panel  Notifs     Advanced
  ✅         🔄           📋          📋           📋          📋

🤝 Contributing
This is a college PBL project. Contributions from teammates are welcome!

Fork the repo
Create a new branch: git checkout -b feature/your-feature
Commit your changes: git commit -m "Add your feature"
Push to branch: git push origin feature/your-feature
Open a Pull Request


👩‍💻 Author
Aayra — Student, Manipal University Jaipur

GitHub: @Aayra06


📄 License
MIT License — free to use, modify and distribute.


⭐ Star this repo if you find it useful! It helps the project grow.
