import Link from "next/link";
import TopAppBar from "../components/TopAppBar";
import SideNavBar from "../components/SideNavBar";
import LiveChat from "../components/LiveChat";
import LiveViewerCount from "../components/LiveViewerCount";
import MuxPlayer from "@mux/mux-player-react";
import Mux from "@mux/mux-node";

const mux = new Mux();

export default async function StreamPage({ searchParams }: { searchParams: Promise<{ playbackId?: string }> }) {
  const params = await searchParams;
  const playbackId = params.playbackId;

  let broadcasterName = "Unknown Broadcaster";
  let streamTitle = "Live Broadcast";
  let streamDescription = "Welcome to the broadcast! Make sure your account is linked to earn exclusive drop rewards during this stream.";
  let isLive = false;

  if (playbackId) {
    try {
      const streamsPage = await mux.video.liveStreams.list();
      const allStreams = streamsPage.data || streamsPage;
      const currentStream = allStreams.find((s: any) => s.playback_ids?.[0]?.id === playbackId);
      
      if (currentStream) {
        let passthroughData: any = {};
        try {
          passthroughData = JSON.parse(currentStream.passthrough || "{}");
        } catch (e) {
          passthroughData = { u: currentStream.passthrough };
        }
        
        broadcasterName = passthroughData.u || "Anonymous Streamer";
        streamTitle = passthroughData.t || `${broadcasterName}'s Live Broadcast`;
        streamDescription = passthroughData.d || streamDescription;
        isLive = currentStream.status === "active";
      }
    } catch (e) {
      console.error("Failed to fetch stream details from Mux", e);
    }
  }

  return (
    // Wraps the entire page in a fixed h-screen container to prevent global scrolling
    <div className="bg-background text-on-background h-screen overflow-hidden flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      
      {/* TopAppBar */}
      <TopAppBar />

      {/* Main Content Area */}
      <div className="flex flex-1 pt-16 h-full w-full">
        {/* SideNavBar */}
        <SideNavBar />

        {/* Dynamic Content Canvas (Video 75% + Chat 25%) */}
        <main className="flex-1 flex flex-col lg:flex-row ml-0 md:ml-[260px] h-full overflow-hidden relative">
          
          {/* Video Player & Info Section */}
          <section className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background custom-scrollbar">
            {/* Large Video Player */}
            <div className="w-full bg-black relative group aspect-video lg:aspect-auto lg:h-[665px] shrink-0 border-b border-white/5">
              <MuxPlayer
                playbackId={playbackId} // Public test VOD. Replace with your live playbackId from the API
                metadata={{
                  video_title: streamTitle,
                }}
                autoPlay
                muted
                style={{ height: '100%', width: '100%', '--controls': 'flex' } as React.CSSProperties}
                primaryColor="#d0bcff"
                secondaryColor="#0b1326"
              />
              
              {/* Top Left Custom Badges Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-10">
                <div className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-2 py-1 rounded shadow-lg flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
                  Live
                </div>
                {playbackId && <LiveViewerCount streamId={playbackId} />}
              </div>
            </div>

            {/* Stream Meta Data */}
            <div className="p-section_margin flex flex-col gap-grid_gutter max-w-container_max_width mx-auto w-full">
              {/* Title & Category */}
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  {streamTitle}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <Link href="#" className="font-label-sm text-label-sm text-secondary hover:underline">
                    Just Chatting
                  </Link>
                  <span className="text-outline-variant">•</span>
                  <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full border border-white/5">English</span>
                </div>
              </div>

              {/* Broadcaster Info Row */}
              <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 bg-surface-container-low p-4 rounded-xl border border-white/5 shadow-lg shadow-black/20">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary">
                      <div className="w-full h-full rounded-full border-2 border-background bg-surface-container flex items-center justify-center font-display-md text-xl font-bold uppercase text-on-surface">
                        {broadcasterName[0] || "U"}
                      </div>
                    </div>
                    {isLive && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-error text-on-error font-label-sm text-[10px] px-1.5 rounded font-bold border-2 border-background uppercase tracking-wider">
                        Live
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-headline-md text-[20px] leading-tight text-on-surface flex items-center gap-1">
                      {broadcasterName}
                    </h2>
                    <p className="font-body-md text-sm text-outline">New Streamer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(208,188,255,0.2)]">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    Follow
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-surface-variant hover:bg-surface-container-highest text-on-surface font-label-md text-label-md px-6 py-2.5 rounded-lg border border-outline/20 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">star</span>
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Stream Description */}
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-white/5 font-body-md text-sm text-on-surface-variant leading-relaxed mb-8">
                <p>{streamDescription}</p>
              </div>
            </div>
          </section>

          {/* Live Chat Sidebar */}
          <LiveChat playbackId={playbackId} />
        </main>
      </div>
    </div>
  );
}