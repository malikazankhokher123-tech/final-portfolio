import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5 lg:px-8">
      <nav className="mx-auto w-full max-w-7xl">

        {/* MAIN NAVBAR */}
        <div className="flex min-h-[64px] w-full items-center justify-between rounded-[18px] border border-slate-200 bg-white/95 px-3 shadow-[0_15px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:min-h-[68px] sm:rounded-[20px] sm:px-4 md:min-h-[72px] md:rounded-[22px] md:px-5 lg:h-[74px] lg:px-6">

          {/* LOGO */}
          <a
            href="#home"
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#0EBEC0] text-base font-black text-white shadow-[0_8px_22px_rgba(14,190,192,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0aa9ab] group-hover:shadow-[0_12px_30px_rgba(14,190,192,0.40)] sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg md:h-11 md:w-11">
              A

              <span className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-white transition duration-300 group-hover:bg-slate-900 sm:h-2.5 sm:w-2.5" />
            </div>

            {/* AZAN + FULL STACK */}
            <div className="block min-w-0">
              <h1 className="text-xs font-bold tracking-[0.18em] text-slate-900 transition duration-300 group-hover:text-[#0EBEC0] sm:text-sm sm:tracking-[0.22em]">
                AZAN
              </h1>

              <p className="mt-0.5 whitespace-nowrap text-[7px] tracking-[0.22em] text-slate-400 sm:mt-1 sm:text-[8px] sm:tracking-[0.28em]">
                FULL STACK
              </p>
            </div>
          </a>

          {/* DESKTOP / LARGE TABLET NAV */}
          <div className="hidden items-center gap-1 rounded-2xl border border-slate-200 bg-slate-50/80 p-1 lg:flex">

            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="group relative overflow-hidden rounded-xl px-3 py-2.5 xl:px-5 xl:py-3"
              >

                {/* HOVER BACKGROUND */}
                <span className="absolute inset-0 rounded-xl bg-[#0EBEC0] opacity-0 transition-all duration-300 group-hover:opacity-100" />

                <span className="relative flex items-center gap-1.5 xl:gap-2">
                  <span className="text-[11px] text-slate-500 transition duration-300 group-hover:text-white xl:text-[13px]">
                    {link.name}
                  </span>
                </span>

                {/* HOVER LINE */}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 xl:left-5 xl:right-5" />

              </a>
            ))}

          </div>

          {/* RIGHT AREA - DESKTOP */}
          <div className="hidden items-center gap-2 lg:flex xl:gap-3">

            {/* STATUS */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 xl:px-3 xl:py-2.5">

              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              <span className="text-[8px] uppercase tracking-[0.15em] text-slate-500 xl:text-[9px] xl:tracking-[0.18em]">
                Available
              </span>

            </div>

            {/* LET'S TALK */}
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-[#0EBEC0] px-3 py-2.5 text-[11px] font-bold text-white shadow-[0_8px_22px_rgba(14,190,192,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0aa9ab] hover:shadow-[0_14px_32px_rgba(14,190,192,0.38)] xl:gap-3 xl:px-4 xl:py-3 xl:text-xs"
            >
              Let's Talk

              <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-white/15 text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white/25 xl:h-6 xl:w-6 xl:text-sm">
                ↗
              </span>
            </a>

          </div>

          {/* TABLET / MOBILE BUTTON */}
          <button
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-lg text-slate-800 transition-all duration-300 hover:border-[#0EBEC0] hover:bg-[#0EBEC0] hover:text-white sm:h-11 sm:w-11 sm:text-xl lg:hidden"
          >
            {menu ? "×" : "☰"}
          </button>

        </div>

        {/* MOBILE + TABLET MENU */}
        {menu && (
          <div className="mt-2 w-full rounded-[18px] border border-slate-200 bg-white/95 p-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:mt-3 sm:rounded-[22px] sm:p-3 lg:hidden">

            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={() => setMenu(false)}
                className="group relative flex items-center justify-between overflow-hidden rounded-xl px-3.5 py-3.5 transition-all duration-300 hover:bg-[#0EBEC0] sm:px-4 sm:py-4"
              >

                <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                  <span className="text-sm text-slate-600 transition duration-300 group-hover:text-white sm:text-[15px]">
                    {link.name}
                  </span>
                </div>

                <span className="relative z-10 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                  ↗
                </span>

              </a>
            ))}

            {/* MOBILE / TABLET LET'S TALK */}
            <a
              href="#contact"
              onClick={() => setMenu(false)}
              className="mt-2 flex items-center justify-between rounded-xl bg-[#0EBEC0] px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(14,190,192,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0aa9ab] hover:shadow-[0_12px_28px_rgba(14,190,192,0.35)] sm:py-4"
            >

              <span>Let's Talk</span>

              <span className="transition duration-300">
                ↗
              </span>

            </a>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;