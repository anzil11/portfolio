import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldAlert,
  Sliders
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { key: 'all', label: 'All Disciplines', icon: Sliders },
  { key: 'frontend', label: 'Frontend Engineering', icon: Code },
  { key: 'backend', label: 'Backend & APIs', icon: Server },
  { key: 'enterprise', label: 'ERP & Domain Logic', icon: Cpu },
  { key: 'database', label: 'Databases & Storage', icon: Database },
  { key: 'devops', label: 'DevOps & Tooling', icon: Terminal },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        { ...skillsData.frontend },
        { ...skillsData.backend },
        { ...skillsData.enterprise },
        { ...skillsData.database },
        { ...skillsData.devops }
      ];
    }
    return [skillsData[activeTab]];
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Modern Full-Stack & <br className="hidden sm:inline" />
            <span className="gradient-text-teal">Enterprise ERP Skill Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified competencies derived from 3+ years of production development across modern frameworks, databases, and business systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-teal-500 text-slate-950 shadow-glow-teal scale-105'
                    : 'bg-surface-200/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-surface-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((group, gIdx) => (
            <div 
              key={gIdx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <h3 className="font-bold text-white text-base font-display">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-surface-200/90 border border-slate-800 text-xs font-medium text-slate-200 flex items-center justify-between gap-2 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/60">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional & Soft Skills Cloud */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-200/40 border border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-bold text-white text-base font-display flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Professional & Soft Competencies</span>
              </h4>
              <p className="text-xs text-slate-400">
                Core behavioral traits essential for agile teams, code reviews, and stakeholder collaboration.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.softSkills.map((trait, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-100 border border-slate-700/70 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
