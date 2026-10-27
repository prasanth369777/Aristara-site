
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  House,
  Building2,
  Armchair,
  Images,
  CheckCircle2,
  Clock3,
  LayoutGrid,
} from "lucide-react";

const projectCategories = [
  {
    id: "completed",
    title: "Completed Projects",
    subtitle: "Finished spaces",
    icon: CheckCircle2,
  },
  {
    id: "ongoing",
    title: "Ongoing Projects",
    subtitle: "Currently in progress",
    icon: Clock3,
  },
  {
    id: "gallery",
    title: "Project Gallery",
    subtitle: "Explore our work",
    icon: Images,
  },
];

const projects = [
  {
    title: "Contemporary Residence",
    category: "Residential Interiors",
    type: "completed",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary living room with refined interior finishes",
    icon: House,
    description:
      "A thoughtfully styled residential space balancing comfort, natural tones, and modern detailing.",
  },
  {
    title: "Modern Living Space",
    category: "Living Room Design",
    type: "completed",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern living space with elegant furniture and natural lighting",
    icon: Armchair,
    description:
      "A welcoming interior concept with considered furniture placement and a cohesive colour palette.",
  },
  {
    title: "Residential Development",
    category: "Residential Project",
    type: "ongoing",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary residential property exterior",
    icon: House,
    description:
      "A residential project focused on planning, functional spaces, and coordinated execution.",
  },
  {
    title: "Commercial Space",
    category: "Commercial Interiors",
    type: "ongoing",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary commercial workspace interior",
    icon: Building2,
    description:
      "A modern workspace concept designed around practical layouts and a professional environment.",
  },
  {
    title: "Elegant Home Interiors",
    category: "Complete Home Interiors",
    type: "gallery",
    status: "Gallery",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    alt: "Elegant home interior with warm materials and clean lines",
    icon: House,
    description:
      "An interior inspiration featuring understated finishes and a calm, contemporary atmosphere.",
  },
  {
    title: "Refined Interior Details",
    category: "Interior Design",
    type: "gallery",
    status: "Gallery",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    alt: "Carefully composed modern interior design details",
    icon: Armchair,
    description:
      "A collection of interior details, textures, finishes, and furniture ideas for modern homes.",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("completed");

  const visibleProjects =
    activeCategory === "gallery"
      ? projects
      : projects.filter((project) => project.type === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full overflow-hidden bg-[#fbf8f1] py-12 font-['Poppins',sans-serif] text-[#25231f] sm:py-16 lg:py-20"
    >
      {/* BACKGROUND ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#e9d9b5]/25 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#eee6d7]/60 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-9 grid gap-6 sm:mb-12 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12"
        >
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2.5 border border-[#e7dcc6] bg-white px-3.5 py-2 sm:mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#987329] sm:text-[10px]">
                Our Work & Portfolio
              </span>
            </div>

            <h2
              id="projects-heading"
              className="max-w-3xl text-[clamp(2.1rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.06em] text-[#25231f]"
            >
              Spaces Made
              <span className="mt-1 block font-normal italic text-[#c99a29]">
                with Purpose.
              </span>
            </h2>
          </div>

          <div className="min-w-0 lg:max-w-md lg:justify-self-end">
            <p className="text-[11px] leading-7 text-[#6f675b] sm:text-xs">
              Explore completed work, follow projects in progress, and browse
              our interior design inspiration. Each project reflects a
              considered approach to space, functionality, and finishing.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Residential", "Commercial", "Interior Design"].map((item) => (
                <span
                  key={item}
                  className="border border-[#e6ddce] bg-white px-3 py-1.5 text-[9px] font-medium text-[#6e6659] sm:text-[10px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {/* PROJECT CATEGORY SELECTOR */}
        <div className="mb-6 flex flex-col gap-4 border-b border-[#e5dccd] pb-5 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#987329]">
              Explore Our Portfolio
            </p>
            <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.04em] text-[#25231f] sm:text-xl">
              Discover Our Projects
            </h3>
          </div>

          <div
            role="group"
            aria-label="Filter projects"
            className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0"
          >
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.id;
              const Icon = category.icon;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-10 shrink-0 items-center gap-2 border px-3 py-2 text-[9px] font-medium transition-all duration-200 sm:px-4 sm:text-[10px] ${
                    isActive
                      ? "border-[#29261f] bg-[#29261f] text-white"
                      : "border-[#e5dccd] bg-white text-[#6e6659] hover:border-[#d9bd77] hover:bg-[#f8f1e3]"
                  }`}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.6}
                    className={isActive ? "text-[#eab934]" : "text-[#9c7626]"}
                  />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE CATEGORY DESCRIPTION */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium text-[#49443b] sm:text-[11px]">
              {projectCategories.find((item) => item.id === activeCategory)?.subtitle}
            </p>
            <p className="mt-1 text-[9px] text-[#81786b]">
              {activeCategory === "completed"
                ? "Explore finished project examples."
                : activeCategory === "ongoing"
                ? "Discover projects currently in progress."
                : "Browse the complete selection of project examples."}
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 text-[9px] text-[#81786b]">
            <LayoutGrid size={13} strokeWidth={1.5} />
            {visibleProjects.length} projects
          </span>
        </div>

        {/* PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {visibleProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                  className="group min-w-0 overflow-hidden border border-[#e7dfd2] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d9bd77] hover:shadow-[0_12px_30px_rgba(65,49,19,0.08)]"
                >
                  {/* PROJECT IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e2d5]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 border border-white/30 bg-[#fbf8f1]/95 px-2.5 py-1.5 text-[8px] font-semibold text-[#514638] sm:text-[9px]">
                      <Icon size={12} strokeWidth={1.6} />
                      {project.category}
                    </span>

                    <span
                      className={`absolute bottom-3 left-3 px-2.5 py-1.5 text-[8px] font-medium sm:text-[9px] ${
                        project.type === "ongoing"
                          ? "bg-[#29261f] text-[#eab934]"
                          : project.type === "completed"
                          ? "bg-[#fbf8f1] text-[#514638]"
                          : "bg-[#eab934] text-[#29251f]"
                      }`}
                    >
                      {project.status}
                    </span>

                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf8f1] text-[#9c7626] transition-colors duration-300 group-hover:bg-[#eab934] group-hover:text-[#29251d]">
                      <ArrowUpRight size={17} strokeWidth={1.6} />
                    </span>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[12px] font-semibold leading-5 text-[#29261f] sm:text-sm">
                        {project.title}
                      </h3>

                      <span className="pt-0.5 text-[9px] tracking-[0.12em] text-[#a59a86]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] leading-6 text-[#746d62] sm:text-[11px]">
                      {project.description}
                    </p>

                    <a
                      href="/contact/"
                      className="group/link mt-4 inline-flex items-center gap-2 border-t border-[#eee8de] pt-3 text-[9px] font-semibold text-[#987329] transition-colors hover:text-[#29261f] sm:text-[10px]"
                    >
                      Enquire About a Project
                      <ArrowRight
                        size={13}
                        strokeWidth={1.7}
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* PROJECT ENQUIRY CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="relative mt-10 overflow-hidden bg-[#29261f] p-5 sm:mt-14 sm:p-8 md:p-10"
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
                Have a Project in Mind?
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl md:text-3xl">
                Let’s create a space that works for you.
              </h3>

              <p className="mt-3 max-w-xl text-[10px] leading-6 text-white/65 sm:text-[11px] sm:leading-7">
                Tell us about your property, design ideas, and requirements.
                Our team can discuss the scope and possible next steps with you.
              </p>
            </div>

            <a
              href="/contact/"
              className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2.5 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3ca55] sm:w-auto sm:px-6 sm:text-[11px]"
            >
              Discuss Your Project
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* BOTTOM BRAND STATEMENT */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[#e8e0d3] pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] font-medium text-[#49443b] sm:text-[11px]">
            Thoughtful spaces. Meaningful projects. Considered details.
          </p>

          <p className="text-[9px] text-[#81786b]">
            Aristara Interior
          </p>
        </div>
      </div>
    </section>
  );
}
