import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaShoppingCart,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    number: "01",
    icon: <FaCode />,
    title: "Frontend Engineering",
    description:
      "High-quality React interfaces with reusable components, responsive layouts and polished user experiences.",
  },
  {
    number: "02",
    icon: <FaServer />,
    title: "MERN Stack Development",
    description:
      "Complete full-stack applications built with React, Node.js, Express and MongoDB with scalable architecture.",
  },
  {
    number: "03",
    icon: <FaDatabase />,
    title: "API & Backend Systems",
    description:
      "Secure REST APIs, authentication, business logic and efficient server-side systems for modern applications.",
  },
  {
    number: "04",
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    description:
      "Feature-rich online stores with product systems, shopping carts, authentication and smooth checkout flows.",
  },
  {
    number: "05",
    icon: <FaMobileAlt />,
    title: "Responsive Web Solutions",
    description:
      "Interfaces carefully optimized for mobile, tablet and desktop with consistent performance across devices.",
  },
  {
    number: "06",
    icon: <FaRocket />,
    title: "Performance Optimization",
    description:
      "Improve loading speed, code quality and application performance for faster and more reliable products.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f4fbfc] py-8 text-slate-900 sm:py-9 md:py-10"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[5%] top-12 h-52 w-52 rounded-full bg-cyan-300/20 blur-[100px] sm:left-[10%] sm:h-64 sm:w-64 sm:blur-[110px]" />

        <div className="absolute bottom-0 right-[5%] h-60 w-60 rounded-full bg-blue-300/15 blur-[100px] sm:right-[8%] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />

      </div>

      {/* MAIN */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-300/30 bg-white/70 px-3.5 py-2 shadow-sm backdrop-blur-md sm:gap-3 sm:px-4">

            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-cyan-500 sm:text-[9px] sm:tracking-[0.4em]">
              My Services
            </span>

          </div>

          {/* HEADING */}
          <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.045em] text-slate-800 sm:text-4xl md:text-5xl">
            Solutions Built
            <span className="text-cyan-500"> For Growth</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-3 max-w-xl px-2 text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6 md:text-sm">
            From powerful web applications to scalable backend systems,
            I create digital solutions designed around performance,
            usability and real business needs.
          </p>

        </div>

        {/* SERVICE GRID */}
        <div className="mx-auto mt-7 grid w-full max-w-5xl grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex min-h-[225px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/75 p-4 shadow-[0_10px_35px_rgba(15,23,42,.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white/95 hover:shadow-[0_20px_45px_rgba(34,211,238,.15)] sm:min-h-[230px] sm:p-5"
            >

              {/* GLOW */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/0 blur-3xl transition duration-500 group-hover:bg-cyan-300/25" />

              {/* NUMBER */}
              <span className="absolute right-4 top-3 text-[8px] font-semibold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-cyan-400">
                {service.number}
              </span>

              {/* ICON */}
              <div className="relative mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#19afa5] text-base text-white shadow-[0_8px_20px_rgba(25,175,165,.18)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative mt-4 px-2 text-center text-base font-bold leading-5 tracking-tight text-[#453b7b] transition-colors duration-300 group-hover:text-cyan-600 sm:mt-5 sm:text-lg">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative mx-auto mt-3 w-full max-w-[290px] px-1 text-center text-[10px] leading-5 text-slate-400 sm:text-[11px] sm:leading-6">
                {service.description}
              </p>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] origin-center scale-x-0 bg-cyan-400 transition duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;