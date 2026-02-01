import Image from "next/image";
import Link from "next/link";

type Thought = {
  _id: string;
  content: string;
}

type PublicProfileProps = {
  username: string;
  fullname: string;
  about: string;
  src: string;
  thoughts: Thought[];
};

// Mock Data


export default function PublicProfilePage({ username, fullname, about, src, thoughts }: PublicProfileProps) {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      
      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-orange-500/5 blur-[140px]" />
      </div>

      {/* Main container (same width as private profile) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-32">
        
        {/* Profile Header */}
        <header className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-16">
          
          {/* Avatar */}
          <div className="relative h-40 w-40 rounded-full p-[1px] bg-gradient-to-b from-orange-500/30 to-transparent">
            <div className="h-full w-full rounded-full overflow-hidden bg-stone-900 shadow-2xl">
              <Image
                src={src}
                alt={username}
                width={112}
                height={112}
                className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </div>
          </div>

          {/* Names + status */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <span className="text-orange-500/60 text-[10px] uppercase tracking-[0.5em] font-black">
              Public Record
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
              {username}
            </h1>

            {/* Full name (new) */}
            <p className="text-stone-500 text-lg ]">
              {fullname}
            </p>

            {about && (
              <p className="text-stone-400 font-serif text-lg sm:text-xl opacity-80 mt-2">
                "{about}"
              </p>
            )}
          </div>
        </header>

        {/* Confessions grid */}
      <section className="columns-1 md:columns-2 gap-6 space-y-6">
  {thoughts.map((confession) => (
    <article
      key={confession._id}
      className="
        break-inside-avoid
        relative
        rounded-3xl
        bg-white/[0.01] 
        hover:bg-white/[0.03]
        border border-white/[0.03]
        hover:border-orange-500/10
        p-8
        group
        transition-all duration-1000 ease-out
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      "
    >
      {/* 1. LIGHTER CONTENT FEELS LESS BULKY */}
      <div className="relative">
        <p className="
          text-stone-300/80 
          text-base 
          leading-relaxed 
          font-serif 
          italic 
          group-hover:text-stone-100 
          transition-colors 
          duration-700
        ">
          {confession.content}
        </p>
      </div>

      {/* 2. MINIMALIST FOOTER */}
      <div className="mt-6 flex items-center gap-3">
        {/* A tiny dot instead of a long line reduces bulk */}
        <div className="h-1 w-1 rounded-full bg-orange-500/20 group-hover:bg-orange-500/50 transition-all duration-700" />
        
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-stone-600 group-hover:text-stone-500 transition-colors">
          Fragment
        </span>
        
        <span className="text-[8px] text-stone-800 tracking-widest ml-auto">
          {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
        </span>
      </div>
    </article>
  ))}
</section>

        {/* Footer Action */}
        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-10">
          <button className="group flex flex-col items-center gap-6 text-stone-500 hover:text-orange-400 transition-all">
            <Link href="/contact" className="inline-block">
            <span className="text-xs uppercase tracking-[0.5em] font-bold">
              Send a quiet note
            </span></Link>
            <div className="relative w-px h-16 bg-gradient-to-b from-orange-500/40 to-transparent group-hover:h-24 transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-400 blur-sm animate-bounce opacity-0 group-hover:opacity-100" />
            </div>
          </button>
        </footer>

      </div>

      {/* Fixed vertical branding */}
      <div className="fixed left-8 bottom-12 opacity-5 hidden xl:block pointer-events-none">
        <p className="[writing-mode:vertical-rl] text-white tracking-[1.2em] text-[10px] uppercase font-black">
          THE OPEN ARCHIVE
        </p>
      </div>
    </main>
  );
}
