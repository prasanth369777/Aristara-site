
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Handshake,
  MapPinned,
  FileCheck2,
  Building2,
  ArrowRight,
  ArrowUpRight,
  House,
  LandPlot,

} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Landowner Enquiry",
    description:
      "Share your land details, location, and development vision with our team.",
    icon: MessageIcon,
  },
  {
    number: "02",
    title: "Land Evaluation",
    description:
      "Review the property's potential, development possibilities, and project requirements.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Joint Venture Planning",
    description:
      "Discuss development plans, responsibilities, and proposed partnership terms.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Project Development",
    description:
      "Move forward with agreed plans, coordinated execution, and project milestones.",
    icon: Building2,
  },
];

function MessageIcon(props) {
  return <Handshake {...props} />;
}

const projects = [
  {
    title: "Joint Venture with Landowners",
    category: "Landowner Partnership",
    description:
      "Explore development opportunities by partnering with landowners to plan residential projects.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary residential property",
    icon: Handshake,
  },
  {
    title: "Residential Project Development",
    category: "Residential Development",
    description:
      "Plan residential developments with a focus on practical layouts, quality construction, and thoughtful design.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern residential development and architecture",
    icon: House,
  },
  {
    title: "Landowner Enquiry",
    category: "Start a Discussion",
    description:
      "Share your land details with us to begin a conversation about potential joint venture opportunities.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Open land suitable for exploring development possibilities",
    icon: LandPlot,
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="joint-venture"
      className="w-full overflow-hidden bg-[#fbf9f4] font-['Poppins',sans-serif] text-[#25231f]"
    >
      {/* JOINT VENTURE PROCESS */}
      <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-16 lg:pt-16 xl:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-[700px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#c99a29]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9c7626] sm:text-[10px]">
              Building Partnerships
            </span>
            <span className="h-px w-7 bg-[#c99a29]" />
          </div>

          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-tight tracking-[-0.055em] text-[#25231f]">
            Our Joint Venture{" "}
            <span className="text-[#c99a29]">Process</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[560px] text-[10px] leading-6 text-[#70695e] sm:text-[11px]">
            From the first landowner discussion to residential project
            development, we follow a structured approach to exploring
            partnership opportunities.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mx-auto mt-10 grid max-w-[1150px] grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative flex min-w-0 flex-col items-center text-center"
              >
                <div className="relative flex h-14 w-14 items-center justify-center border border-[#dfd3b9] bg-[#fffdf9] text-[#9d7828] transition-all duration-300 hover:border-[#c99a29] hover:bg-[#eab934] hover:text-[#29261f]">
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#29261f] text-[8px] font-semibold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-[11px] font-semibold leading-5 text-[#282621] sm:text-xs">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[210px] text-[9px] leading-[1.9] text-[#746d62] sm:text-[10px]">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-3 top-5 hidden translate-x-1/2 items-center text-[#c99a29] lg:flex"
                  >
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* LANDOWNER ENQUIRY CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-10 flex max-w-[1000px] flex-col gap-4 border border-[#e5dccb] bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#29261f] text-[#eab934]">
              <LandPlot size={20} strokeWidth={1.5} />
            </span>

            <div>
              <h3 className="text-xs font-semibold text-[#29261f] sm:text-sm">
                Own a plot of land?
              </h3>
              <p className="mt-1 max-w-[520px] text-[10px] leading-5 text-[#746d62] sm:text-[11px]">
                Let’s discuss whether your property could be suitable for a
                residential joint venture.
              </p>
            </div>
          </div>

          <a
            href="/contact/"
            className="group inline-flex min-h-10 shrink-0 items-center justify-center gap-3 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251f] transition-colors hover:bg-[#f3ca55]"
          >
            Enquire Now
            <ArrowRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* JOINT VENTURE SERVICES */}
      <div
        id="portfolio"
        className="scroll-mt-24 border-t border-[#e9e1d4] bg-[#fffdf9]"
      >
        <div className="mx-auto max-w-[1500px] px-5 pb-14 pt-9 sm:px-8 sm:pb-16 sm:pt-11 lg:px-12 xl:px-16">

          {/* Heading Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-6 bg-[#c99a29]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9c7626]">
                  Partnership Opportunities
                </span>
              </div>

              <h2 className="text-[clamp(1.65rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.05em] text-[#25231f]">
                Joint Venture{" "}
                <span className="text-[#c99a29]">Solutions</span>
              </h2>

              <p className="mt-2 max-w-[620px] text-[10px] leading-6 text-[#746d62] sm:text-[11px]">
                Discover how we can explore land partnerships and residential
                development opportunities together.
              </p>
            </div>

            <a
              href="/contact/"
              className="group inline-flex min-h-9 shrink-0 items-center gap-2 border border-[#dfb94f] px-4 py-2 text-[9px] font-medium text-[#9c7626] transition-all duration-300 hover:bg-[#eab934] hover:text-[#29251d] sm:text-[10px]"
            >
              Submit Land Enquiry
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Partnership Cards */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.a
                  key={project.title}
                  href="/contact/"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.1,
                  }}
                  className="group min-w-0 overflow-hidden border border-[#e9e1d4] bg-[#fbf9f4] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9bd77] hover:shadow-[0_12px_30px_rgba(65,49,19,0.08)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#e9e2d5]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#fbf8f1]/95 px-2.5 py-1.5 text-[9px] font-medium text-[#514638]">
                      <Icon size={13} strokeWidth={1.6} />
                      {project.category}
                    </span>

                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbf8f1]/95 text-[#9c7626] transition-colors group-hover:bg-[#eab934] group-hover:text-[#29251d]">
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xs font-semibold leading-5 text-[#29261f] sm:text-sm">
                        {project.title}
                      </h3>

                      <ArrowRight
                        size={16}
                        className="mt-0.5 shrink-0 text-[#b28a2b] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-2 text-[10px] leading-6 text-[#81786b] sm:text-[11px]">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
