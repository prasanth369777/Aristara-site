import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  House,
  Building2,
  Armchair,
  Zap,
  Paintbrush,
  Hammer,
 
  ShieldCheck,
  Clock3,
  Ruler,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Residential Construction",
    description:
      "Build your dream home with quality and precision.",
    icon: House,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85",
    href: "/construction-company-coimbatore/",
    alt: "Modern luxury residential home",
  },
  {
    id: "02",
    title: "Commercial Construction",
    description:
      "Functional spaces designed for business growth.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    href: "/construction-company-coimbatore/",
    alt: "Contemporary commercial office building",
  },
  {
    id: "03",
    title: "Interior Design & Execution",
    description:
      "Stylish and practical interiors for modern living.",
    icon: Armchair,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85",
    href: "/interior-design-coimbatore/",
    alt: "Elegant contemporary living room interior",
  },
  {
    id: "04",
    title: "Electrical Work",
    description:
      "Safe and reliable electrical solutions.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=85",
    href: "/complete-project-solutions-coimbatore/",
    alt: "Professional electrical installation work",
  },
  {
    id: "05",
    title: "Painting & Finishing",
    description:
      "Bring new life to your spaces with expert finishes.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=85",
    href: "/paint-studio-coimbatore/",
    alt: "Interior wall painting and finishing",
  },
  {
    id: "06",
    title: "Renovation & Remodeling",
    description:
      "Transform your existing spaces with modern design.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85",
    href: "/complete-project-solutions-coimbatore/",
    alt: "Building renovation and architectural work",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description: "Careful execution and attention to detail.",
  },
  {
    icon: Clock3,
    title: "Planned Execution",
    description: "Organised project stages and coordination.",
  },
  {
    icon: Ruler,
    title: "Thoughtful Design",
    description: "Spaces tailored to your needs and lifestyle.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full overflow-hidden bg-[#fbf9f4] font-['Poppins',sans-serif] text-[#25231f]"
    >
      {/* SERVICES HEADER */}
      <div className="mx-auto max-w-[1600px] px-4 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20 xl:px-16">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12">
          <span className="mb-3 inline-block text-[9px] font-semibold uppercase tracking-[0.23em] text-[#a17b27] sm:mb-4 sm:text-[10px]">
            Designed Around Your Vision
          </span>

          <h2
            id="services-heading"
            className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.055em] text-[#24221f]"
          >
            Our <span className="text-[#c99a29]">Services</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[11px] leading-6 text-[#6f695e] sm:mt-4 sm:text-xs sm:leading-7">
            Complete construction and interior solutions under one roof.
            From the first design to the final finish, we bring your
            vision to life.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#d9bd77]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />
            <span className="h-px w-8 bg-[#d9bd77]" />
          </div>
        </div>

        {/* SIX SERVICE CARDS */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-9 lg:grid-cols-6 lg:gap-x-3 xl:gap-x-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group min-w-0"
              >
                {/* Service Image */}
                <a
                  href={service.href}
                  aria-label={`Explore ${service.title}`}
                  className="relative block aspect-[1/1.03] overflow-hidden rounded-[3px] bg-[#e9e2d5] sm:aspect-[1/1.05] lg:aspect-[0.88/1]"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#fbf8f1]/95 text-[#a17b27] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 sm:right-3 sm:top-3">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                    />
                  </span>
                </a>

                {/* Icon + Content */}
                <div className="relative mt-3 flex items-start gap-2.5 sm:mt-4 sm:gap-3">
                  <span className="flex shrink-0 items-center justify-center pt-0.5 text-[#c99a29]">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="sm:h-[23px] sm:w-[23px]"
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[10px] font-semibold leading-[1.55] tracking-[-0.02em] text-[#282621] sm:text-[11px] lg:text-[10px] xl:text-[11px]">
                      {service.title}
                    </h3>

                    <p className="mt-1.5 text-[9px] leading-[1.8] text-[#746d62] sm:text-[10px] lg:text-[9px] xl:text-[10px]">
                      {service.description}
                    </p>

                    <a
                      href={service.href}
                      className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold text-[#9b7626] transition-colors hover:text-[#6e5013] sm:mt-3"
                    >
                      Explore

                      <ArrowRight
                        size={12}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>

                {/* Card divider */}
                <div className="mt-4 h-px w-full bg-[#e6dfd2] transition-colors duration-300 group-hover:bg-[#d6b458] sm:mt-5" />
              </article>
            );
          })}
        </div>

        {/* BUSINESS VALUE STRIP */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-y border-[#e5ddcf] py-6 sm:mt-14 sm:grid-cols-3 sm:gap-5 sm:py-7 lg:mt-16 lg:py-8">
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
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f1e8d5] text-[#9b7626]">
                  <Icon size={19} strokeWidth={1.6} />
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
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-sm bg-[#f1e9da] px-5 py-6 sm:mt-12 sm:flex-row sm:items-center sm:px-8 sm:py-7 lg:px-10">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#967126]">
              Have a Project in Mind?
            </span>

            <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.035em] text-[#28251f] sm:text-xl">
              Let's Create Something Exceptional.
            </h3>

            <p className="mt-2 max-w-xl text-[10px] leading-6 text-[#6f675a] sm:text-[11px]">
              Share your ideas with Aristara Interior and take the next
              step towards a space designed around you.
            </p>
          </div>

          <a
            href="/contact/"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-[3px] bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9aa2b] sm:px-6 sm:text-[11px]"
          >
            Get a Free Consultation

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