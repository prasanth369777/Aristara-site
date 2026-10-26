import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  House,
  Building2,
  Paintbrush,

  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  
  ShieldCheck,
  Ruler,
} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/#portfolio", section: "portfolio" },
    { name: "Why Us", path: "/#why-us", section: "why-us" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      number: "01",
      name: "Interior Design",
      description: "Elegant interiors designed around you.",
      icon: House,
      path: "/",
    },
    {
      number: "02",
      name: "Construction",
      description: "Quality construction, built to last.",
      icon: Building2,
      path: "/",
    },
    {
      number: "03",
      name: "Painting & Finishing",
      description: "Beautiful finishes for every space.",
      icon: Paintbrush,
      path: "/",
    },
    {
      number: "04",
      name: "Turnkey Solutions",
      description: "From concept to final handover.",
      icon: Ruler,
      path: "/",
    },
  ];

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleQuote = () => {
    closeMenus();

    const quoteSection = document.getElementById("quote");

    if (quoteSection) {
      quoteSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (window.location.pathname !== "/contact") {
      navigate("/contact");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSectionNavigation = (event, sectionId) => {
    event.preventDefault();
    closeMenus();

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (window.location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToSection, 250);
    } else {
      scrollToSection();
    }
  };

  const renderNavLink = (link, mobile = false) => {
    if (link.section) {
      return (
        <a
          key={link.name}
          href={link.path}
          onClick={(event) =>
            handleSectionNavigation(event, link.section)
          }
          className={
            mobile
              ? "group flex items-center justify-between rounded-lg px-4 py-3.5 font-['Poppins',sans-serif] text-sm font-medium text-[#302d27] transition-colors hover:bg-[#f5eddd] hover:text-[#a77c19]"
              : "group relative whitespace-nowrap px-3 py-3 font-['Poppins',sans-serif] text-xs font-medium text-[#34312b] transition-colors hover:text-[#b88920] xl:px-4"
          }
        >
          {link.name}

          {mobile ? (
            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="text-[#a99a7e]"
            />
          ) : (
            <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#d4a52e] transition-transform duration-300 group-hover:scale-x-100 xl:left-4 xl:right-4" />
          )}
        </a>
      );
    }

    return (
      <NavLink
        key={link.name}
        to={link.path}
        end={link.path === "/"}
        onClick={closeMenus}
        className={({ isActive }) =>
          mobile
            ? `group flex items-center justify-between rounded-lg px-4 py-3.5 font-['Poppins',sans-serif] text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#f5eddd] text-[#a77c19]"
                  : "text-[#302d27] hover:bg-[#f5eddd] hover:text-[#a77c19]"
              }`
            : `group relative whitespace-nowrap px-3 py-3 font-['Poppins',sans-serif] text-xs font-medium transition-colors xl:px-4 ${
                isActive
                  ? "text-[#b88920]"
                  : "text-[#34312b] hover:text-[#b88920]"
              }`
        }
      >
        {({ isActive }) => (
          <>
            {link.name}

            {mobile ? (
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="text-[#a99a7e]"
              />
            ) : (
              <span
                className={`absolute bottom-1 left-3 right-3 h-[2px] origin-left bg-[#d4a52e] transition-transform duration-300 xl:left-4 xl:right-4 ${
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full font-['Poppins',sans-serif] transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf8f1]/95 shadow-[0_5px_24px_rgba(40,32,18,0.07)] backdrop-blur-xl"
          : "bg-[#fbf8f1]/95"
      }`}
    >
      {/* Main Navigation */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center justify-between gap-3 px-5 sm:px-8 lg:min-h-[84px] lg:px-12 xl:px-16"
      >
        {/* Aristara Brand */}
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="Aristara Interior home"
          className="group flex shrink-0 flex-col items-center"
        >
          {/* Architectural house mark */}
          <span className="mb-0.5 flex h-[27px] items-center justify-center">
            <House
              size={29}
              strokeWidth={1.45}
              className="text-[#c99a29] transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </span>

          <span className="text-[19px] font-semibold leading-none tracking-[0.12em] text-[#25231f] sm:text-[22px]">
            ARISTARA
          </span>

          <span className="mt-1.5 whitespace-nowrap text-[6px] font-medium uppercase tracking-[0.32em] text-[#777064] sm:text-[7px]">
            Interior Design Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          {navLinks.slice(0, 2).map((link) =>
            renderNavLink(link)
          )}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() =>
                setServicesOpen((previous) => !previous)
              }
              className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-3 text-xs font-medium transition-colors xl:px-4 ${
                servicesOpen
                  ? "text-[#b88920]"
                  : "text-[#34312b] hover:text-[#b88920]"
              }`}
            >
              Services

              <ChevronDown
                size={14}
                strokeWidth={1.7}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Services Dropdown Panel */}
            <div
              className={`absolute right-0 top-full z-50 w-[350px] pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-[#e8dfd0] bg-[#fffdf8] shadow-[0_20px_55px_rgba(40,32,18,0.12)]">
                <div className="border-b border-[#e8dfd0] bg-[#f3ecdd] px-5 py-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9c7626]">
                    Our Expertise
                  </p>

                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.5px] text-[#25221c]">
                    Spaces Designed to Inspire.
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-5 text-[#70685b]">
                    Thoughtful design. Quality execution.
                  </p>
                </div>

                <div className="p-2.5">
                  {serviceItems.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={closeMenus}
                        className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-[#f8f1e3]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e9dfcb] bg-white text-[#9d792b] transition-colors group-hover:border-[#d8b75e] group-hover:bg-[#fdf6e5]">
                          <Icon
                            size={19}
                            strokeWidth={1.6}
                          />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-[12px] font-semibold text-[#29261f]">
                            {service.name}
                          </span>

                          <span className="mt-1 block text-[10px] leading-4 text-[#81796c]">
                            {service.description}
                          </span>
                        </span>

                        <span className="text-[9px] font-medium text-[#b4a78e]">
                          {service.number}
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="shrink-0 text-[#aaa08e] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b88920]"
                        />
                      </Link>
                    );
                  })}
                </div>

                <div className="border-t border-[#eee6d8] px-5 py-3">
                  <button
                    type="button"
                    onClick={handleQuote}
                    className="flex w-full items-center justify-between text-xs font-medium text-[#6d6250] transition-colors hover:text-[#a77c19]"
                  >
                    Discuss Your Project
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) =>
            renderNavLink(link)
          )}
        </div>

        {/* Desktop Quote Button */}
        <button
          type="button"
          onClick={handleQuote}
          className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#eab934] px-4 py-3 text-[10px] font-semibold text-[#28241d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] sm:flex lg:px-5 xl:px-6"
        >
          <Ruler size={15} strokeWidth={1.8} />

          <span>Get a Free Quote</span>

          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((previous) => !previous);
            setServicesOpen(false);
          }}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5dccb] bg-white/70 text-[#29251e] transition-colors hover:border-[#d7b458] hover:bg-[#f9efd9] lg:hidden"
        >
          {isOpen ? (
            <X size={21} strokeWidth={1.7} />
          ) : (
            <Menu size={21} strokeWidth={1.7} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute inset-x-0 top-full overflow-y-auto border-t border-[#e8dfd0] bg-[#fbf8f1] shadow-[0_20px_45px_rgba(40,32,18,0.10)] transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible max-h-[calc(100dvh-76px)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[700px] px-5 pb-6 pt-4 sm:px-8">
          {/* Mobile Brand Introduction */}
          <div className="mb-4 flex items-center justify-between rounded-xl border border-[#e9dfcd] bg-[#f3ecdd] p-4">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#a17b27]">
                Aristara Interior
              </p>

              <p className="mt-1.5 text-base font-semibold text-[#28251f]">
                Your Space. Your Story.
              </p>

              <p className="mt-1 text-[11px] text-[#776e60]">
                Designed around your lifestyle.
              </p>
            </div>

            <House
              size={31}
              strokeWidth={1.45}
              className="shrink-0 text-[#c99a29]"
            />
          </div>

          {/* Mobile Links */}
          <p className="mb-2 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b907e]">
            Navigation
          </p>

          <div className="space-y-1">
            {navLinks.map((link) => renderNavLink(link, true))}
          </div>

          {/* Mobile Services Accordion */}
          <div className="mt-4 border-t border-[#e6ddce] pt-3">
            <button
              type="button"
              onClick={() =>
                setServicesOpen((previous) => !previous)
              }
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-[#29251f]"
            >
              Our Services

              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  servicesOpen
                    ? "rotate-180 text-[#b88920]"
                    : "text-[#8c8271]"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                servicesOpen
                  ? "mt-2 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-1">
                  {serviceItems.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={closeMenus}
                        className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-[#f4ecd9]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e7dcc6] bg-white text-[#a17b27]">
                          <Icon size={18} strokeWidth={1.7} />
                        </span>

                        <span className="min-w-0 flex-1 text-xs font-medium text-[#39342b]">
                          {service.name}
                          <span className="mt-1 block text-[10px] font-normal text-[#81796c]">
                            {service.description}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="text-[#a69a84]"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Quote CTA */}
          <button
            type="button"
            onClick={handleQuote}
            className="group mt-5 flex min-h-[50px] w-full items-center justify-between rounded-full bg-[#eab934] px-5 py-3 text-left text-xs font-semibold text-[#28241d] transition-colors hover:bg-[#dca925]"
          >
            <span className="flex items-center gap-2.5">
              <Ruler size={17} />
              Get a Free Quote
            </span>

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          {/* Brand Trust Footer */}
          <div className="mt-5 flex items-center justify-center gap-2 border-t border-[#e6ddce] pt-4">
            <ShieldCheck
              size={15}
              strokeWidth={1.7}
              className="text-[#b58b2a]"
            />

            <span className="text-center text-[9px] font-medium uppercase tracking-[0.1em] text-[#7a7163]">
              Thoughtful Design · Quality Execution
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}