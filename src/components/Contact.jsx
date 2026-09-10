import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct pre-filled email link as a reliable fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || `Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-surface-300/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="gradient-text-teal">Exceptional Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you are looking for an experienced ERP developer, a senior frontend engineer for your web app, or discussing new opportunities — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Channel Cards */}
            <div className="space-y-3.5">
              
              {/* Email Card */}
              <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-sm font-semibold text-white hover:text-teal-300 transition truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-surface-200 border border-slate-700 text-slate-300 hover:text-white hover:bg-surface-100 transition shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-teal-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Direct Phone / WhatsApp
                    </span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-sm font-semibold text-white hover:text-indigo-300 transition truncate block font-mono"
                    >
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-surface-200 border border-slate-700 text-slate-300 hover:text-white hover:bg-surface-100 transition shrink-0"
                  title="Copy phone number to clipboard"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-indigo-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Location & Work Preference
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    {personalInfo.location}
                  </span>
                  <span className="text-xs text-teal-400 font-medium">
                    Open to Remote, Hybrid & Relocation Opportunities
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Availability Badge */}
            <div className="p-5 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block mb-0.5">Prompt Response Guaranteed</span>
                Typically responds within 24 business hours to job inquiries and consulting proposals.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message draft was launched. If your mail client did not open automatically, please send directly to <strong className="text-teal-300">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-surface-200 text-xs font-semibold text-slate-200 hover:bg-surface-100 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300" htmlFor="name">
                        Your Name <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Johnson"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-200/90 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300" htmlFor="email">
                        Your Email <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-200/90 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300" htmlFor="subject">
                      Subject / Project Type
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Full Stack Role / ERP Project Discussion"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-200/90 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300" htmlFor="message">
                      Message <span className="text-teal-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Describe your project, position details, or any questions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-200/90 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 text-slate-950 font-bold text-sm hover:from-teal-400 hover:to-teal-300 transition shadow-lg hover:shadow-teal-500/25 active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Preparing Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Anzil</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
