import Link from "next/link";
import { createLucideIcon, Github, Linkedin, Mail, Download, ArrowUpRight, Globe, ShieldAlert } from "lucide-react";

export default function PortfolioPage() {
    const projects = [
        {
            name: "Carvio",
            desc: "Job hunting is dominated by filtering noise, not applying. Carvio automates this by aggregating listings from multiple sources, normalizing inconsistent data, and filtering roles based on relevance. Built with a modular ingestion pipeline, cron-based schedulers, and MongoDB TTL cleanup to ensure fresh, high-signal opportunities.",
            stack: ["Node.js", "Express", "TypeScript", "MongoDB", "node-cron", "Resend"],
            github: "https://github.com/me-prakhargupta/carvio",
            live: "https://trycarvio.vercel.app/"
        }, {
            name: "Brevis",
            desc: "A privacy-first platform for anonymous emotional expression. Designed with JWT-based authentication, rate limiting, and secure backend architecture to support low-friction, non-performative interaction at scale.",
            stack: ["Node.js", "Express", "MongoDB", "JWT Auth", "Rate Limiting", "Next.js"],
            github: "https://github.com/me-prakhargupta/brevis/",
            live: "https://brevis-five.vercel.app/"
        }, {
            name: "AI Assisted Journal",
            desc: "An AI-assisted journaling system that analyzes emotional tone using LLM APIs. Designed with on-demand analysis architecture, structured APIs, and rate limiting to balance cost, performance, and user experience.",
            stack: ["Next.js", "TypeScript", "Google GenAI", "Tailwind"],
            github: "https://github.com/me-prakhargupta/ai-assisted-journal-system",
            live: "https://ai-assisted-journal-system-theta.vercel.app/"
        }, {
            name: "Pramaan",
            desc: "A hyper-simple task management platform focused on accessibility for senior citizens. Emphasizes intuitive UI, minimal cognitive load, and frictionless workflows using a clean Next.js architecture.",
            stack: ["Next.js", "Tailwind CSS", "Vercel"],
            github: "https://github.com/me-prakhargupta/pramaan-client",
            live: "https://pramaan-peach.vercel.app/"
        }
    ];

    return (
        <div className="relative bg-black min-h-screen overflow-hidden selection:bg-orange-500/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-orange-500/5 blur-[120px] pointer-events-none"/>
            <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-20 pb-32">

            <section className="max-w-3xl mb-32">
                <h2 className="text-stone-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Software Engineer</h2>

                <h1 className="text-white font-extrabold tracking-tight text-5xl sm:text-7xl leading-[1.1] mb-8">Prakhar Gupta.<br /><span className="text-orange-400/80 italic font-serif">Designing systems quietly.</span></h1>

                <p className="text-stone-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">Full stack developer focused on backend engineering — building scalable APIs, secure authentication systems, and production-ready web applications.</p>

                <div className="flex flex-wrap gap-6">
                    <Link href="/prakhar-gupta/disclosures" className="flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold hover:text-orange-400 transition-colors group">
                        <ShieldAlert size={16} className="text-orange-500/60" /> Disclosures
                    </Link>
                    <Link href="https://github.com/me-prakhargupta/" target="_blank" className="flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold hover:text-orange-400 transition-colors group">
                        <Github size={16} className="text-orange-500/60" /> GitHub 
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </Link>
                    <Link href="/Prakhar_Gupta_Full_Stack_Developer_Resume.pdf" download className="flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold hover:text-orange-400 transition-colors group">
                        <Download size={16} className="text-orange-500/60" /> Resume
                    </Link>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
                <div className="space-y-6">
                    <h2 className="text-stone-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">The Approach</h2>

                    <h3 className="text-white font-bold text-2xl tracking-tight">How I Build Systems</h3>

                    <p className="text-stone-500 text-sm leading-relaxed">I build backend systems that are simple, reliable, and designed to scale under real-world load.</p>

                    <p className="text-stone-500 text-sm leading-relaxed">My work centers around designing authentication architectures, structuring clean REST APIs, and building data-driven backend systems - including scheduled job pipelines (node-cron), web scraping workflows, and LLM-powered features.</p>

                    <p className="text-stone-500 text-sm leading-relaxed">I focus on infrastructure patterns like rate limiting, middleware pipelines, and modular service design to ensure systems remain secure, maintainable, and scalable.</p>
                    <p className="text-stone-500 text-sm leading-relaxed">I build systems that stay invisible to users - but are critical to reliability, performance, and scale.</p>
                </div>
          
                <div className="grid grid-cols-2 gap-8 mt-15">
                    <div>
                        <h4 className="text-orange-500/70 text-[10px] uppercase tracking-widest font-bold mb-4">Backend</h4>
                        <ul className="text-stone-400 text-sm space-y-2 font-mono">
                            <li>Node.js (Express)</li>
                            <li>TypeScript</li>
                            <li>MongoDB</li>
                            <li>REST APIs</li>
                            <li>Authentication Systems</li>
                            <li>Middleware Architecture</li>
                            <li>Rate Limiting</li>
                            <li>Job Scheduling (node-cron)</li>
                            <li>Web Scraping Pipelines</li>
                            <li>LLM-Powered Features</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-orange-500/70 text-[10px] uppercase tracking-widest font-bold mb-4">Frontend</h4>
                        <ul className="text-stone-400 text-sm space-y-2 font-mono">
                            <li>Next.js</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-40">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-white font-extrabold text-3xl tracking-tight">Selected Projects</h2>
                    <div className="h-[1px] flex-grow mx-8 bg-white/5 mb-2 hidden sm:block"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (<div key={i} className="group p-8 rounded-[32px] bg-zinc-900/10 border border-white/[0.08] backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 relative overflow-hidden shadow-2xl shadow-black">
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/0 group-hover:bg-orange-500/10 blur-[40px] transition-all duration-700 rounded-full"/>

                        <h4 className="text-white group-hover:text-white font-bold text-xl mb-3 flex items-center justify-between transition-colors">{project.name}<ArrowUpRight size={18} className="text-stone-600 group-hover:text-orange-400 transition-colors" />
                        </h4>
                        <p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed mb-6 transition-colors">{project.desc}</p>
                
                        <div className="flex gap-5 mb-6">
                            <Link href={project.github} target="_blank" className="flex items-center gap-1.5 text-stone-400 hover:text-orange-400 text-[11px] font-bold uppercase tracking-wider transition-colors"><Github size={14} /> GitHub</Link>

                            <Link href={project.live} target="_blank" className="flex items-center gap-1.5 text-stone-400 hover:text-orange-400 text-[11px] font-bold uppercase tracking-wider transition-colors"><Globe size={14} /> Live Demo</Link>
                        </div>

                        <div className="flex flex-wrap gap-2">{project.stack.map((tech) => (<span key={tech} className="text-[10px] font-mono text-stone-600 border border-stone-800 px-2 py-0.5 rounded">{tech}</span>))}
                        </div>
                    </div>))}
                </div>
            </section>

                <footer className="border-t border-white/5 pt-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div><h3 className="text-white font-bold text-xl mb-2">Let's build systems.</h3>
                            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=prakhargupta089@gmail.com" target="_blank" rel="noopener noreferrer"className="hover:text-stone-400 text-stone-500 text-sm">prakhargupta089@gmail.com</Link>
                        </div>
            
                        <div className="flex gap-8">
                            <Link href="https://github.com/me-prakhargupta/" target="_blank" className="text-stone-500 hover:text-white transition-colors flex items-center justify-center"><Github size={20} /></Link>

                            <Link href="https://www.linkedin.com/in/meprakhargupta/" target="_blank" className="text-stone-500 hover:text-white transition-colors flex items-center justify-center"><Linkedin size={20} /></Link>           
                        </div>
                    </div>
          
                    <div className="mt-20 text-center">
                        <span className="text-stone-700 text-[10px] uppercase tracking-[1em] font-bold">Stay Quiet</span>
                    </div>
                </footer>
            </main>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-10 opacity-[0.02] select-none pointer-events-none"><span className="text-[15vw] font-black tracking-tighter text-white uppercase">Builder</span>
            </div>
        </div>
    );
}
