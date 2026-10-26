
import { useEffect, useState } from "react";
import {
  X,
  MessageCircle,
  ArrowUpRight,
  Images,
  MoveUpRight,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import Image1 from "../../assests/gallery/gallery1.webp";
import Image2 from "../../assests/gallery/gallery2.webp";
import Image3 from "../../assests/gallery/gallery3.webp";
import Image4 from "../../assests/gallery/gallery4.webp";
import Image5 from "../../assests/team/herosection/cubehero3.webp";
import Image6 from "../../assests/team/herosection/cubehero4.webp";

const projects = [
  {
    id: 1,
    img: Image1,
    category: "Kitchen Design",
    title: "The Modern Kitchen",
    desc: "Thoughtfully planned cabinetry, practical storage, and refined finishes for everyday living.",
    number: "01",
  },
  {
    id: 2,
    img: Image2,
    category: "Home Interiors",
    title: "Contemporary Living",
    desc: "A balanced living space combining comfort, natural tones, and contemporary detailing.",
    number: "02",
  },
  {
    id: 3,
    img: Image3,
    category: "Commercial",
    title: "The Work Collection",
    desc: "Purposeful workspaces designed around productivity, movement, and professional identity.",
    number: "03",
  },
  {
    id: 4,
    img: Image4,
    category: "Bedroom Design",
    title: "A Calmer Retreat",
    desc: "A restful bedroom concept with considered lighting, warm textures, and understated elegance.",
    number: "04",
  },
  {
    id: 5,
    img: Image5,
    category: "Residential",
    title: "Modern Living",
    desc: "A cohesive home design that brings together space planning, functionality, and visual harmony.",
    number: "05",
  },
  {
    id: 6,
    img: Image6,
    category: "Workspace",
    title: "Creative Workspace",
    desc: "A contemporary environment designed to support collaboration, focus, and everyday business.",
    number: "06",
  },
];

const studioFeatures = [
  {
    number: "01",
    label: "Planning",
    title: "Every detail has a purpose.",
    desc: "We consider layout, movement, storage, and everyday needs before the work begins.",
    style: "dark",
  },
  {
    number: "02",
    label: "Design",
    title: "A look that feels like you.",
    desc: "Thoughtful colours, materials, and finishes bring your personal vision to life.",
    image: Image2,
    style: "image",
  },
  {
    number: "03",
    label: "Execution",
    title: "From concept to completion.",
    desc: "A coordinated approach helps keep design decisions and on-site work aligned.",
    image: Image5,
    style: "image",
  },
  {
    number: "04",
    label: "Finishing",
    title: "The details make the difference.",
    desc: "Finishing touches help create a cohesive, comfortable, and complete space.",
    style: "light",
  },
];

export default function GalleryGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const redirectToWhatsApp = (title) => {
    const message = encodeURIComponent(
      `Hello Cube4Spaces & Paint Studio, I would like to discuss a project related to ${title}. Please share more details.`
    );

    window.open(
      `https://wa.me/?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f5] py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl md:h-[30rem] md:w-[30rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[45%] h-72 w-72 rounded-full bg-slate-200/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Hero heading */}
        <header className="mb-10 grid gap-7 sm:mb-12 md:mb-16 lg:grid-cols-[1.1fr_0.75fr] lg:items-end lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2">
              <Images size={16} className="text-indigo-600" />

              <span className="font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 sm:text-xs">
                Selected Projects
              </span>
            </div>

            <h1 className="max-w-3xl font-['Poppins',sans-serif] text-3xl font-semibold leading-[1.17] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Designed with purpose.
              <span className="mt-1 block text-indigo-600">
                Made for living.
              </span>
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto lg:pb-1">
            <p className="font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
              Explore a collection of interior concepts, residential spaces,
              kitchens, and work environments. Each project begins with an
              understanding of how the space should look, feel, and function.
            </p>

            <button
              type="button"
              onClick={() => redirectToWhatsApp("a new project")}
              className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 font-['DM_Sans',sans-serif] text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-600 sm:mt-7 sm:w-auto sm:justify-start sm:px-7"
            >
              Discuss Your Project
              <MessageCircle
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </header>

        {/* Gallery introduction */}
        <div className="mb-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="font-['Poppins',sans-serif] text-sm font-medium text-slate-900 sm:text-base">
            A closer look at our work
          </p>

          <p className="font-['DM_Sans',sans-serif] text-xs text-slate-500 sm:text-sm">
            Interior Design / Residential / Commercial
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-7 xl:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group min-w-0 ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => openModal(project)}
                aria-label={`View details for ${project.title}`}
                className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/40"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-slate-200 sm:rounded-3xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/10 transition-opacity duration-300 group-hover:from-slate-950/90" />

                  {/* Image label */}
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-5 sm:right-5 sm:top-5">
                    <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.12em] text-slate-800 backdrop-blur-sm sm:px-4 sm:text-xs">
                      {project.category}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white sm:h-11 sm:w-11">
                      <MoveUpRight size={18} />
                    </span>
                  </div>

                  {/* Image text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-px w-7 bg-indigo-300" />

                      <span className="font-['DM_Sans',sans-serif] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
                        Project {project.number}
                      </span>
                    </div>

                    <h3 className="font-['Poppins',sans-serif] text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-[1.65rem]">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 max-w-md font-['DM_Sans',sans-serif] text-xs leading-6 text-white/75 sm:text-sm">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 font-['DM_Sans',sans-serif] text-xs font-semibold text-white transition-colors group-hover:text-indigo-200 sm:text-sm">
                      Explore Project
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Studio section */}
        <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-20 sm:rounded-3xl sm:p-7 md:mt-28 md:p-10 lg:p-14">
          {/* Studio introduction */}
          <div className="grid gap-6 border-b border-slate-100 pb-8 sm:pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-7 bg-indigo-600" />

                <span className="font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  The Studio Approach
                </span>
              </div>

              <h2 className="max-w-2xl font-['Poppins',sans-serif] text-2xl font-semibold leading-[1.25] tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                Good design goes beyond appearances.
                <span className="block text-slate-400">
                  It makes everyday life better.
                </span>
              </h2>
            </div>

            <div>
              <p className="font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:text-base">
                At Cube4Spaces & Paint Studio, we bring together thoughtful
                space planning, material selection, interior design, and
                finishing to create spaces with purpose and personality.
              </p>

              <div className="mt-5 flex items-start gap-2.5">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />

                <p className="font-['DM_Sans',sans-serif] text-sm font-medium leading-6 text-slate-700">
                  From the first idea to the finishing details, every decision
                  should serve the space.
                </p>
              </div>
            </div>
          </div>

          {/* Studio cards */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {studioFeatures.map((feature) => {
              const isDark = feature.style === "dark";
              const isLight = feature.style === "light";
              const hasImage = feature.style === "image";

              return (
                <article
                  key={feature.number}
                  className={`group relative flex min-h-[230px] min-w-0 flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[270px] sm:rounded-3xl sm:p-6 ${
                    isDark
                      ? "border-slate-950 bg-slate-950 text-white"
                      : isLight
                      ? "border-slate-200 bg-[#f5f5f3] text-slate-950"
                      : "border-slate-200 bg-slate-900 text-white"
                  }`}
                >
                  {hasImage && (
                    <>
                      <img
                        src={feature.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/20" />
                    </>
                  )}

                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`font-['DM_Sans',sans-serif] text-xs font-bold tracking-[0.15em] ${
                          isLight ? "text-indigo-600" : "text-white/65"
                        }`}
                      >
                        {feature.number}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1.5 font-['DM_Sans',sans-serif] text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          isDark
                            ? "border-white/15 text-slate-300"
                            : isLight
                            ? "border-slate-300 text-slate-600"
                            : "border-white/30 text-white/85"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </div>

                    <div className="mt-auto pt-10">
                      <h3
                        className={`font-['Poppins',sans-serif] text-lg font-semibold leading-snug sm:text-xl ${
                          isLight ? "text-slate-950" : "text-white"
                        }`}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={`mt-3 font-['DM_Sans',sans-serif] text-sm leading-6 ${
                          isDark
                            ? "text-slate-400"
                            : isLight
                            ? "text-slate-600"
                            : "text-white/75"
                        }`}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="mt-7 flex flex-col gap-5 rounded-2xl bg-indigo-50 p-5 sm:mt-9 sm:rounded-3xl sm:p-7 md:flex-row md:items-center md:justify-between md:gap-8 md:p-9">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Layers3 size={16} className="text-indigo-600" />

                <span className="font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
                  Have a Project in Mind?
                </span>
              </div>

              <h3 className="font-['Poppins',sans-serif] text-xl font-semibold leading-snug text-slate-950 sm:text-2xl md:text-3xl">
                Let’s create a space that works for you.
              </h3>

              <p className="mt-2 font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-600">
                Tell us about your requirements and start a conversation with
                our team.
              </p>
            </div>

            <button
              type="button"
              onClick={() => redirectToWhatsApp("a new interior or construction project")}
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 font-['DM_Sans',sans-serif] text-sm font-semibold text-white transition hover:bg-indigo-700 sm:w-auto sm:px-7"
            >
              <MessageCircle size={18} />
              Get a Project Quote
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </section>

        {/* Project details modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-3 backdrop-blur-sm sm:p-5 md:p-8"
            onClick={closeModal}
            role="presentation"
          >
            <article
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative my-auto flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl md:max-h-[88vh] md:flex-row"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal image */}
              <div className="relative h-56 shrink-0 overflow-hidden bg-slate-200 sm:h-72 md:h-auto md:w-1/2">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/10" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/90 px-4 py-2 font-['DM_Sans',sans-serif] text-xs font-semibold uppercase tracking-wider text-slate-800 sm:bottom-6 sm:left-6">
                  {selectedProject.category}
                </span>
              </div>

              {/* Modal content */}
              <div className="relative flex min-h-0 flex-col overflow-y-auto p-5 sm:p-7 md:w-1/2 md:justify-center md:p-9 lg:p-12">
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 sm:right-5 sm:top-5"
                >
                  <X size={19} />
                </button>

                <div className="mb-4 flex items-center gap-2 pr-12">
                  <span className="h-px w-7 bg-indigo-600" />

                  <span className="font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.17em] text-indigo-600">
                    Project {selectedProject.number}
                  </span>
                </div>

                <h2
                  id="project-modal-title"
                  className="font-['Poppins',sans-serif] text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
                >
                  {selectedProject.title}
                </h2>

                <p className="mt-4 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:text-base">
                  {selectedProject.desc}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 border-y border-slate-100 py-5 sm:mt-8 sm:grid-cols-2">
                  <div>
                    <p className="font-['DM_Sans',sans-serif] text-xs text-slate-400">
                      Project Category
                    </p>
                    <p className="mt-1 font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-800">
                      {selectedProject.category}
                    </p>
                  </div>

                  <div>
                    <p className="font-['DM_Sans',sans-serif] text-xs text-slate-400">
                      Project Reference
                    </p>
                    <p className="mt-1 font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-800">
                      C4S-{selectedProject.number}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => redirectToWhatsApp(selectedProject.title)}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-5 py-4 font-['DM_Sans',sans-serif] text-sm font-semibold text-white transition hover:bg-indigo-600 sm:mt-8"
                >
                  <MessageCircle size={18} />
                  Enquire About This Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
