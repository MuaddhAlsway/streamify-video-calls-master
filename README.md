<h1 align="center">🎥 Streamify — Full-Stack Chat & Video Calling App</h1>

<p align="center">
  A real-time language-exchange platform with chat, video calls, friend requests and 32 UI themes.
</p>

<p align="center">
  <a href="https://streamify-video-calls-master-eu9e.vercel.app"><img src="https://img.shields.io/badge/Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live demo"></a>
  <a href="https://streamify-video-calls-master-2psx.onrender.com/api/health"><img src="https://img.shields.io/badge/API-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Backend API"></a>
  <img src="https://img.shields.io/badge/License-ISC-FF6B6B?style=for-the-badge" alt="License">
</p>

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## 🧩 Tech Stack

### Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=tanstack&logoColor=white" alt="TanStack Query">
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand">
  <img src="https://img.shields.io/badge/Axios-5A97D4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/lucide_react-000000?style=for-the-badge&logo=lucide&logoColor=white" alt="lucide-react">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
</p>

### Backend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/JSON_Web_Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=ffffff" alt="JSON Web Tokens">
  <img src="https://img.shields.io/badge/bcrypt-4B113E?style=for-the-badge&logo=bcrypt&logoColor=white" alt="bcrypt">
  <img src="https://img.shields.io/badge/CORS-ffffff?style=for-the-badge&logoColor=black" alt="CORS">
  <img src="https://img.shields.io/badge/ESM_Modules-ffffff?style=for-the-badge&logoColor=black" alt="ESM Modules">
</p>

### Real-Time / Streaming

<p align="center">
  <img src="https://img.shields.io/badge/Stream_Chat-005FFF?style=for-the-badge&logo=stream&logoColor=white" alt="Stream Chat">
  <img src="https://img.shields.io/badge/Stream_Video-005FFF?style=for-the-badge&logo=stream&logoColor=white" alt="Stream Video">
  <img src="https://img.shields.io/badge/stream--chat--react-005FFF?style=for-the-badge&logoColor=white" alt="stream-chat-react">
  <img src="https://img.shields.io/badge/video--react--sdk-005FFF?style=for-the-badge&logoColor=white" alt="video-react-sdk">
</p>

### Infrastructure & Tooling

<p align="center">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render">
  <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon">
</p>

---

## ✨ Features

- 🔐 **JWT Authentication** — httpOnly cookie sessions, protected routes, onboarding flow
- 💬 **Real-Time Messaging** — 1-on-1 chat with typing indicators, reactions & replies (Stream Chat)
- 📹 **Video Calls** — 1-on-1 calls with mic, camera & screen-sharing controls (Stream Video SDK)
- 👥 **Friend System** — recommended users, send/accept friend requests, friends list
- 🔔 **Notifications** — incoming friend requests with accept/decline
- 🌍 **Language Exchange** — profiles with native/learning languages, flag badges, bio & location
- 🎨 **32 UI Themes** — DaisyUI themes, persisted globally with Zustand
- 🧠 **Caching & State** — TanStack Query for server state, Zustand for UI state
- 🛡️ **Hardened CORS** — exact-origin allow-list with credentials support
- 🚨 **Error Handling** — JSON API errors, frontend toasts, graceful DB-unavailable responses
- ⚡ **Self-Bootstrapping Server** — backend installs its own dependencies on Render before boot

---

## 📁 Project Structure

```
streamify-video-calls-master/
├── backend/
│   ├── api/
│   │   └── index.js            # Vercel serverless entry
│   ├── src/
│   │   ├── app.js              # Express app (CORS, health, DB middleware, routes)
│   │   ├── server.js           # Entry point (dependency bootstrap + start)
│   │   ├── controllers/        # auth, chat & user controllers
│   │   ├── lib/                # MongoDB connection, Stream Chat client
│   │   ├── middleware/         # JWT auth guard
│   │   ├── models/             # User & FriendRequest schemas
│   │   └── routes/             # auth, user & chat routes
│   ├── .env.example
│   └── vercel.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/         # Navbar, Sidebar, Layout, FriendCard, loaders…
│   │   ├── pages/              # Home, Chat, Call, Auth, Onboarding, Notifications
│   │   ├── hooks/              # useAuthUser, useLogin, useSignUp, useLogout
│   │   ├── lib/                # axios instance, API calls, avatar fallback, utils
│   │   ├── store/              # Zustand theme store
│   │   └── constants/          # languages, flags, themes
│   └── .env.example
├── render.yaml                 # Render backend blueprint
├── package.json                # root scripts (build / start)
└── README.md
```

---

## 🧪 Environment Variables

### Backend (`/backend/.env`)

```env
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend/.env`)

```env
# Required in production, defaults to http://localhost:5001 in development
VITE_API_URL=http://localhost:5001

# From https://getstream.io (same key as STREAM_API_KEY on the backend)
VITE_STREAM_API_KEY=your_stream_api_key
```

> ⚠️ Never commit `.env` files — `.gitignore` excludes them. Copy the `.env.example` files as a starting point.

---

## 🚀 Run Locally

### 1. Backend

```bash
cd backend
npm install
npm run dev        # nodemon on http://localhost:5001
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev        # Vite on http://localhost:5173
```

### 3. Or both at once (from the repository root)

```bash
npm run build      # installs backend + frontend deps and builds the frontend
npm start          # starts the backend
```

Open **http://localhost:5173** and sign up — new accounts go through onboarding (name, bio, languages, avatar) before landing on the home page.

---

## 🔌 API Overview

Base URL: `http://localhost:5001/api` (dev) · `https://streamify-video-calls-master-2psx.onrender.com/api` (prod)

| Method | Endpoint                         | Auth | Description                        |
| ------ | -------------------------------- | ---- | ---------------------------------- |
| GET    | `/api/health`                    | —    | Service health check               |
| POST   | `/api/auth/signup`               | —    | Register (sets httpOnly JWT)       |
| POST   | `/api/auth/login`                | —    | Login (sets httpOnly JWT)          |
| POST   | `/api/auth/logout`               | —    | Clear session cookie               |
| POST   | `/api/auth/onboarding`           | ✔    | Complete profile setup             |
| GET    | `/api/auth/me`                   | ✔    | Current authenticated user         |
| GET    | `/api/users`                     | ✔    | Recommended users                  |
| GET    | `/api/users/friends`             | ✔    | My friends                         |
| GET    | `/api/users/friend-requests`     | ✔    | Incoming requests                  |
| GET    | `/api/users/outgoing-friend-requests` | ✔ | Sent requests                   |
| POST   | `/api/users/friend-request/:id`  | ✔    | Send a friend request              |
| PUT    | `/api/users/friend-request/:id/accept` | ✔ | Accept a request               |
| GET    | `/api/chat/token`                | ✔    | Stream Chat/Video user token       |

---

## ☁️ Deployment

| Layer    | Host       | Config                                                    |
| -------- | ---------- | --------------------------------------------------------- |
| Frontend | **Vercel** | directory `frontend/`, build `npm run build`, output `dist` |
| Backend  | **Render** | `render.yaml` (rootDir `backend`, build `npm install`, start `node src/server.js`) |
| Database | **MongoDB Atlas** | allow-list `0.0.0.0/0` so Render can connect         |

Production environment variables:

- **Render:** `MONGO_URI`, `STREAM_API_KEY`, `STREAM_API_SECRET`, `JWT_SECRET_KEY`, `CLIENT_URL` (the Vercel URL), `NODE_ENV=production`, `PORT`
- **Vercel:** `VITE_API_URL` (the Render URL), `VITE_STREAM_API_KEY`

The backend locks CORS to `CLIENT_URL` + this project's Vercel origins, and auth cookies are issued with `httpOnly`, `secure` and `sameSite=none` so they work cross-site.

---

## 📜 License

ISC © Streamify
