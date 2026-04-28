# 🎨 Digi Frontend Project

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📌 Overview

A modern React-based e-commerce frontend that allows users to authenticate, browse products, manage wishlist, and update their profile. It connects to a live backend API for real-time functionality.

Live Demo: https://spontaneous-heliotrope-2ae25e.netlify.app/

---

## 🔗 Backend Repository

The backend powering this application is available here:

👉 https://github.com/abdobary/digi-Backend-project

This backend handles authentication, user management, and wishlist functionality using a RESTful API.

---

## 🧱 Architecture

```text id="x1u9is"
User Interface (React Components)
        ↓
State Management (Context API)
        ↓
API Calls (fetch)
        ↓
Backend (Node.js API)
```

---

## 🚀 Features

* 🔐 Authentication system (Login/Register)
* 👤 Profile management
* 🏠 Homepage UI sections (Flash Sales, Categories, etc.)
* 🛍️ Product browsing
* ❤️ Wishlist system
* 🔒 Auth-based UI rendering
* 🌐 Live backend integration

---

## 🧰 Tech Stack

* React 19
* Vite 8
* React Router DOM v7
* Bootstrap 5
* Bootstrap Icons
* Font Awesome
* Context API
* sessionStorage

---

## 📂 Project Structure

```bash id="en8utd"
src/
 ├── components/
 ├── pages/
 ├── context/
 ├── assets/
 ├── App.jsx
 ├── main.jsx
```

---

## 📄 Pages

* `/` → Login/Register
* `/home` → Homepage
* `/allproducts` → Products
* `/wishlist` → Wishlist
* `/singleproduct` → Product Details
* `/account` → Profile
* `/*` → 404

---

## 🔁 App Flow

```text id="yehhtv"
User Action → API Request → Backend → Response → UI Update
```

---

## 🔐 Authentication

* JWT-based authentication
* Stored in sessionStorage
* Managed via AuthContext
* Navbar updates based on auth state

---

## 🌐 API Integration

Base URL:

```id="o6pvtg"
https://digi-backend-project.vercel.app
```

---

## ⚙️ Setup

```bash id="z2dyq8"
git clone https://github.com/abdobary/digi-Frontend-project
cd digi-Frontend-project
npm install
npm run dev
```

---

## 🖼️ Screenshots

### 🏠 Home Page

<img width="1905" height="958" alt="Home_Page" src="https://github.com/user-attachments/assets/d577e86f-25c9-4f60-8c18-e035427d8349" />

### 🔐 Login Page

<img width="1907" height="956" alt="Login_Page" src="https://github.com/user-attachments/assets/011589ad-3b13-4655-a6c6-2231bf65acae" />

### ❤️ Wishlist

<img width="1920" height="956" alt="Wishlist_Page" src="https://github.com/user-attachments/assets/b396f785-e311-4db5-8454-9b75b67e5e49" />

### 👤 Profile Page

<img width="1905" height="958" alt="Profile_Page" src="https://github.com/user-attachments/assets/bcb2b11c-7897-4c9e-91e4-406d534bbc87" />

---

## 🧠 Key Concepts

* Component-based architecture
* Client-side routing
* API integration
* Global state management
* Conditional rendering

---

## ⚠️ Limitations

* Some static content
* No cart/checkout yet
* No filtering/search

---

## 🚀 Future Improvements

* Dynamic product system
* Cart & checkout
* Filtering & search
* Performance optimization

---

## 👨‍💻 Author

Abdelrahman Tarek
