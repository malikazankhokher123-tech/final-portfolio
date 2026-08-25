import React from "react";
import {
  FaUserTie,
  FaLaptopCode,
  FaRocket,
  FaCodeBranch,
  FaBrain,
  FaLightbulb,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    icon: FaUserTie,
    title: "The Developer Behind The Work",
    description:
      "I approach every project with curiosity, discipline and a strong focus on creating meaningful digital experiences.",
  },
  {
    icon: FaLaptopCode,
    title: "Crafted With Purpose",
    description:
      "Every interface I build is carefully structured to feel intuitive, polished and effortless for the people using it.",
  },
  {
    icon: FaRocket,
    title: "From Concept To Reality",
    description:
      "I enjoy taking an initial idea and transforming it into a complete, functional product that feels ready for the real world.",
  },
  {
    icon: FaCodeBranch,
    title: "Built To Evolve",
    description:
      "My development mindset focuses on creating solutions that remain clean, flexible and easier to improve as a project grows.",
  },
  {
    icon: FaBrain,
    title: "Always Exploring What's Next",
    description:
      "Technology never stays still, so I continuously explore better tools, techniques and ideas to sharpen my craft.",
  },
  {
    icon: FaLightbulb,
    title: "Ideas Worth Building",
    description:
      "The most exciting part of development for me is turning creative thoughts and complex problems into something people can actually use.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4fbfc] py-16 text-slate-900 sm:py-20 md:py-24 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-16 h-56 w-56 rounded-full bg-cyan-300/20 blur-[100px] sm:left-[10%] sm:top-20 sm:h-72 sm:w-72" />

        <div className="absolute bottom-0 right-[5%] h-64 w-64 rounded-full bg-blue-300/15 blur-[110px] sm:right-[10%] sm:h-80 sm:w-80" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:60px_60px] sm:[background-size:70px_70px]" />
      </div>

      {/* MAIN */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-7 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          {/* ABOUT ME BADGE */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-300/30 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] sm:h-2.5 sm:w-2.5" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-cyan-500 sm:text-[10px] sm:tracking-[0.35em]">
              About Me
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-slate-800 sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Beyond
            <span className="text-cyan-500"> The Code</span>
          </h2>

          {/* INTRO */}
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-slate-500 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
            I'm Azan Ali, a Full Stack Developer passionate about building
            thoughtful digital products. My work combines technical thinking,
            creative problem-solving and a constant desire to create better
            experiences.
          </p>
        </div>

        {/* CARDS */}
        <div className="mx-auto mt-8 w-full sm:mt-10 md:mt-11">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group relative min-h-[205px] min-w-0 overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/70 px-4 py-5 shadow-[0_10px_35px_rgba(15,23,42,.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:bg-slate-100/90 hover:shadow-[0_20px_45px_rgba(34,211,238,.14)] sm:min-h-[220px] sm:rounded-[22px] sm:px-5"
                >
                  {/* GLOW */}
                  <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/0 blur-3xl transition duration-500 group-hover:bg-cyan-300/25" />

                  {/* NUMBER */}
                  <span className="absolute right-4 top-4 text-[8px] font-semibold tracking-[0.2em] text-slate-300 transition duration-300 group-hover:text-cyan-300 sm:right-5">
                    0{index + 1}
                  </span>

                  {/* ICON */}
                  <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#19afa5] text-base text-white shadow-[0_8px_20px_rgba(25,175,165,.2)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    <Icon />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative mx-auto mt-4 max-w-[260px] text-center text-[14px] font-bold leading-5 tracking-tight text-[#453b7b] transition duration-300 group-hover:text-cyan-600 sm:mt-5 sm:text-[15px]">
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative mx-auto mt-3 max-w-[290px] text-center text-[9px] leading-5 text-slate-400 sm:mt-4 sm:text-[10px]">
                    {card.description}
                  </p>

                  {/* INDICATOR */}
                  <div className="relative mx-auto mt-3 flex w-fit items-center gap-2 sm:mt-4">
                    <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400 text-[6px] text-white">
                      <FaCheck />
                    </span>

                    <span className="text-[7px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[8px] sm:tracking-[0.15em]">
                      Personal Principle
                    </span>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] origin-center scale-x-0 bg-cyan-400 transition duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-6 w-full sm:mt-7">
          <div className="relative overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/75 px-5 py-5 shadow-[0_12px_35px_rgba(15,23,42,.04)] backdrop-blur-xl sm:rounded-[22px] sm:px-6 md:px-8">
            {/* GLOW */}
            <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-[70px]" />

            <div className="relative flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-cyan-500 sm:text-[8px] sm:tracking-[0.35em]">
                  Let's Create Something Meaningful
                </p>

                <h3 className="mt-1.5 text-base font-bold text-slate-800 sm:text-lg md:text-xl">
                  Have an idea?
                  <span className="text-slate-400">
                    {" "}
                    Let's turn it into reality.
                  </span>
                </h3>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-[#19afa5] px-5 py-3 text-[9px] font-bold text-white shadow-[0_8px_20px_rgba(25,175,165,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#149e95] hover:shadow-[0_12px_28px_rgba(25,175,165,.3)] sm:w-auto sm:text-[10px]"
              >
                Let's Connect

                <FaArrowRight className="text-[8px] transition duration-300 group-hover:translate-x-1 sm:text-[9px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;