import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-20 border-t border-white/10 bg-[#0d0d12]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <p className="section-kicker text-zinc-100 text-xs tracking-[0.24em] uppercase mb-4">Contact</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Let&apos;s build your next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
                high-impact product.
              </span>
            </h2>
            <p className="text-slate-300">Open to select freelance and contract opportunities.</p>
          </div>

          <a
            href="mailto:hello@amrit.dev"
            className="group flex items-center gap-3 text-white text-xl md:text-3xl font-medium hover:text-zinc-200 transition-colors"
          >
            hello@amrit.dev
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-white/10">
          <div className="flex gap-5">
            <a href="#" className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors inline-flex items-center justify-center"><Github className="w-4 h-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors inline-flex items-center justify-center"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors inline-flex items-center justify-center"><Mail className="w-4 h-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 transition-colors inline-flex items-center justify-center"><Phone className="w-4 h-4" /></a>
          </div>

          <div>
            <span className="section-kicker block text-slate-400 text-xs uppercase tracking-[0.2em] mb-2">Location</span>
            <span className="text-slate-200">Remote / United States</span>
          </div>

          <div className="md:text-right">
            <span className="section-kicker block text-slate-400 text-xs uppercase tracking-[0.2em] mb-2">Amrit&apos;s Portfolio</span>
            <span className="text-slate-300">© 2026 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
