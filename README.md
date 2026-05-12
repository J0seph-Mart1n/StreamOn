# StreamOn (VortexStream)

A real-time live streaming platform built with Next.js, Firebase, Mux, and Socket.io.

## 🚀 Features

- **Live Streaming Infrastructure:** Built on top of [Mux](https://mux.com/), providing low-latency RTMP broadcasting and HLS playback.
- **Dynamic Stream Metadata:** Broadcasters can set custom stream titles and descriptions. This metadata is securely embedded into the stream using Mux's `passthrough` API, decoupling state from a traditional database.
- **Real-Time Live Chat:** Fast and reliable global live chat powered by Firebase Firestore (`onSnapshot` listeners).
- **Live Viewer Count:** A custom Node.js/Socket.io backend tracks concurrent viewers in real-time using memory-efficient sets and device fingerprinting to prevent multi-tab counting.
- **Authentication:** Secure user authentication managed by Firebase Auth. Only registered users can broadcast or participate in live chat.

---

## 🛠️ Tech Stack

### Frontend (Next.js)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Video Player:** `@mux/mux-player-react`
- **Real-Time Database:** Firebase Firestore
- **Authentication:** Firebase Auth

### Backend (Node.js)
- **Framework:** Node.js
- **WebSockets:** Socket.io
- **Storage:** In-memory `Set` / `Map` data structures (No external DB required for presence).

---

## 💻 Local Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A [Mux](https://mux.com/) Account (for Video API keys)
- A [Firebase](https://firebase.google.com/) Project (for Auth and Firestore)

### 2. Install Dependencies

You will need to install dependencies for both the Next.js frontend and the Socket.io backend.

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd stream_on_backend
npm install
cd ..
```

### 3. Environment Variables

Create a `.env.local` file in the **root** directory (`stream_on/.env.local`) and add your API keys.

```env
# Mux Configuration
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_mux_token_secret

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

*Note: Ensure your Firebase project has Firestore Database and Authentication (Email/Password) enabled.*

### 4. Running the Application

You will need two terminal windows to run both the frontend client and the backend WebSocket server concurrently.

**Terminal 1: Start the Backend Server**
```bash
cd stream_on_backend
node server.js
```
*The WebSocket server will start on `http://localhost:3010`.*

**Terminal 2: Start the Frontend Client**
```bash
# In the root directory (stream_on)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🎥 Broadcasting with OBS Studio

To go live on StreamOn, you can use software like [OBS Studio](https://obsproject.com/):

1. **Get your Stream Keys:** Log in to your StreamOn account, navigate to the **Broadcaster Dashboard**, and fill out your stream title/description to generate your RTMP URL and Stream Key.
2. **Configure OBS:** Open OBS Studio and navigate to **Settings > Stream**.
3. **Set Service:** Change the Service dropdown to **Custom**.
4. **Enter Details:**
   - **Server:** Paste the RTMP URL (`rtmps://global-live.mux.com:443/app`).
   - **Stream Key:** Paste your newly generated Stream Key.
5. **Go Live:** Click **Apply** -> **OK**, then click **Start Streaming** in the main OBS window. Your stream will instantly appear on the StreamOn homepage!

---

## 🏗️ Architecture Notes

- **Mux Passthrough:** When a user generates a stream key, their `username`, `title`, and `description` are JSON-stringified and sent to Mux's `passthrough` field. The homepage parses this data to display active streams dynamically without needing a separate database call.
- **Viewer Deduplication:** The backend deduplicates viewers by analyzing the Socket.io connection. The frontend generates a persistent `device_id` in `localStorage`, ensuring multiple tabs from the same browser are only counted as 1 active viewer.
