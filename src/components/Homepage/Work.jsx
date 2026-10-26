import React from "react";
import {
  UsersRound,
  BadgeCheck,
  Clock3,
  ClipboardCheck,
  Ruler,
  Headset,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Team",
    description: "Skilled design and construction professionals.",
    icon: UsersRound,
  },
  {
    title: "Quality Materials",
    description: "Carefully considered materials and finishes.",
    icon: BadgeCheck,
  },
  {
    title: "Planned Execution",
    description: "Organised project stages and coordination.",
    icon: Clock3,
  },
  {
    title: "Transparent Pricing",
    description: "Clear scope, estimates and project discussions.",
    icon: ClipboardCheck,
  },
  {
    title: "Customised Designs",
    description: "Solutions shaped around your space and needs.",
    icon: Ruler,
  },
  {
    title: "Dedicated Support",
    description: "Communication throughout your project journey.",
    icon: Headset,
  },
];

export default function Work() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="w-full bg-[#fbf8f1] px-3 py-5 font-['Poppins',sans-serif] sm:px-5 sm:py-8 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="relative isolate overflow-hidden bg-[#211e19]">
          {/* Background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=90"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171613]/95 via-[#211e19]/85 to-[#211e19]/55"
          />

          {/* Subtle gold accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full border border-[#eab934]/15 sm:h-80 sm:w-80"
          />

          <div className="grid min-h-[350px] grid-cols-1 items-center gap-8 p-5 sm:p-8 md:p-10 lg:min-h-[350px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-10 xl:gap-14 xl:p-14">
            {/* LEFT CONTENT */}
            <div className="max-w-[560px]">
              <span className="mb-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#eab934] sm:text-[10px]">
                <span className="h-px w-7 bg-[#eab934]" />
                The Aristara Difference
              </span>

              <h2
                id="why-choose-heading"
                className="max-w-[550px] text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1.16] tracking-[-0.055em] text-white"
              >
                Why Choose{" "}
                <span className="text-[#eab934]">
                  Aristara Interior?
                </span>
              </h2>

              <p className="mt-4 max-w-[470px] text-[11px] leading-[1.9] text-white/75 sm:mt-5 sm:text-xs sm:leading-6">
                We bring interior design, construction, and finishing
                together with thoughtful planning and attention to detail.
                Every project begins with understanding your needs and
                creating a solution for your space.
              </p>

              <a
                href="/contact/"
                className="group mt-6 inline-flex min-h-10 items-center justify-center gap-3 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3ca55] sm:mt-7 sm:text-[11px]"
              >
                Get Started Today

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-4 sm:mt-7">
                <span className="text-[9px] text-white/70 sm:text-[10px]">
                  Interior Design
                </span>
                <span className="text-[#eab934]">·</span>
                <span className="text-[9px] text-white/70 sm:text-[10px]">
                  Construction
                </span>
                <span className="text-[#eab934]">·</span>
                <span className="text-[9px] text-white/70 sm:text-[10px]">
                  Finishing
                </span>
              </div>
            </div>

            {/* RIGHT FEATURE GRID */}
            <div className="relative min-w-0 border border-white/10 bg-black/25 p-4 backdrop-blur-[3px] sm:p-6 lg:p-5 xl:p-7">
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/15 pb-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#eab934]">
                    Our Commitment
                  </p>

                  <h3 className="mt-1.5 text-sm font-semibold text-white sm:text-base">
                    Built Around Your Needs
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#eab934]/40 text-[#eab934]">
                  <BadgeCheck size={19} strokeWidth={1.5} />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-7">
                {reasons.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <div
                      key={reason.title}
                      className="group flex min-w-0 flex-col items-center px-1 text-center"
                    >
                      <span className="flex h-9 w-9 items-center justify-center text-[#eab934] transition-transform duration-300 group-hover:-translate-y-1 sm:h-10 sm:w-10">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>

                      <h3 className="mt-2.5 text-[10px] font-semibold leading-[1.6] text-white sm:text-[11px]">
                        {reason.title}
                      </h3>

                      <p className="mt-1.5 max-w-[155px] text-[9px] leading-[1.8] text-white/65">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/15 pt-4 text-center">
                <p className="text-[9px] leading-5 text-white/60 sm:text-[10px]">
                  Thoughtful planning. Quality execution. Spaces made for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}