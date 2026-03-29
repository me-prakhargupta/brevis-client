export default function Entry() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes dissolve {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-10px); opacity: 0.01; }
        }

        .root {
          background: #000;
          min-height: 100vh;
          font-family: system-ui, sans-serif;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Backgrounds */
        .glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 52% 55% at 12% 42%, rgba(251,146,60,0.07), transparent 70%);
        }
        .dots {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.2;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0);
          background-size: 40px 40px;
        }

        /* Layout */
        .wrap {
          position: relative; z-index: 10;
          width: 100%; max-width: 960px; margin: 0 auto;
          padding: 80px 32px 64px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        /* Left */
        .eyebrow {
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.5em; color: #57534e;
          margin-bottom: 28px;
          animation: fadeUp 0.7s ease 0.05s both;
        }
        .headline {
          font-size: clamp(44px, 6.5vw, 80px);
          font-weight: 800; letter-spacing: -0.04em;
          line-height: 0.93; color: #fff;
          margin-bottom: 36px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .headline em {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic; font-weight: 400;
          color: rgb(249,115,22); letter-spacing: normal;
        }
        .sub-block {
          max-width: 440px; margin-bottom: 40px;
          animation: fadeUp 0.7s ease 0.35s both;
        }
        .sub-h {
          font-size: 18px; font-weight: 500;
          line-height: 1.4; letter-spacing: -0.01em;
          color: rgba(255,255,255,0.85);
          margin-bottom: 14px;
        }
        .sub-h em { font-family: Georgia, serif; font-style: italic; color: #ffedd5; font-weight: 400; }
        .body-p { font-size: 13px; font-weight: 300; line-height: 1.8; color: #78716c; letter-spacing: 0.01em; }
        .body-p em { color: #a8a29e; font-style: italic; }
        .whisper { font-size: 11px; color: #44403c; font-style: italic; margin-top: 12px; }

        /* CTA */
        .cta-row {
          display: flex; align-items: center;
          gap: 28px; flex-wrap: wrap;
          animation: fadeUp 0.7s ease 0.5s both;
        }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 44px; border-radius: 999px;
          background: #fff; color: #000;
          font-weight: 700; font-size: 15px; border: none; cursor: pointer;
          box-shadow: 0 0 40px rgba(251,146,60,0.12);
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
          text-decoration: none;
        }
        .btn:hover { transform: scale(1.05); box-shadow: 0 0 50px rgba(251,146,60,0.22); }
        .btn:active { transform: scale(0.97); }
        .presence { border-left: 1px solid #1c1917; padding-left: 22px; }
        .presence-label {
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.3em; color: #44403c; margin-bottom: 4px;
        }
        .presence-line {
          font-family: Georgia, serif; font-style: italic;
          color: rgba(249,115,22,0.7); font-size: 11px;
        }

        /* Right */
        .right {
          position: relative;
          display: flex; flex-direction: column;
          align-items: flex-end;
          min-height: 380px; justify-content: center;
        }
        .v-rule {
          position: absolute; left: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(249,115,22,0.18) 30%, rgba(249,115,22,0.18) 70%, transparent);
          animation: fadeIn 1.2s ease 0.8s both;
        }
        .ghost {
          font-size: clamp(56px, 8vw, 96px);
          font-weight: 800; letter-spacing: -0.05em;
          line-height: 1; text-align: right;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.04);
          user-select: none;
          animation: fadeIn 1s ease 0.7s both;
        }
        .dissolve-wrap {
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          display: flex; flex-direction: column; align-items: flex-end; gap: 5px;
          animation: fadeIn 1s ease 0.9s both;
        }
        .dw { font-family: Georgia, serif; font-style: italic; color: #fff; white-space: nowrap; display: block; }
        .dw-1 { font-size: 13px; opacity: 0.5;  animation: dissolve 5s ease-in-out 1.2s infinite alternate; }
        .dw-2 { font-size: 11px; opacity: 0.22; animation: dissolve 5s ease-in-out 2s   infinite alternate; }
        .dw-3 { font-size: 9px;  opacity: 0.08; animation: dissolve 5s ease-in-out 2.8s infinite alternate; }
        .dw-4 { font-size: 7px;  opacity: 0.03; animation: dissolve 5s ease-in-out 3.6s infinite alternate; }
        .corner {
          position: absolute; right: 0; top: 0; width: 16px; height: 16px;
          border-top: 1px solid rgba(249,115,22,0.3);
          border-right: 1px solid rgba(249,115,22,0.3);
          animation: fadeIn 1s ease 1s both;
        }
        .v-label {
          position: absolute; right: -2px; bottom: 0;
          writing-mode: vertical-rl;
          font-size: 8px; font-weight: 900; letter-spacing: 0.9em;
          text-transform: uppercase; color: #1c1917;
          animation: fadeIn 1.4s ease 1.2s both;
        }
      `}</style>

      <div className="root">
        <div className="glow" />
        <div className="dots" />

        <div className="wrap">

          {/* LEFT */}
          <div>
            <p className="eyebrow">A space for internal release</p>

            <h1 className="headline">
              Not <em>everything</em> needs to
              <br />be carried.
            </h1>

            <div className="sub-block">
              <h2 className="sub-h">
                Some thoughts were never meant to be <em>kept.</em>
              </h2>
              <p className="body-p">
                This is a final destination for the words you've been repeating
                in your head. Put them down here, and{" "}
                <em>leave the room a little lighter.</em>
              </p>
              <p className="whisper">
                What is released no longer asks to be remembered.
              </p>
            </div>

            <div className="cta-row">
              <a href="/choose" className="btn">Begin</a>
              <div className="presence">
                <p className="presence-label">Presence</p>
                <p className="presence-line">The air is clear for you.</p>
              </div>
            </div>
          </div>

          {/* RIGHT — atmosphere only */}
          <div className="right">
            <div className="v-rule" />
            <div className="corner" />

            <p className="ghost" aria-hidden>RELEASE</p>

            <div className="dissolve-wrap" aria-hidden>
              <span className="dw dw-1">it was never yours to keep</span>
              <span className="dw dw-2">it was never yours to keep</span>
              <span className="dw dw-3">it was never yours to keep</span>
              <span className="dw dw-4">it was never yours to keep</span>
            </div>

            <p className="v-label" aria-hidden>THE UNBURDENING</p>
          </div>

        </div>
      </div>
    </>
  );
}
