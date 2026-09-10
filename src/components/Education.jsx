import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Education & <span className="gradient-text-teal">Computer Science Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal computational education providing strong problem-solving and software engineering paradigms.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-indigo-500/20 text-teal-400 border border-teal-500/30 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 font-medium text-sm sm:text-base mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                {edu.status}
              </span>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-400" />
                Key Focus Areas & Academic Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-200/50 border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
