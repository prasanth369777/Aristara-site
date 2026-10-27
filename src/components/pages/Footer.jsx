
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  Building2,
  Armchair,
  Paintbrush,
  Layers3,
  Handshake,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  ChevronUp,
} from "lucide-react";

import logo from "../../assests/logoa.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/#services" },
    { name: "Our Projects", href: "/#portfolio" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    {
      name: "Residential Construction",
      icon: House,
      href: "/#services",
    },
    {
      name: "Interior Design",
      icon: Armchair,
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
    {
      name: "Joint Venture Projects",
      icon: Handshake,
      href: "/contact",
    },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thank you for your interest! Newsletter subscriptions are not connected yet."
    );
  };

  const scrollToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="w-full overflow-hidden bg-[#fbf8f1] font-['Poppins',sans-serif] text-[#29261f]"
    >
      <div className="mx-auto max-w-[1600px] px-4 pb-4 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pt-10 xl:px-14">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 overflow-hidden border border-[#e8dfd2] bg-white lg:grid-cols-[0.9fr_1.7fr]">
          {/* BRAND PANEL */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#fdfdfb] p-5 text-black sm:p-7 lg:p-9">
            {/* Decorative elements */}
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
              {/* IMPORTED BRAND LOGO */}
              <Link
                to="/"
                aria-label="Aristara Construction home"
                className="inline-flex max-w-full items-center"
              >
                <img
                  src={logo}
                  alt="Aristara Construction"
                  className="h-12 w-auto max-w-[230px] object-contain object-left sm:h-14 lg:h-16"
                  loading="eager"
                  decoding="async"
                />
              </Link>

              {/* BRAND CONTENT */}
              <div className="mt-8 max-w-[440px] sm:mt-10 lg:mt-12">
                <p className="mb-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#eab934] sm:text-[10px]">
                  <span className="h-px w-7 bg-[#eab934]" />
                  Design · Build · Transform
                </p>

                <h2 className="text-[clamp(1.9rem,3.2vw,3rem)] font-semibold leading-[1.13] tracking-[-0.055em] text-black">
                  Building Dreams.
                  <br />
                  <span className="text-[#eab934]">
                    Designing Life.
                  </span>
                </h2>

                <p className="mt-4 max-w-[370px] text-[11px] leading-6 text-black/65 sm:text-xs sm:leading-7">
                  From thoughtfully planned homes to elegant interiors
                  and functional commercial spaces, we bring your
                  vision to life through considered design and
                  quality-focused execution.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 inline-flex min-h-11 items-center gap-3 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29261f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3ca55] sm:text-[11px]"
                >
                  Discuss Your Project

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* BRAND STATEMENT */}
            <div className="relative z-10 mt-8 border-t border-white/15 pt-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-black/50 sm:text-[10px]">
                Thoughtfully Designed.
                <span className="text-[#eab934]"> </span>
                Beautifully Built.
              </p>
            </div>
          </div>

          {/* INFORMATION PANEL */}
          <div className="flex min-w-0 flex-col justify-between p-5 sm:p-7 lg:p-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-3 xl:gap-x-6">
              {/* QUICK LINKS */}
              <div className="min-w-0">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7626] sm:text-[10px]">
                  Discover
                </p>

                <h3 className="mb-5 text-lg font-semibold tracking-[-0.04em] text-[#29261f] sm:text-xl">
                  Quick Links
                </h3>

                <ul className="space-y-3">
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
                  Our Expertise
                </p>

                <h3 className="mb-5 text-lg font-semibold tracking-[-0.04em] text-[#29261f] sm:text-xl">
                  What We Do
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

                <h3 className="mb-5 text-lg font-semibold tracking-[-0.04em] text-[#29261f] sm:text-xl">
                  Let&apos;s Connect.
                </h3>

                <div className="space-y-4">
                  {/* LOCATION */}
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626]">
                      <MapPin size={16} strokeWidth={1.6} />
                    </span>

                    <div>
                      <p className="text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Our Location
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#81786b] sm:text-[11px]">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626]">
                      <Phone size={15} strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Speak With Our Team
                      </p>

                      <Link
                        to="/contact"
                        className="mt-1 inline-block text-[10px] leading-5 text-[#81786b] transition-colors hover:text-[#9b7626] sm:text-[11px]"
                      >
                        Contact for enquiries
                      </Link>
                    </div>
                  </div>

                  {/* EMAIL / CONTACT PAGE */}
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626]">
                      <Mail size={15} strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Project Enquiries
                      </p>

                      <Link
                        to="/contact"
                        className="mt-1 inline-block text-[10px] leading-5 text-[#81786b] transition-colors hover:text-[#9b7626] sm:text-[11px]"
                      >
                        Tell us about your project
                      </Link>
                    </div>
                  </div>

                  {/* WORKING HOURS */}
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f5f0e6] text-[#9b7626]">
                      <Clock3 size={15} strokeWidth={1.6} />
                    </span>

                    <div>
                      <p className="text-[10px] font-semibold text-[#39342b] sm:text-[11px]">
                        Working Hours
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#81786b] sm:text-[11px]">
                        Monday – Saturday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-8 border border-[#e8dfd2] bg-[#fbf8f1] p-4 sm:p-5 lg:mt-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="max-w-[390px]">
                  <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b7626] sm:text-[10px]">
                    Design Inspiration
                  </p>

                  <h3 className="text-sm font-semibold leading-snug tracking-[-0.035em] text-[#29261f] sm:text-base">
                    Ideas That Shape Better Spaces.
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-[#81786b]">
                    Discover design inspiration, construction insights
                    and ideas for your next project.
                  </p>
                </div>

                <form
                  onSubmit={handleSubscribe}
                  className="w-full md:max-w-[340px]"
                >
                  <label
                    htmlFor="footer-email"
                    className="mb-2 block text-[10px] font-medium text-[#625b4f]"
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
        <div className="flex w-full flex-col items-start justify-between gap-2.5 border-b border-[#e6ddcf] py-4 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-[9px] leading-5 text-[#81786b] sm:text-[10px]">
            © {currentYear} Aristara Construction. All rights reserved.
          </p>

          <p className="text-[9px] leading-5 text-[#81786b] sm:text-[10px]">
            Design. Build. Transform.
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
