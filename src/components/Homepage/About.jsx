import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  House,
  Building2,
  Paintbrush,
  Clock3,
  ShieldCheck,
  Ruler,
  CheckCircle2,
} from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

const services = [
  {
    number: "01",
    icon: House,
    title: "Interior Design",
    description:
      "Thoughtfully planned interiors that balance beauty, comfort and everyday functionality.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Construction",
    description:
      "Well-planned construction solutions with attention to quality and execution.",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Painting & Finishing",
    description:
      "Professional painting and finishing that bring every space together.",
  },
  {
    number: "04",
    icon: Ruler,
    title: "Turnkey Solutions",
    description:
      "Coordinated project execution from initial planning to final handover.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "Careful attention to materials, detailing and the quality of the finished space.",
  },
  {
    icon: Clock3,
    title: "Planned Execution",
    description:
      "A structured approach to project stages, coordination and delivery.",
  },
  {
    icon: Ruler,
    title: "Thoughtful Design",
    description:
      "Spaces planned around your requirements, lifestyle and available budget.",
  },
];

export default function About() {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full overflow-hidden bg-[#fbf8f1] font-['Poppins',sans-serif] text-[#25231f]"
    >
      {/* HERO / ABOUT INTRODUCTION */}
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-9 md:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[570px]">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-[2px] w-8 bg-[#c99a29]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a] sm:text-[10px] sm:tracking-[0.23em]">
                About Aristara Interior
              </span>
            </div>

            <h1
              id="about-heading"
              className="max-w-[600px] text-[clamp(2.3rem,5.1vw,4.4rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#22211e]"
            >
              We Build More Than{" "}
              <span className="text-[#c99a29]">Buildings.</span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[12px] leading-[1.9] text-[#625d53] sm:mt-6 sm:text-[13px] sm:leading-[2] lg:text-[13px]">
              Aristara Interior brings interior design, construction and
              finishing solutions together to create spaces that reflect
              your vision. From residential interiors to commercial
              projects, we combine thoughtful planning, practical design
              and quality workmanship to help bring your ideas to life.
            </p>

            <p className="mt-3 max-w-[460px] text-[12px] leading-[1.9] text-[#625d53] sm:text-[13px]">
              Every space starts with an idea. Our focus is to turn that
              idea into a functional, welcoming and beautifully finished
              environment.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex min-h-[44px] items-center gap-3 rounded-md bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251d] shadow-[0_5px_14px_rgba(201,154,41,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] sm:min-h-[46px] sm:px-6 sm:text-[11px]"
              >
                Know More About Us

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="group inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-[10px] font-medium text-[#49443b] transition-colors hover:text-[#a77c19] sm:text-[11px]"
              >
                Explore Services

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            {/* Compact trust indicators */}
            <div className="mt-8 grid max-w-[480px] grid-cols-2 gap-x-5 gap-y-4 border-t border-[#e4dbca] pt-5 sm:mt-9 sm:grid-cols-3 sm:gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#a67e25]"
                />

                <div>
                  <p className="text-[10px] font-semibold text-[#302c25]">
                    Quality First
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#81786a]">
                    Attention to detail
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock3
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#38342c]"
                />

                <div>
                  <p className="text-[10px] font-semibold text-[#302c25]">
                    Planned Work
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#81786a]">
                    Organised execution
                  </p>
                </div>
              </div>

              <div className="col-span-2 flex items-start gap-2.5 sm:col-span-1">
                <Ruler
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#38342c]"
                />

                <div>
                  <p className="text-[10px] font-semibold text-[#302c25]">
                    Complete Solutions
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#81786a]">
                    Design to finishing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ARCHITECTURAL IMAGE COLLAGE */}
          <div className="relative min-w-0">
            {/* Decorative background frame */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-tr-2xl border-r border-t border-[#d8b75e] sm:-right-4 sm:-top-4 sm:h-24 sm:w-24"
            />

            <div className="grid h-[310px] grid-cols-[0.9fr_1.1fr] gap-2.5 sm:h-[410px] sm:gap-3 md:h-[450px] lg:h-[400px] xl:h-[465px]">
              {/* Main construction image */}
              <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                <img
                  src={Image1}
                  alt="Construction project and architectural planning"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-4 sm:right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#eab934] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#29251d] sm:px-2.5 sm:text-[9px]">
                    <Building2 size={11} />
                    Build
                  </span>

                  <p className="mt-2 text-[11px] font-semibold leading-5 text-white sm:text-sm">
                    Built with Purpose.
                  </p>

                  <p className="mt-0.5 hidden text-[9px] leading-4 text-white/80 sm:block">
                    Thoughtful planning. Quality execution.
                  </p>
                </div>
              </div>

              {/* Interior image collage */}
              <div className="grid min-h-0 grid-rows-[1fr_0.86fr] gap-2.5 sm:gap-3">
                {/* Living room */}
                <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                  <img
                    src={Image2}
                    alt="Contemporary living room interior design"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4">
                    <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/90 sm:text-[9px]">
                      01 / Interiors
                    </span>

                    <p className="mt-1 text-[10px] font-semibold text-white sm:text-xs">
                      Spaces to Live In
                    </p>
                  </div>
                </div>

                {/* Kitchen and finishing images */}
                <div className="grid min-h-0 grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                    <img
                      src={Image3}
                      alt="Modern interior finishes and materials"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/85">
                        02 / Design
                      </span>
                    </div>
                  </div>

                  <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                    <img
                      src={Image4}
                      alt="Architectural details and finished interiors"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/85">
                        03 / Finish
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom image caption */}
            <div className="mt-3 flex items-center justify-between gap-3 border-b border-[#e4dbca] pb-3">
              <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#766c5b] sm:text-[10px]">
                Design. Build. Finish.
              </p>

              <p className="text-[9px] text-[#8c8170] sm:text-[10px]">
                Thoughtful spaces, lasting value.
              </p>
            </div>

            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 -z-10 h-14 w-14 border-b border-l border-[#d8b75e] sm:-bottom-4 sm:-left-4 sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div
        id="services"
        className="scroll-mt-24 border-t border-[#e8dfd0] bg-[#f5f0e6] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#c99a29]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                  What We Do
                </span>
              </div>

              <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#25231f] sm:text-3xl lg:text-4xl">
                Complete Solutions for{" "}
                <span className="text-[#c99a29]">Better Spaces.</span>
              </h2>
            </div>

            <p className="max-w-md text-[11px] leading-6 text-[#6e675b] sm:text-xs sm:leading-7">
              From the initial concept to the finishing touches, bring
              your project together with a coordinated approach to design
              and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative flex min-h-[200px] flex-col border border-[#e5dccb] bg-[#fbf8f1] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b458] sm:min-h-[220px] sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-[#e5dccb] bg-white text-[#a17b27] transition-colors group-hover:border-[#d9b75e] group-hover:bg-[#f7edcf]">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>

                    <span className="text-[10px] font-medium tracking-[0.1em] text-[#b0a48d]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[14px] font-semibold text-[#29261f]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-6 text-[#746c60] sm:text-[11px]">
                    {service.description}
                  </p>

                  <div className="mt-auto flex justify-end pt-4">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#9c792e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* WHY ARISTARA */}
      <div
        id="why-us"
        className="scroll-mt-24 bg-[#fbf8f1] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 sm:px-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#c99a29]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                The Aristara Approach
              </span>
            </div>

            <h2 className="max-w-lg text-2xl font-semibold leading-[1.2] tracking-[-0.045em] text-[#25231f] sm:text-3xl lg:text-4xl">
              Good Design Is More Than What You See.
            </h2>

            <p className="mt-4 max-w-lg text-[11px] leading-7 text-[#6e675b] sm:text-xs sm:leading-7">
              A well-designed space should look beautiful, feel
              comfortable and function naturally. Our approach considers
              your requirements, the practical details and the quality
              of the final result.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group mt-6 inline-flex items-center gap-3 text-[11px] font-semibold text-[#6d5421] transition-colors hover:text-[#b88920]"
            >
              Discuss Your Project

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="border-t-2 border-[#d7b24b] bg-[#f5f0e6] p-5 sm:min-h-[190px] sm:p-5"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                    className="text-[#9c792e]"
                  />

                  <h3 className="mt-4 text-[12px] font-semibold text-[#302c25]">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-6 text-[#746c60]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* FINAL CALL TO ACTION */}
      <div
        id="contact"
        className="scroll-mt-24 border-t border-[#e5dccb] bg-[#f3ecdd] py-12 sm:py-16"
      >
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2
                size={17}
                strokeWidth={1.6}
                className="text-[#a17b27]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                Start Something Exceptional
              </span>
            </div>

            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#25231f] sm:text-3xl">
              Let's Bring Your Vision to Life.
            </h2>

            <p className="mt-3 max-w-xl text-[11px] leading-6 text-[#6e675b] sm:text-xs sm:leading-7">
              Tell us about your home, renovation or commercial project.
              Let's explore the right design and execution approach for
              your space.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const quote = document.getElementById("quote");

              if (quote) {
                quote.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              } else {
                window.location.href = "/contact";
              }
            }}
            className="group inline-flex min-h-[46px] shrink-0 items-center justify-center gap-3 self-start rounded-md bg-[#eab934] px-6 py-3 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] md:self-center"
          >
            Get a Free Consultation

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}