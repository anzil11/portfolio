import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [selectedCompanyId, setSelectedCompanyId] = useState('exouzia');
  const [showProofModal, setShowProofModal] = useState(false);

  const activeCompany = experiences.find((e) => e.id === selectedCompanyId) || experiences[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-surface-300/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Employment History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Enterprise <span className="gradient-text-teal">Career Journey</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Hands-on contributions to large-scale ERP platforms, client-facing e-commerce applications, and full-stack MERN engineering.
            </p>
          </div>

          {/* Experience Verification Button */}
          <button
            onClick={() => setShowProofModal(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-100 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:border-teal-500/40 transition shrink-0 self-start md:self-auto"
          >
            <ImageIcon className="w-4 h-4 text-teal-400" />
            <span>View Verified Experience Record</span>
          </button>
        </div>

        {/* Company Tabs & Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Company Selector Navigation (Tabs) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-1">
              Organizations
            </div>
            {experiences.map((exp) => {
              const isSelected = exp.id === activeCompany.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompanyId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-surface-100 border-teal-500/50 shadow-glow-teal ring-1 ring-teal-500/20'
                      : 'bg-surface-200/50 border-slate-800 hover:bg-surface-100/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base font-display">
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-teal-300 font-medium">
                    {exp.totalDuration}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {exp.type} {exp.location ? `• ${exp.location}` : ''}
                  </span>
                </button>
              );
            })}

            {/* Quick summary note */}
            <div className="p-4 rounded-xl bg-surface-200/30 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-1">Key Strengths Demonstrated:</span>
              High code maintainability, clean component boundaries, secure REST integration, and client-aligned feature delivery across ERP modules.
            </div>
          </div>

          {/* Detailed Experience Timeline / Breakdown */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-8">
              
              {/* Header banner */}
              <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-teal-400" />
                    <span>{activeCompany.company}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {activeCompany.type} • {activeCompany.totalDuration}
                  </p>
                </div>
                {activeCompany.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-surface-200 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>{activeCompany.location}</span>
                  </div>
                )}
              </div>

              {/* Roles Breakdown */}
              <div className="space-y-8">
                {activeCompany.roles.map((role, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 space-y-3.5">
                    
                    {/* Node Dot */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-300 border-2 border-teal-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </div>

                    {/* Role Title & Dates */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-bold text-white font-display">
                        {role.title}
                      </h4>
                      <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20 w-fit">
                        {role.period}
                      </span>
                    </div>

                    {/* Highlight Subtitle */}
                    {role.highlight && (
                      <p className="text-xs font-medium text-slate-300 italic">
                        "{role.highlight}"
                      </p>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {role.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used in this Role */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-200 text-slate-300 border border-slate-700/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Experience Proof / Record Modal */}
      {showProofModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div 
            className="relative max-w-xl w-full bg-surface-100 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Verified Career & Employment Timeline</span>
              </div>
              <button
                onClick={() => setShowProofModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-black flex items-center justify-center max-h-[70vh] overflow-y-auto">
              <img
                src="/experience_record.jpeg"
                alt="Anzil AK LinkedIn Experience Record"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">
              Official record detailing roles across Exouzia and Luminar Technolab.
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
