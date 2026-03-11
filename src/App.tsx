/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Freelancing } from "./components/Freelancing";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <main className="relative min-h-screen bg-transparent selection:bg-white/20 selection:text-zinc-100">
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Freelancing />
        <Contact />
      </div>

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_5%,_#060608_90%)] opacity-60" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}