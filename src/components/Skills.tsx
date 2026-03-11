import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Programming",
    skills: ["TypeScript", "Python", "Rust", "Go", "C++"],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "OpenAI API", "LangChain", "LLMs"],
  },
  {
    category: "Web Dev",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "GraphQL"],
  },
  {
    category: "Automation",
    skills: ["Puppeteer", "Selenium", "n8n", "Docker", "CI/CD"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 md:px-20">
      <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-[#15151b]/70 backdrop-blur-sm p-7 md:p-12">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="section-kicker text-zinc-100 text-xs tracking-[0.24em] uppercase mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Technology stack I work in daily.</h2>
          <p className="text-slate-300">Production-ready choices across product engineering, AI integration, and automation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-zinc-100 section-kicker text-xs uppercase tracking-[0.2em] mb-5 pb-4 border-b border-white/10">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1c1c24] to-[#262630] p-6 md:p-8 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-slate-200 text-sm md:text-base">
            End-to-end delivery: architecture, implementation, deployment, and iterative optimization.
          </p>
          <span className="section-kicker text-zinc-100 text-xs tracking-[0.2em] uppercase">Quality First</span>
        </div>
      </div>
    </section>
  );
};
