
import React from "react";
import {
  House,
  Sofa,
  BedDouble,
  CookingPot,
  PanelsTopLeft,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Residential",
    subtitle: "Interior Design",
    description:
      "Personalised interiors designed around your lifestyle, preferences, and everyday comfort.",
    icon: House,
    featured: true,
  },
  {
    number: "02",
    title: "Living Room",
    subtitle: "Design",
    description:
      "Inviting spaces with balanced layouts, refined finishes, and thoughtful lighting.",
    icon: Sofa,
  },
  {
    number: "03",
    title: "Bedroom",
    subtitle: "Design",
    description:
      "Restful personal spaces that combine comfort, warmth, and understated elegance.",
    icon: BedDouble,
  },
  {
    number: "04",
    title: "Modular Kitchen",
    subtitle: "Design",
    description:
      "Smart storage, practical layouts, and modern finishes for everyday cooking.",
    icon: CookingPot,
  },
  {
    number: "05",
    title: "Complete Home",
    subtitle: "Interiors",
    description:
      "A cohesive design approach that brings every room together beautifully.",
    icon: PanelsTopLeft,
  },
];

export default function Work() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="interior-services-heading"
      className="w-full bg-[#fbf8f1] px-4 py-12 font-['Poppins',sans-serif] sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION INTRO */}
        <div className="mb-9 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[700px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c99a29]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b741d]">
                The Art of Better Living
              </span>
            </div>

            <h2
              id="interior-services-heading"
              className="text-[clamp(2.3rem,5.5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.065em] text-[#29261f]"
            >
              Spaces that feel
              <span className="block font-normal italic text-[#b68b2c]">
                distinctly yours.
              </span>
            </h2>
          </div>

          <div className="max-w-[380px] md:pb-2">
            <p className="text-[12px] leading-7 text-[#6e685e] sm:text-[13px]">
              From individual rooms to complete homes, we create considered
              interiors that bring together functionality, comfort, and
              timeless design.
            </p>

            <a
              href="/contact/"
              className="group mt-5 inline-flex items-center gap-3 border-b border-[#c99a29] pb-2 text-[11px] font-semibold text-[#29261f] transition-colors hover:text-[#a57a20]"
            >
              Explore Your Interior Project
              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* FEATURED SERVICE */}
        <div className="grid overflow-hidden bg-[#25221c] lg:grid-cols-[1.05fr_0.95fr]">

          <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-[390px] lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-40 transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171613]/95 via-[#211e19]/55 to-[#211e19]/25" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/75">
                Featured Service
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white">
                <ArrowUpRight size={19} strokeWidth={1.5} />
              </span>
            </div>

            <div className="relative z-10 mt-16">
              <span className="mb-3 block text-[10px] tracking-[0.2em] text-[#eab934]">
                01 / RESIDENTIAL
              </span>

              <h3 className="max-w-[500px] text-3xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Interior Design
                <span className="block font-normal italic text-[#eab934]">
                  for the way you live.
                </span>
              </h3>

              <p className="mt-4 max-w-[410px] text-[11px] leading-6 text-white/75 sm:text-xs">
                Thoughtfully planned homes that reflect your personality,
                maximise your space, and make everyday living feel special.
              </p>
            </div>
          </div>

          {/* FEATURED SERVICE DETAILS */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#eab934]/50 text-[#eab934]">
                <House size={25} strokeWidth={1.4} />
              </div>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#eab934]">
                Designed with intention
              </p>

              <h3 className="mt-4 max-w-[380px] text-2xl font-medium leading-snug tracking-[-0.04em] text-white sm:text-3xl">
                Every detail has a purpose.
              </h3>

              <p className="mt-4 max-w-[390px] text-[11px] leading-7 text-white/65 sm:text-xs">
                We consider the way you move, relax, work, and spend time
                together to create interiors that are beautiful and practical.
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/55">
                  Your home, your story
                </span>
                <span className="text-[11px] font-medium text-[#eab934]">
                  Aristara Interior
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER SERVICES */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium tracking-[-0.04em] text-[#29261f] sm:text-xl">
              Explore Our Services
            </h3>
            <span className="hidden text-[10px] uppercase tracking-[0.16em] text-[#8c8578] sm:block">
              Thoughtfully designed · Beautifully finished
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px border border-[#e6dfd1] bg-[#e6dfd1] sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(1).map((service) => {
              const Icon = service.icon;

              return (
                <a
                  href="/contact/"
                  key={service.number}
                  className="group flex min-h-[235px] flex-col bg-[#fbf8f1] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.15em] text-[#9c8f77]">
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#a68a4a] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <div className="mt-6 flex h-11 w-11 items-center justify-center border border-[#d8c9a6] text-[#9d7828] transition-colors duration-300 group-hover:bg-[#eab934] group-hover:text-[#29261f]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h4 className="mt-5 text-base font-medium leading-snug tracking-[-0.03em] text-[#29261f]">
                    {service.title}
                    <span className="block">{service.subtitle}</span>
                  </h4>

                  <p className="mt-3 text-[10px] leading-6 text-[#777064] sm:text-[11px]">
                    {service.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#e4dccd] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[600px] text-[11px] leading-6 text-[#716a5e] sm:text-xs">
            Have a space in mind? Let’s shape it into something that feels
            truly yours.
          </p>

          <a
            href="/contact/"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-4 bg-[#eab934] px-6 py-3 text-[10px] font-semibold text-[#29251f] transition-colors hover:bg-[#f3ca55]"
          >
            Start Your Project
            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
