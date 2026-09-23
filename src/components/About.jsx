import React from 'react';
import { 
  UserCheck, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Monitor, 
  GraduationCap, 
  CheckCircle,
  FileText,
  Mail
} from 'lucide-react';
import { personalInfo, engineeringPrinciples, educationData } from '../data/portfolioData';

const iconMap = {
  layers: Layers,
  shield: ShieldCheck,
  zap: Zap,
  monitor: Monitor,
};

export default function About({ onOpenResume }) {
  const edu = educationData[0];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Architecting modern frontends for <br className="hidden sm:inline" />
            <span className="gradient-text-teal">complex enterprise operations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging robust backend APIs with responsive, pixel-perfect user experiences that drive efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Prominent Portrait Showcase & Academic Background */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dedicated Large Portrait Showcase Card */}
            <div className="glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-indigo-500/10 to-transparent pointer-events-none" />
              
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-300">
                <img
                  src={personalInfo.avatar || "/profile.jpeg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-300 via-transparent to-black/30" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-slate-900/85 border border-teal-500/30 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
                  </span>
                  <span className="text-xs font-semibold text-white">Frontend Team Lead</span>
                </div>

                {/* Bottom Overlay Card inside Image */}
                <div className="absolute bottom-3 inset-x-3 z-20 p-4 rounded-2xl backdrop-blur-xl bg-surface-200/90 border border-slate-700/80 shadow-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white font-display">
                      {personalInfo.name}
                    </h3>
                    <span className="text-[11px] font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      Exouzia Lead
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Palakkad, Kerala • Leading 6 Frontend Engineers
                  </p>
                </div>
              </div>

              {/* Action Buttons underneath Photo */}
              <div className="p-4 bg-surface-200/95 border-t border-slate-800 flex flex-wrap gap-2.5">
                <button
                  onClick={onOpenResume}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-semibold text-xs hover:bg-teal-400 transition shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-100 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-surface-50 hover:text-white transition"
                >
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* Academic Card */}
            <div className="p-6 rounded-2xl bg-surface-100/60 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {edu.institution} • {edu.location}
                </p>
                <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                  Solid foundation in data structures, relational database schemas, web engineering paradigms, and algorithmic problem solving.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative / Bio & Engineering Principles */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  Engineering Leadership & Full-Stack Craftsmanship
                </h3>
                <p className="text-xs font-semibold text-teal-300">
                  Leading High-Performing Teams • Architecting Robust Enterprise Systems
                </p>
              </div>
              
              <p>
                I am a passionate <strong className="text-white">Frontend Team Lead & Full Stack Developer</strong> based in Palakkad, Kerala. Currently serving as Frontend Team Lead at <strong className="text-white">Exouzia</strong> leading a team of 6 engineers, I specialize in crafting high-performance, modular enterprise web platforms and ERP applications with <strong className="text-teal-300">React.js</strong>, <strong className="text-teal-300">Next.js</strong>, <strong className="text-teal-300">Angular</strong>, and <strong className="text-teal-300">Node.js</strong>.
              </p>

              <p>
                Throughout my journey at <strong className="text-white">Exouzia</strong> and <strong className="text-white">Luminar Technolab</strong>, I have focused on solving real business bottlenecks—modernizing complex sales, billing, inventory, and HR workflows. In my lead role, I guide architectural standards, conduct code reviews, and drive agile delivery while keeping high standards for data integrity and secure REST API integrations.
              </p>

              <p>
                I combine strong computational foundations from my <strong className="text-white">B.Sc. in Computer Science</strong> with practical agile teamwork, structured state management (Redux Toolkit), and full-stack integration across PostgreSQL and MongoDB.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-surface-200/70 border border-slate-800 text-center">
                  <div className="text-base font-bold text-teal-400 font-display">6 Devs</div>
                  <div className="text-[10px] text-slate-400 uppercase">Team Leadership</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/70 border border-slate-800 text-center">
                  <div className="text-base font-bold text-indigo-400 font-display">ERP & Web</div>
                  <div className="text-[10px] text-slate-400 uppercase">Specialization</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/70 border border-slate-800 text-center col-span-2 sm:col-span-1">
                  <div className="text-base font-bold text-cyan-400 font-display">B.Sc. CS</div>
                  <div className="text-[10px] text-slate-400 uppercase">Computer Science</div>
                </div>
              </div>
            </div>

            {/* Core Engineering Focus Header & Cards */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-teal-400 font-semibold px-1">
                Core Engineering Focus
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {engineeringPrinciples.map((principle, idx) => {
                  const Icon = iconMap[principle.icon] || CheckCircle;
                  return (
                    <div 
                      key={idx}
                      className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white mb-1">
                            {principle.title}
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {principle.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
