# ClariNotes

ClariNotes is a modern web application designed to simplify and enhance the note-taking experience for musicians, students, and educators. Built with cutting-edge web technologies, it offers a clean interface, responsive design, and seamless performance.

## 🚀 Features

- 🎼 Intuitive note-taking interface
- 🧠 Smart organization of notes
- 🌙 Dark mode support
- 📱 Fully responsive across devices
- ⚡ Fast performance with serverless backend
- 🔐 Secure user authentication

## 🛠️ Technologies Used

- **Next.js** – React-based framework for fast and scalable web apps
- **Convex** – Backend-as-a-service for real-time data and serverless functions
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Geist Font** – Optimized font loading via `next/font`
- **Vercel** – Deployment platform for frontend apps

---

## 🧑‍💻 Getting Started

Follow these steps to clone and run ClariNotes locally:

### 1. 📦 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher recommended)  
  Install via [Node.js official site](https://nodejs.org) or use command:
  ```bash
  sudo apt install nodejs
  sudo apt install npm
  sudo apt install git
  npm install -g convex

### 2. 📁 Clone the Repository
  ```bash
  git clone https://github.com/Sandy3559/ClariNotes.git
  cd ClariNotes
  ```
### 3. 📂 Install Dependencies
  ```bash
  npm install
  ```
### 4. ⚙️ Set Up Convex

If you're using Convex for backend:<br>
Create a Convex project:
```bash
  npx convex init
```
Follow prompts to link your project and configure .env.local with your Convex deployment URL.

### 5. 🧪 Run the Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the app.

## 🚀 Live Demo

ClariNotes [Live on Vercel](https://clari-notes.vercel.app/)

