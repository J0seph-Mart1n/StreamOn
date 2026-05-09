import TopAppBar from "./components/TopAppBar";
import SideNavBar from "./components/SideNavBar";
import Link from "next/link";

import Mux from "@mux/mux-node";

const mux = new Mux();

export const revalidate = 0; // Disable static rendering to always fetch fresh streams

export default async function Home() {
  // Fetch live streams
  const streamsPage = await mux.video.liveStreams.list();
  const allStreams = streamsPage.data || streamsPage; // Handle different Mux SDK versions
  
  // Sort streams so active ones appear first
  const streams = [...allStreams].sort((a, b) => (a.status === 'active' ? -1 : 1));

  return (
    <>
      <TopAppBar />

      {/* Main Layout */}
      <div className="flex pt-16 min-h-screen">
        <SideNavBar />

        {/* Main Content Area */}
        <main className="flex-1 ml-0 md:ml-[80px] lg:ml-[260px] p-6 lg:p-8 max-w-container_max_width w-full mx-auto">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-2">
                Live Now
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Top broadcasts recommended for you
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-md border border-outline-variant hover:bg-surface-bright transition-colors">
                Categories
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-md border border-outline-variant hover:bg-surface-bright transition-colors flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="filter_list"
                >
                  filter_list
                </span>{" "}
                Filter
              </button>
            </div>
          </div>

          {streams.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-16 bg-surface-container rounded-xl border border-white/5">
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">videocam_off</span>
              <h2 className="font-headline-md text-on-surface">No Broadcasts Found</h2>
              <p className="font-body-md text-on-surface-variant mt-2 text-center max-w-md">There are currently no live streams available. Create a stream key in your dashboard to start broadcasting!</p>
              <Link href="/broadcast" className="mt-6 px-6 py-3 bg-primary text-on-primary font-label-md rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              {streams.map((stream, index) => {
                const playbackId = stream.playback_ids?.[0]?.id;
                const isLive = stream.status === "active";
                const isFeatured = index === 0;

                // Fallback thumbnail if not live/no playbackId
                const thumbnailUrl = playbackId 
                  ? `https://image.mux.com/${playbackId}/thumbnail.jpg?width=${isFeatured ? 1280 : 640}&height=${isFeatured ? 720 : 360}&fit_mode=smartcrop&time=1`
                  : "https://lh3.googleusercontent.com/aida-public/AB6AXuBK5Q8PHoha2zFGgrSQoGwH2KzpvzZssxn7Wy75_t6it8etk9tPd3RUgdjXqhBv2NZCoGB4SVrxzw4iwZ8GWkP31yKuhToh6TE-o5dVDAtsb910EGAZCultG0qkTyUewaErKLMlh2PAAc2WkMSZKlyoEho6o7BV4nQCJnd0ehzZVEk9cqnNFfzB6SV5Gj1NfHLYZ-mkCs3golcM_zKWx9q33EdSJfVFKOioBoTttnFLAp0BoZvcF-EGo714bKqcqdkLumFqB2P71Hs";

                if (isFeatured) {
                  return (
                    <Link key={stream.id} href={`/live?playbackId=${playbackId}`} className="md:col-span-2 xl:col-span-2 group relative rounded-xl overflow-hidden bg-surface-container border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 block cursor-pointer">
                      <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
                        <img
                          alt="Featured Stream Thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={thumbnailUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none"></div>
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`${isLive ? 'bg-error text-on-error shadow-error/20' : 'bg-surface-variant text-on-surface-variant border border-white/10'} font-label-sm px-2 py-1 rounded flex items-center gap-1 uppercase tracking-wider font-bold shadow-lg`}>
                            {isLive && <span className="w-1.5 h-1.5 rounded-full bg-on-error animate-pulse"></span>}
                            {isLive ? "Live" : "Offline"}
                          </span>
                          {isLive && (
                            <span className="bg-surface-container-highest/80 backdrop-blur-md text-on-surface font-label-sm px-2 py-1 rounded flex items-center gap-1 border border-white/10">
                              <span className="material-symbols-outlined text-[14px]">visibility</span>
                              124
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-4 absolute bottom-0 left-0 right-0 z-10 flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full border-2 border-surface-container-lowest bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                          V
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-headline-md text-headline-md text-on-surface truncate group-hover:text-primary transition-colors drop-shadow-md">
                            {stream.passthrough || `Stream ${playbackId?.substring(0, 6)}`}
                          </h3>
                          <p className="font-body-md text-body-md text-on-surface-variant truncate">
                            VortexStream Network
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }

                return (
                  <div key={stream.id} className="group relative rounded-xl overflow-hidden bg-surface-container border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col cursor-pointer">
                    <Link href={`/live?playbackId=${playbackId}`} className="block flex-1 flex flex-col">
                      <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
                        <img
                          alt="Stream Thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={thumbnailUrl}
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className={`${isLive ? 'bg-error text-on-error shadow-error/20' : 'bg-surface-variant text-on-surface-variant border border-white/10'} font-label-sm px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider font-bold text-xs shadow-lg`}>
                            {isLive && <span className="w-1 h-1 rounded-full bg-on-error animate-pulse"></span>}
                            {isLive ? "Live" : "Offline"}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 flex gap-3 items-start flex-1 bg-surface-container-lowest/50">
                        <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold uppercase">
                          {stream.passthrough?.[0] || "U"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-label-md text-label-md text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {stream.passthrough || "User Channel"}
                          </h3>
                          <p className="font-label-sm text-label-sm text-on-surface-variant truncate">
                            Playing Custom Categories
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </>
  );
}