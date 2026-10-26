import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Ruler,
  Settings,
  KeyRound,
  ArrowRight,
  ArrowUpRight,
  House,
  Building2,
  Armchair,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand your needs and budget.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Detailed planning and 3D design.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Execution",
    description: "Quality construction with regular updates.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Handover",
    description: "Timely completion and your satisfaction.",
    icon: KeyRound,
  },
];

const projects = [
  {
    title: "Contemporary Residence",
    category: "Residential Construction",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    alt: "Contemporary residential architecture",
    icon: House,
  },
  {
    title: "Modern Living Space",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    alt: "Modern living room interior",
    icon: Armchair,
  },
  {
    title: "Commercial Architecture",
    category: "Commercial Construction",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    alt: "Modern commercial building exterior",
    icon: Building2,
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
      id="process"
      className="w-full overflow-hidden bg-[#fbf9f4] font-['Poppins',sans-serif] text-[#25231f]"
    >
      {/* OUR PROCESS */}
      <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-16 lg:pt-16 xl:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.055em] text-[#25231f]">
            Our <span className="text-[#c99a29]">Process</span>
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-[#70695e] sm:text-[11px]">
            A simple and transparent process from start to finish.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mx-auto mt-8 grid max-w-[1120px] grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 lg:gap-0">
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
                {/* Icon */}
                <div className="relative flex h-10 items-center justify-center">
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="text-[#34312b] transition-colors duration-300 hover:text-[#c99a29]"
                  />

                  {index === 0 && (
                    <span className="absolute -bottom-0.5 -right-1 h-2 w-2 rounded-full bg-[#eab934]" />
                  )}
                </div>

                {/* Step number and title */}
                <h3 className="mt-3 text-[11px] font-semibold leading-5 text-[#282621] sm:text-xs">
                  {step.number}. {step.title}
                </h3>

                <p className="mt-1 max-w-[190px] text-[9px] leading-[1.8] text-[#746d62] sm:text-[10px]">
                  {step.description}
                </p>

                {/* Connecting arrow */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-3 top-2 hidden translate-x-1/2 items-center text-[#c99a29] lg:flex"
                  >
                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* RECENT PROJECTS */}
      <div
        id="portfolio"
        className="scroll-mt-24 border-t border-[#e9e1d4] bg-[#fffdf9]"
      >
        <div className="mx-auto max-w-[1500px] px-5 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-12 xl:px-16">
          {/* Projects Heading Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <h2 className="text-[clamp(1.65rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.05em] text-[#25231f]">
                Our <span className="text-[#c99a29]">Recent Projects</span>
              </h2>

              <p className="mt-2 text-[10px] leading-5 text-[#746d62] sm:text-[11px]">
                Take a look at some of our completed projects in Coimbatore
                and beyond.
              </p>
            </div>

            <a
              href="/projects/"
              className="group inline-flex min-h-9 shrink-0 items-center gap-2 rounded-full border border-[#dfb94f] px-4 py-2 text-[9px] font-medium text-[#9c7626] transition-all duration-300 hover:bg-[#eab934] hover:text-[#29251d] sm:text-[10px]"
            >
              View All Projects

              <ArrowRight
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Project Cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.a
                  key={project.title}
                  href="/projects/"
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />

                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#fbf8f1]/95 px-2.5 py-1.5 text-[9px] font-medium text-[#514638]">
                      <Icon size={13} strokeWidth={1.6} />
                      {project.category}
                    </span>

                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbf8f1]/95 text-[#9c7626] transition-colors group-hover:bg-[#eab934] group-hover:text-[#29251d]">
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
                    <div className="min-w-0">
                      <h3 className="truncate text-xs font-semibold text-[#29261f] sm:text-sm">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-[9px] text-[#81786b] sm:text-[10px]">
                        Aristara Interior
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      className="shrink-0 text-[#b28a2b] transition-transform duration-300 group-hover:translate-x-1"
                    />
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