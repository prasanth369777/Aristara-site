import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  House,
  Building2,
  Armchair,
  Paintbrush,
  Wallet,
  ClipboardCheck,
  
} from "lucide-react";

const faqCategories = [
  {
    title: "General",
    subtitle: "About our services",
    icon: House,
    faqs: [
      {
        question: "What services does Aristara Interior offer?",
        answer:
          "Aristara Interior offers interior design, residential and commercial construction, painting, electrical work, renovation, and finishing solutions. You can enquire about an individual service or discuss a coordinated project based on your requirements.",
      },
      {
        question: "Do you work on residential and commercial projects?",
        answer:
          "Yes. You can discuss requirements for independent houses, apartments, villas, offices, retail spaces, and other commercial environments. The proposed scope will depend on your space, requirements, and project budget.",
      },
      {
        question: "Where do you provide your services?",
        answer:
          "Our business focus includes Coimbatore and surrounding areas. Share your project location with us so we can discuss whether your property falls within our service area.",
      },
    ],
  },
  {
    title: "Construction",
    subtitle: "Planning and execution",
    icon: Building2,
    faqs: [
      {
        question: "Can I hire Aristara for construction alone?",
        answer:
          "Yes. You can enquire about construction as a standalone service or combine it with interior design, painting, and finishing work. The agreed scope, specifications, and responsibilities should be confirmed before the project begins.",
      },
      {
        question: "How does the construction process begin?",
        answer:
          "The process starts with understanding your requirements, site conditions, budget, and expected timeline. The proposed scope, material specifications, estimated costs, and execution stages can then be discussed.",
      },
      {
        question: "How is construction quality considered?",
        answer:
          "Quality depends on appropriate material selection, workmanship, site coordination, and checks at relevant stages. The requirements and inspection process should be agreed upon according to your project's scope and specifications.",
      },
    ],
  },
  {
    title: "Interior Design",
    subtitle: "Design and functionality",
    icon: Armchair,
    faqs: [
      {
        question: "Can I review the design before execution?",
        answer:
          "Design layouts and visual references can help you understand the proposed space before work begins. Available deliverables, including layouts and 3D visualisations, can be confirmed according to your selected project scope.",
      },
      {
        question: "What interior elements can you design?",
        answer:
          "Depending on your requirements, interior design can include space planning, modular kitchens, wardrobes, false ceilings, lighting, furniture, storage solutions, colour palettes, and material selection.",
      },
      {
        question: "Can you design interiors for a small home?",
        answer:
          "Yes. Smaller homes can benefit from efficient layouts, practical storage, multifunctional furniture, and carefully planned lighting. Recommendations can be tailored to your available area, lifestyle, and budget.",
      },
    ],
  },
  {
    title: "Painting",
    subtitle: "Colours and finishes",
    icon: Paintbrush,
    faqs: [
      {
        question: "Do you offer interior and exterior painting?",
        answer:
          "You can enquire about interior wall painting, exterior painting, colour selection, surface preparation, and suitable finishes for your property. The final scope can be agreed upon after reviewing your requirements.",
      },
      {
        question: "How do I choose the right paint for my home?",
        answer:
          "Consider the surface condition, room usage, lighting, cleaning requirements, weather exposure, and finish you prefer. These factors help determine suitable paint options for different areas of your property.",
      },
      {
        question: "Can I enquire about damp walls and waterproofing?",
        answer:
          "Yes. The source of moisture and the condition of the affected surface should be assessed before deciding on a treatment. Share the details of the problem so the appropriate inspection and scope can be discussed.",
      },
    ],
  },
  {
    title: "Budget & Timeline",
    subtitle: "Costs and scheduling",
    icon: Wallet,
    faqs: [
      {
        question: "How much will my project cost?",
        answer:
          "Project costs depend on the area, design complexity, material choices, finishes, site conditions, and scope of work. Share your requirements and budget range to discuss an estimate based on the proposed specifications.",
      },
      {
        question: "How long will my project take?",
        answer:
          "The timeline depends on project size, site readiness, material availability, design approvals, and the work involved. A realistic schedule can be discussed after the project scope has been assessed.",
      },
      {
        question: "Will I receive a breakdown of the work and costs?",
        answer:
          "You should request a clear written scope covering the agreed work, materials, estimated costs, payment milestones, exclusions, and expected timeline before proceeding with the project.",
      },
    ],
  },
  {
    title: "Materials & Process",
    subtitle: "Selections and coordination",
    icon: ClipboardCheck,
    faqs: [
      {
        question: "Can I select my preferred materials and finishes?",
        answer:
          "Yes. You can discuss material preferences, appearance, durability, maintenance, and budget with the team. Final selections and specifications should be documented and approved before the relevant work begins.",
      },
      {
        question: "What information should I share to get started?",
        answer:
          "Share your project type, location, approximate area, requirements, preferred style, budget range, and expected timeline. This information helps establish the scope for an initial discussion.",
      },
      {
        question: "Can I combine interior design and painting in one project?",
        answer:
          "Yes. Combining these requirements can help coordinate colour palettes, finishes, and work sequencing. The services and responsibilities can be discussed together when planning your project.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentCategory = faqCategories[activeCategory];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(0);
  };

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact/";
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full overflow-hidden bg-[#fbf8f1] py-12 font-['Poppins',sans-serif] text-[#25231f] sm:py-16 lg:py-20"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#e9d9b5]/25 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#eee6d7]/60 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="mb-9 grid gap-5 sm:mb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12"
        >
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2.5 border border-[#e7dcc6] bg-white px-3.5 py-2 sm:mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#987329] sm:text-[10px]">
                Frequently Asked Questions
              </span>
            </div>

            <h2
              id="faq-heading"
              className="max-w-3xl text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#25231f]"
            >
              Got Questions?
              <span className="mt-1 block text-[#c99a29]">
                Let's Make It Clear.
              </span>
            </h2>
          </div>

          <div className="min-w-0 lg:max-w-md lg:justify-self-end">
            <p className="text-[11px] leading-7 text-[#6f675b] sm:text-xs sm:leading-7">
              Find answers about Aristara Interior's design, construction,
              painting, materials, project planning, and costs. Choose a
              topic to explore information relevant to your project.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Interior Design", "Construction", "Painting"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-[#e6ddce] bg-white px-3 py-1.5 text-[9px] font-medium text-[#6e6659] sm:text-[10px]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.header>

        {/* Main FAQ layout */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-9 xl:grid-cols-[290px_minmax(0,1fr)] xl:gap-12">
          {/* Category navigation */}
          <aside className="min-w-0 lg:sticky lg:top-24">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-semibold text-[#302c25] sm:text-sm">
                Browse by topic
              </h3>

              <span className="text-[9px] text-[#81786b]">
                {faqCategories.length} topics
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:thin] lg:flex-col lg:overflow-visible lg:pb-0">
              {faqCategories.map((category, index) => {
                const isActive = activeCategory === index;
                const Icon = category.icon;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => handleCategoryChange(index)}
                    aria-pressed={isActive}
                    className={`group flex min-h-[48px] shrink-0 items-center justify-between gap-3 border px-3.5 py-3 text-left transition-all duration-200 sm:min-h-[56px] sm:px-4 lg:w-full ${
                      isActive
                        ? "border-[#29261f] bg-[#29261f] text-white shadow-[0_5px_18px_rgba(41,38,31,0.09)]"
                        : "border-[#e7dfd2] bg-white text-[#5f584d] hover:border-[#d9bd77] hover:bg-[#f8f1e3]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Icon
                        size={17}
                        strokeWidth={1.6}
                        className={`shrink-0 ${
                          isActive
                            ? "text-[#eab934]"
                            : "text-[#a17b27]"
                        }`}
                      />

                      <span className="min-w-0">
                        <span className="block whitespace-nowrap text-[10px] font-semibold sm:text-[11px]">
                          {category.title}
                        </span>

                        <span
                          className={`mt-1 hidden text-[9px] lg:block ${
                            isActive
                              ? "text-white/60"
                              : "text-[#958a78]"
                          }`}
                        >
                          {category.subtitle}
                        </span>
                      </span>
                    </span>

                    <ArrowRight
                      size={14}
                      strokeWidth={1.7}
                      className={`shrink-0 transition-transform ${
                        isActive
                          ? "translate-x-0.5 text-[#eab934]"
                          : "text-[#b6a990] group-hover:translate-x-0.5"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Contact help card */}
            <div className="mt-5 hidden border border-[#e7dfd2] bg-white p-5 lg:block xl:mt-7">
              <span className="flex h-9 w-9 items-center justify-center bg-[#f4ecd9] text-[#a17b27]">
                <MessageCircle size={18} strokeWidth={1.6} />
              </span>

              <h4 className="mt-4 text-sm font-semibold text-[#302c25]">
                Need more details?
              </h4>

              <p className="mt-2 text-[10px] leading-6 text-[#746d62]">
                Tell us about your space and discuss the next steps for
                your project.
              </p>

              <button
                type="button"
                onClick={handleContact}
                className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#967126] transition-colors hover:text-[#c99a29]"
              >
                Contact our team
                <ArrowRight size={14} />
              </button>
            </div>
          </aside>

          {/* Questions panel */}
          <div className="min-w-0">
            <div className="mb-5 flex flex-col gap-3 border-b border-[#e5dccd] pb-4 sm:flex-row sm:items-end sm:justify-between sm:pb-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#987329]">
                  Your Questions Answered
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[#25231f] sm:text-2xl">
                  {currentCategory.title}
                </h3>

                <p className="mt-1 text-[10px] text-[#81786b]">
                  {currentCategory.subtitle}
                </p>
              </div>

              <span className="inline-flex w-fit items-center border border-[#e6ddce] bg-white px-3 py-1.5 text-[9px] font-medium text-[#766d60]">
                {currentCategory.faqs.length} questions
              </span>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 sm:space-y-3.5"
                >
                  {currentCategory.faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    const answerId = `faq-answer-${activeCategory}-${index}`;
                    const questionId = `faq-question-${activeCategory}-${index}`;

                    return (
                      <article
                        key={faq.question}
                        className={`overflow-hidden border transition-colors duration-200 ${
                          isOpen
                            ? "border-[#ddc783] bg-white shadow-[0_8px_24px_rgba(65,49,19,0.045)]"
                            : "border-[#e7dfd2] bg-white hover:border-[#d9bd77]"
                        }`}
                      >
                        <button
                          id={questionId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => toggleFAQ(index)}
                          className="flex min-h-[68px] w-full items-center gap-3 px-3.5 py-4 text-left sm:min-h-[76px] sm:gap-4 sm:px-5 sm:py-5"
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center text-[9px] font-semibold transition-colors sm:h-9 sm:w-9 sm:text-[10px] ${
                              isOpen
                                ? "bg-[#eab934] text-[#29251f]"
                                : "bg-[#f5f0e6] text-[#8c7b57]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="min-w-0 flex-1 text-[11px] font-medium leading-6 text-[#302c25] sm:text-xs md:text-[13px]">
                            {faq.question}
                          </span>

                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center transition-all duration-200 sm:h-8 sm:w-8 ${
                              isOpen
                                ? "rotate-180 bg-[#f5ecd8] text-[#9b7626]"
                                : "bg-[#f8f5ef] text-[#81786b]"
                            }`}
                          >
                            <ChevronDown size={16} strokeWidth={1.7} />
                          </span>
                        </button>

                        <div
                          id={answerId}
                          role="region"
                          aria-labelledby={questionId}
                          hidden={!isOpen}
                        >
                          <div className="px-4 pb-5 pl-[58px] sm:px-5 sm:pb-6 sm:pl-[72px]">
                            <div className="border-t border-[#eee8de] pt-4">
                              <p className="text-[10px] leading-[2] text-[#6f675b] sm:text-[11px] sm:leading-7">
                                {faq.answer}
                              </p>

                              <div className="mt-4 flex items-start gap-2">
                                <Check
                                  size={14}
                                  strokeWidth={2}
                                  className="mt-0.5 shrink-0 text-[#a17b27]"
                                />

                                <span className="text-[9px] leading-5 text-[#81786b] sm:text-[10px]">
                                  Every project is discussed according to
                                  its specific requirements.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="relative mt-10 overflow-hidden bg-[#29261f] p-5 sm:mt-14 sm:p-8 md:p-10 lg:mt-16 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-16 h-40 w-40 rounded-full border border-[#eab934]/20 sm:h-56 sm:w-56"
          />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#eab934] sm:text-[10px]">
                Let's Talk About Your Project
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl md:text-3xl">
                Have a question that's not listed?
              </h3>

              <p className="mt-3 max-w-xl text-[10px] leading-6 text-white/65 sm:text-[11px] sm:leading-7">
                Contact Aristara Interior to discuss your requirements,
                explore available services, and plan the next steps for
                your home or commercial space.
              </p>
            </div>

            <button
              type="button"
              onClick={handleContact}
              className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2.5 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3ca55] sm:w-auto sm:px-6 sm:text-[11px]"
            >
              Contact Our Team

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}