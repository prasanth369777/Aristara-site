import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Eye,
  Target,
  Compass,
  ShieldCheck,
  Clock3,
  Ruler,
  CheckCircle2,
  House,
  Building2,
  Paintbrush,
} from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

const aboutHighlights = [
  {
    number: "01",
    icon: BookOpen,
    title: "Our Story",
    description:
      "Aristara brings interior design, construction and finishing together to create thoughtful spaces built around your needs.",
    target: "our-story",
  },
  {
    number: "02",
    icon: Eye,
    title: "Vision & Mission",
    description:
      "Our vision is to create lasting spaces. Our mission is to deliver practical design, dependable execution and quality workmanship.",
    target: "vision-mission",
  },
  {
    number: "03",
    icon: Compass,
    title: "Our Approach",
    description:
      "We focus on understanding your requirements, planning carefully and coordinating every stage from design to completion.",
    target: "our-approach",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Why Aristara",
    description:
      "A coordinated approach, attention to detail and a commitment to quality help bring your project vision to life.",
    target: "why-aristara",
  },
];

const principles = [
  {
    icon: Ruler,
    title: "Thoughtful Planning",
    description:
      "We consider your requirements, space, functionality and budget before moving into execution.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "We pay attention to materials, finishing details and the quality of the completed work.",
  },
  {
    icon: Clock3,
    title: "Organised Execution",
    description:
      "A structured workflow helps coordinate project stages and keep work moving efficiently.",
  },
];

const services = [
  {
    icon: House,
    title: "Residential Spaces",
    description:
      "Homes designed for comfort, functionality and everyday living.",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Construction solutions with a focus on planning and execution.",
  },
  {
    icon: Paintbrush,
    title: "Interior & Finishing",
    description:
      "Thoughtful interiors and finishing details that complete a space.",
  },
];

const reasons = [
  {
    title: "Integrated Solutions",
    description:
      "Interior design, construction and finishing brought together through a coordinated approach.",
  },
  {
    title: "Client-Focused Planning",
    description:
      "Project decisions guided by your requirements, lifestyle and intended use of the space.",
  },
  {
    title: "Attention to Detail",
    description:
      "Careful consideration of materials, finishes and practical design elements.",
  },
  {
    title: "Clear Project Direction",
    description:
      "A structured approach that helps keep project stages and priorities organised.",
  },
];

const smoothBehavior = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

export default function About() {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (!target) {
      console.warn(`Section not found: #${id}`);
      return false;
    }

    target.scrollIntoView({
      behavior: smoothBehavior(),
      block: "start",
    });

    return true;
  };

  const handleConsultation = () => {
    // Prefer an actual quote form when one exists.
    const quote = document.getElementById("quote");

    if (quote) {
      quote.scrollIntoView({
        behavior: smoothBehavior(),
        block: "start",
      });
      return;
    }

    // Otherwise, navigate to the configured contact route.
    window.location.assign("/contact");
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full overflow-hidden bg-[#fbf8f1] font-['Poppins',sans-serif] text-[#25231f]"
    >
      {/* HERO / ABOUT INTRODUCTION */}
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-9 md:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-16">
          <div className="relative z-10 max-w-[570px]">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-[2px] w-8 bg-[#c99a29]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a] sm:text-[10px] sm:tracking-[0.23em]">
                About Us · Aristara Interior
              </span>
            </div>

            <h1
              id="about-heading"
              className="max-w-[620px] text-[clamp(2.3rem,5.1vw,4.4rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#22211e]"
            >
              Spaces With Purpose.
              <span className="block text-[#c99a29]">
                Built Around You.
              </span>
            </h1>

            <p className="mt-5 max-w-[480px] text-[12px] leading-[1.9] text-[#625d53] sm:mt-6 sm:text-[13px] sm:leading-[2]">
              At Aristara Interior, we bring interior design, construction
              and finishing solutions together to shape spaces that reflect
              your vision, lifestyle and requirements.
            </p>

            <p className="mt-3 max-w-[470px] text-[12px] leading-[1.9] text-[#625d53] sm:text-[13px]">
              From the first idea to the final details, we focus on practical
              planning, thoughtful design and quality execution to make each
              project feel considered and complete.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <button
                type="button"
                onClick={() => scrollToSection("our-story")}
                className="group inline-flex min-h-[44px] items-center gap-3 rounded-md bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251d] shadow-[0_5px_14px_rgba(201,154,41,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] sm:min-h-[46px] sm:px-6 sm:text-[11px]"
              >
                Discover Our Story
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("why-aristara")}
                className="group inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-[10px] font-medium text-[#49443b] transition-colors hover:text-[#a77c19] sm:text-[11px]"
              >
                Why Aristara
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-8 grid max-w-[480px] grid-cols-2 gap-x-5 gap-y-4 border-t border-[#e4dbca] pt-5 sm:mt-9 sm:grid-cols-3 sm:gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#a67e25]"
                />
                <div>
                  <p className="text-[10px] font-semibold text-[#302c25]">
                    Quality Focus
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#81786a]">
                    Detail-oriented work
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
                    Planned Process
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#81786a]">
                    Coordinated execution
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

          {/* IMAGE COLLAGE */}
          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-tr-2xl border-r border-t border-[#d8b75e] sm:-right-4 sm:-top-4 sm:h-24 sm:w-24"
            />

            <div className="grid h-[310px] grid-cols-[0.9fr_1.1fr] gap-2.5 sm:h-[410px] sm:gap-3 md:h-[450px] lg:h-[400px] xl:h-[465px]">
              <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                <img
                  src={Image1}
                  alt="Architectural construction and building design"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-4 sm:right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#eab934] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#29251d] sm:px-2.5 sm:text-[9px]">
                    <Building2 size={11} />
                    Our Story
                  </span>

                  <p className="mt-2 text-[11px] font-semibold leading-5 text-white sm:text-sm">
                    Ideas Into Reality.
                  </p>

                  <p className="mt-0.5 hidden text-[9px] leading-4 text-white/80 sm:block">
                    Thoughtful planning. Quality execution.
                  </p>
                </div>
              </div>

              <div className="grid min-h-0 grid-rows-[1fr_0.86fr] gap-2.5 sm:gap-3">
                <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                  <img
                    src={Image2}
                    alt="Contemporary living room interior"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4">
                    <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/90 sm:text-[9px]">
                      01 / Our Vision
                    </span>
                    <p className="mt-1 text-[10px] font-semibold text-white sm:text-xs">
                      Spaces That Inspire
                    </p>
                  </div>
                </div>

                <div className="grid min-h-0 grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                    <img
                      src={Image3}
                      alt="Interior materials and design details"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/85">
                        02 / Our Approach
                      </span>
                    </div>
                  </div>

                  <div className="group relative min-h-0 overflow-hidden rounded-[3px]">
                    <img
                      src={Image4}
                      alt="Finished architectural interior"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/85">
                        03 / Our Values
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 border-b border-[#e4dbca] pb-3">
              <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#766c5b] sm:text-[10px]">
                Design. Build. Refine.
              </p>
              <p className="text-[9px] text-[#8c8170] sm:text-[10px]">
                Thoughtful spaces, lasting value.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 -z-10 h-14 w-14 border-b border-l border-[#d8b75e] sm:-bottom-4 sm:-left-4 sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </div>

      {/* ABOUT NAVIGATION CARDS */}
      <div className="border-y border-[#e8dfd0] bg-[#f5f0e6] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 sm:mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#c99a29]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                Get to Know Us
              </span>
            </div>

            <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#25231f] sm:text-3xl lg:text-4xl">
              The Values Behind{" "}
              <span className="text-[#c99a29]">Every Space.</span>
            </h2>

            <p className="mt-3 max-w-xl text-[11px] leading-6 text-[#6e675b] sm:text-xs sm:leading-7">
              Learn about our story, our purpose and the way we approach
              every design and construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {aboutHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.number}
                  href={`#${item.target}`}
                  onClick={(event) => {
                    const target = document.getElementById(item.target);

                    if (target) {
                      event.preventDefault();
                      scrollToSection(item.target);
                    }
                  }}
                  className="group flex min-h-[210px] flex-col border border-[#e5dccb] bg-[#fbf8f1] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b458] sm:min-h-[230px] sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-[#e5dccb] bg-white text-[#a17b27] transition-colors group-hover:border-[#d9b75e] group-hover:bg-[#f7edcf]">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>

                    <span className="text-[10px] font-medium tracking-[0.1em] text-[#b0a48d]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[14px] font-semibold text-[#29261f]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-6 text-[#746c60] sm:text-[11px]">
                    {item.description}
                  </p>

                  <div className="mt-auto flex justify-end pt-4">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#9c792e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div
        id="our-story"
        className="scroll-mt-24 bg-[#fbf8f1] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 sm:px-8 md:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#c99a29]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                01 · Our Story
              </span>
            </div>

            <h2 className="max-w-lg text-2xl font-semibold leading-[1.2] tracking-[-0.045em] text-[#25231f] sm:text-3xl lg:text-4xl">
              Every Great Space{" "}
              <span className="text-[#c99a29]">Begins With an Idea.</span>
            </h2>

            <p className="mt-4 max-w-lg text-[11px] leading-7 text-[#6e675b] sm:text-xs sm:leading-7">
              Every project begins with understanding how people want to
              live, work and experience a space. Aristara Interior brings
              design, construction and finishing under a coordinated
              approach to help transform those ideas into practical,
              welcoming environments.
            </p>

            <p className="mt-3 max-w-lg text-[11px] leading-7 text-[#6e675b] sm:text-xs sm:leading-7">
              We believe a successful project is not just about appearance.
              It is also about usability, careful planning and the details
              that make a space feel complete.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("vision-mission")}
              className="group mt-6 inline-flex items-center gap-3 text-[11px] font-semibold text-[#6d5421] transition-colors hover:text-[#b88920]"
            >
              Explore Our Vision
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="border border-[#e5dccb] bg-[#f5f0e6] p-5 transition-colors duration-300 hover:border-[#d6b458] sm:p-6"
                >
                  <Icon
                    size={24}
                    strokeWidth={1.6}
                    className="text-[#9c792e]"
                  />

                  <h3 className="mt-4 text-[12px] font-semibold text-[#302c25]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-6 text-[#746c60] sm:text-[11px]">
                    {service.description}
                  </p>
                </article>
              );
            })}

            <div className="flex flex-col justify-center border-l-2 border-[#d7b24b] bg-[#f3ecdd] p-5 sm:col-span-2 sm:p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#92702a]">
                What Guides Us
              </p>

              <p className="mt-2 max-w-xl text-[14px] font-medium leading-7 text-[#302c25] sm:text-base">
                Understand the vision. Plan with purpose. Deliver with care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div
        id="vision-mission"
        className="scroll-mt-24 border-y border-[#e8dfd0] bg-[#f5f0e6] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#c99a29]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                02 · Vision & Mission
              </span>
            </div>

            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#25231f] sm:text-3xl lg:text-4xl">
              A Clear Purpose.{" "}
              <span className="text-[#c99a29]">A Better Built Future.</span>
            </h2>

            <p className="mt-3 text-[11px] leading-6 text-[#6e675b] sm:text-xs sm:leading-7">
              Our vision shapes where we want to go. Our mission guides
              how we work on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="relative overflow-hidden border border-[#e5dccb] bg-[#fbf8f1] p-6 sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#e2d3aa]"
              />

              <span className="relative flex h-11 w-11 items-center justify-center border border-[#e5dccb] bg-white text-[#a17b27]">
                <Eye size={23} strokeWidth={1.6} />
              </span>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                Our Vision
              </p>

              <h3 className="mt-2 max-w-md text-xl font-semibold leading-snug tracking-[-0.03em] text-[#29261f] sm:text-2xl">
                To Create Spaces That Stand the Test of Time.
              </h3>

              <p className="mt-4 max-w-lg text-[11px] leading-7 text-[#746c60] sm:text-xs">
                We aim to create functional, thoughtful and lasting spaces
                where good design and quality execution come together.
              </p>
            </article>

            <article className="relative overflow-hidden border border-[#e5dccb] bg-[#29261f] p-6 text-[#fbf8f1] sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/15"
              />

              <span className="relative flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-[#eab934]">
                <Target size={23} strokeWidth={1.6} />
              </span>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#eab934]">
                Our Mission
              </p>

              <h3 className="mt-2 max-w-md text-xl font-semibold leading-snug tracking-[-0.03em] text-white sm:text-2xl">
                Turning Your Requirements Into Thoughtful Results.
              </h3>

              <p className="mt-4 max-w-lg text-[11px] leading-7 text-white/70 sm:text-xs">
                We work to understand each client's needs, plan carefully,
                coordinate the work and maintain attention to detail
                throughout the project.
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* OUR APPROACH */}
      <div
        id="our-approach"
        className="scroll-mt-24 bg-[#fbf8f1] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 sm:px-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#c99a29]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                03 · Our Approach
              </span>
            </div>

            <h2 className="max-w-lg text-2xl font-semibold leading-[1.2] tracking-[-0.045em] text-[#25231f] sm:text-3xl lg:text-4xl">
              A Thoughtful Process From{" "}
              <span className="text-[#c99a29]">Start to Finish.</span>
            </h2>

            <p className="mt-4 max-w-lg text-[11px] leading-7 text-[#6e675b] sm:text-xs sm:leading-7">
              Each project has its own goals and challenges. Our approach
              begins with listening, followed by planning and coordinated
              execution to help ensure that the final result reflects the
              original requirements.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("why-aristara")}
              className="group mt-6 inline-flex items-center gap-3 text-[11px] font-semibold text-[#6d5421] transition-colors hover:text-[#b88920]"
            >
              Discover Why Aristara
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="border-t-2 border-[#d7b24b] bg-[#f5f0e6] p-5 sm:min-h-[210px]"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="text-[#9c792e]"
                    />

                    <span className="text-[9px] font-medium tracking-[0.1em] text-[#b0a48d]">
                      0{index + 1}
                    </span>
                  </div>

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

      {/* WHY ARISTARA */}
      <div
        id="why-aristara"
        className="scroll-mt-24 border-t border-[#e8dfd0] bg-[#f5f0e6] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#c99a29]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a]">
                  04 · Why Aristara
                </span>
              </div>

              <h2 className="max-w-xl text-2xl font-semibold leading-[1.2] tracking-[-0.045em] text-[#25231f] sm:text-3xl lg:text-4xl">
                The Details Matter.{" "}
                <span className="text-[#c99a29]">So Does the Process.</span>
              </h2>

              <p className="mt-4 max-w-lg text-[11px] leading-7 text-[#6e675b] sm:text-xs sm:leading-7">
                Choosing the right team is an important part of any
                project. Aristara focuses on understanding your needs,
                coordinating design and execution, and giving attention
                to the details that bring a space together.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 border border-[#e5dccb] bg-[#fbf8f1] p-4 sm:p-5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#f3e8c7] text-[#987425]">
                    <CheckCircle2 size={16} strokeWidth={1.7} />
                  </span>

                  <div>
                    <h3 className="text-[11px] font-semibold text-[#302c25] sm:text-xs">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-6 text-[#746c60]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
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
                Let’s Build Something Meaningful
              </span>
            </div>

            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#25231f] sm:text-3xl">
              Your Vision Deserves a Thoughtful Approach.
            </h2>

            <p className="mt-3 max-w-xl text-[11px] leading-6 text-[#6e675b] sm:text-xs sm:leading-7">
              Tell us about your home, interior or construction project.
              Let’s discuss your requirements and explore the right way
              to bring your ideas to life.
            </p>
          </div>

          <button
            type="button"
            onClick={handleConsultation}
            className="group inline-flex min-h-[46px] shrink-0 items-center justify-center gap-3 self-start rounded-md bg-[#eab934] px-6 py-3 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dca925] md:self-center"
          >
            Get a Consultation
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