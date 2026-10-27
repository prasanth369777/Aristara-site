
import React, { useCallback, useEffect, useState } from "react";
import HeroAnimation from "../HeroAnimation";
import {
  ArrowRight,
  ArrowUpRight,
  House,
  Clock3,
  BadgeCheck,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import Logo from "../../assests/logoa.png";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

const slides = [
  {
    id: 1,
    tag: "INTERIOR DESIGN · CONSTRUCTION",
    title: "Beautiful Spaces.",
    highlight: "Exceptional Living.",
    description:
      "From thoughtful interior design to complete construction, we transform your vision into elegant, functional spaces crafted around your lifestyle.",
    image: Image1,
    alt: "Premium architectural and interior design",
  },
  {
    id: 2,
    tag: "LUXURY INTERIOR DESIGN",
    title: "Your Dream Home.",
    highlight: "Our Expertise.",
    description:
      "Discover bespoke interiors, refined materials and intelligent space planning that bring comfort, sophistication and your personal style together.",
    image: Image2,
    alt: "Contemporary luxury interior design",
  },
  {
    id: 3,
    tag: "RESIDENTIAL & COMMERCIAL",
    title: "Built with Purpose.",
    highlight: "Designed to Last.",
    description:
      "From initial planning to the final finish, we bring quality workmanship and considered design together for residential and commercial spaces.",
    image: Image3,
    alt: "Modern residential and commercial architecture",
  },
  {
    id: 4,
    tag: "PAINTING · FINISHES",
    title: "Perfect Finishes.",
    highlight: "Lasting Impressions.",
    description:
      "Elevate every wall and surface with professional painting, decorative finishes and practical solutions that complete your space beautifully.",
    image: Image4,
    alt: "Premium painting and architectural finishes",
  },
];

const benefits = [
  {
    icon: House,
    title: "Quality Design",
    subtitle: "Thoughtful spaces",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    subtitle: "Planned execution",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Process",
    subtitle: "Clear communication",
  },
  {
    icon: ShieldCheck,
    title: "Complete Support",
    subtitle: "From start to finish",
  },
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Why Us", "why-us"],
  ["Contact", "contact"],
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  const activeSlide = slides[current];

  const nextSlide = useCallback(() => {
    setCurrent((previous) => (previous + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
    const nextIndex = (current + 1) % slides.length;
    const image = new Image();
    image.src = slides[nextIndex].image;
  }, [current]);

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(nextSlide, 6500);
    return () => window.clearInterval(timer);
  }, [nextSlide, paused]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "auto"
        : "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <section
      id="hero-section"
      aria-label="Aristara Interior design and construction"
      className="relative isolate w-full overflow-hidden bg-[#fbf8f1] font-['Poppins',sans-serif] text-[#29261f]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Background slider */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden bg-[#fbf8f1]"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              current === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover object-center opacity-[0.08] lg:object-[center_45%]"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Ivory overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-[#fbf8f1] via-[#fbf8f1]/95 to-[#fbf8f1]/75"
      />

      {/* Header */}
      <header className="relative z-30 mx-auto flex min-h-[80px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:min-h-[88px] sm:px-6 lg:min-h-[96px] lg:px-10 xl:px-14">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Aristara Interior home"
          className="flex shrink-0 items-center"
        >
          <img
            src={Logo}
            alt="Aristara Interior"
            className="h-14 w-auto max-w-[200px] object-contain sm:h-16 sm:max-w-[230px] lg:h-[76px] lg:max-w-[270px]"
            loading="eager"
            decoding="async"
          />
        </button>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-7"
        >
          {navigation.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="relative py-2 text-[10px] font-medium text-[#34312d] transition-colors hover:text-[#bd8d1e] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#d9aa36] after:transition-all hover:after:w-full xl:text-[11px]"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#eab934] px-3.5 py-2.5 text-[9px] font-semibold text-[#29251d] transition-colors hover:bg-[#dca925] sm:flex lg:px-4"
        >
          <House size={13} />
          <span>Get a Free Quote</span>
          <ArrowRight size={13} />
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="grid size-9 shrink-0 place-items-center rounded-full border border-[#dfd6c6] bg-white/90 text-[#24211c] lg:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-3 right-3 top-[76px] z-40 rounded-lg border border-[#e8dfd0] bg-[#fffdf8] p-3 shadow-lg sm:left-auto sm:right-6 sm:top-[82px] sm:w-[270px] lg:hidden"
        >
          {navigation.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="flex w-full items-center justify-between border-b border-[#eee7da] px-3 py-2.5 text-left text-[11px] font-medium text-[#28251f] last:border-b-0 hover:text-[#b88617]"
            >
              {label}
              <ArrowUpRight size={13} />
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-[#eab934] px-4 py-2.5 text-[10px] font-semibold text-[#29251d]"
          >
            Get a Free Quote
            <ArrowRight size={14} />
          </button>
        </nav>
      )}

      {/* Main hero content */}
      <div
        id="home"
        className="relative mx-auto w-full max-w-[1600px] px-4 pb-24 pt-5 sm:px-6 sm:pt-8 lg:px-10 lg:pb-28 lg:pt-4 xl:px-14"
      >
        <div className="grid min-h-[560px] grid-cols-1 items-center gap-5 sm:min-h-[590px] md:min-h-[610px] lg:min-h-[min(640px,calc(100svh-96px))] lg:grid-cols-[1fr_0.95fr] lg:gap-3 xl:min-h-[620px]">
          {/* Left content */}
          <div
            key={activeSlide.id}
            className="relative z-10 w-full max-w-[620px] py-6 motion-safe:animate-[aristaraEnter_500ms_ease-out] lg:py-8"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2.5 sm:mb-5">
              <span className="h-px w-7 bg-[#c99a29]" />
              <p className="text-[8px] font-semibold uppercase tracking-[0.17em] text-[#8c6a25] sm:text-[9px] sm:tracking-[0.2em]">
                {activeSlide.tag}
              </p>
            </div>

            <h1 className="max-w-[620px] text-[clamp(2.1rem,4.8vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#202020]">
              {activeSlide.title}
              <span className="mt-1 block text-[#c79625]">
                {activeSlide.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-[430px] text-[11px] leading-[1.85] text-[#5f5a51] sm:mt-6 sm:text-[12px] sm:leading-[1.9]">
              {activeSlide.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex min-h-[42px] items-center justify-center gap-2.5 rounded-md bg-[#eab934] px-4 py-2.5 text-[9px] font-semibold text-[#28241d] transition-colors hover:bg-[#dca925] sm:min-h-[45px] sm:px-5 sm:text-[10px]"
              >
                Get a Free Consultation
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md border border-[#8c8578] bg-white/70 px-4 py-2.5 text-[9px] font-semibold text-[#292722] transition-colors hover:border-[#c99a29] hover:bg-white sm:min-h-[45px] sm:px-5 sm:text-[10px]"
              >
                View Our Projects
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-7 grid max-w-[550px] grid-cols-2 gap-x-4 gap-y-4 border-t border-[#d9d0c1] pt-5 sm:mt-8 sm:grid-cols-4 sm:gap-x-3 sm:gap-y-3 sm:pt-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-2"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className={`mt-0.5 shrink-0 ${
                        index === 0 ? "text-[#bd8c20]" : "text-[#39352f]"
                      }`}
                    />
                    <div>
                      <p className="text-[9px] font-semibold leading-4 text-[#292722]">
                        {benefit.title}
                      </p>
                      <p className="mt-0.5 text-[8px] leading-4 text-[#777064]">
                        {benefit.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Animated cartoon designer */}
          <div className="relative z-10 mx-auto w-full max-w-[560px] lg:max-w-none">
            <HeroAnimation />
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-[#e8dfd0] bg-[#fbf8f1]">
        <div className="mx-auto flex min-h-[54px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:min-h-[60px] sm:gap-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="text-[10px] font-semibold tabular-nums text-[#b58720] sm:text-[11px]">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-[#c9bda7] sm:w-8" />
            <span className="hidden text-[8px] font-medium uppercase tracking-[0.12em] text-[#777064] sm:block sm:text-[9px]">
              Featured Design
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div
              className="mr-1 flex items-center gap-1 sm:mr-2"
              role="group"
              aria-label="Select featured design"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-pressed={current === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-5 bg-[#c99a29]"
                      : "w-1.5 bg-[#c8c0b3] hover:bg-[#a68b56]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="grid size-7 place-items-center rounded-full border border-[#d8cdbb] text-[#38332a] transition-colors hover:border-[#c99a29] hover:bg-[#eab934] sm:size-8"
            >
              <ChevronLeft size={15} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="grid size-7 place-items-center rounded-full border border-[#d8cdbb] text-[#38332a] transition-colors hover:border-[#c99a29] hover:bg-[#eab934] sm:size-8"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="hidden items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#5c5549] transition-colors hover:text-[#b58720] md:flex"
          >
            Explore Services
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes aristaraEnter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /home, /about, /services, /projects, /why-us, /contact {
          scroll-margin-top: 20px;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
