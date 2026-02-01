"use client";

export default function Loading() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. ATMOSPHERIC PULSE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-orange-500/[0.03] blur-[120px] rounded-full animate-pulse" />
      </div>

      <section className="relative z-10 flex flex-col items-center gap-6">
        
        {/* 2. MINIMALIST PROGRESS INDICATOR */}
        <div className="relative h-12 w-px overflow-hidden bg-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-loading-line" />
        </div>

        {/* 3. GENTLE TEXT */}
        <div className="space-y-2 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold animate-in fade-in duration-1000">
            Gathering stillness
          </p>
          <p className="text-stone-700 italic font-serif text-xs">
            Just a moment...
          </p>
        </div>
      </section>

      {/* 4. TAILWIND ANIMATION (Add to tailwind.config.ts or use style tag) */}
      <style jsx global>{`
        @keyframes loading-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-loading-line {
          animation: loading-line 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </main>
  );
}