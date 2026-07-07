# 🎬 Movie Recommendation System

A full-stack web application that provides personalized movie recommendations using advanced algorithms. Built with React, TypeScript, Express, and MongoDB.

**Live Demo:** [movie-recommendation-system-beige-delta.vercel.app](https://movie-recommendation-system-beige-delta.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This movie recommendation system leverages user preferences and movie data to suggest films tailored to individual tastes. The application features a responsive frontend and a robust backend powered by MongoDB for data persistence.

---

## ✨ Features

- 🎯 **Personalized Recommendations** - AI-driven suggestions based on user preferences
- 🔐 **User Authentication** - Secure user accounts and profiles
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates** - Fast, interactive user experience
- 📊 **Movie Database** - Comprehensive movie information and ratings
- 🔍 **Advanced Search** - Find movies by genre, rating, and keywords

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **TypeScript** 5.9 - Type safety
- **Vite** 7.3 - Build tool and dev server
- **React Router DOM** 7.13 - Client-side routing
- **Axios** 1.13 - HTTP client
- **React Icons** 5.5 - Icon library
- **ESLint** - Code linting

### Backend
- **Node.js** - JavaScript runtime
- **Express** 4.19 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** 9.2 - MongoDB ODM
- **CORS** 2.8 - Cross-origin requests
- **dotenv** 16.4 - Environment variables
- **Nodemon** - Development auto-reload

---

## 📁 Project Structure

```
movie-recommendation-system/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/                  # Express backend
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB instance (local or cloud)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install

# Create a .env file with your configuration
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start the backend server
npm run dev
```

The backend will start on `http://localhost:5000`

---

## 📖 Usage

1. **Start both servers** (frontend and backend)
2. **Navigate to the frontend URL** in your browser
3. **Create an account** or log in with existing credentials
4. **Rate movies** or add movies to favorites
5. **Get personalized recommendations** based on your preferences

---

## 🔌 API Endpoints

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/recommendations` - Get recommendations for user

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Ratings
- `POST /api/ratings` - Add movie rating
- `GET /api/ratings/user/:userId` - Get user ratings
- `DELETE /api/ratings/:id` - Remove rating

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Support

For questions or issues, please create a GitHub issue or contact the repository owner.

---

**Happy watching! 🍿**
