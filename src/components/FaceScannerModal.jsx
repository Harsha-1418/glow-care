import React, { useState, useEffect } from 'react';
import { Sparkles, Bot, ShieldAlert } from 'lucide-react';

export default function FaceScannerModal({ userProfile, onScanComplete }) {
  const [progress, setProgress] = useState(0);

  const scanSteps = [
    { title: 'Face Geometry & Proportions', agent: 'Style Agent', detail: 'Detecting facial contours, jawline ratio, forehead width...' },
    { title: 'Hairstyle & Volume Mapping', agent: 'Hair Agent', detail: 'Matching oval & square facial symmetry to collarbone layers...' },
    { title: 'Fashion & Color Palette', agent: 'Fashion Agent', detail: `Extracting ${userProfile.occasion} occasion vibe & color swatches...` },
    { title: 'Makeup Finish & Tones', agent: 'Makeup Agent', detail: `Formulating ${userProfile.style} makeup aesthetic...` },
    { title: 'Skincare Profile Routine', agent: 'Skincare Agent', detail: `Structuring non-medical routine for self-reported ${userProfile.skinType} skin...` },
    { title: 'Budget Balancing', agent: 'Budget Agent', detail: `Ensuring total product basket fits within ₹${userProfile.budget}...` }
  ];

  useEffect(() => {
    // Animate progress bar over 3.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onScanComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onScanComplete]);

  const currentStep = Math.min(
    Math.floor((progress / 100) * scanSteps.length),
    scanSteps.length - 1
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fade-in">
      <div className="max-w-2xl w-full glass-card p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden text-center space-y-6">
        
        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 text-xs font-semibold uppercase tracking-widest mx-auto">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          Agentic Multi-Agent Pipeline Execution
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-outfit">
          Analyzing Your <span className="gradient-text-rose">Style Profile...</span>
        </h2>

        {/* Live Selfie Scanner Frame */}
        <div className="relative w-56 h-56 mx-auto rounded-3xl overflow-hidden border-2 border-rose-500/50 shadow-2xl group">
          <img
            src={userProfile.image}
            alt="Scanning Face"
            className="w-full h-full object-cover"
          />
          
          {/* Laser Scan Line */}
          <div className="scan-line" />

          {/* HUD Overlay Mesh */}
          <div className="absolute inset-0 pulse-grid opacity-30 pointer-events-none" />

          {/* Facial Landmark Target Crosshairs */}
          <div className="absolute top-[32%] left-[40%] w-3 h-3 rounded-full border border-cyan-400 animate-ping" />
          <div className="absolute top-[32%] right-[40%] w-3 h-3 rounded-full border border-cyan-400 animate-ping" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-[52%] left-[48%] w-3 h-3 rounded-full border border-rose-400 animate-ping" style={{ animationDelay: '0.6s' }} />
          <div className="absolute top-[68%] left-[42%] right-[42%] h-1 bg-amber-400/80 rounded-full animate-pulse" />

          <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md py-1 px-2 rounded-xl text-[10px] font-mono text-cyan-300 border border-white/10">
            Scanning: {progress}% Complete
          </div>
        </div>

        {/* Current Active Agent Status */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 max-w-md mx-auto space-y-2 text-left">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-purple-400" />
              {scanSteps[currentStep].agent}
            </span>
            <span className="text-slate-400 font-mono">{currentStep + 1} / {scanSteps.length}</span>
          </div>

          <p className="text-sm font-bold text-white font-outfit">
            {scanSteps[currentStep].title}
          </p>

          <p className="text-xs text-slate-400 font-sans-body">
            {scanSteps[currentStep].detail}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-white/10 relative max-w-md mx-auto">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-purple-500 to-emerald-400 transition-all duration-150 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Non-Medical Disclaimer Banner */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Restricted to non-medical visual attributes (Face shape & style compatibility).</span>
        </div>

      </div>
    </div>
  );
}
