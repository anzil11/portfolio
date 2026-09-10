import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Code, Sparkles, ChevronRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume, theme = 'dark', onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface-300/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-teal overflow-hidden">
              <img
                src={personalInfo.avatar || "/profile.jpeg"}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-surface-300 rounded-[10px] items-center justify-center">
                <span className="font-mono font-bold text-sm text-teal-400">AK</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-teal-300 transition-colors">
                Anzil AK
              </span>
              <span className="text-[10px] font-mono text-teal-300 -mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Frontend Team Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-200/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Day/Dark Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-surface-200 border border-slate-700/80 text-slate-200 hover:text-teal-300 hover:border-teal-500/50 hover:bg-surface-100 transition-all shadow-sm flex items-center gap-2 text-xs font-medium"
              title={theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle light/dark theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span className="text-[11px] text-slate-300">Day</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-400" />
                  <span className="text-[11px] text-slate-700 font-semibold">Dark</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface-200 border border-slate-700 text-slate-200 hover:text-white hover:border-teal-500/50 hover:bg-surface-100 transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-teal-500 to-teal-400 text-slate-950 hover:from-teal-400 hover:to-teal-300 transition-all shadow-md hover:shadow-teal-500/20 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu & Quick Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-surface-200 border border-slate-700 text-slate-200 hover:text-teal-300 text-xs font-medium"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-surface-200 border border-slate-700 text-teal-400 hover:text-teal-300 text-xs font-medium"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-surface-200 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-200/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Day/Dark Mode quick bar */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-100 border border-slate-800">
            <span className="text-xs font-semibold text-slate-300">Display Theme</span>
            <button
              onClick={onToggleTheme}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-200 border border-slate-700 text-xs font-medium text-slate-200"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Switch to Day Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                      : 'text-slate-300 bg-surface-100 hover:bg-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-100 border border-slate-700 text-slate-200 text-sm font-semibold"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>Preview Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400"
            >
              <Send className="w-4 h-4" />
              <span>Contact Anzil Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
