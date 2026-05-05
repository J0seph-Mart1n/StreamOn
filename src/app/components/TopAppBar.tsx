import Link from "next/link";

export default function TopAppBar() {
  return (
    <header className="bg-zinc-950/80 backdrop-blur-xl font-spline-sans tracking-tight border-b border-white/10 shadow-2xl shadow-violet-500/5 flex justify-between items-center px-4 h-16 w-full fixed top-0 z-50 docked full-width">
      <div className="flex items-center gap-6">
        <Link
          href="#"
          className="text-2xl font-black text-violet-500 italic tracking-tighter shrink-0 flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined"
            data-icon="token"
            data-weight="fill"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            token
          </span>
          StreamOn
        </Link>
      </div>
      <div className="flex-1 max-w-xl px-8 hidden lg:block">
        <div className="relative group">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant z-10"
            data-icon="search"
          >
            search
          </span>
          <input
            className="w-full bg-surface-container-highest border-0 rounded-full pl-10 pr-4 py-2 text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary focus:bg-surface-container transition-colors font-body-md text-body-md"
            placeholder="Search channels, games, or categories..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          aria-label="notifications"
          className="p-2 rounded-full text-zinc-400 font-medium hover:bg-white/5 hover:text-white transition-all active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined" data-icon="notifications">
            notifications
          </span>
        </button>
        <button
          aria-label="inbox"
          className="p-2 rounded-full text-zinc-400 font-medium hover:bg-white/5 hover:text-white transition-all active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined" data-icon="inbox">
            inbox
          </span>
        </button>
        <button
          aria-label="videocam"
          className="p-2 rounded-full text-zinc-400 font-medium hover:bg-white/5 hover:text-white transition-all active:scale-95 duration-150 hidden sm:block"
        >
          <span className="material-symbols-outlined" data-icon="videocam">
            videocam
          </span>
        </button>
        <button className="ml-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-opacity active:scale-95 duration-150 font-bold shadow-lg shadow-primary/20">
          Go Live
        </button>
        <button className="ml-2 w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant hover:border-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
          <img
            alt="User profile and settings"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZjYUXBHKPclCrm-mHLkMfbKcVMrpjA6sdEkvZ7A_eCLeF152DHpG4yGu0w8_h_xovGXfa7AUrp3uubWifhrU5Nvv-AVOEppD_huIHpGa0r-ecAm5GNRz9rEaTUi_amcelE-Tx8-cdTH0Hyp7agdJOM5lCWdG0yIexR9racHyXhy5DyS11xiATcstvtqxfSc5wcy4e1or1xOgey1AP37LVO7psIKX2GzwHvA3JY2iv1zgqORHzcpnZBomXRLv82wxA3BT2RlFfWIU"
          />
        </button>
      </div>
    </header>
  );
}
