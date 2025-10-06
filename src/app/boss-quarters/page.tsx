"use client";

import { useRef, useState } from "react";

// Only for client-side rendering (uses window, Chart.js, etc.)
import Script from "next/script";

export default function BossQuarters() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const CORRECT_PASSWORD = "Paul1234!!";
  const appRef = useRef<HTMLDivElement>(null);

  function handleAuth() {
    if (pass === CORRECT_PASSWORD) {
      setAuthed(true);
      setPass("");
      setError("");
      setTimeout(() => {
        appRef.current?.classList.remove("opacity-0");
        appRef.current?.classList.add("opacity-100");
      }, 100);
    } else {
      setError("❌ Incorrect Password. Try again.");
      setPass("");
    }
  }

  return (
    <>
      {/* Tailwind + Chart.js + fonts */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>
        {`
          body { font-family: 'Inter', sans-serif; }
          .chart-container { position: relative; width: 100%; max-width: 400px; margin-left: auto; margin-right: auto; height: 350px; max-height: 400px; }
          .status-btn {
            transition: all 0.15s ease-in-out;
            background-color: #f3f4f6; color: #4b5563; border: 1px solid #d1d5db;
          }
          .status-btn.selected-G { background-color: #10b981; color: white; border-color: #059669; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);}
          .status-btn.selected-F { background-color: #f59e0b; color: white; border-color: #d97706; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);}
          .status-btn.selected-P { background-color: #ef4444; color: white; border-color: #dc2626; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);}
          @media print {
            body * { visibility: hidden; }
            #print-area, #print-area * { visibility: visible; }
            #print-area {
              position: absolute; left: 0; top: 0; width: 100%; z-index: 1000;
              color: #000; background-color: #fff; padding: 0 !important; margin: 0 !important;
            }
            .no-print { display: none; }
            #print-area::after {
              content: '';
              background: url('https://i.postimg.cc/9QydCVGQ/paulstransparent-1.png') center center no-repeat;
              background-size: 60%;
              position: fixed; top: 50%; left: 50%; width: 100vw; height: 100vh;
              transform: translate(-50%, -50%) rotate(-45deg); opacity: 0.05; z-index: -1;
            }
          }
          #password-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(10, 10, 10, 0.95); z-index: 5000;
            display: flex; align-items: center; justify-content: center; color: #fff;
            transition: opacity 0.5s ease-out;
          }
        `}
      </style>

      {!authed && (
        <div id="password-overlay">
          <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">BOSS QUARTERS</h2>
            <p className="text-slate-600 mb-6">Please enter your password to access the Inspection Tool.</p>
            <input
              type="password"
              id="password-input"
              className="w-full p-3 rounded-lg border-2 border-slate-300 focus:border-sky-500 focus:ring-sky-500 text-slate-900 text-lg mb-4"
              placeholder="Password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") handleAuth();
              }}
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              id="password-submit-btn"
              className="w-full bg-sky-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-700 transition-colors"
              onClick={handleAuth}
            >
              Enter
            </button>
          </div>
        </div>
      )}

      <div
        id="app-container"
        ref={appRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 no-print transition-opacity duration-500 ${authed ? "opacity-100" : "opacity-0"}`}
        style={{ pointerEvents: authed ? "auto" : "none" }}
      >
        {/* -- HEADER -- */}
        <header className="pb-8 border-b border-stone-300 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center gap-4">
              <img src="https://i.postimg.cc/9QydCVGQ/paulstransparent-1.png" alt="Paul's Roofing Logo" className="h-16 w-auto" />
              <div>
                <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">Paul's Roofing</h1>
                <p className="text-slate-600 mt-1">Built on Experience, Driven by Dedication.</p>
              </div>
            </div>
            <div className="text-sm text-slate-500 mt-4 sm:mt-0 sm:text-right">
              <p><strong>Paul</strong> | (506) 271-4162</p>
              <p>paul@paulroofs.com | www.paulsroofs.com</p>
            </div>
          </div>
        </header>

        {/* -- The rest of your inspection app HTML -- */}
        <div id="inspection-app-root">
          {/* (Paste your interactive inspection tool markup and scripts here.) */}
          <p>
            <b>Inspection tool interface goes here.</b>
            <br />
            (Paste your interactive inspection tool form, checklist, etc. here. If you want the full conversion to React/JSX with state, let me know!)
          </p>
        </div>
      </div>
    </>
  );
}
