"use client";

import Link from "next/link";
import { useState } from "react";
import TopAppBar from "../components/TopAppBar";
import SideNavBar from "../components/SideNavBar";

export default function DashboardPage() {
  // Simple state to toggle stream key visibility
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="font-body-md text-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container bg-background min-h-screen text-on-background">
      
      {/* TopAppBar */}
      <TopAppBar />

      {/* SideNavBar */}
      <SideNavBar />

      {/* Main Content Area */}
      <main className="pt-16 md:pl-[260px] min-h-screen relative z-10 p-6 md:p-section_margin max-w-container_max_width mx-auto">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Broadcaster Dashboard</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Manage your stream details, keys, and live status.</p>
          </div>
          {/* Status Indicator */}
          <div className="flex items-center gap-3 bg-surface-container-highest px-4 py-2 rounded-full border border-white/5 shadow-lg w-max">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Ready to Stream</span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Stream Information Form (Spans 2 columns) */}
          <div className="xl:col-span-2 bg-surface-container/40 backdrop-blur-md border border-white/5 rounded-xl p-6 relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">edit_document</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Stream Information</h2>
            </div>
            
            <form className="space-y-6 relative z-10">
              {/* Stream Title */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="stream-title">
                  Stream Title
                </label>
                <input
                  id="stream-title"
                  type="text"
                  defaultValue="Late Night Coding & Cyberpunk Vibes 🚀 | Building UI"
                  className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="category">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      defaultValue="Software & Game Development"
                      className="w-full appearance-none bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
                    >
                      <option>Software & Game Development</option>
                      <option>Just Chatting</option>
                      <option>Creative Arts</option>
                      <option>E-Sports</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Tags (Placeholder) */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="bg-surface-container-highest border border-white/10 text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      Programming
                      <button type="button">
                        <span className="material-symbols-outlined text-[14px] hover:text-error transition-colors">close</span>
                      </button>
                    </span>
                    <span className="bg-surface-container-highest border border-white/10 text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      Design
                      <button type="button">
                        <span className="material-symbols-outlined text-[14px] hover:text-error transition-colors">close</span>
                      </button>
                    </span>
                    <button type="button" className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-label-sm text-label-sm px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[14px]">add</span> Add Tag
                    </button>
                  </div>
                </div>
              </div>

              {/* Update Notification */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="go-live-notif">
                  Go Live Notification
                </label>
                <textarea
                  id="go-live-notif"
                  rows={2}
                  defaultValue="Come hang out! We're building a sick new UI design system tonight."
                  className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end border-t border-white/5 pt-6">
                <button type="button" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-surface-container-lowest font-label-md text-label-md px-6 py-3 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Update Details
                </button>
              </div>
            </form>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            
            {/* Stream Key Section */}
            <div className="bg-surface-container/40 backdrop-blur-md border border-white/5 rounded-xl p-6 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">key</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Stream Key</h2>
              </div>
              
              <p className="font-body-sm text-sm text-on-surface-variant mb-6 bg-surface-container-highest/50 p-3 rounded-lg border-l-2 border-error text-error/90 flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px]">warning</span>
                Do not share this key with anyone. Anyone with this key can stream to your channel.
              </p>

              <div className="space-y-4">
                {/* Key Input */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                    Primary Stream Key
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type={showKey ? "text" : "password"}
                        defaultValue="live_123456789_aBcDeFgHiJkLmNoPqRsTuVwXyZ"
                        readOnly
                        className="w-full bg-surface-container-highest border border-white/10 rounded-lg pl-4 pr-10 py-2.5 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowKey(!showKey)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {showKey ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                    <button type="button" className="bg-surface-container-highest hover:bg-surface-bright border border-primary/50 text-primary font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 shrink-0">
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      Copy
                    </button>
                  </div>
                </div>

                {/* URL Input */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                    Stream URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      defaultValue="rtmp://live.vortexstream.tv/app"
                      readOnly
                      className="w-full bg-surface-container-highest border border-white/10 rounded-lg px-4 py-2.5 font-body-md text-body-md text-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                    />
                    <button type="button" className="bg-surface-container-highest hover:bg-surface-bright border border-white/10 text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg transition-colors flex items-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Placeholder */}
            <div className="bg-gradient-to-br from-surface-container-high to-surface-container border border-white/5 rounded-xl p-6 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Session Overview</h3>
                <span className="material-symbols-outlined text-on-surface-variant">monitoring</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-highest/50 rounded-lg p-4 border border-white/5">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Followers Gained</span>
                  <span className="font-headline-lg text-headline-lg text-on-surface">+24</span>
                </div>
                <div className="bg-surface-container-highest/50 rounded-lg p-4 border border-white/5">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Last Stream Peak</span>
                  <span className="font-headline-lg text-headline-lg text-secondary">1.2k</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}