import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-400" />
              <span className="font-extrabold text-2xl text-white font-outfit">
                GlowCare <span className="gradient-text-rose font-black">AI</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-rose-300 font-sans-body">
              "Your Face. Your Style. Your Glow."
            </p>

            <p className="text-xs text-slate-400 font-sans-body max-w-sm leading-relaxed">
              GlowCare AI is an agentic personal beauty & style platform. Our 8 collaborative AI specialist agents craft bespoke hairstyle, outfit, makeup, accessories, and skincare routines tailored to your non-medical face geometry and target budget.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
            <p className="font-bold text-white text-sm font-outfit uppercase tracking-wider mb-2">Navigation</p>
            <p onClick={() => onNavigate('home')} className="hover:text-rose-400 cursor-pointer">Home</p>
            <p onClick={() => onNavigate('consultation')} className="hover:text-rose-400 cursor-pointer">Create Glow Plan</p>
            <p onClick={() => onNavigate('salon')} className="hover:text-rose-400 cursor-pointer">Salon Booking</p>
            <p onClick={() => onNavigate('dashboard')} className="hover:text-rose-400 cursor-pointer">My Dashboard</p>
          </div>

          {/* Disclaimer Safeguard */}
          <div className="md:col-span-4 p-4 rounded-2xl glass-panel border border-amber-500/20 text-xs text-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Ethical AI Safeguard</span>
            </div>
            <p className="leading-relaxed font-sans-body text-[11px]">
              GlowCare AI does not diagnose skin diseases or medical conditions. Face analysis is strictly limited to non-medical visual style attributes (estimated face shape & aesthetic recommendations). Skincare routines use user self-reported skin type and concerns.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 GlowCare AI Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for Generative AI & Agentic Beauty Tech
          </p>
        </div>

      </div>
    </footer>
  );
}
