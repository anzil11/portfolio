import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-300 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-surface-300 rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-teal-400">AK</span>
                </div>
              </div>
              <span className="font-display font-bold text-white text-base">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Full Stack & Enterprise ERP Developer specializing in scalable React.js, Angular, Next.js, and Node.js solutions.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-teal-400/90 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider">
              Quick Navigation
            </h5>
            <div className="flex flex-col space-y-1.5">
              <a href="#about" className="hover:text-teal-300 transition">About Profile</a>
              <a href="#experience" className="hover:text-teal-300 transition">Work Experience</a>
              <a href="#skills" className="hover:text-teal-300 transition">Technical Skills</a>
              <a href="#projects" className="hover:text-teal-300 transition">Featured Projects</a>
              <a href="#education" className="hover:text-teal-300 transition">Education</a>
              <a href="#contact" className="hover:text-teal-300 transition">Contact Direct</a>
            </div>
          </div>

          {/* Resume & Actions */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider">
              Official Materials
            </h5>
            <div className="space-y-2">
              <button
                onClick={onOpenResume}
                className="w-full text-left p-2.5 rounded-xl bg-surface-200 border border-slate-700/80 hover:border-teal-500/40 text-slate-200 text-xs font-semibold flex items-center justify-between transition"
              >
                <span>View / Download Curriculum Vitae</span>
                <span className="text-teal-400 font-mono text-[10px]">PDF</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full text-left p-2.5 rounded-xl bg-surface-200 border border-slate-700/80 hover:border-teal-500/40 text-slate-200 text-xs font-semibold flex items-center justify-between transition"
              >
                <span>Email: {personalInfo.email}</span>
                <Mail className="w-3.5 h-3.5 text-teal-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Portfolio built with React, Vite & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-200 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/40 transition text-xs"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
