import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Terminal,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Engineering Inquiry for Amrit Lal Paswan (from ${senderName || 'Portfolio'})`);
    const mailtoBody = encodeURIComponent(
      `Hi Amrit,\n\n${body}\n\nBest regards,\n${senderName || 'Visitor'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
            Initiate Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct channels */}
          <div className="lg:col-span-6 space-y-6 font-mono text-xs">
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              I am open to roles and technical engineering projects in
              <strong className="text-slate-100 font-semibold"> AI Systems, LLM Infrastructure, Backend Engineering</strong>, and
              <strong className="text-slate-100 font-semibold"> Edge Computer Vision</strong>.
            </p>

            <div className="border border-slate-800 bg-[#090d16] p-6 space-y-4">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider pb-2 border-b border-slate-800">
                Direct Channels
              </div>

              {/* Email */}
              <div className="flex items-center justify-between py-1">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:text-emerald-400 font-medium">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between py-1 border-t border-slate-800/60">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Phone / WhatsApp</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 hover:text-emerald-400 font-medium">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {copiedPhone ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Location */}
              <div className="py-1 border-t border-slate-800/60">
                <div className="text-[10px] text-slate-500 uppercase">Location</div>
                <div className="text-slate-200 font-medium">{PERSONAL_INFO.location} (Open to Remote &amp; Relocation)</div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded border border-slate-800 bg-[#090d16] hover:bg-slate-800 text-slate-200 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub Repos</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded border border-slate-800 bg-[#090d16] hover:bg-slate-800 text-slate-200 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Dispatch Form */}
          <div className="lg:col-span-6">
            <div className="border border-slate-800 bg-[#090d16] p-6 space-y-4 font-mono text-xs">
              <div className="pb-2 border-b border-slate-800 text-xs font-bold text-slate-200 uppercase tracking-wider">
                Send Direct Message
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-slate-400 mb-1">Name / Organization</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-3 py-2 rounded border border-slate-800 bg-slate-900 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Infra Role Inquiry"
                    className="w-full px-3 py-2 rounded border border-slate-800 bg-slate-900 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Discuss opportunities or systems architecture..."
                    className="w-full px-3 py-2 rounded border border-slate-800 bg-slate-900 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 resize-none font-sans text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
