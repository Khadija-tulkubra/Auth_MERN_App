# MERN Authentication System

A complete authentication system built with **MongoDB, Express.js, React, and Node.js** using **Tailwind CSS** for styling.  
It includes **User Registration, Login, Forgot Password, and Reset Password** functionality.

---

## 🚀 Features
- **User Registration** with email and password
- **Secure Login** using JWT Authentication
- **Password Encryption** using bcrypt
- **Forgot Password** with email-based reset link
- **Reset Password** page
- **Responsive UI** with Tailwind CSS
- **Form Validation** on both client and server

---

## 🛠️ Tech Stack
### Frontend
- React.js
- Tailwind CSS
- fetch

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token)
- Bcrypt.js
- Nodemailer

---

## 📂 Project Structure
project-folder/
│
├── backend/ # Express server and APIs
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── controllers/ # Logic for APIs
│ └── config/ # Database and environment config
│
├── frontend/ # React app
│ ├── src/ # Components, pages, and services

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/your-username/mern-auth-system.git
2️⃣ Backend Setup

cd backend
npm install
Create a .env file inside the backend folder and add:

env

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
Run the backend:


npm start
3️⃣ Frontend Setup

cd ../frontend
npm install
Run the frontend:

]
npm run dev
🔐 Environment Variables
Make sure you configure:

PORT

MONGODB_URI

JWT_SECRET

EMAIL_USER & EMAIL_PASS for Nodemailer

📸 Screenshots
<img width="457" height="614" alt="image" src="https://github.com/user-attachments/assets/b166a5e8-2200-4fca-bfa1-3a3277b41cf5" />
<img width="461" height="612" alt="image" src="https://github.com/user-attachments/assets/e7f48c34-81e3-42e4-b2c5-b4a2806f195d" />
<img width="454" height="611" alt="image" src="https://github.com/user-attachments/assets/923a4d55-5961-4852-a476-5d4a06771301" />
<img width="433" height="604" alt="image" src="https://github.com/user-attachments/assets/7ee01a35-d6f6-48da-8398-57a6f9655f84" />

Author:
Khadija tul kubra



🤝 Contributing
Pull requests are welcome! If you have suggestions or improvements, feel free to open an issue
