# 🎨 Digi Frontend Project

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📌 Overview

A modern React-based e-commerce frontend that allows users to authenticate, browse products, manage wishlist, and update their profile. It connects to a live backend API for real-time functionality.

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

*Add screenshot here*

### 🔐 Login Page

*Add screenshot here*

### ❤️ Wishlist

*Add screenshot here*

### 👤 Profile Page

*Add screenshot here*

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
