import { motion } from "motion/react";
import { Cpu, Globe, Database, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-20 pt-24 relative overflow-hidden">
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.98] mb-8 tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">Amrit</span>
            <span className="block text-4xl md:text-5xl mt-4 text-zinc-400">Software Engineer.</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-11 leading-relaxed">
            I specialize in building exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products and scalable full-stack applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-zinc-100 text-zinc-900 font-semibold hover:bg-white transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-9"
        >
          {[
            { icon: Globe, label: "Frontend Dev" },
            { icon: Database, label: "Backend Systems" },
            { icon: Cpu, label: "Software Architecture" },
            { icon: Zap, label: "Performance Optimization" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
              <item.icon className="w-5 h-5 text-zinc-200 mb-3" />
              <span className="text-slate-300 text-xs uppercase tracking-[0.16em] section-kicker">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
