import Mux from '@mux/mux-node';
import { NextResponse } from 'next/server';

// The Mux SDK automatically picks up MUX_TOKEN_ID and MUX_TOKEN_SECRET from your .env
const mux = new Mux();

export async function POST(req: Request) {
  try {
    // Parse the incoming body to get the metadata
    const body = await req.json().catch(() => ({}));
    const username = body.username || "Anonymous Streamer";
    const title = body.title || `${username}'s Stream`;
    const description = body.description || "";

    const passthroughData = JSON.stringify({ u: username, t: title, d: description });

    // Create a new Live Stream
    const liveStream = await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
      // Optional: Set latency_mode to 'reduced' or 'low' for Twitch-like chat interaction
      latency_mode: 'low', 
      passthrough: passthroughData, // Attach the user's identity and stream metadata to the stream!
    });

    return NextResponse.json({
      streamKey: liveStream.stream_key,
      playbackId: liveStream.playback_ids?.[0].id,
      rtmpUrl: "rtmps://global-live.mux.com:443/app",
    });
    
  } catch (error) {
    console.error("Mux Error:", error);
    return NextResponse.json({ error: 'Failed to create live stream' }, { status: 500 });
  }
}