import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Nexora",
    category: "FULL STACK",
    description:
      "Modern full-stack application with a clean UI and powerful backend.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node", "MongoDB"],
  },
  {
    number: "02",
    title: "Velora",
    category: "E-COMMERCE",
    description:
      "Modern shopping platform with products, categories and cart system.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node", "MongoDB"],
  },
  {
    number: "03",
    title: "Finova",
    category: "DASHBOARD",
    description:
      "Clean analytics dashboard designed for simple data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Tailwind", "Node"],
  },
  {
    number: "04",
    title: "Medora",
    category: "WEB APP",
    description:
      "Professional healthcare platform with a simple user experience.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Express", "MongoDB"],
  },
  {
    number: "05",
    title: "Syntra",
    category: "AI PLATFORM",
    description:
      "Modern AI-powered platform designed for smarter workflows and productivity.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node", "OpenAI"],
  },
  {
    number: "06",
    title: "Travelio",
    category: "TRAVEL",
    description:
      "Modern travel platform focused on destinations and exploration.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node", "Express"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f4fbfc] py-8 text-slate-900 sm:py-9 md:py-10"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-12 h-64 w-64 rounded-full bg-cyan-300/20 blur-[110px]" />

        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-blue-300/15 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      {/* MAIN */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-7 lg:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/30 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-3 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />

            <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.3em] text-cyan-500 sm:text-[9px] sm:tracking-[0.4em]">
              My Projects
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-slate-800 sm:text-4xl md:text-5xl">
            Selected
            <span className="text-cyan-500"> Work</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl px-2 text-[11px] leading-5 text-slate-500 sm:px-0 sm:text-xs sm:leading-6 md:text-sm">
            A collection of modern digital products built with clean
            interfaces, scalable architecture and powerful technologies.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mx-auto mt-7 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex min-w-0 min-h-[320px] flex-col overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/75 shadow-[0_10px_35px_rgba(15,23,42,.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white/95 hover:shadow-[0_20px_45px_rgba(34,211,238,.15)]"
            >

              {/* IMAGE */}
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden sm:h-[145px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/5 to-transparent" />

                {/* NUMBER */}
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[7px] font-medium tracking-[0.2em] text-white backdrop-blur-md">
                  {project.number}
                </span>

                {/* CATEGORY */}
                <span className="absolute right-3 top-3 max-w-[55%] truncate rounded-full border border-cyan-300/30 bg-black/30 px-2.5 py-1 text-[6px] font-semibold tracking-[0.18em] text-cyan-100 backdrop-blur-md">
                  {project.category}
                </span>

                {/* ARROW */}
                <div className="absolute bottom-3 right-3 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full bg-white text-xs text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex min-w-0 flex-1 flex-col p-4">

                {/* TITLE */}
                <h3 className="text-lg font-bold tracking-tight text-[#453b7b] transition-colors duration-300 group-hover:text-cyan-600">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-1.5 text-[10px] leading-5 text-slate-400">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-100 bg-cyan-50 px-2 py-1 text-[7px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors duration-300 group-hover:border-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="mt-auto mb-3 pt-4">
                  <div className="h-px bg-slate-200/70" />
                </div>

                {/* BUTTONS */}
                <div className="flex w-full gap-2">

                  <a
                    href="#"
                    className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md bg-[#19afa5] px-2 py-2.5 text-[7px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_6px_15px_rgba(25,175,165,.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#149e95] hover:shadow-[0_8px_18px_rgba(25,175,165,.22)] sm:px-3 sm:text-[8px] sm:tracking-[0.12em]"
                  >
                    <span>Live Demo</span>

                    <FaExternalLinkAlt className="shrink-0 text-[6px]" />
                  </a>

                  <a
                    href="#"
                    className="flex h-9 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-200 bg-white text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-500"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub className="text-sm" />
                  </a>

                </div>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-7 right-7 h-[2px] origin-center scale-x-0 bg-cyan-400 transition duration-500 group-hover:scale-x-100" />

            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;