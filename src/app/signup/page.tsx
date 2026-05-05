import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-primary/30 selection:text-primary-fixed min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Atmospheric Background Accents (Glassmorphic-Cyber style) */}
      <div className="absolute top-0 left-[-10%] w-[60vw] h-[614px] bg-primary/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[512px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djI2SDAwdjYwaDM2em0yNC0zMEgxNHY2MGg0NlYzNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>

      {/* Main Authentication Card */}
      <main className="w-full max-w-md mx-4 relative z-10">
        
        {/* Glassmorphic Container */}
        <div className="bg-surface-container/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-primary/5 p-section_margin flex flex-col gap-8">
          
          {/* Header Identity */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-display-lg text-display-lg text-primary italic font-black tracking-tighter">
              VortexStream
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant text-center">
              Authenticate to access the nexus.
            </p>
          </div>

          {/* Mode Toggle (Segmented Control) */}
          <div className="flex p-1 bg-surface-container-highest/50 rounded-lg border border-white/5">
            <button
              aria-current="page"
              className="flex-1 py-2 rounded-DEFAULT bg-primary/15 text-primary font-label-md text-label-md shadow-sm transition-all"
            >
              Log In
            </button>
            <button className="flex-1 py-2 rounded-DEFAULT text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5">
            
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
              >
                Email Address
              </label>
              <div className="relative flex items-center">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="runner@nexus.net"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest/80 border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="font-label-sm text-label-sm text-secondary hover:text-secondary-fixed transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative flex items-center">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest/80 border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

            {/* Primary Submit Action */}
            <button
              type="submit"
              className="mt-2 w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-outline-variant/50"></div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Or Access Via
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-outline-variant/50"></div>
          </div>

          {/* OAuth Provider */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-outline-variant/50 bg-surface-container-lowest/50 hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors group">
            <img
              alt="Provider Icon"
              className="w-5 h-5 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3fd-b2UximBXhNaCToMWXOp1555SOK2e2hWsSx4Ql36JvLIGCECk1StHhlhOmgkCsWcXMDe0KW8Yp3VtA05IJ3PyzijoA8kZ_lY2r9rsSY6QkZbxIjPVr9FGOsT84wrT91jBj_m0hP2Pxqt2VJK-GVA6qxJEIQ_FibZtEyfH0ooujBJYr_W3zOyOoV7ysuH5JPulhdvCNVmnFGeClyoxs3mN9xM_dJkYPLX3J_Efo-jA8yBcMjScH67atpOHEsFTNVfNf_ccRLZ8"
            />
            <span>Continue with Google</span>
          </button>
          
        </div>
      </main>
    </div>
  );
}