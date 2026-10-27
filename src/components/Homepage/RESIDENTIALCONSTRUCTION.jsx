
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  House,
  Building2,
  Castle,
  ShieldCheck,
  Clock3,
  Ruler,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Individual House Construction",
    description:
      "Build a home tailored to your family's needs, lifestyle, and vision with thoughtful planning and quality execution.",
    icon: House,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    href: "/contact/",
    alt: "Contemporary individual residential house",
  },
  {
    id: "02",
    title: "Apartment Construction",
    description:
      "Explore practical residential development solutions with efficient layouts, considered planning, and coordinated construction.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=85",
    href: "/contact/",
    alt: "Modern multi-storey apartment building",
  },
  {
    id: "03",
    title: "Villa Construction",
    description:
      "Create a distinctive villa with personalised architecture, spacious living areas, and carefully considered details.",
    icon: Castle,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    href: "/contact/",
    alt: "Contemporary villa architecture and landscaping",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Execution",
    description: "Attention to materials, workmanship, and finishing details.",
  },
  {
    icon: Clock3,
    title: "Planned Construction",
    description: "Coordinated stages and project scheduling.",
  },
  {
    icon: Ruler,
    title: "Thoughtful Planning",
    description: "Layouts designed around your site and requirements.",
  },
];

export default function Services() {
  return (
    <section
      id="residential-construction"
      aria-labelledby="services-heading"
      className="w-full overflow-hidden bg-[#fbf9f4] font-['Poppins',sans-serif] text-[#25231f]"
    >
      <div className="mx-auto max-w-[1500px] px-4 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20 xl:px-16">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="mb-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.23em] text-[#a17b27] sm:mb-4 sm:text-[10px]">
            <span className="h-px w-7 bg-[#c99a29]" />
            Building Homes, Building Futures
            <span className="h-px w-7 bg-[#c99a29]" />
          </span>

          <h2
            id="services-heading"
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-tight tracking-[-0.06em] text-[#24221f]"
          >
            Residential{" "}
            <span className="text-[#c99a29]">Construction</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[11px] leading-7 text-[#6f695e] sm:text-xs">
            From individual homes to apartments and villas, we help turn
            residential building plans into thoughtfully designed spaces
            through structured planning and coordinated execution.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#d9bd77]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />
            <span className="h-px w-8 bg-[#d9bd77]" />
          </div>
        </div>

        {/* RESIDENTIAL SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group min-w-0 border border-[#e8e0d3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b458] hover:shadow-[0_12px_30px_rgba(65,49,19,0.08)]"
              >
                {/* IMAGE */}
                <a
                  href={service.href}
                  aria-label={`Enquire about ${service.title}`}
                  className="relative block aspect-[4/3] overflow-hidden bg-[#e9e2d5]"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 text-[10px] font-medium tracking-[0.16em] text-white">
                    {service.id} / RESIDENTIAL
                  </span>

                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf8f1]/95 text-[#9c7626] transition-colors duration-300 group-hover:bg-[#eab934] group-hover:text-[#29251d]">
                    <ArrowUpRight size={17} strokeWidth={1.7} />
                  </span>
                </a>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4d6b8] bg-[#fbf7ed] text-[#a17b27]">
                      <Icon size={21} strokeWidth={1.5} />
                    </span>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-[13px] font-semibold leading-6 tracking-[-0.025em] text-[#282621] sm:text-sm">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 min-h-[66px] text-[10px] leading-6 text-[#746d62] sm:text-[11px]">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="group/link mt-4 flex items-center justify-between border-t border-[#e9e1d4] pt-4 text-[10px] font-semibold text-[#967126] transition-colors hover:text-[#29261f]"
                  >
                    Discuss Your Requirements

                    <ArrowRight
                      size={15}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CONSTRUCTION BENEFITS */}
        <div className="mt-12 grid grid-cols-1 gap-5 border-y border-[#e5ddcf] py-6 sm:mt-14 sm:grid-cols-3 sm:gap-5 sm:py-7 lg:mt-16 lg:py-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-start gap-3.5 ${
                  index > 0
                    ? "sm:border-l sm:border-[#e5ddcf] sm:pl-5 lg:pl-7"
                    : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f1e8d5] text-[#9b7626]">
                  <Icon size={20} strokeWidth={1.6} />
                </span>

                <div>
                  <h3 className="text-[11px] font-semibold text-[#302c25] sm:text-xs">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-5 text-[#746d62] sm:text-[11px]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FINAL CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 bg-[#f1e9da] px-5 py-6 sm:mt-12 sm:flex-row sm:items-center sm:px-8 sm:py-8 lg:px-10">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#967126]">
              Planning to Build?
            </span>

            <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.035em] text-[#28251f] sm:text-xl">
              Let’s Discuss Your Dream Home.
            </h3>

            <p className="mt-2 max-w-xl text-[10px] leading-6 text-[#6f675a] sm:text-[11px]">
              Tell us about your site, preferred property type, and
              construction requirements to start a conversation.
            </p>
          </div>

          <a
            href="/contact/"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-3 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9aa2b] sm:px-6 sm:text-[11px]"
          >
            Enquire Now

            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
