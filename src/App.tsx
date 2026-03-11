import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Freelancing } from "./components/Freelancing";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <main className="relative min-h-screen bg-transparent selection:bg-white/20 selection:text-zinc-100 overflow-hidden">
      <Navbar />

      <motion.div style={{ y }} className="relative z-10 will-change-transform">
        <Hero />
        <Projects />
        <Skills />
        <Freelancing />
        <Contact />
      </motion.div>

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_5%,_#060608_90%)] opacity-60 z-0" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
    </main>
  );
}