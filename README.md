# 📝 Online Quiz System

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![EJS](https://img.shields.io/badge/EJS-Templating%20Engine-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

**Online Quiz System** is a web-based application that allows users to participate in quizzes, test their knowledge, and track their performance. Built using Node.js, Express.js, MongoDB, and EJS, the application provides an interactive platform for taking quizzes and viewing scores.

The project includes user authentication, quiz management, score tracking, and a leaderboard to make learning more engaging.

## 🎯 Key Features

- 🔐 **User Authentication** – Register and log in to access the quiz system.
- 🧠 **Interactive Quizzes** – Answer questions and test your knowledge.
- ⏱️ **Quiz Timer** – Complete quizzes within the allotted time.
- 📊 **Score Tracking** – View your quiz results and performance.
- 🏆 **Leaderboard** – Compare scores and identify top performers.
- 👤 **User Profiles** – Access the quiz system through individual accounts.
- 🛠️ **Admin Features** – Manage quiz-related functionality through administrative routes.
- 📱 **Responsive Interface** – Use the application through a web browser.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| EJS | Dynamic HTML templating |
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript | Client-side interactions |
| Express Session | Session management |
| bcryptjs | Password hashing |

## 📂 Project Structure

```text
online-quiz-system/
│
├── config/
│   └── db.js
│
├── models/
│   ├── Question.js
│   ├── Score.js
│   └── User.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── timer.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   └── quizRoutes.js
│
├── seed/
│   └── questions.js
│
├── views/
│   ├── admin.ejs
│   ├── dashboard.ejs
│   ├── extra.ejs
│   ├── leaderboard.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── quiz.ejs
│   ├── result.ejs
│   └── partials/
│       └── navbar.ejs
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/online-quiz-system.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 2. Navigate to the Project Directory

```bash
cd online-quiz-system
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project's root directory.

Add the following configuration:

```env
MONGO_URI=mongodb://127.0.0.1:27017/quizDB
SESSION_SECRET=replace_with_a_secure_random_secret
```

Make sure MongoDB is running locally before starting the application.

**Security note:** Never commit your `.env` file or publish your database credentials and session secrets.

### 5. Start the Application

Check the scripts available in `package.json`. If the project uses `npm start`, run:

```bash
npm start
```

If you have configured a development script, you can use:

```bash
npm run dev
```

### 6. Open the Application

Visit the following address in your browser:

```text
http://localhost:5000
```

The application will be available locally if the server starts successfully on port 5000.

## 🔒 Security

- Environment variables are stored in `.env`.
- The `.env` file is excluded from Git using `.gitignore`.
- User passwords should be securely hashed.
- Use a strong session secret.
- Configure appropriate session and cookie security settings before production deployment.

## 🚀 Future Enhancements

- 📈 Advanced quiz analytics and performance reports.
- 📚 Additional quiz categories and difficulty levels.
- 🥇 Enhanced leaderboard and ranking system.
- 📱 Improved mobile responsiveness.
- ☁️ Cloud deployment and production database integration.

## 🤝 Contributing

Contributions and suggestions are welcome!

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Submit a pull request.

## 📄 License

This project is intended for educational and portfolio purposes. Add a license file if you want to distribute the project under a specific open-source license.

---

⭐ **If you find this project interesting, consider giving the repository a star!**
