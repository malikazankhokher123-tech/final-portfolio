import React, { useEffect, useState } from "react";

const Hero = () => {
  const headings = [
    "BUILD DIGITAL FUTURES",
    "CREATE DIGITAL EXPERIENCES",
    "DESIGN MODERN SOLUTIONS",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = headings[index];
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);

        if (next === current) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (text.length > 1) {
          setText(text.slice(0, -1));
        } else {
          const nextIndex = (index + 1) % headings.length;
          setIndex(nextIndex);
          setText(headings[nextIndex].charAt(0));
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  const words = text.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0EBEC0] pt-24 text-white sm:pt-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-20 h-72 w-72 rounded-full bg-white/20 blur-[110px]" />

        <div className="absolute bottom-10 right-[12%] h-72 w-72 rounded-full bg-cyan-200/25 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 md:px-8 lg:px-10">
        {/* TOP LABEL */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,.9)]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.3em]">
              Independent Full Stack Developer
            </span>
          </div>

          <span className="hidden text-[9px] font-medium tracking-[0.3em] text-white md:block">
            01 — INTRODUCTION
          </span>
        </div>

        {/* HERO */}
        <div className="grid min-h-[570px] items-center gap-8 pb-10 md:pb-12 lg:grid-cols-[1.08fr_.92fr] lg:pb-0">
          {/* LEFT */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-white">
              Hi, I'm Azan Ali
            </p>

            {/* TYPEWRITER HEADING */}
            <div className="flex min-h-[170px] items-start justify-center sm:min-h-[185px] lg:min-h-[205px] lg:justify-start">
              <h1 className="max-w-[720px] text-[clamp(3rem,8vw,6.7rem)] font-black leading-[0.9] tracking-[-0.07em]">
                {words.map((word, wordIndex) => (
                  <React.Fragment key={wordIndex}>
                    <span
                      className={
                        wordIndex === words.length - 1
                          ? "text-white drop-shadow-[0_5px_15px_rgba(0,0,0,.12)]"
                          : wordIndex === 1
                          ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.85)]"
                          : "text-white"
                      }
                    >
                      {word}
                    </span>

                    {wordIndex < words.length - 1 && " "}
                  </React.Fragment>
                ))}

                {/* CURSOR */}
                <span className="ml-1 inline-block h-[0.78em] w-[4px] translate-y-[0.08em] bg-white align-middle shadow-[0_0_12px_rgba(255,255,255,.9)] animate-pulse sm:ml-2" />
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="mx-auto mt-2 flex max-w-xl gap-4 text-left lg:mx-0">
              <div className="w-[2px] shrink-0 bg-white shadow-[0_0_15px_rgba(255,255,255,.7)]" />

              <p className="text-sm leading-6 text-white/90 sm:leading-7 md:text-base">
                I design and develop modern digital experiences where{" "}
                <span className="font-bold text-white">
                  clean interfaces
                </span>
                ,{" "}
                <span className="font-bold text-white">
                  powerful backends
                </span>{" "}
                and{" "}
                <span className="font-bold text-white">
                  intelligent technology
                </span>{" "}
                come together.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start">
              {/* PRIMARY */}
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center rounded-xl border border-white/80 bg-white px-6 py-4 text-sm font-bold text-[#08767a] shadow-[0_10px_30px_rgba(0,0,0,.12)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-white hover:bg-[#063f43] hover:text-white hover:shadow-[0_18px_40px_rgba(0,0,0,.22)] sm:w-auto"
              >
                Explore My Work

                <span className="ml-4 inline-block transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* SECONDARY */}
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center rounded-xl border border-white/80 bg-white/15 px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,.08)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:text-[#08767a] hover:shadow-[0_18px_40px_rgba(0,0,0,.18)] sm:w-auto"
              >
                Let's Build Something

                <span className="ml-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex h-[380px] items-center justify-center sm:h-[420px] md:h-[450px] lg:h-[430px] lg:-translate-y-8">
            {/* OUTER RING */}
            <div
              className="absolute h-[270px] w-[270px] rounded-full border border-white/40 sm:h-[300px] sm:w-[300px] md:h-[320px] md:w-[320px] lg:h-[300px] lg:w-[300px]"
              style={{
                animation: "spin 18s linear infinite",
              }}
            />

            {/* DASHED RING */}
            <div
              className="absolute h-[305px] w-[305px] rounded-full border border-dashed border-white/40 sm:h-[335px] sm:w-[335px] md:h-[360px] md:w-[360px] lg:h-[340px] lg:w-[340px]"
              style={{
                animation: "spinReverse 25s linear infinite",
              }}
            />

            {/* GLOW */}
            <div
              className="absolute h-52 w-52 rounded-full bg-white/30 blur-[80px] sm:h-56 sm:w-56"
              style={{
                animation: "glow 4s ease-in-out infinite",
              }}
            />

            {/* IMAGE */}
            <div
              className="relative h-[300px] w-[225px] sm:h-[320px] sm:w-[240px] md:h-[340px] md:w-[255px] lg:h-[320px] lg:w-[240px]"
              style={{
                animation: "float 5s ease-in-out infinite",
              }}
            >
              {/* OUTER FRAME */}
              <div className="absolute -inset-2 rounded-[28px] border border-white/60 sm:-inset-3 sm:rounded-[30px]" />

              {/* TOP CORNER */}
              <div className="absolute -right-3 -top-3 z-20 h-12 w-12 rounded-tr-3xl border-r border-t border-white sm:-right-4 sm:-top-4 sm:h-14 sm:w-14" />

              {/* BOTTOM CORNER */}
              <div className="absolute -bottom-3 -left-3 z-20 h-12 w-12 rounded-bl-3xl border-b border-l border-white sm:-bottom-4 sm:-left-4 sm:h-14 sm:w-14" />

              {/* IMAGE BOX */}
              <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/60 bg-[#06363d] shadow-[0_25px_70px_rgba(3,39,45,.28)] sm:rounded-[25px]">
                <img
                  src="/profile.jpg"
                  alt="Azan Ali"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031f24]/90 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                  <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-cyan-200 sm:text-[9px] sm:tracking-[0.3em]">
                    Developer / Creator
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    AZAN ALI
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-14px);
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spinReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          @keyframes glow {
            0%, 100% {
              opacity: .5;
              transform: scale(1);
            }

            50% {
              opacity: .9;
              transform: scale(1.15);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: .01ms !important;
              animation-iteration-count: 1 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;