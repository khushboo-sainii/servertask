# 🛠️ ServerTask – Express.js Backend for TaskForge

A secure, modular backend built with Express.js and MongoDB Atlas to power TaskForge’s full-stack task management. Includes CRUD APIs, environment-ready config, and clean controller-routing architecture.

## 🔧 Tech Stack
- 🧠 Node.js + Express.js
- 🗃️ MongoDB Atlas
- 🔐 dotenv for environment variables
- 📬 Postman for API testing

## ✨ Features
- ✅ Create, Read, Update, Delete tasks
- 🔒 Environment-based config with `.env`
- 🧩 Modular folder structure (controllers, routes, models)
- 🧪 Postman-tested endpoints

## 📁 Folder Structure

servertask/
├── config/ # MongoDB connection setup 
├── controllers/ # Task logic (CRUD) 
├── models/ # Mongoose schema 
├── routes/ # API routes 
├── .env # Environment variables (excluded from Git) 
├── index.js # Entry point


## 📦 Setup Instructions
- git clone https://github.com/khushboo-sainii/servertask.git
- cd servertask
- node index.js

## 🚀 Deployment
- 🌐 Backend hosted on Render
- 🔗 Connected to MongoDB Atlas
