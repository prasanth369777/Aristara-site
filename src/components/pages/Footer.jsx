import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  Building2,
  Armchair,
  Paintbrush,
  Layers3,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/#services" },
    { name: "Our Projects", href: "/#portfolio" },
    { name: "Client Reviews", href: "/#testimonials" },
    { name: "FAQs", href: "/#faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    {
      name: "Interior Design",
      icon: Armchair,
      href: "/#services",
    },
    {
      name: "Residential Construction",
      icon: House,
      href: "/#services",
    },
    {
      name: "Commercial Construction",
      icon: Building2,
      href: "/#services",
    },
    {
      name: "Painting & Finishing",
      icon: Paintbrush,
      href: "/#services",
    },
    {
      name: "Renovation & Remodeling",
      icon: Layers3,
      href: "/#services",
    },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thank you for your interest! Newsletter registration is not connected yet."
    );
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="w-full overflow-hidden bg-[#fbf8f1] font-['Poppins',sans-serif] text-[#29261f]"
    >
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1600px] px-4 pb-4 pt-5 sm:px-6 sm:pt-6 lg:px-10 lg:pt-7 xl:px-14">
        <div className="grid grid-cols-1 overflow-hidden border border-[#e8dfd2] bg-white lg:grid-cols-[0.85fr_1.65fr]">

          {/* BRAND PANEL */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#29261f] p-5 text-white sm:p-7 lg:p-8">

            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/[0.09] sm:h-64 sm:w-64"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#eab934]/20 sm:h-44 sm:w-44"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#c99a29]/10 blur-[60px]"
            />

            <div className="relative z-10">

              {/* BRAND LOGO */}
              <Link
                to="/"
                aria-label="Aristara Interior home"
                className="group inline-flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#eab934]/50 bg-white/5 text-[#eab934] transition-colors group-hover:bg-white/10 sm:h-11 sm:w-11">
                  <House size={24} strokeWidth={1.5} />
                </span>

                <span>
                  <span className="block text-lg font-semibold tracking-[-0.04em] text-white sm:text-xl">
                    ARISTARA
                    <span className="text-[#eab934]">.</span>
                  </span>

                  <span className="mt-0.5 block text-[8px] font-medium uppercase tracking-[0.2em] text-white/55">
                    Interior & Construction
                  </span>
                </span>
              </Link>

              {/* BRAND MESSAGE */}
              <div className="mt-8 max-w-[430px] sm:mt-10 lg:mt-12">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#eab934] sm:text-[10px]">
                  Design · Build · Transform
                </p>

                <h2 className="text-[clamp(1.9rem,3.2vw,3rem)] font-semibold leading-[1.13] tracking-[-0.055em] text-white">
                  Your Vision.
                  <br />
                  Our Craft.
                  <br />
                  <span className="text-[#eab934]">
                    Your Space.
                  </span>
                </h2>

                <p className="mt-3 max-w-[360px] text-[11px] leading-6 text-white/65 sm:text-xs">
                  From thoughtfully designed interiors to construction
                  and finishing, Aristara Interior transforms your ideas
                  into beautiful, functional spaces.
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 inline-flex min-h-10 items-center gap-3 bg-[#eab934] px-5 py-2.5 text-[10px] font-semibold text-[#29261f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3ca55] sm:text-[11px]"
                >
                  Start Your Project

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* BOTTOM BRAND STATEMENT — NO SOCIAL LINKS */}
            <div className="relative z-10 mt-7 border-t border-white/15 pt-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/50">
                Thoughtfully Designed.
                <span className="text-[#eab934]"> </span>
                Beautifully Built.
              </p>
            </div>
          </div>

          {/* RIGHT INFORMATION PANEL */}
          <div className="flex min-w-0 flex-col justify-between p-4 sm:p-6 lg:p-7">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-7 xl:grid-cols-3 xl:gap-x-6">

              {/* QUICK LINKS */}
              <div className="min-w-0">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7626] sm:text-[10px]">
                  Explore
                </p>

                <h3 className="mb-4 text-lg font-semibold tracking-[-0.04em] text-[#29261f] sm:text-xl">
                  Quick Links
                </h3>

                <ul className="space-y-2.5">
                  {quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="group inline-flex items-center gap-2 text-[10px] font-medium text-[#6f675b] transition-colors duration-200 hover:text-[#a17b27] sm:text-[11px]"
                      >
                        <span>{item.name}</span>

                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SERVICES */}
              <div className="min-w-0">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7626] sm:text-[10px]">
                  What We Do
                </p>

                <h3 className="mb-4 text-lg font-semibold tracking-[-0.04em] text-[#29261f] sm:text-xl">
                  Our Services
                </h3>

                <ul className="space-y-3">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="group flex items-center gap-2.5"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626] transition-colors duration-200 group-hover:bg-[#eab934] group-hover:text-[#29261f]">
                            <Icon size={16} strokeWidth={1.6} />
                          </span>

                          <span className="text-[10px] font-medium leading-5 text-[#6f675b] transition-colors group-hover:text-[#a17b27] sm:text-[11px]">
                            {service.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CONTACT INFORMATION */}
              <div className="min-w-0 sm:col-span-2 xl:col-span-1">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7626] sm:text-[10px]">
                  Get In Touch
                </p>

                <h3 className="mb-4 text-lg font-semibold tracking-[-0.04em] text-[#29261f] sm:text-xl">
                  Let's Connect.
                </h3>

                <div className="space-y-3.5">

                  {/* LOCATION */}
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626]">
                      <MapPin size={16} strokeWidth={1.6} />
                    </span>

                    <div>
                      <p className="text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Visit Our Studio
                      </p>

                      <p className="mt-0.5 text-[10px] leading-5 text-[#81786b]">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  {/* PHONE / WHATSAPP */}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626] transition-colors group-hover:bg-[#eab934] group-hover:text-[#29261f]">
                      <Phone size={15} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Talk To Our Team
                      </span>

                      <span className="mt-0.5 block text-[10px] leading-5 text-[#81786b] transition-colors group-hover:text-[#9b7626]">
                        WhatsApp Enquiries
                      </span>
                    </span>
                  </a>

                  {/* EMAIL / CONTACT PAGE */}
                  <Link
                    to="/contact"
                    className="group flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626] transition-colors group-hover:bg-[#eab934] group-hover:text-[#29261f]">
                      <Mail size={15} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Project Enquiries
                      </span>

                      <span className="mt-0.5 block text-[10px] leading-5 text-[#81786b] transition-colors group-hover:text-[#9b7626]">
                        Contact Form
                      </span>
                    </span>
                  </Link>

                  {/* WORKING HOURS */}
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626]">
                      <Clock3 size={15} strokeWidth={1.6} />
                    </span>

                    <div>
                      <p className="text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Working Hours
                      </p>

                      <p className="mt-0.5 text-[10px] leading-5 text-[#81786b]">
                        Monday – Saturday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COMPACT NEWSLETTER */}
            <div className="mt-6 border border-[#e8dfd2] bg-[#fbf8f1] p-4 sm:mt-8 sm:p-5 lg:mt-9">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">

                <div className="max-w-[380px]">
                  <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7626] sm:text-[10px]">
                    Ideas & Inspiration
                  </p>

                  <h3 className="text-sm font-semibold leading-snug tracking-[-0.035em] text-[#29261f] sm:text-base">
                    Good Spaces Start With Good Ideas.
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-[#81786b]">
                    Get interior inspiration and project updates from
                    Aristara Interior.
                  </p>
                </div>

                <form
                  onSubmit={handleSubscribe}
                  className="w-full md:max-w-[340px]"
                >
                  <label
                    htmlFor="footer-email"
                    className="mb-1.5 block text-[10px] font-medium text-[#625b4f]"
                  >
                    Your Email Address
                  </label>

                  <div className="flex min-w-0 items-center gap-2 border border-[#e4dbcd] bg-white p-1.5 focus-within:border-[#c99a29]">
                    <input
                      id="footer-email"
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setMessage("");
                      }}
                      placeholder="name@example.com"
                      autoComplete="email"
                      required
                      className="h-9 min-w-0 flex-1 bg-transparent px-2 text-[10px] text-[#29261f] outline-none placeholder:text-[#aaa092] sm:px-3 sm:text-[11px]"
                    />

                    <button
                      type="submit"
                      className="flex h-9 shrink-0 items-center justify-center gap-1.5 bg-[#29261f] px-3 text-[10px] font-semibold text-white transition-colors hover:bg-[#a17b27] sm:px-4"
                    >
                      Subscribe
                      <Send size={12} strokeWidth={1.7} />
                    </button>
                  </div>

                  {message && (
                    <p
                      role="status"
                      className="mt-2 text-[9px] leading-5 text-[#81786b]"
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex w-full flex-col items-start justify-between gap-2.5 border-b border-[#e6ddcf] py-3.5 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-[9px] leading-5 text-[#81786b] sm:text-[10px]">
            © {currentYear} Aristara Interior. All rights reserved.
          </p>

          <p className="text-[9px] leading-5 text-[#81786b] sm:text-[10px]">
            Thoughtfully Designed. Beautifully Built.
          </p>

          <a
            href="#top"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[9px] font-semibold text-[#6f675b] transition-colors hover:text-[#a17b27] sm:text-[10px]"
          >
            Back To Top

            <span className="flex h-7 w-7 items-center justify-center border border-[#e6ddcf] transition-colors group-hover:border-[#c99a29] group-hover:bg-[#eab934]">
              <ChevronUp size={14} strokeWidth={1.7} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}