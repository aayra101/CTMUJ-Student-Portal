# 🎓 CTMUJ Student Portal — Full Stack PBL Project

> A fully functional college student portal for **Manipal University Jaipur (MUJ)** students, built as a long-term Project Based Learning (PBL) initiative.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)
![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📌 About the Project

CTMUJ Student Portal is a web-based platform designed to simplify academic life for MUJ students. It provides a unified dashboard to manage quizzes, assignments, timetables, announcements, and more — with a real backend, login system, and admin panel for teachers.

This is a **long-term PBL project** being built incrementally across phases.

---

## 🚀 Features

### ✅ Phase 1 — Frontend (Completed)
- [x] Animated glassmorphism UI
- [x] Quiz section with tab-switch detection
- [x] Assignment upload interface
- [x] Announcements board
- [x] Academic calendar
- [x] Weekly timetable
- [x] AI Assistant chatbot (rule-based)
- [x] Dark mode toggle

### 🔄 Phase 2 — Authentication (In Progress)
- [ ] Student registration & login
- [ ] Teacher registration & login
- [ ] JWT-based session management
- [ ] Password hashing with bcrypt
- [ ] Role-based access (Student / Teacher / Admin)

### 🔄 Phase 3 — Backend & Database
- [ ] REST API with Node.js + Express
- [ ] MongoDB database integration
- [ ] Store & retrieve assignments with deadlines
- [ ] Submit and grade quizzes
- [ ] Student marks & CGPA tracker
- [ ] Attendance tracking system

### 🔄 Phase 4 — Admin Panel (Teacher Dashboard)
- [ ] Teacher login portal
- [ ] Upload/manage assignments
- [ ] Create & manage quizzes
- [ ] Post announcements
- [ ] View student submissions
- [ ] Export marks as CSV

### 🔄 Phase 5 — Notifications System
- [ ] In-app notifications (new assignment, quiz, announcement)
- [ ] Email notifications (Nodemailer)
- [ ] Notification read/unread status
- [ ] Notification history

### 🔄 Phase 6 — Advanced Features (Planned)
- [ ] Real-time chat between students & teachers (Socket.io)
- [ ] AI-powered chatbot upgrade (NLP-based)
- [ ] Mobile responsive design
- [ ] Progressive Web App (PWA) support

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT (JSON Web Tokens), bcrypt |
| **Notifications** | Nodemailer, custom in-app system |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure

```
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
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/Aayra06/PortalPal.git
cd PortalPal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` with your values:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### 4. Run the development server
```bash
npm run dev
```

### 5. Open the frontend
Open `frontend/index.html` in your browser or serve with Live Server.

---

## 🗺️ Development Roadmap

```
Phase 1 ──► Phase 2 ──► Phase 3 ──► Phase 4 ──► Phase 5 ──► Phase 6
Frontend   Auth/Login   Database   Admin Panel  Notifs     Advanced
  ✅         🔄           📋          📋           📋          📋
```

---

## 🤝 Contributing

This is a college PBL project. Contributions from teammates are welcome!

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👩‍💻 Author

**Aayra** — Student, Manipal University Jaipur
- GitHub: [@Aayra06](https://github.com/Aayra06)

---

## 📄 License

MIT License — free to use, modify and distribute.

---

> ⭐ Star this repo if you find it useful! It helps the project grow.
