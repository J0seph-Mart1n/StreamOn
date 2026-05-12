"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Props {
  streamId: string;
  userId?: string; // Optional: Pass logged-in user ID to prevent multi-tab counting
}

export default function LiveViewerCount({ streamId, userId }: Props) {
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    // Generate or retrieve an anonymous device ID if the user is not logged in.
    // This ensures multiple tabs from the same browser share the same ID.
    let finalUserId = userId;
    if (!finalUserId) {
      let storedId = localStorage.getItem("streamon_device_id");
      if (!storedId) {
        storedId = "anon-" + Math.random().toString(36).substring(2, 11);
        localStorage.setItem("streamon_device_id", storedId);
      }
      finalUserId = storedId;
    }

    // Connect to your external WebSocket server
    const socket: Socket = io("http://localhost:3010", {
      auth: { userId: finalUserId }, 
    });

    socket.on("connect", () => {
      // Tell the server which stream we are watching
      socket.emit("join_stream", streamId);
    });

    // Listen for the throttled updates (arrives every 5 seconds)
    socket.on("viewer_count_updated", (count: number) => {
      setViewerCount(count);
    });

    return () => {
      socket.disconnect(); // Fires the "disconnect" event on the server
    };
  }, [streamId, userId]);

  // Format the number (e.g., 100000 -> 100k)
  const formattedCount = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(viewerCount);

  return (
    <div className="bg-surface-container/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-2 py-1 rounded shadow-lg flex items-center gap-1 border border-white/10">
      <span className="material-symbols-outlined text-[16px]">visibility</span>
      {formattedCount}
    </div>
  );
}