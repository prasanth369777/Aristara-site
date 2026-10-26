import React, { useMemo } from "react";
import {
  House,
  Building2,
  Armchair,
  Zap,
  Paintbrush,
  Hammer,
  Layers3,
  DoorOpen,
  Lightbulb,
  Droplets,
  Sofa,
  CookingPot,
  Ruler,

  ArrowRight,

} from "lucide-react";

const scrollItems = [
  {
    title: "Home Interiors",
    icon: House,
    active: true,
  },
  {
    title: "Modular Kitchens",
    icon: CookingPot,
  },
  {
    title: "Wardrobes",
    icon: DoorOpen,
  },
  {
    title: "Living Room Design",
    icon: Sofa,
  },
  {
    title: "False Ceiling",
    icon: Layers3,
  },
  {
    title: "House Construction",
    icon: Building2,
    active: true,
  },
  {
    title: "Office Interiors",
    icon: Armchair,
  },
  {
    title: "Custom Furniture",
    icon: Ruler,
  },
  {
    title: "Lighting Design",
    icon: Lightbulb,
  },
  {
    title: "Interior Wall Painting",
    icon: Paintbrush,
    active: true,
  },
  {
    title: "Exterior Painting",
    icon: Paintbrush,
  },
  {
    title: "Texture Painting",
    icon: Layers3,
  },
  {
    title: "Waterproofing",
    icon: Droplets,
    active: true,
  },
  {
    title: "Electrical Work",
    icon: Zap,
  },
  {
    title: "Renovation & Remodeling",
    icon: Hammer,
  },
];

const brandServices = [
  {
    title: "Interior Design",
    description: "Interiors planned around your lifestyle.",
    icon: House,
  },
  {
    title: "Construction & Finishing",
    description: "Quality execution from start to finish.",
    icon: Building2,
  },
];

function InfiniteScroll() {
  const duplicatedItems = useMemo(
    () => [...scrollItems, ...scrollItems],
    []
  );

  return (
    <section
      id="complete-solutions"
      className="relative w-full overflow-hidden bg-[#fbf8f1] py-14 font-['Poppins',sans-serif] text-[#25231f] sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:gap-12 lg:grid-cols-2 lg:gap-14 lg:px-12 xl:gap-20 xl:px-16">
        {/* LEFT CONTENT */}
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Section label */}
          <span className="mb-5 inline-flex max-w-full items-center gap-2.5 border border-[#e8ddc7] bg-[#f6efdf] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8f6c23] sm:mb-6 sm:px-4 sm:text-[10px]">
            <House
              size={14}
              strokeWidth={1.7}
              className="shrink-0"
            />
            <span>Interior Design · Construction · Painting</span>
          </span>

          {/* Main heading */}
          <h2 className="max-w-[650px] text-[clamp(2.4rem,5.1vw,4.7rem)] font-semibold leading-[1.12] tracking-[-0.06em] text-[#25231f]">
            We Design It.
            <br />
            We Build It.
            <br />
            <span className="text-[#c99a29]">We Finish It.</span>
          </h2>

          {/* Gold accent */}
          <div className="mt-6 flex items-center gap-2 lg:mt-7">
            <span className="h-[3px] w-10 bg-[#c99a29]" />
            <span className="h-[3px] w-4 bg-[#ead9ac]" />
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[540px] text-[12px] leading-[1.95] text-[#625d53] sm:mt-6 sm:text-[13px] sm:leading-[2] lg:text-sm">
            Aristara Interior brings interior design, construction,
            electrical work, painting and renovation together under one
            roof. We focus on thoughtful planning, practical solutions
            and quality finishing to help transform your ideas into
            beautiful, functional spaces.
          </p>

          {/* Brand service cards */}
          <div className="mt-7 grid w-full max-w-[550px] grid-cols-1 gap-3 text-left sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {brandServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group border border-[#e8dfd0] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b75e] hover:shadow-[0_8px_24px_rgba(65,49,19,0.06)] sm:p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center border border-[#eadfc8] bg-[#f8f2e6] text-[#a17b27] transition-colors group-hover:bg-[#f1e4c5]">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h3 className="text-[12px] font-semibold text-[#29261f] sm:text-[13px]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-[#746d62] sm:text-[11px]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Brand statement */}
          <div className="mt-7 w-full max-w-[550px] border-l-2 border-[#c99a29] pl-4 text-left sm:mt-8">
            <p className="text-[13px] font-medium leading-6 text-[#302c25] sm:text-sm">
              Everything Your Space Needs,
              <span className="text-[#b58720]">
                {" "}All in One Place.
              </span>
            </p>

            <p className="mt-1.5 text-[10px] leading-5 text-[#81786b] sm:text-[11px]">
              Aristara Interior — Design, Build, Finish and Transform.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/contact/"
            className="group mt-6 inline-flex min-h-11 items-center justify-center gap-3 self-center bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9aa2b] sm:self-start sm:px-6 sm:text-[11px]"
          >
            Discuss Your Project

            <ArrowRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* RIGHT SCROLLING SERVICES */}
        <div className="relative mx-auto w-full min-w-0 max-w-[650px] lg:max-w-none">
          {/* List header */}
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#987329] sm:text-[10px]">
                Explore Our Expertise
              </p>

              <h3 className="mt-1.5 text-base font-semibold tracking-[-0.035em] text-[#29261f] sm:text-lg">
                Complete Interior Solutions
              </h3>
            </div>

            <span className="shrink-0 border border-[#e6d8b9] bg-white px-3 py-1.5 text-[9px] font-medium text-[#92702a] sm:text-[10px]">
              15 Services
            </span>
          </div>

          {/* Scrolling container */}
          <div className="relative h-[355px] overflow-hidden border border-[#e8dfd0] bg-white px-4 shadow-[0_10px_35px_rgba(65,49,19,0.045)] sm:h-[410px] sm:px-7 lg:h-[455px] lg:px-8">
            {/* Top fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-white via-white/95 to-transparent sm:h-16" />

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-white via-white/95 to-transparent sm:h-16" />

            {/* Infinite track */}
            <div className="aristara-services-track flex flex-col">
              {duplicatedItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${item.title}-${index}`}
                    className="group flex min-h-[58px] items-center gap-3 border-b border-[#f0ebe2] py-3 sm:min-h-[66px] sm:gap-4"
                  >
                    {/* Service number */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center text-[9px] font-semibold transition-colors duration-300 sm:h-8 sm:w-8 sm:text-[10px] ${
                        item.active
                          ? "bg-[#eab934] text-[#29251d]"
                          : "bg-[#f6f2e9] text-[#948a77] group-hover:bg-[#f0e4c6] group-hover:text-[#987329]"
                      }`}
                    >
                      {String(
                        (index % scrollItems.length) + 1
                      ).padStart(2, "0")}
                    </span>

                    {/* Service icon */}
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                      className={`shrink-0 transition-colors duration-300 ${
                        item.active
                          ? "text-[#b48722]"
                          : "text-[#a69b88] group-hover:text-[#b48722]"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Service title */}
                    <span
                      className={`min-w-0 font-['Poppins',sans-serif] text-[clamp(0.88rem,2vw,1.2rem)] font-medium leading-snug tracking-[-0.035em] transition-colors duration-300 sm:text-xl lg:text-[21px] ${
                        item.active
                          ? "text-[#29261f]"
                          : "text-[#b1aa9d] group-hover:text-[#5e5546]"
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`ml-auto shrink-0 transition-all duration-300 ${
                        item.active
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowRight
                        size={17}
                        strokeWidth={1.6}
                        className="text-[#b48722]"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom information */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 sm:mt-5">
            <p className="text-[10px] leading-5 text-[#746d62] sm:text-[11px]">
              From the first sketch to the final finish.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#7b715f] sm:text-[10px]">
                Complete Space Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .aristara-services-track {
          animation: aristaraVerticalScroll 42s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        @keyframes aristaraVerticalScroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(0, -50%, 0);
          }
        }

        @media (hover: hover) {
          .aristara-services-track:hover {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aristara-services-track {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default React.memo(InfiniteScroll);