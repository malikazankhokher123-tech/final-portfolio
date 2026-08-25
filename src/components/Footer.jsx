import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const techStack = [
    [<FaReact />, "React JS"],
    [<FaNodeJs />, "Node JS"],
    [<SiMongodb />, "MongoDB"],
    [<SiTailwindcss />, "Tailwind CSS"],
    [<FaDatabase />, "REST APIs"],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071b1c] text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-cyan-400/10 blur-[110px] sm:h-72 sm:w-72" />

        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-teal-400/10 blur-[120px] sm:h-80 sm:w-80" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

      </div>

      {/* MAIN */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-7 sm:py-14 md:px-8 md:py-16 lg:px-10">

        {/* TOP CONTENT */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr]">

          {/* BRAND */}
          <div className="md:col-span-2 lg:col-span-1">

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-black text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.12)]">
                A
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-tight sm:text-xl">
                  AZAN ALI
                </h2>

                <p className="mt-0.5 text-[8px] uppercase tracking-[0.3em] text-cyan-400">
                  Full Stack Developer
                </p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-md text-xs leading-6 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7">
              I design and develop modern digital experiences with clean
              interfaces, powerful backend systems and scalable technologies.
              Turning ideas into reliable digital products is what I love to do.
            </p>

            {/* SOCIALS */}
            <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">

              <a
                href="#"
                aria-label="GitHub"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_10px_30px_rgba(34,211,238,.25)] sm:h-10 sm:w-10 sm:text-base"
              >
                <FaGithub className="transition duration-300 group-hover:scale-110" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_10px_30px_rgba(34,211,238,.25)] sm:h-10 sm:w-10 sm:text-base"
              >
                <FaLinkedinIn className="transition duration-300 group-hover:scale-110" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_10px_30px_rgba(34,211,238,.25)] sm:h-10 sm:w-10 sm:text-base"
              >
                <FaTwitter className="transition duration-300 group-hover:scale-110" />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <div className="mb-4 flex items-center gap-3 sm:mb-5">

              <span className="h-px w-6 bg-cyan-400" />

              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Quick Links
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:block sm:space-y-3">

              {quickLinks.map(([name, link]) => (

                <a
                  key={name}
                  href={link}
                  className="group flex w-fit items-center gap-2 text-xs text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white sm:text-sm"
                >

                  <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600 transition duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee]" />

                  <span>{name}</span>

                  <span className="text-cyan-400 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>

                </a>

              ))}

            </div>

          </div>

          {/* TECH STACK */}
          <div>

            <div className="mb-4 flex items-center gap-3 sm:mb-5">

              <span className="h-px w-6 bg-cyan-400" />

              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Tech Stack
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:block sm:space-y-3">

              {techStack.map(([icon, name]) => (

                <div
                  key={name}
                  className="group flex items-center gap-2.5 text-xs text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white sm:gap-3 sm:text-sm"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                    {icon}
                  </span>

                  <span>{name}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent sm:my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 sm:gap-4 md:flex-row md:items-center md:justify-between">

          {/* COPYRIGHT */}
          <p className="text-center text-[8px] uppercase tracking-[0.15em] text-slate-500 sm:text-[9px] sm:tracking-[0.2em] md:text-left">
            © {year} Azan Ali. All rights reserved.
          </p>

          {/* BUILT WITH */}
          <div className="order-3 flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.15em] text-slate-500 sm:text-[9px] sm:tracking-[0.2em] md:order-2">

            <span>Built with</span>

            <span className="text-cyan-400">
              React
            </span>

            <span>×</span>

            <span className="text-cyan-400">
              Tailwind
            </span>

          </div>

          {/* BACK TO TOP */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group order-2 mx-auto flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_10px_30px_rgba(34,211,238,.25)] sm:h-10 sm:w-10 md:order-3 md:mx-0"
          >
            <FaArrowUp className="transition duration-300 group-hover:-translate-y-1" />
          </a>

        </div>

      </div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee]" />

    </footer>
  );
};

export default Footer;