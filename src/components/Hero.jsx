import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Sparkles, 
  Database,
  Terminal,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium backdrop-blur-md animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Available for High-Impact Full-Stack & Frontend Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                Building scalable <br className="hidden sm:inline" />
                <span className="gradient-text-teal">ERP systems</span> & <br className="hidden sm:inline" />
                modern web apps.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl">
                Hi, I'm <span className="text-white font-semibold underline decoration-teal-400/50 underline-offset-4">{personalInfo.name}</span> — a Frontend Team Lead & Full Stack Developer with hands-on experience leading engineering teams and building enterprise ERP platforms in React.js, Angular, Next.js, and Node.js.
              </p>
            </div>

            {/* Narrative summary based on CV */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Currently leading a frontend team of 6 engineers at Exouzia. Specialized in engineering end-to-end ERP modules (Sales, Billing, Inventory, HR, Reporting), designing reactive user interfaces, and managing real-time data integrity via secure RESTful APIs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 text-slate-950 font-semibold text-sm hover:from-teal-400 hover:to-teal-300 transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95 group"
              >
                <span>View Enterprise Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-100 border border-slate-700 text-slate-200 font-semibold text-sm hover:text-white hover:border-teal-500/40 hover:bg-surface-50 transition-all shadow-sm group"
              >
                <FileText className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>View CV / Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Contact & Verification Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{personalInfo.location}</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-teal-300 transition"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-1.5 hover:text-teal-300 transition"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>{personalInfo.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Large Portrait & Architecture Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background glowing aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/25 via-indigo-500/20 to-teal-400/20 rounded-3xl blur-3xl transform rotate-2 scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[420px] glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              
              {/* Top Accent Window Header */}
              <div className="px-5 py-3 bg-surface-200/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">anzil-ak.dev</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Lead Developer</span>
                </div>
              </div>

              {/* Large Image Frame */}
              <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-surface-300 via-surface-200 to-surface-100 overflow-hidden">
                <img
                  src={personalInfo.avatar || "/profile.jpeg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle vignette / gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-300 via-transparent to-black/20" />

                {/* Floating Badge Top Left with Float Animation */}
                <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-surface-100/90 border border-slate-700/80 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 animate-float">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-white">Team Lead @ Exouzia</span>
                </div>

                {/* Floating Badge Top Right with Delayed Float Animation */}
                <div className="absolute top-4 right-4 z-20 backdrop-blur-md bg-surface-100/90 border border-teal-500/30 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 text-teal-300 text-xs font-mono font-medium animate-float-delayed">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>6+ Devs Led</span>
                </div>

                {/* Bottom Overlay Info Banner inside the Photo */}
                <div className="absolute bottom-3 inset-x-3 z-20 p-4 rounded-2xl backdrop-blur-xl bg-surface-100/95 border border-slate-700/80 shadow-xl space-y-2 transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display flex items-center gap-1.5">
                        {personalInfo.name}
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">Frontend Team Lead & Full Stack Dev</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 px-2 py-1 rounded-lg border border-teal-500/20">
                        3+ Yrs Exp
                      </span>
                    </div>
                  </div>

                  {/* Skills Mini Pill Bar */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["React.js", "Next.js", "Angular", "Node.js", "ERP Suite"].map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-200 text-slate-300 border border-slate-700 hover:border-teal-400 hover:text-teal-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Quick Metrics Bar */}
              <div className="p-3 bg-surface-200/95 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-surface-100/70 border border-slate-800">
                  <div className="text-sm font-bold text-teal-400 font-display">3+ Yrs</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Experience</div>
                </div>
                <div className="p-2 rounded-xl bg-surface-100/70 border border-slate-800">
                  <div className="text-sm font-bold text-indigo-400 font-display">6+ Devs</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Leadership</div>
                </div>
                <div className="p-2 rounded-xl bg-surface-100/70 border border-slate-800">
                  <div className="text-sm font-bold text-cyan-400 font-display">ERP & Web</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Architect</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Quick Stats Row */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-surface-100/40 border border-slate-800/80 hover:border-teal-500/30 transition-all group">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-teal-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-teal-400 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
