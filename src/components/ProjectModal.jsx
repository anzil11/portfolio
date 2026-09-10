import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, ArrowRight, Layers, ShieldCheck, Database, Layout } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-surface-100 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-surface-200 via-surface-100 to-teal-950/30 border-b border-slate-800">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {project.title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-1">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 text-teal-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Summary / Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-200/80 border border-red-500/20">
              <h5 className="text-xs uppercase font-semibold text-rose-400 tracking-wider mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                Business Challenge
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-200/80 border border-teal-500/20">
              <h5 className="text-xs uppercase font-semibold text-teal-400 tracking-wider mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Architectural Solution
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              Anzil's Core Contributions & Implementation
            </h4>
            <div className="space-y-2.5">
              {project.contributions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-surface-200/60 border border-slate-800 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Key Engineered Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-surface-200/40 border border-slate-800/80 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-surface-200 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Source: Verified CV & Production Deliverables
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm font-medium hover:bg-slate-700 transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
