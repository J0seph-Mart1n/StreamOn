import { Server } from "socket.io";
import Redis from "ioredis";

// Connect to your Redis instance
const redis = new Redis({ host: "127.0.0.1", port: 6380 });

redis.on("error", (err) => console.error("Redis Client Error", err));

const io = new Server(3010, {
  cors: { origin: "*" } // Allow your Next app to connect
});

// A Map to store active interval timers so we don't broadcast unnecessarily
const broadcastTimers = new Map();

io.on("connection", (socket) => {
  let currentStreamId = null;
  let viewerId = socket.handshake.auth.userId || socket.id; // Use DB ID or Socket ID (IP)

  socket.on("join_stream", async (streamId) => {
    currentStreamId = streamId;
    socket.join(streamId);

    // 1. Add viewer to Redis Set
    await redis.sadd(`stream:${streamId}:viewers`, viewerId);

    // 2. Start the broadcast throttle loop if it hasn't started yet
    startBroadcasting(streamId);
  });

  socket.on("disconnect", async () => {
    if (currentStreamId) {
      // 1. Remove viewer from Redis Set
      await redis.srem(`stream:${currentStreamId}:viewers`, viewerId);
    }
  });
});

// The Throttle: Only send the count every 2 seconds
function startBroadcasting(streamId) {
  if (broadcastTimers.has(streamId)) return;

  const timer = setInterval(async () => {
    // Count unique users in the Redis Set
    const count = await redis.scard(`stream:${streamId}:viewers`);
    
    // Broadcast the count to everyone in this stream's room
    io.to(streamId).emit("viewer_count_updated", count);

    // Memory cleanup: If stream is dead (0 viewers), stop the interval loop
    if (count === 0) {
      clearInterval(broadcastTimers.get(streamId));
      broadcastTimers.delete(streamId);
    }
  }, 2000); // 2 seconds

  broadcastTimers.set(streamId, timer);
}

console.log("WebSocket Presence Server running on port 3010");