import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Scissors, Sparkle, CheckCircle2 } from 'lucide-react';
import { SAMPLE_SELFIES } from '../data/mockData';

export default function Hero({ onStartConsultation, onLoadDemoPreset, onExploreServices }) {
  const collegeDemo = SAMPLE_SELFIES.find(s => s.id === 'demo-college');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Glowing Ambient Orbs */}
      <div className="glow-orb w-96 h-96 bg-rose-600/20 top-10 left-1/4 -translate-x-1/2" />
      <div className="glow-orb w-[30rem] h-[30rem] bg-purple-600/20 top-40 right-10" />
      <div className="glow-orb w-80 h-80 bg-amber-500/15 bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold shadow-lg shadow-rose-950/40">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Your Face. Your Style. Your Glow.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-outfit leading-[1.1]">
              Meet Your Personal <br />
              <span className="gradient-text-rose font-black">AI Beauty & Style Agent</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal font-sans-body max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Upload your selfie, tell us your occasion and budget, and let our multi-agent AI create a personalized look tailored to your face geometry, skin profile, and style preferences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-white gradient-btn-primary flex items-center justify-center gap-3 shadow-xl shadow-rose-600/30 hover:scale-105 transition-all"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>✨ Create My Glow Plan</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-base text-slate-200 glass-card hover:bg-white/10 flex items-center justify-center gap-2 border border-white/20 transition-all"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Quick Demo Preset Launcher */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Instant Demo Scenarios (One-Click Launch):
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <button
                  onClick={() => onLoadDemoPreset(collegeDemo)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-2 transition-all"
                >
                  <img src={collegeDemo.avatar} className="w-5 h-5 rounded-full object-cover" alt="College Demo" />
                  <span>🎓 College Farewell (₹2,000)</span>
                </button>
                
                <button
                  onClick={() => onLoadDemoPreset(SAMPLE_SELFIES[1])}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-2 transition-all"
                >
                  <img src={SAMPLE_SELFIES[1].avatar} className="w-5 h-5 rounded-full object-cover" alt="Interview Demo" />
                  <span>💼 Job Interview (₹1,000)</span>
                </button>

                <button
                  onClick={() => onLoadDemoPreset(SAMPLE_SELFIES[2])}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-2 transition-all"
                >
                  <img src={SAMPLE_SELFIES[2].avatar} className="w-5 h-5 rounded-full object-cover" alt="Wedding Demo" />
                  <span>👑 Wedding Glam (₹5,000)</span>
                </button>
              </div>
            </div>

            {/* Security & Non-Medical Assurance */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Non-Medical Visual Analysis Only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" />
                Self-Reported Skin Profiling
              </span>
            </div>

          </div>

          {/* Right Column: Visual Interactive Beauty Tech Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Glass Card */}
              <div className="glass-card rounded-3xl p-6 border border-white/20 shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-purple-600/0 rounded-bl-full pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                      Live AI Face Analysis
                    </span>
                  </div>
                  <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                    Oval Face • 98% Fit
                  </span>
                </div>

                {/* Demo Selfie Visual Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 mb-4 group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="AI Face Scan Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Facial Landmark HUD Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                  
                  {/* Scanning HUD Grid & Line */}
                  <div className="scan-line" />

                  {/* Face Mesh Dots */}
                  <div className="absolute top-[35%] left-[38%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  <div className="absolute top-[35%] right-[38%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  <div className="absolute top-[55%] left-[48%] w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#f43f5e]" />
                  <div className="absolute top-[68%] left-[42%] w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />

                  {/* Geometric Frame Overlay */}
                  <div className="absolute top-[20%] left-[28%] right-[28%] bottom-[20%] border-2 border-dashed border-rose-400/50 rounded-full animate-pulse" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                    <span className="text-slate-300 font-medium">Attribute: Layered Waves</span>
                    <span className="text-amber-300 font-bold">₹2,000 Plan</span>
                  </div>
                </div>

                {/* Agent Recommendations Preview Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <span className="text-rose-400 font-semibold block flex items-center gap-1">
                      <Scissors className="w-3.5 h-3.5" /> Hair Cut
                    </span>
                    <p className="text-slate-300 font-medium text-[11px] truncate">Collarbone Layered Cut</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <span className="text-purple-400 font-semibold block flex items-center gap-1">
                      <Sparkle className="w-3.5 h-3.5" /> Outfit Vibe
                    </span>
                    <p className="text-slate-300 font-medium text-[11px] truncate">Pastel Blazer Casual</p>
                  </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>8 Specialist Agents</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Budget Optimized
                  </span>
                </div>

              </div>

              {/* Floating Decorative Pill */}
              <div className="absolute -bottom-6 -left-6 glass-card p-3 rounded-2xl border border-rose-500/30 flex items-center gap-3 shadow-xl z-20 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 font-bold text-lg">
                  ✨
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Glow Plan Ready</p>
                  <p className="text-[11px] text-slate-400">Hair + Makeup + Skincare</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
