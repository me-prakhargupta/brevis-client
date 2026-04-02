import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function BiometricGapDisclosure() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="max-w-3xl mx-auto px-6 pt-24 pb-32">

        <Link href="/prakhar-gupta/disclosures" className="text-xs uppercase tracking-widest text-stone-500 hover:text-orange-400 flex items-center gap-2 mb-12">
          <ArrowLeft size={14} /> Return to Disclosures
        </Link>

        <section className="mb-16">
          <h2 className="text-stone-500 text-[10px] uppercase tracking-[0.5em] mb-6">
            Security Disclosure
          </h2>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
            When the Lock Works, <br />
            <span className="text-orange-400 italic font-serif">
              But the Key Is Shared
            </span>
          </h1>

          <p className="text-stone-400 text-sm leading-relaxed">
            A security design gap in app-level biometric authentication on Android.
          </p>

          <div className="mt-6 text-[11px] uppercase tracking-widest text-stone-500">
            April 2026 • Security Research • Design Insight
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <ShieldAlert size={16} className="text-orange-500/70" />
            Summary
          </h3>

          <p className="text-stone-400 text-sm leading-relaxed">
            Identified a security design gap in how Android's biometric trust model is inherited by applications using system-level authentication APIs. When a device PIN is known, new biometrics can be enrolled and used to unlock apps protected by biometric authentication - without detection, notification, or traceability.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">
            Attack Scenario
          </h3>

          <ul className="text-stone-400 text-sm space-y-3 leading-relaxed">
            <li>- Attacker knows device PIN</li>
            <li>- Unlocks device and enrolls new fingerprint</li>
            <li>- Opens any biometric-protected app</li>
            <li>- Authenticates using newly added fingerprint</li>
            <li>- Gains full access to app data</li>
            <li>- Removes fingerprint to erase traces</li>
          </ul>

          <p className="text-stone-500 text-xs mt-4">
            Total time required: under 2 minutes
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">
            A Story to Make It Real
          </h3>

          <div className="border border-stone-800 rounded-lg p-6 space-y-4">
            <p className="text-stone-400 text-sm leading-relaxed">
              Riya and Arjun are in a relationship. Arjun knows Riya's phone PIN - she gave it to him months ago so he could check directions while she drove. Riya has WhatsApp biometric lock enabled. She feels safe knowing no one can open her chats without her fingerprint.
            </p>

            <p className="text-stone-400 text-sm leading-relaxed">
              One evening, Riya leaves her phone on the table and steps out for 
              ten minutes. Arjun picks it up.
            </p>

            <ol className="text-stone-400 text-sm space-y-2 leading-relaxed list-none">
              <li>
                <span className="text-stone-600 mr-2">01</span>
                He unlocks the phone with the PIN.
              </li>
              <li>
                <span className="text-stone-600 mr-2">02</span>
                Goes to <span className="text-stone-300">Settings → Fingerprints</span> and adds his own fingerprint.
              </li>

              <li>
                <span className="text-stone-600 mr-2">03</span>
                Android asks for the PIN to confirm - he already knows it.
              </li>
              <li>
                <span className="text-stone-600 mr-2">04</span>
                Opens WhatsApp. The biometric prompt appears. He scans his finger.
              </li>
              <li>
                <span className="text-stone-600 mr-2">05</span>
                WhatsApp unlocks instantly. He reads everything - chats, photos, voice notes.
              </li>
              <li>
                <span className="text-stone-600 mr-2">06</span>
                Goes back to Settings. Removes his fingerprint. Places the phone back.
              </li>
            </ol>

            <p className="text-stone-400 text-sm leading-relaxed">
              Riya returns. Her phone looks exactly as she left it. WhatsApp shows 
              no new session, no login alert, no trace of what just happened.
            </p>

            <p className="text-stone-500 text-xs leading-relaxed pt-2 border-t border-stone-800">
              WhatsApp did nothing wrong here - it verified a valid biometric and unlocked. Android did nothing wrong - it required the PIN before enrolling a new fingerprint. Both systems worked exactly as designed. And yet, Riya's private conversations were accessed without her knowledge.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">
            Real-World Example
          </h3>

          <p className="text-stone-400 text-sm leading-relaxed">
            This behavior was observed in apps like WhatsApp, which rely on Android's BiometricPrompt API. The app correctly verifies biometric authentication, but cannot detect whether the biometric environment has changed.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">
            Root Cause
          </h3>

          <p className="text-stone-400 text-sm leading-relaxed">
            Android treats biometrics as delegates of the device credential (PIN/password).
            Any biometric enrolled using the device PIN is trusted by the OS.

            Apps using system APIs inherit this trust model but lack visibility into:
          </p>

          <ul className="text-stone-400 text-sm mt-4 space-y-2">
            <li>- Biometric enrollment changes</li>
            <li>- Number of enrolled biometrics</li>
            <li>- Identity of biometric used</li>
          </ul>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">
            Impact
          </h3>

          <p className="text-stone-400 text-sm leading-relaxed">
            This creates a silent insider threat scenario where authentication is not bypassed, 
            but legitimately used in unintended ways.

            Affected users include:
          </p>

          <ul className="text-stone-400 text-sm mt-4 space-y-2">
            <li>- Shared device environments</li>
            <li>- Known PIN scenarios</li>
            <li>- High-trust personal relationships</li>
          </ul>
        </section>

        <section className="mb-16">
          <h3 className="text-white font-semibold text-lg mb-4">
            Proposed Mitigation
          </h3>

          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            Apps should implement biometric integrity checks using Android KeyStore:
          </p>

          <ul className="text-stone-400 text-sm space-y-2">
            <li>- Detect biometric changes via key invalidation</li>
            <li>- Disable biometric unlock on change</li>
            <li>- Require re-authentication (OTP/PIN)</li>
            <li>- Notify users of security changes</li>
            <li>- Maintain a minimal security activity log</li>
          </ul>
        </section>

        <section>
          <p className="text-stone-600 text-xs leading-relaxed">
            This research highlights a design gap between OS-level trust assumptions 
            and application-level security expectations. It is shared as a system-level 
            security insight, not a vulnerability claim against any specific application.
          </p>
        </section>
      </main>
    </div>
  );
}