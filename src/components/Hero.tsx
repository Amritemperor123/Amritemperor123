import { motion } from "motion/react";
import { Cpu, Globe, Database, Zap } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-20 pt-24 relative overflow-hidden">
      <ParticleBackground />
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-2xl"
        >

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.98] mb-8 tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">Amrit</span>
            <span className="block text-4xl md:text-5xl mt-4 text-zinc-400">I build intelligent systems.</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-11 leading-relaxed">
            I design and build intelligent software systems, automation pipelines, and interactive web applications.
            My work focuses on AI integrations, scalable backend systems, and immersive web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-zinc-100 text-zinc-900 font-semibold hover:bg-white transition-colors"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap gap-4 w-full max-w-md lg:ml-auto"
        >
          {[
            { icon: Globe, label: "AI & Chatbots", desc: "Intelligent agents & LLM integrations" },
            { icon: Database, label: "Automation Systems", desc: "Data pipelines & automated workflows" },
            { icon: Cpu, label: "Web Applications", desc: "Scalable full-stack architecture" },
            { icon: Zap, label: "Interactive 3D", desc: "Immersive WebGL experiences" },
          ].map((item, i) => (
            <div 
              key={i} 
              className="group flex-none w-[calc(50%-0.5rem)] rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20"
            >
              <item.icon className="w-6 h-6 text-zinc-200 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white" />
              <span className="block text-slate-200 text-xs font-semibold uppercase tracking-[0.16em] section-kicker">{item.label}</span>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 overflow-hidden">
                <p className="text-slate-400 text-xs mt-2 pt-2 border-t border-white/10 inline-block min-h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold section-kicker">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};
