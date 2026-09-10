import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-100 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-surface-200/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg flex items-center gap-2">
                {personalInfo.name} — Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400">{personalInfo.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Anzil_Ak_CV.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400 transition-all shadow-md hover:shadow-teal-500/25"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame Preview or Fallback */}
        <div className="flex-1 w-full bg-slate-900 overflow-hidden relative min-h-[500px]">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
            title="Anzil AK Resume Preview"
            className="w-full h-full border-none min-h-[550px]"
          />
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-3 border-t border-slate-800 bg-surface-200/90 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-2 text-teal-400">
            <CheckCircle className="w-4 h-4" />
            <span>Verified credentials: 3+ Years Experience, B.Sc. Computer Science</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Direct contact: <strong className="text-slate-200">{personalInfo.email}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
