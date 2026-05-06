import Link from "next/link";

export default function SideNavBar() {
  return (
    <aside className="bg-zinc-900/50 backdrop-blur-md text-sm border-r border-white/10 fixed left-0 top-16 bottom-0 w-[260px] flex-col pt-4 overflow-y-auto hidden md:flex z-40">
      <div className="px-4 mb-4">
        <h2 className="text-zinc-400 font-bold uppercase tracking-wider text-xs mb-1">
          Followed Channels
        </h2>
        <p className="text-violet-500 text-xs font-semibold">6 Live Now</p>
      </div>
      
      <nav className="flex-1 flex flex-col gap-1 px-2">
        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">heart_check</span>
          <span className="font-medium">Following</span>
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-500/10 text-violet-400 border-l-4 border-violet-500 transition-colors cursor-pointer">
          <span className="material-symbols-outlined icon-fill text-lg">explore</span>
          <span className="font-medium">Browse</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">palette</span>
          <span className="font-medium">Creative</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">sports_esports</span>
          <span className="font-medium">E-Sports</span>
        </Link>
        <button className="mt-2 text-violet-400 text-xs font-semibold hover:text-violet-300 text-left px-3 py-2 transition-colors">
          Show More
        </button>
      </nav>
      
      <div className="mt-auto border-t border-white/5 p-2 flex flex-col gap-1">
        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">settings</span>
          <span className="font-medium">Settings</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">help_outline</span>
          <span className="font-medium">Help</span>
        </Link>
      </div>
    </aside>
  );
}
