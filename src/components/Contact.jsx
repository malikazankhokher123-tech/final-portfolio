import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        "service_v80ni9o",
        "template_vte1gg7",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "malikazankhokher123@gmail.com",
        },
        "Fltt7j9c9FbbbsYij"
      );

      console.log("EmailJS Success:", response);

      setStatus("Message sent successfully! ✓");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        error?.text
          ? `Message could not be sent: ${error.text}`
          : "Message could not be sent. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4fbfc] py-6 text-slate-900 sm:py-7 md:py-8"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-[110px]" />

        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-blue-300/15 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      {/* MAIN */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-7 lg:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-500 sm:text-[9px] sm:tracking-[0.4em]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-[-0.06em] text-slate-800 sm:text-4xl">
            Let's Build
            <span className="text-cyan-500"> Something</span>
          </h2>

          <p className="mx-auto mt-2 max-w-lg px-2 text-[10px] leading-5 text-slate-500 sm:px-0 sm:text-xs">
            Have an idea or project in mind? Let's turn your vision into
            a modern and powerful digital experience.
          </p>
        </div>

        {/* CARDS */}
        <div className="mx-auto mt-5 grid w-full max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2">

          {/* LEFT CARD */}
          <div className="relative min-w-0 overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/80 p-4 shadow-[0_12px_35px_rgba(15,23,42,.05)] backdrop-blur-xl sm:p-5">

            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />

            <div className="relative">

              <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-cyan-500 sm:tracking-[0.35em]">
                Contact Details
              </p>

              <h3 className="mt-2 text-lg font-bold leading-tight tracking-tight text-[#453b7b] sm:text-xl">
                Let's discuss your
                <span className="text-cyan-500"> next project.</span>
              </h3>

              <p className="mt-2 max-w-md text-[10px] leading-5 text-slate-400 sm:text-xs">
                Have a project idea? Let's transform it into a clean,
                modern and professional digital experience.
              </p>

              {/* INFO */}
              <div className="mt-4 space-y-2">

                {/* EMAIL */}
                <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-cyan-100 bg-cyan-50/50 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#19afa5] text-xs text-white">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[7px] uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </p>

                    <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-600 sm:text-xs">
                      malikazankhokher123@gmail.com
                    </p>
                  </div>

                </div>

                {/* PHONE */}
                <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-cyan-100 bg-cyan-50/50 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#19afa5] text-xs text-white">
                    <FaPhoneAlt />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[7px] uppercase tracking-[0.2em] text-slate-400">
                      Phone
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-slate-600 sm:text-xs">
                      +92 3170851009
                    </p>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-cyan-100 bg-cyan-50/50 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#19afa5] text-xs text-white">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[7px] uppercase tracking-[0.2em] text-slate-400">
                      Location
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-slate-600 sm:text-xs">
                      Islamabad | Pakistan
                    </p>
                  </div>

                </div>
              </div>

              {/* SOCIAL */}
              <div className="mt-4 flex gap-2">

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-white text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-500"
                >
                  <FaGithub className="text-[11px]" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-white text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-500"
                >
                  <FaLinkedinIn className="text-[11px]" />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative min-w-0 overflow-hidden rounded-[20px] border border-cyan-200/70 bg-white/80 p-4 shadow-[0_12px_35px_rgba(15,23,42,.05)] backdrop-blur-xl sm:p-5">

            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />

            <form
              onSubmit={handleSubmit}
              className="relative space-y-3"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="min-w-0">
                  <label className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-[11px] text-slate-700 outline-none transition-all placeholder:text-slate-300 focus:border-cyan-300 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-[11px] text-slate-700 outline-none transition-all placeholder:text-slate-300 focus:border-cyan-300 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="min-w-0">
                <label className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Project Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to build?"
                  required
                  className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-[11px] text-slate-700 outline-none transition-all placeholder:text-slate-300 focus:border-cyan-300 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* MESSAGE */}
              <div className="min-w-0">
                <label className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full min-w-0 resize-none rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-[11px] leading-5 text-slate-700 outline-none transition-all placeholder:text-slate-300 focus:border-cyan-300 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* STATUS */}
              {status && (
                <p
                  className={`text-center text-[10px] font-semibold ${
                    status.includes("successfully")
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#19afa5] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_20px_rgba(25,175,165,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#149e95] hover:shadow-[0_12px_25px_rgba(25,175,165,.25)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <FaArrowRight className="text-[8px] transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;