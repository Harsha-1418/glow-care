import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, activePlan }) {
  const budgetInfo = activePlan?.budgetBreakdown;

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-600 to-amber-400 p-0.5 shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-tight text-white font-outfit">
                GlowCare <span className="gradient-text-rose font-black">AI</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                Agentic V2.4
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium font-sans-body hidden sm:block">
              Your Face. Your Style. Your Glow.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setCurrentTab('home')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              currentTab === 'home'
                ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => setCurrentTab('consultation')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'consultation'
                ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Create Glow Plan
          </button>

          {activePlan && (
            <button
              onClick={() => setCurrentTab('glow-plan')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all relative ${
                currentTab === 'glow-plan'
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              My Glow Plan
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-400 rounded-full animate-ping" />
            </button>
          )}

          <button
            onClick={() => setCurrentTab('salon')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
              currentTab === 'salon'
                ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Calendar className="w-4 h-4 text-purple-300" />
            Salon Booking
          </button>

          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              currentTab === 'dashboard'
                ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Dashboard
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {budgetInfo && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-xs">
              <span className="text-slate-400">Budget:</span>
              <span className="font-bold text-white">₹{budgetInfo.targetBudget}</span>
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                ₹{budgetInfo.remaining} left
              </span>
            </div>
          )}

          <button
            onClick={() => setCurrentTab('consultation')}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white gradient-btn-primary flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">✨ Create Glow Plan</span>
            <span className="sm:hidden">Start</span>
          </button>
        </div>

      </div>
    </header>
  );
}
