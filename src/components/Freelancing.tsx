import { motion } from "motion/react";
import { Bot, Code, BarChart, Layers, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "LLM integrations, internal copilots, and retrieval systems aligned to business use cases.",
  },
  {
    icon: Code,
    title: "Product Engineering",
    desc: "High-performance web platforms and internal tools with robust frontend and backend architecture.",
  },
  {
    icon: BarChart,
    title: "Data Automation",
    desc: "Automated extraction pipelines, monitoring workflows, and reporting systems at production reliability.",
  },
  {
    icon: Layers,
    title: "Technical Design",
    desc: "Clear system modeling and implementation strategy that helps teams ship faster with less risk.",
  },
];

const steps = [
  "Discovery & Scope",
  "Architecture Planning",
  "Rapid Prototyping",
  "Implementation",
  "QA & Hardening",
  "Launch Support",
];

export const Freelancing = () => {
  return (
    <section id="freelancing" className="py-28 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="section-kicker text-zinc-100 text-xs tracking-[0.24em] uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Professional execution from idea to launch.</h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl">
            I work with founders and teams who need technically strong implementation without unnecessary overhead.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-[#18181f]/70 p-6">
                <service.icon className="w-7 h-7 text-zinc-200 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-[#15151b]/80 p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-white mb-8">Delivery Framework</h3>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-full border border-zinc-200/35 bg-zinc-300/10 text-zinc-100 text-sm section-kicker flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 border-b border-white/10 pb-3 flex items-center justify-between gap-2">
                  <span className="text-slate-200">{step}</span>
                  <CheckCircle2 className="w-4 h-4 text-zinc-200" />
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex w-full justify-center rounded-2xl bg-zinc-100 text-zinc-900 py-3.5 font-semibold hover:bg-white transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};
