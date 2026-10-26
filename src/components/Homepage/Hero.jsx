import { useCallback, useEffect, useState } from "react";
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
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(nextSlide, 6500);
    return () => window.clearInterval(timer);
  }, [nextSlide, paused]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  return (
    <section
      aria-label="Aristara Interior design and construction"
      className="relative isolate w-full overflow-hidden bg-[#fbf8f1] font-['Poppins',sans-serif] text-[#202020]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Background architecture images */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#e8e1d5]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === index
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
            aria-hidden="true"
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover object-center lg:object-[center_45%]"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Bright editorial overlays inspired by the reference */}
      <div className="absolute inset-0 -z-10 bg-white/10" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fbf8f1] from-[0%] via-[#fbf8f1]/95 via-[31%] to-[#fbf8f1]/5 to-[72%]" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17130e]/30 via-transparent to-white/10 lg:from-transparent" />

      {/* Header */}
      <header className="relative z-30 mx-auto flex min-h-[82px] w-full max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:min-h-[96px] lg:px-12 xl:px-16">
        {/* Brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Aristara Interior home"
          className="group flex shrink-0 flex-col items-center"
        >
          <House
            size={30}
            strokeWidth={1.5}
            className="mb-0.5 text-[#c99a29] transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span className="text-[21px] font-semibold leading-none tracking-[0.12em] text-[#202020] sm:text-[23px]">
            ARISTARA
          </span>
          <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.36em] text-[#777064] sm:text-[8px]">
            Interior Design Studio
          </span>
        </button>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:gap-9 lg:flex"
        >
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Services", "services"],
            ["Projects", "projects"],
            ["Why Us", "why-us"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="relative py-2 text-[12px] font-medium text-[#34312d] transition-colors duration-200 hover:text-[#bd8d1e] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#d9aa36] after:transition-all hover:after:w-full"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Header CTA */}
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="hidden shrink-0 items-center gap-2.5 rounded-full bg-[#eab934] px-5 py-3 text-[11px] font-semibold text-[#29251d] shadow-[0_6px_18px_rgba(201,154,41,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] sm:flex lg:px-6"
        >
          <House size={15} strokeWidth={2} />
          <span>Get a Free Quote</span>
          <ArrowRight size={15} />
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-[#dfd6c6] bg-white/80 text-[#24211c] lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-4 right-4 top-[76px] z-40 rounded-2xl border border-[#e8dfd0] bg-[#fffdf8] p-4 shadow-xl sm:left-auto sm:right-8 sm:w-[300px] lg:hidden"
        >
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Services", "services"],
            ["Projects", "projects"],
            ["Why Us", "why-us"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="flex w-full items-center justify-between border-b border-[#eee7da] px-3 py-3.5 text-left text-sm font-medium text-[#28251f] last:border-b-0 hover:text-[#b88617]"
            >
              {label}
              <ArrowUpRight size={15} />
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#eab934] px-4 py-3 text-sm font-semibold text-[#29251d]"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </button>
        </nav>
      )}

      {/* Hero content */}
      <div
        id="home"
        className="relative mx-auto flex min-h-[620px] w-full max-w-[1600px] items-center px-5 pb-28 pt-12 sm:min-h-[670px] sm:px-8 sm:pt-14 md:min-h-[700px] lg:min-h-[min(690px,calc(100svh-96px))] lg:px-12 lg:pb-32 lg:pt-12 xl:min-h-[650px] xl:px-16"
      >
        <div
          key={activeSlide.id}
          className="w-full max-w-[690px] motion-safe:animate-[aristaraEnter_650ms_ease-out]"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
            <span className="h-[2px] w-8 bg-[#c99a29]" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8c6a25] sm:text-[10px] sm:tracking-[0.24em]">
              {activeSlide.tag}
            </p>
          </div>

          {/* Main headline */}
          <h1 className="max-w-[690px] text-[clamp(2.65rem,6.2vw,5.3rem)] font-semibold leading-[1.06] tracking-[-0.065em] text-[#202020]">
            {activeSlide.title}
            <span className="mt-1 block text-[#c79625]">
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Supporting description */}
          <p className="mt-6 max-w-[480px] text-[13px] leading-[1.9] text-[#5f5a51] sm:mt-7 sm:text-[14px] sm:leading-[1.95]">
            {activeSlide.description}
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-md bg-[#eab934] px-5 py-3 text-[11px] font-semibold text-[#28241d] shadow-[0_6px_16px_rgba(201,154,41,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] sm:min-h-[52px] sm:px-6 sm:text-xs"
            >
              Get a Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group inline-flex min-h-[49px] items-center justify-center gap-2 rounded-md border border-[#8c8578] bg-white/60 px-5 py-3 text-[11px] font-semibold text-[#292722] transition-all duration-300 hover:border-[#c99a29] hover:bg-white sm:min-h-[52px] sm:px-6 sm:text-xs"
            >
              View Our Projects
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Compact trust indicators */}
          <div className="mt-9 grid max-w-[590px] grid-cols-2 gap-x-5 gap-y-5 border-t border-[#d9d0c1] pt-6 sm:mt-10 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-3 sm:pt-7">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex items-start gap-2.5">
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                    className={`mt-0.5 shrink-0 ${
                      index === 0 ? "text-[#bd8c20]" : "text-[#39352f]"
                    }`}
                  />
                  <div>
                    <p className="text-[10px] font-semibold leading-4 text-[#292722] sm:text-[10px]">
                      {benefit.title}
                    </p>
                    <p className="mt-0.5 text-[9px] leading-4 text-[#777064]">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/30 bg-[#fbf8f1]/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-[65px] w-full max-w-[1600px] items-center justify-between gap-4 px-5 sm:min-h-[72px] sm:px-8 lg:px-12 xl:px-16">
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-xs font-semibold tabular-nums text-[#b58720]">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-7 bg-[#c9bda7] sm:w-10" />
            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#777064] sm:text-[10px]">
              Featured Design
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div
              className="mr-1 flex items-center gap-1.5 sm:mr-3"
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
                      ? "w-6 bg-[#c99a29]"
                      : "w-1.5 bg-[#c8c0b3] hover:bg-[#a68b56]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="grid size-8 place-items-center rounded-full border border-[#d8cdbb] text-[#38332a] transition hover:border-[#c99a29] hover:bg-[#eab934] sm:size-9"
            >
              <ChevronLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="grid size-8 place-items-center rounded-full border border-[#d8cdbb] text-[#38332a] transition hover:border-[#c99a29] hover:bg-[#eab934] sm:size-9"
            >
              <ChevronRight size={17} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#5c5549] transition hover:text-[#b58720] md:flex"
          >
            Explore Services
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes aristaraEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        #home,
        #about,
        #services,
        #projects,
        #why-us,
        #contact {
          scroll-margin-top: 24px;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
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