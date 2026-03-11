import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = ["Hero", "Projects", "Skills", "Freelancing", "Contact"];

export const Navbar = () => {
  const [active, setActive] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#0d0d12]/80 backdrop-blur-xl border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="px-6 md:px-20 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
            <div className="h-4 w-4 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-400 rotate-12" />
          </div>
          <span className="nav-brand text-white font-semibold tracking-wide text-lg">Amrit.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.2em] transition-colors relative section-kicker group ${
                active === item ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {item}
              {active === item ? (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 h-[1px] w-full bg-zinc-200/80"
                />
              ) : (
                <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-zinc-200/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-white transition-colors"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
};
