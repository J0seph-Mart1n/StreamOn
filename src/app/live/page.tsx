import Link from "next/link";
import TopAppBar from "../components/TopAppBar";
import SideNavBar from "../components/SideNavBar";
import MuxPlayer from "@mux/mux-player-react";

export default function StreamPage() {
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
                playbackId="uNbxnGLKJ00yfbijDO8COxTOyVKT01xpxW" // Public test VOD. Replace with your live playbackId from the API
                metadata={{
                  video_title: "Neon Velocity Championship: Finals",
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
                <div className="bg-surface-container/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-2 py-1 rounded shadow-lg flex items-center gap-1 border border-white/10">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  14,205
                </div>
              </div>
            </div>

            {/* Stream Meta Data */}
            <div className="p-section_margin flex flex-col gap-grid_gutter max-w-container_max_width mx-auto w-full">
              {/* Title & Category */}
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  Neon Velocity Championship: Finals Bracket 🏆 [DROPS ENABLED]
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <Link href="#" className="font-label-sm text-label-sm text-secondary hover:underline">
                    Neon Velocity
                  </Link>
                  <span className="text-outline-variant">•</span>
                  <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full border border-white/5">Competitive</span>
                  <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full border border-white/5">E-Sports</span>
                  <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full border border-white/5">English</span>
                </div>
              </div>

              {/* Broadcaster Info Row */}
              <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 bg-surface-container-low p-4 rounded-xl border border-white/5 shadow-lg shadow-black/20">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary">
                      <img
                        alt="Broadcaster Avatar"
                        className="w-full h-full rounded-full object-cover border-2 border-background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbchsVC4QPosvdn8tHkp_00CFLABN_VTwFd7WNLsTHDFyf3-9o9F1LqGLTPqVM8ADod0qm9FPl8EMBN2SXr9fTDA8qno6tDR1k47AKINWe7SDP8bIuSsAK-YKsAFVIBZnWsCYmaKF0Fz2iKCV23CqlEwDTPjgCj5SCHJdhqoh4JGb2FC9bCWBh8a4J57PHcIdwwfGv2jIpEOh-WTOAmju0PpqMzRNYIHb5YY_Z4KzyF3dW2lmMKV1KXk7wvggwVTLcyVcfRQfESKs"
                      />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-tertiary-container text-on-tertiary-container font-label-sm text-[10px] px-1.5 rounded font-bold border-2 border-background uppercase tracking-wider">
                      Live
                    </div>
                  </div>
                  <div>
                    <h2 className="font-headline-md text-[20px] leading-tight text-on-surface flex items-center gap-1">
                      NexusLeague
                      <span className="material-symbols-outlined icon-fill text-secondary text-[18px]" title="Verified Partner">verified</span>
                    </h2>
                    <p className="font-body-md text-sm text-outline">1.2M Followers</p>
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
                <p>Welcome to the grand finals of the Neon Velocity Championship! Top 8 racers from around the globe are competing for a $500,000 prize pool. Make sure your account is linked to earn exclusive drop rewards during this broadcast.</p>
              </div>
            </div>
          </section>

          {/* Live Chat Sidebar */}
          <aside className="w-full lg:w-[340px] xl:w-[400px] h-[512px] lg:h-full bg-surface-container border-l border-white/10 flex flex-col shrink-0 relative z-30">
            {/* Chat Header */}
            <div className="h-14 flex items-center justify-between px-4 border-b border-white/5 bg-surface-container-highest/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">chat</span>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Live Chat</h3>
              </div>
              <button className="text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">people</span>
              </button>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 text-[14px] font-body-md leading-relaxed">
              
              {/* Pinned Message */}
              <div className="bg-surface-variant/50 border border-primary/30 rounded p-2 mb-2">
                <div className="flex items-center gap-1 text-primary font-label-sm text-[11px] uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-[14px] icon-fill">push_pin</span>
                  Pinned by Moderators
                </div>
                <p className="text-on-surface-variant">Welcome to the finals! Keep chat respectful. Drops are currently active. Use !bracket to see the standings.</p>
              </div>

              {/* Message 1 */}
              <div className="group flex flex-col hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors relative">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container absolute right-2 shadow-md rounded">
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Delete Message"><span className="material-symbols-outlined text-[16px]">delete</span></button>
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Block User"><span className="material-symbols-outlined text-[16px]">block</span></button>
                  </div>
                  <span className="bg-secondary/20 text-secondary text-[10px] px-1 rounded border border-secondary/30 mt-1">SUB</span>
                  <div className="break-words w-full pr-12">
                    <span className="font-bold text-secondary cursor-pointer hover:underline">CyberNinja99</span>
                    <span className="text-on-surface-variant ml-1">That corner drift was insane! 🏎️💨</span>
                  </div>
                </div>
              </div>

              {/* Message 2 (Mod) */}
              <div className="group flex flex-col hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors relative">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container absolute right-2 shadow-md rounded">
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Delete Message"><span className="material-symbols-outlined text-[16px]">delete</span></button>
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Block User"><span className="material-symbols-outlined text-[16px]">block</span></button>
                  </div>
                  <span className="material-symbols-outlined icon-fill text-green-400 text-[16px] mt-0.5" title="Moderator">shield</span>
                  <div className="break-words w-full pr-12">
                    <span className="font-bold text-green-400 cursor-pointer hover:underline">NexusBot</span>
                    <span className="text-on-surface-variant ml-1">The current bracket is available here: link.nexus/bracket</span>
                  </div>
                </div>
              </div>

              {/* Message 3 */}
              <div className="group flex flex-col hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors relative">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container absolute right-2 shadow-md rounded">
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Delete Message"><span className="material-symbols-outlined text-[16px]">delete</span></button>
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Block User"><span className="material-symbols-outlined text-[16px]">block</span></button>
                  </div>
                  <div className="break-words w-full pr-12">
                    <span className="font-bold text-purple-400 cursor-pointer hover:underline">NeonDreams</span>
                    <span className="text-on-surface-variant ml-1">Let's goooo! Hype in the chat! 🔥🔥🔥</span>
                  </div>
                </div>
              </div>

              {/* Message 4 */}
              <div className="group flex flex-col hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors relative">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container absolute right-2 shadow-md rounded">
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Delete Message"><span className="material-symbols-outlined text-[16px]">delete</span></button>
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Block User"><span className="material-symbols-outlined text-[16px]">block</span></button>
                  </div>
                  <div className="break-words w-full pr-12">
                    <span className="font-bold text-blue-400 cursor-pointer hover:underline">GlitchMaster</span>
                    <span className="text-on-surface-variant ml-1">I don't think he can catch up after that penalty.</span>
                  </div>
                </div>
              </div>

              {/* Message 5 */}
              <div className="group flex flex-col hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors relative">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container absolute right-2 shadow-md rounded">
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Delete Message"><span className="material-symbols-outlined text-[16px]">delete</span></button>
                    <button className="p-1 text-outline hover:text-error transition-colors" title="Block User"><span className="material-symbols-outlined text-[16px]">block</span></button>
                  </div>
                  <span className="bg-secondary/20 text-secondary text-[10px] px-1 rounded border border-secondary/30 mt-1">SUB</span>
                  <div className="break-words w-full pr-12">
                    <span className="font-bold text-secondary cursor-pointer hover:underline">CyberNinja99</span>
                    <span className="text-on-surface-variant ml-1">Wait, did they just announce a new map?</span>
                  </div>
                </div>
              </div>

              {/* New Messages Indicator (Hidden by default, shown logically) */}
              <div className="sticky bottom-0 w-full flex justify-center pb-2 pointer-events-none opacity-0">
                <button className="bg-surface-variant text-on-surface text-xs px-3 py-1 rounded-full shadow-lg pointer-events-auto hover:bg-surface-container-highest">
                  More messages below
                </button>
              </div>
            </div>

            {/* Chat Input Area */}
            <div className="p-4 border-t border-white/5 bg-surface-container-highest">
              <div className="relative flex items-center">
                <input
                  className="w-full bg-surface-container text-on-surface font-body-md text-sm rounded-lg border border-outline/20 focus:border-primary focus:ring-1 focus:ring-primary pl-3 pr-24 py-2.5 transition-colors placeholder:text-outline-variant outline-none"
                  placeholder="Send a message..."
                  type="text"
                />
                <div className="absolute right-2 flex items-center gap-1">
                  <button className="p-1.5 text-outline hover:text-primary transition-colors rounded" title="Emotes">
                    <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
                  </button>
                  <button className="bg-primary hover:bg-primary-fixed-dim text-on-primary p-1.5 rounded-md transition-colors shadow-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 px-1">
                <div className="flex items-center gap-1 text-[11px] text-outline-variant">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Follower Only Chat
                </div>
                <span className="text-[11px] text-outline-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">local_police</span>
                  Mod View Active
                </span>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}