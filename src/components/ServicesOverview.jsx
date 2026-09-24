import React from 'react';
import { SPECIALIST_AGENTS } from '../data/mockData';
import { Bot, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function ServicesOverview({ onStartConsultation }) {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold uppercase tracking-widest">
            <Bot className="w-3.5 h-3.5" />
            Agentic AI Workflow Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit tracking-tight">
            Powered by 8 Specialist <br />
            <span className="gradient-text-rose">Collaborative AI Agents</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-sans-body">
            Unlike static chatbots, GlowCare AI deploys autonomous logical agents. Each specialist analyzes a distinct aspect of your selfie & style profile, then collaborates to curate your balanced Glow Plan.
          </p>
        </div>

        {/* 8 Agent Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIST_AGENTS.map((agent, index) => (
            <div
              key={agent.id}
              className="glass-card p-6 rounded-3xl relative group overflow-hidden border border-white/10 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Agent Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/15 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {agent.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">
                    Agent 0{index + 1}
                  </span>
                </div>

                {/* Agent Name */}
                <h3 className="text-xl font-bold text-white font-outfit group-hover:text-rose-300 transition-colors">
                  {agent.name}
                </h3>

                {/* Agent Description */}
                <p className="text-xs text-slate-400 font-sans-body leading-relaxed">
                  {agent.description}
                </p>
              </div>

              {/* Status Pill */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active Engine
                </span>
                <span className="text-slate-500">v2.4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Non-medical Disclaimer Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-amber-500/20 bg-amber-950/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-200">Ethical AI & Non-Medical Safeguard</h4>
              <p className="text-xs text-amber-100/70 font-sans-body">
                Face analysis is restricted to non-medical visual attributes (estimated face shape & style compatibility). Skincare routines use user self-reported skin type and concerns. We do not diagnose skin medical conditions or infer sensitive demographics.
              </p>
            </div>
          </div>

          <button
            onClick={onStartConsultation}
            className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold text-white gradient-btn-primary flex items-center gap-2"
          >
            <span>Launch Analysis</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
