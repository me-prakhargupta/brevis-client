"use client";

import Link from "next/link";

export default function UserNotFound() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-full bg-orange-500/[0.04] blur-[140px] rounded-full" />
      </div>

      <section className="relative z-10 w-full max-w-md text-center space-y-10">
        
        {/* 1. THE EMPTY PROFILE ICON */}
        <div className="flex justify-center">
          <div className="relative h-24 w-24 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
            {/* Subtle dashed ring to imply something is missing */}
            <div className="absolute inset-[-8px] rounded-full border border-dashed border-white/5 animate-[spin_20s_linear_infinite]" />
            
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-stone-700"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>

        {/* 2. POETIC MESSAGING */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tighter">Person not found</h1>
            <p className="text-orange-500/60 text-[10px] uppercase tracking-[0.4em] font-black">
              An empty reflection
            </p>
          </div>
          
          <p className="text-stone-400 text-sm italic font-serif leading-relaxed px-4">
            The profile you are looking for doesn’t exist yet, or perhaps they’ve chosen to step away into the quiet.
          </p>
        </div>

        {/* 3. CLEAN ACTIONS */}
        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/me/thoughts/explore"
            className="
              px-8 py-4 rounded-full bg-white/[0.03] border border-white/10
              text-stone-300 text-sm font-medium tracking-wide
              hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300
            "
          >
            Explore other thoughts
          </Link>
          
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.3em] text-stone-600 hover:text-orange-500 transition-colors py-2"
          >
            Return Home
          </Link>
        </div>

      </section>

      {/* FOOTER DETAIL */}
      <div className="fixed bottom-12 opacity-5 pointer-events-none">
         <p className="text-[10px] uppercase tracking-[1em] font-black">
            STILLNESS
         </p>
      </div>
    </main>
  );
}