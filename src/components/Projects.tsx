import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    desc: "A headless e-commerce solution with advanced inventory management and real-time checkout.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: "https://picsum.photos/seed/ecommerce/800/600",
  },
  {
    title: "Financial Analytics Dashboard",
    desc: "High-performance dashboard for visualizing financial data trends and predicting market shifts.",
    tech: ["React", "TypeScript", "Redis"],
    image: "https://picsum.photos/seed/analytics/800/600",
  },
  {
    title: "Task Management Suite",
    desc: "Collaborative project management tool featuring real-time updates and team workflows.",
    tech: ["Vue.js", "Express", "MongoDB"],
    image: "https://picsum.photos/seed/taskmgmt/800/600",
  },
  {
    title: "Automated Invoicing API",
    desc: "Microservice for generating and sending dynamic PDF invoices with payment gateway integration.",
    tech: ["Go", "Docker", "AWS"],
    image: "https://picsum.photos/seed/invoice/800/600",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 md:px-20 relative">
      <div className="mb-16 max-w-3xl">
        <p className="section-kicker text-zinc-100 text-xs tracking-[0.24em] uppercase mb-4">Selected Work</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-5">Projects built for scale and performance.</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Product-minded engineering focusing on seamless user interfaces and robust backend systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#18181f]/70 backdrop-blur-sm flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover saturate-75 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white tracking-tight leading-tight">{project.title}</h3>
                <div className="flex gap-2 shrink-0">
                  <button className="h-7 w-7 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                    <Github className="w-3.5 h-3.5" />
                  </button>
                  <button className="h-7 w-7 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">{project.desc}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded bg-zinc-100/5 text-zinc-300 text-[10px] tracking-wider uppercase font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
