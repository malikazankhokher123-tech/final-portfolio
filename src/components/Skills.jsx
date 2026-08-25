import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaServer,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  ["React JS", 92, <FaReact />, "Frontend"],
  ["JavaScript", 90, <FaJs />, "Language"],
  ["HTML5", 96, <FaHtml5 />, "Frontend"],
  ["CSS3", 91, <FaCss3Alt />, "Styling"],
  ["Tailwind CSS", 94, <SiTailwindcss />, "Styling"],
  ["Node JS", 88, <FaNodeJs />, "Backend"],
  ["Express JS", 86, <SiExpress />, "Backend"],
  ["MongoDB", 84, <SiMongodb />, "Database"],
  ["REST API", 89, <FaServer />, "Backend"],
  ["Git & GitHub", 82, <FaGithub />, "Tools"],
];

const marquee = [
  "React JS",
  "JavaScript",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Tailwind CSS",
  "REST API",
  "Git & GitHub",
  "Full Stack",
  "MERN Stack",
];

const SkillCard = ({ skill, index, animate }) => {
  const [progress, setProgress] = useState(0);
  const [name, level, icon, category] = skill;

  const radius = 37;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (!animate) {
      setProgress(0);
      return;
    }

    let current = 0;

    const timer = setInterval(() => {
      current += level / 80;

      if (current >= level) {
        current = level;
        clearInterval(timer);
      }

      setProgress(Math.floor(current));
    }, 20);

    return () => clearInterval(timer);
  }, [animate, level]);

  return (
    <div className="group relative min-w-0 overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/75 px-4 py-4 shadow-[0_10px_35px_rgba(15,23,42,.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white/90 hover:shadow-[0_20px_45px_rgba(34,211,238,.14)]">

      {/* TOP LINE */}
      <div className="absolute left-6 right-6 top-0 h-[2px] origin-center scale-x-0 bg-cyan-400 transition duration-500 group-hover:scale-x-100" />

      {/* NUMBER */}
      <span className="absolute right-4 top-3 text-[8px] font-semibold tracking-[0.2em] text-slate-300 transition duration-300 group-hover:text-cyan-400">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* ICON */}
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/70 bg-cyan-50 text-lg text-cyan-500 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
        {icon}
      </div>

      {/* NAME */}
      <div className="mt-2 text-center">
        <h3 className="text-sm font-bold tracking-tight text-[#453b7b] transition-colors duration-300 group-hover:text-cyan-600">
          {name}
        </h3>

        <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-slate-400">
          {category}
        </p>
      </div>

      {/* PROGRESS */}
      <div className="mt-3 flex justify-center">
        <div className="relative h-[92px] w-[92px]">

          {/* ORBIT */}
          <div
            className="absolute inset-[2px] rounded-full border border-dashed border-cyan-400/20"
            style={{
              animation: animate
                ? "skillOrbit 12s linear infinite"
                : "none",
            }}
          />

          {/* CIRCLE */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="92"
            height="92"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="rgba(15,23,42,.08)"
              strokeWidth="2.7"
            />

            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: "stroke-dashoffset .02s linear",
                filter:
                  "drop-shadow(0 0 4px rgba(34,211,238,.6))",
              }}
            />
          </svg>

          {/* ROTATING DOT */}
          <div
            className="absolute inset-0"
            style={{
              transform: `rotate(${progress * 3.6}deg)`,
            }}
          >
            <span className="absolute left-1/2 top-[2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          </div>

          {/* NUMBER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold tracking-[-0.06em] text-slate-800">
              {progress}
              <span className="ml-0.5 text-[10px] text-cyan-500">
                %
              </span>
            </div>

            <span className="text-[7px] uppercase tracking-[0.2em] text-slate-400">
              Level
            </span>
          </div>
        </div>
      </div>

      {/* FOOT */}
      <div className="mt-3 flex items-center justify-between border-t border-slate-200/70 pt-3">
        <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-400">
          Proficiency
        </span>

        <span className="text-[9px] font-semibold text-cyan-500">
          {level}/100
        </span>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-7 right-7 h-[2px] origin-center scale-x-0 bg-cyan-400 transition duration-500 group-hover:scale-x-100" />
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimate(entry.isIntersecting),
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#f4fbfc] py-6 text-slate-900 sm:py-7 md:py-8"
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-[110px]" />

        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-blue-300/15 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      </div>

      {/* MAIN */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">

            <span className="h-px w-5 bg-cyan-400/40 sm:w-8" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-cyan-500 sm:text-[9px] sm:tracking-[0.4em]">
              Technical Arsenal
            </span>

            <span className="h-px w-5 bg-cyan-400/40 sm:w-8" />

          </div>

          <h2 className="text-3xl font-bold tracking-[-0.05em] text-slate-800 sm:text-4xl md:text-5xl">
            Skills
            <span className="text-cyan-500"> & Expertise</span>
          </h2>

          <p className="mx-auto mt-1 max-w-xl px-3 text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
            Technologies and tools I use to build modern,
            scalable digital experiences.
          </p>

        </div>

        {/* MARQUEE */}
        <div className="relative mx-auto mt-3 w-full max-w-5xl overflow-hidden rounded-2xl border border-cyan-200/60 bg-white/60 py-2.5 shadow-sm backdrop-blur-md sm:py-3">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#f4fbfc] to-transparent sm:w-20" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#f4fbfc] to-transparent sm:w-20" />

          <div
            className="flex w-max items-center"
            style={{
              animation: "skillsMarquee 28s linear infinite",
            }}
          >
            {[...marquee, ...marquee].map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="mx-1.5 flex items-center gap-1.5 rounded-full border border-cyan-200/60 bg-white/70 px-2.5 py-1.5 sm:mx-2 sm:gap-2 sm:px-3"
              >

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <span className="whitespace-nowrap text-[10px] font-medium text-slate-500 sm:text-xs">
                  {item}
                </span>

                <span className="text-[10px] text-cyan-500/60 sm:text-xs">
                  ✦
                </span>

              </div>
            ))}
          </div>

        </div>

        {/* SKILL CARDS */}
        <div
          className="
            relative mx-auto mt-3 grid w-full max-w-5xl
            grid-cols-1 gap-3
            sm:grid-cols-2 sm:gap-4
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill[0]}
              skill={skill}
              index={index}
              animate={animate}
            />
          ))}
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes skillOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes skillsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .group {
            max-width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

    </section>
  );
};

export default Skills;