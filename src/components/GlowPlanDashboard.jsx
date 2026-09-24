import React, { useState } from 'react';
import { Sparkles, Scissors, Shirt, Sparkle, DollarSign, Calendar, CheckCircle2, RefreshCw, ShoppingBag, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GlowPlanDashboard({ glowPlan, onOptimizeGlow, onOpenSalonBooking }) {
  const [optimizationMessage, setOptimizationMessage] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const { userProfile, glowScore, faceAnalysis, hair, fashion, makeup, skincare, products, budgetBreakdown } = glowPlan;

  const handleOptimizeClick = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      onOptimizeGlow();
      setIsOptimizing(false);
      
      // Trigger subtle celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });

      setOptimizationMessage(
        "✨ GlowCare AI re-balanced your plan! Replaced premium products with top-rated budget alternatives to keep your overall style while optimizing remaining savings."
      );
    }, 1200);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 animate-fade-in">
      
      {/* GLOW PLAN HERO BANNER */}
      <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/20 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 shadow-2xl">
        <div className="glow-orb w-80 h-80 bg-rose-600/20 -top-20 -right-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                AI Generated Personal Plan
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-widest">
                {userProfile.occasion} • {userProfile.style}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit tracking-tight">
              ✨ YOUR <span className="gradient-text-rose">GLOW PLAN</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-sans-body max-w-2xl">
              Curated specifically for your estimated <strong className="text-rose-400 font-bold">{faceAnalysis.shape} face shape</strong>, {userProfile.skinType} skin profile, and <strong className="text-emerald-400 font-bold">₹{userProfile.budget}</strong> budget ceiling.
            </p>
          </div>

          {/* Glow Score & Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
            
            <div className="p-4 rounded-2xl glass-panel border border-rose-500/30 text-center flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg">
                {glowScore}%
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Style Harmony Index</p>
                <p className="text-xs text-emerald-400 font-bold">Optimal Visual Balance</p>
              </div>
            </div>

            {/* Optimize My Glow Button */}
            <button
              onClick={handleOptimizeClick}
              disabled={isOptimizing}
              className="px-6 py-4 rounded-2xl font-bold text-white gradient-btn-primary flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-105 transition-all shrink-0"
            >
              <RefreshCw className={`w-5 h-5 text-amber-300 ${isOptimizing ? 'animate-spin' : ''}`} />
              <span>{isOptimizing ? 'Re-balancing...' : '✨ Optimize My Glow'}</span>
            </button>

          </div>

        </div>

        {/* Dynamic Optimization Notice Message */}
        {optimizationMessage && (
          <div className="mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm font-medium flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
            <span>{optimizationMessage}</span>
          </div>
        )}

      </div>

      {/* DETAILED RECOMMENDATION CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* CARD 1: FACE & STYLE PROFILE */}
        <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> 1. Face & Style
              </span>
              <span className="text-xs bg-slate-900 px-2.5 py-1 rounded-full text-slate-300 border border-white/10 font-bold">
                {faceAnalysis.shape} Shape
              </span>
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Estimated Face Shape</p>
              <h3 className="text-2xl font-bold text-white font-outfit mt-0.5">
                {faceAnalysis.shape} Symmetry
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-300">Style Profile & Recommendations:</p>
              <ul className="space-y-1.5 text-xs text-slate-300 font-sans-body">
                {faceAnalysis.attributes.map((attr, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <p className="text-[11px] font-bold text-rose-300 uppercase tracking-wider">Suggested Frames / Accessories:</p>
              <p className="text-xs text-slate-200">{faceAnalysis.frameStyle}</p>
            </div>
          </div>
        </div>

        {/* CARD 2: HAIR & HAIRSTYLING */}
        <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Scissors className="w-4 h-4" /> 2. Hair Agent
              </span>
              <span className="text-xs bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full border border-purple-500/20 font-bold">
                Occasion Fit
              </span>
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Recommended Hairstyle</p>
              <h3 className="text-xl font-bold text-white font-outfit mt-0.5">
                {hair.cut}
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-300">Why it matches your face & occasion:</p>
              <p className="text-xs text-slate-300 font-sans-body leading-relaxed bg-slate-900/60 p-3 rounded-2xl border border-white/5">
                "{hair.reason}"
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenSalonBooking('Hair Styling')}
            className="w-full py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Hair Styling Salon Service
          </button>
        </div>

        {/* CARD 3: OUTFIT & ACCESSORIES */}
        <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Shirt className="w-4 h-4" /> 3. Fashion Agent
              </span>
              <span className="text-xs bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold">
                {userProfile.style} Vibe
              </span>
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Recommended Outfit</p>
              <h3 className="text-base font-bold text-white font-outfit mt-0.5">
                {fashion.outfit}
              </h3>
            </div>

            {/* Color Palette Swatches */}
            <div>
              <p className="text-xs font-semibold text-slate-300 mb-2">Suggested Color Harmony Palette:</p>
              <div className="flex items-center gap-2">
                {fashion.palette.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-xl border border-white/20 shadow-md transform hover:scale-110 transition-transform relative group"
                    style={{ backgroundColor: color }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-slate-900 px-1.5 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-300">Accessories Pairing:</p>
              <p className="text-xs text-slate-400 font-sans-body">{fashion.accessories}</p>
            </div>
          </div>
        </div>

        {/* CARD 4: MAKEUP LOOK */}
        <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkle className="w-4 h-4" /> 4. Makeup Agent
              </span>
              <span className="text-xs bg-pink-500/10 text-pink-300 px-2.5 py-1 rounded-full border border-pink-500/20 font-bold">
                {userProfile.occasion} Look
              </span>
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Recommended Look</p>
              <h3 className="text-lg font-bold text-white font-outfit mt-0.5">
                {makeup.styleName}
              </h3>
            </div>

            <p className="text-xs text-slate-300 font-sans-body leading-relaxed bg-slate-900/60 p-3 rounded-2xl border border-white/5">
              "{makeup.description}"
            </p>
          </div>

          <button
            onClick={() => onOpenSalonBooking('Makeup')}
            className="w-full py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" /> Book HD Makeup Appointment
          </button>
        </div>

        {/* CARD 5: SKINCARE ROUTINE (NON-MEDICAL) */}
        <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-4 col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 5. Skincare Agent (Self-Reported {userProfile.skinType} Skin)
            </span>
            <span className="text-xs bg-teal-500/10 text-teal-300 px-2.5 py-1 rounded-full border border-teal-500/20 font-bold">
              Non-Medical Routine
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Morning Routine */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                ☀️ Morning Routine
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans-body">
                {skincare.morning}
              </p>
            </div>

            {/* Evening Routine */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                🌙 Evening Routine
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans-body">
                {skincare.evening}
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* CURATED BEAUTY PRODUCTS & BUDGET BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* Left Column: Product Basket Cards (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white font-outfit flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-rose-400" />
                Curated Product Recommendations
              </h2>
              <p className="text-xs text-slate-400">
                Selected to fulfill your hair, makeup, skincare, and accessory requirements within your budget limit.
              </p>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="glass-card p-5 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:border-rose-500/30 transition-all"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 border border-white/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <span className="absolute top-2 left-2 text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                      {item.category}
                    </span>
                    {item.isOptimizedDupe && (
                      <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500 text-slate-950 shadow-md">
                        Dupe Value Saved!
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white font-outfit line-clamp-1">
                    {item.name}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {item.whySelected}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-white">₹{item.price}</p>
                    {item.originalPrice && (
                      <p className="text-[10px] text-slate-500 line-through">₹{item.originalPrice}</p>
                    )}
                  </div>
                  <span className="text-xs text-rose-400 font-semibold bg-rose-500/10 px-2.5 py-1 rounded-xl border border-rose-500/20">
                    Budget Impact: {Math.round((item.price / userProfile.budget) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Budget Breakdown Widget (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-emerald-500/30 bg-slate-900/90 shadow-2xl space-y-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                Budget Breakdown
              </h3>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                Target: ₹{userProfile.budget}
              </span>
            </div>

            {/* Price Table */}
            <div className="space-y-3 text-sm font-sans-body">
              <div className="flex justify-between text-slate-300">
                <span>Haircare Products</span>
                <span className="font-semibold text-white">₹{budgetBreakdown.hair}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Makeup Cosmetics</span>
                <span className="font-semibold text-white">₹{budgetBreakdown.makeup}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Skincare Essentials</span>
                <span className="font-semibold text-white">₹{budgetBreakdown.skincare}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Accessories & Frames</span>
                <span className="font-semibold text-white">₹{budgetBreakdown.accessories}</span>
              </div>

              <div className="pt-4 border-t border-white/15 flex justify-between items-center text-base font-bold text-white">
                <span>Total Recommendation Cost</span>
                <span className="text-xl gradient-text-rose font-black">₹{budgetBreakdown.total}</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs text-emerald-300">
                <span>Remaining Budget Balance:</span>
                <span className="font-extrabold text-sm text-emerald-400">₹{budgetBreakdown.remaining}</span>
              </div>
            </div>

            {/* Book Salon CTA */}
            <button
              onClick={() => onOpenSalonBooking('Full Package')}
              className="w-full py-4 rounded-2xl font-bold text-white gradient-btn-primary flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Salon Experience</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
