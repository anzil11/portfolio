import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Cpu,
  Database,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';

const projectFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'ERP Systems', label: 'ERP Systems' },
  { key: 'Full Stack', label: 'Full Stack & Web' },
  { key: 'Enterprise Architecture', label: 'Enterprise & IT' },
];

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-surface-300/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Enterprise Projects & <br className="hidden sm:inline" />
              <span className="gradient-text-teal">Featured Implementations</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore real-world ERP systems, e-commerce architectures, and business automation platforms built with modern frontend and backend technologies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === tab.key
                    ? 'bg-teal-500 text-slate-950 shadow-glow-teal'
                    : 'bg-surface-200/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-surface-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800/90 flex flex-col justify-between overflow-hidden group hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6 space-y-4">
                
                {/* Top badges */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-200 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-200 text-slate-400 border border-slate-800">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer / Trigger */}
              <div className="px-6 py-4 bg-surface-200/60 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 group-hover:text-teal-300 transition"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  Verified In CV
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
