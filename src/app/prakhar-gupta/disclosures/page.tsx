import Link from "next/link";
import { ShieldAlert, ArrowUpRight, ArrowLeft } from "lucide-react";

export default function DisclosuresPage() {
    const disclosures = [
      {
        title: "Biometric Trust Gap in Android (WhatsApp Case Study)",
        date: "April 2026",
        status: "Public Disclosure",
        severity: "Medium",
        desc: "Identified a security design gap where newly enrolled biometrics inherit trust and can unlock protected apps without detection.",
        link: "/prakhar-gupta/disclosures/biometric-trust-gap"
      }
    ];

    return (
      <div className="bg-black min-h-screen text-white">
        <main className="max-w-5xl mx-auto px-6 pt-24 pb-32">

          <Link href="/prakhar-gupta/" className="text-xs uppercase tracking-widest text-stone-500 hover:text-orange-400 flex items-center gap-2 mb-12">
            <ArrowLeft size={14} /> Return
          </Link>

          <section className="mb-24 max-w-2xl">
            <h2 className="text-stone-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-8">Disclosures</h2>

            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">Security. Systems. <br />
            <span className="text-orange-400 italic font-serif">Transparency.</span>
            </h1>

            <p className="text-stone-400 text-lg leading-relaxed">A record of vulnerabilities discovered, systems analyzed, and
            responsible disclosures made.</p>
          </section>

          <section className="grid gap-8">
            {disclosures.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-[28px] border border-white/10 bg-zinc-900/20 backdrop-blur hover:border-orange-500/40 transition-all"
              >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <ShieldAlert className="text-orange-500/60" size={18} />
              </div>

              <p className="text-[11px] uppercase tracking-widest text-stone-500 mb-4">
                {item.date} • {item.status} • {item.severity}
              </p>

              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <Link
                href={item.link}
                className="text-xs uppercase tracking-wider font-bold text-white hover:text-orange-400 flex items-center gap-2"
              >
                View Case Study
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}