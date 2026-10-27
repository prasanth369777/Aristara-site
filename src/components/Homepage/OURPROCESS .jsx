
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Ruler,
  Calculator,
  HardHat,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation & Requirement Analysis",
    description:
      "We understand your vision, lifestyle, space requirements, preferences, and project budget before planning begins.",
    icon: MessageCircle,
    label: "DISCOVER",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We develop thoughtful layouts, design concepts, material selections, and space plans tailored to your requirements.",
    icon: Ruler,
    label: "DESIGN",
  },
  {
    number: "03",
    title: "Cost Estimation",
    description:
      "We outline the expected project costs, materials, scope of work, and key requirements to support informed decisions.",
    icon: Calculator,
    label: "PLAN YOUR BUDGET",
  },
  {
    number: "04",
    title: "Construction & Quality Checks",
    description:
      "Our project execution focuses on coordinated work, attention to detail, and quality checks throughout the process.",
    icon: HardHat,
    label: "EXECUTE",
  },
  {
    number: "05",
    title: "Final Inspection & Handover",
    description:
      "We review the completed work, inspect finishing details, and coordinate the final handover with you.",
    icon: ClipboardCheck,
    label: "COMPLETE",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="w-full overflow-hidden bg-[#fbf9f4] font-['Poppins',sans-serif] text-[#25231f]"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-[#d9bd77]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9c7626] sm:text-[10px]">
              From Vision to Reality
            </span>
            <span className="h-px w-7 bg-[#d9bd77]" />
          </div>

          <h2
            id="process-heading"
            className="text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.055em] text-[#25231f]"
          >
            Our <span className="text-[#c99a29]">Process</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[560px] text-[10px] leading-6 text-[#746d62] sm:text-[11px]">
            Every successful project begins with a clear understanding
            of your needs. Our structured approach takes your project
            from the initial discussion to the final handover.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-[#d9bd77]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />
            <span className="h-px w-7 bg-[#d9bd77]" />
          </div>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <div className="relative">

          {/* Connecting Line - Desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-[34px] hidden h-px bg-[#ded3bc] lg:block"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative flex min-w-0 flex-col border border-[#e9e1d4] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d9bd77] hover:shadow-[0_10px_28px_rgba(65,49,19,0.06)] sm:p-6 lg:border-transparent lg:bg-transparent lg:p-4 lg:shadow-none lg:hover:border-[#e9e1d4] lg:hover:bg-white lg:hover:shadow-[0_10px_28px_rgba(65,49,19,0.06)]"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 flex items-center justify-between gap-3 lg:flex-col lg:items-center">
                    <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-[#dfd3b9] bg-[#fbf9f4] text-[#9c7626] transition-all duration-300 group-hover:border-[#c99a29] group-hover:bg-[#eab934] group-hover:text-[#29261f]">
                      <Icon size={23} strokeWidth={1.5} />
                    </span>

                    <span className="text-[10px] font-medium tracking-[0.16em] text-[#a59a86] lg:absolute lg:right-0 lg:top-0">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="mt-5 lg:mt-6 lg:text-center">
                    <span className="text-[8px] font-semibold tracking-[0.18em] text-[#a17b29] sm:text-[9px]">
                      {step.label}
                    </span>

                    <h3 className="mt-2 text-[12px] font-semibold leading-[1.65] text-[#29261f] sm:text-[13px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.9] text-[#746d62] sm:text-[11px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile / Tablet Progress Indicator */}
                  <div className="mt-5 flex items-center gap-2 lg:hidden">
                    <span className="h-px w-7 bg-[#c99a29]" />
                    <span className="text-[8px] uppercase tracking-[0.16em] text-[#9c7626]">
                      Step {step.number}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-9 flex flex-col gap-5 bg-[#29261f] p-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-7 lg:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#eab934]/40 text-[#eab934]">
              <CheckCircle2 size={21} strokeWidth={1.5} />
            </span>

            <div>
              <h3 className="text-sm font-medium text-white sm:text-base">
                Ready to plan your project?
              </h3>

              <p className="mt-1 max-w-[580px] text-[10px] leading-6 text-white/65 sm:text-[11px]">
                Tell us about your space, requirements, and ideas.
                Let’s discuss the next steps together.
              </p>
            </div>
          </div>

          <a
            href="/contact/"
            className="group inline-flex min-h-10 shrink-0 items-center justify-center gap-3 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251f] transition-colors duration-300 hover:bg-[#f3ca55]"
          >
            Start a Conversation
            <ArrowRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* BOTTOM BRAND STATEMENT */}
        <div className="mt-7 flex flex-col items-center justify-between gap-2 border-t border-[#e8e0d3] pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] font-medium text-[#49443b] sm:text-[11px]">
            Thoughtful planning. Quality execution. Considered details.
          </p>

          <p className="text-[9px] text-[#81786b]">
            Aristara Interior
          </p>
        </div>
      </div>
    </section>
  );
}
