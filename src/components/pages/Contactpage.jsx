
import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Compass,
  DraftingCompass,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Sofa,
  Wrench,
  LoaderCircle,
  AlertCircle,
  House,
  PencilRuler,
  HardHat,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: House,
    title: "Residential Interiors",
    description:
      "Thoughtfully designed homes that balance comfort, functionality, and your personal style.",
    tags: ["Living spaces", "Bedrooms", "Complete homes"],
  },
  {
    number: "02",
    icon: Building2,
    title: "Commercial Interiors",
    description:
      "Professional environments designed to improve everyday experiences and reflect your brand.",
    tags: ["Offices", "Retail spaces", "Workspaces"],
  },
  {
    number: "03",
    icon: DraftingCompass,
    title: "Architecture & Planning",
    description:
      "Practical layouts and considered architectural planning that make the most of every square foot.",
    tags: ["Space planning", "Floor plans", "3D concepts"],
  },
  {
    number: "04",
    icon: HardHat,
    title: "Construction & Turnkey",
    description:
      "A coordinated approach to construction and interiors, from the initial plan to the final details.",
    tags: ["Civil works", "Site coordination", "Finishing"],
  },
  {
    number: "05",
    icon: Sofa,
    title: "Custom Furniture",
    description:
      "Furniture and storage solutions planned around your space, lifestyle, and everyday needs.",
    tags: ["Wardrobes", "Custom furniture", "Storage"],
  },
  {
    number: "06",
    icon: Wrench,
    title: "Renovation & Upgrades",
    description:
      "Give existing spaces a fresh perspective with considered updates and practical improvements.",
    tags: ["Home renovation", "Interior updates", "Finishing works"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss your requirements, lifestyle, preferred style, site conditions, and budget.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop layouts, concepts, material directions, and visual references for your project.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "The approved plan moves into execution with coordinated work and attention to detail.",
  },
  {
    number: "04",
    title: "Complete",
    description:
      "We review the finishing details and work towards a handover that reflects the agreed scope.",
  },
];

const faqs = [
  {
    question: "What services does Cube 4 Spaces offer?",
    answer:
      "Cube 4 Spaces offers architecture and planning, residential and commercial interiors, construction and turnkey solutions, custom furniture, and renovation services. Share your requirements so we can discuss the right scope for your project.",
  },
  {
    question: "Can I discuss my project before confirming?",
    answer:
      "Yes. You can submit the enquiry form with your project details or contact the team directly to discuss your requirements and the next steps.",
  },
  {
    question: "Do you work on both homes and commercial spaces?",
    answer:
      "Yes. You can enquire about residential projects such as homes and apartments, as well as commercial spaces such as offices and retail environments.",
  },
  {
    question: "How do I request a project estimate?",
    answer:
      "Send your project type, location, approximate budget, and a brief description through the form. The team can review the information and discuss the next steps with you.",
  },
];

const inputClass =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2457C5] focus:bg-white focus:ring-4 focus:ring-blue-100";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600";

function SectionIntro({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <div
        className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-blue-200" : "text-[#2457C5]"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>

      <h2
        className={`font-poppins text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#142544]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-blue-200" : "text-[#2457C5]"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF4FF] text-[#2457C5] transition duration-300 group-hover:bg-[#2457C5] group-hover:text-white">
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <span className="font-poppins text-sm font-medium text-slate-400">
          {service.number}
        </span>
      </div>

      <h3 className="font-poppins text-xl font-semibold tracking-tight text-[#142544]">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {service.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function ContactItem({ icon: Icon, title, children }) {
  return (
    <div className="flex min-w-0 items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-200">
        <Icon size={19} strokeWidth={1.7} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">
          {title}
        </p>
        <div className="mt-2 break-words text-sm leading-6 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
    message: "",
    source: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Submitting your project enquiry...");

    const formElement = event.currentTarget;
    const web3FormData = new FormData(formElement);

    // Replace with your actual Web3Forms access key.
    web3FormData.append(
      "access_key",
      "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
    );
    web3FormData.append(
      "subject",
      `New Cube 4 Spaces Enquiry - ${formData.name}`
    );
    web3FormData.append("from_name", "Cube 4 Spaces Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to submit your enquiry. Please try again."
        );
      }

      setStatus("success");
      setResult(
        "Thank you for contacting Cube 4 Spaces. Your enquiry has been submitted successfully."
      );

      formElement.reset();

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        location: "",
        budget: "",
        message: "",
        source: "",
      });
    } catch (error) {
      setStatus("error");
      setResult(
        error.message ||
          "A network error occurred. Please try again or contact us directly."
      );
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        :root {
          font-family: 'DM Sans', sans-serif;
          color: #202b3c;
          background: #ffffff;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-width: 320px;
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .font-dm {
          font-family: 'DM Sans', sans-serif;
        }

        ::selection {
          color: #ffffff;
          background: #2457C5;
        }

        button, input, select, textarea {
          font: inherit;
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main id="top" className="overflow-hidden bg-white font-dm">
        {/* HERO SECTION */}
        <section className="relative bg-white">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-12 lg:py-20 xl:gap-20 xl:py-24">
            <div className="relative z-10">
              <Eyebrow>Thoughtful design. Meaningful spaces.</Eyebrow>

              <h1 className="font-poppins text-[clamp(2.6rem,6vw,5.8rem)] font-medium leading-[1.09] tracking-[-0.055em] text-[#142544]">
                Spaces that
                <br />
                feel like
                <br />
                <span className="font-semibold text-[#2457C5]">
                  you.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:mt-7 sm:text-lg">
                Architecture, interiors, and construction shaped around the
                way you live, work, and connect. We bring ideas together with
                thoughtful planning and considered details.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg bg-[#2457C5] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1B449B]"
                >
                  Start a Conversation
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#services"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  Explore Our Services
                  <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 sm:mt-12">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CheckCircle2 size={17} className="text-[#2457C5]" />
                  Client-focused planning
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CheckCircle2 size={17} className="text-[#2457C5]" />
                  Design-led approach
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[3rem] border-r border-t border-blue-300 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

              <div className="relative overflow-hidden rounded-2xl bg-blue-50">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85"
                  alt="Contemporary living room with warm neutral finishes and thoughtful interior styling"
                  fetchPriority="high"
                  className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[560px] xl:h-[620px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#142544]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="max-w-[260px] rounded-xl border border-white/40 bg-white/95 p-4 backdrop-blur-md sm:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2457C5]">
                      Design philosophy
                    </p>
                    <p className="mt-2 font-poppins text-base font-medium leading-snug text-[#142544] sm:text-lg">
                      Beauty in every detail.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white sm:flex">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-bl-[3rem] border-b border-l border-blue-300 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />
            </div>
          </div>
        </section>

        {/* DESIGN VALUES */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
            {[
              {
                icon: Compass,
                title: "Design with purpose",
                text: "Every decision starts with your needs.",
              },
              {
                icon: Ruler,
                title: "Plan with clarity",
                text: "A considered approach to your space.",
              },
              {
                icon: ShieldCheck,
                title: "Details matter",
                text: "Careful attention from concept to finish.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 py-6 sm:px-5 sm:py-8 lg:px-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EDF4FF] text-[#2457C5]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="font-poppins text-sm font-semibold text-[#142544] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="scroll-mt-20 bg-[#F5F8FF] py-16 sm:py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="grid grid-cols-[1fr_0.72fr] items-end gap-3 sm:gap-5">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern home interior with natural light and refined materials"
                  loading="lazy"
                  className="h-[300px] w-full rounded-2xl object-cover sm:h-[430px]"
                />

                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85"
                  alt="Carefully finished contemporary interior details"
                  loading="lazy"
                  className="mb-8 h-[210px] w-full rounded-2xl object-cover sm:mb-12 sm:h-[300px]"
                />
              </div>

              <div className="absolute bottom-0 left-2 max-w-[220px] rounded-xl bg-[#142544] p-4 text-white shadow-xl sm:left-5 sm:max-w-[250px] sm:p-5">
                <p className="font-poppins text-lg font-medium sm:text-xl">
                  Made around you.
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                  Your lifestyle guides every design decision.
                </p>
              </div>
            </div>

            <div>
              <SectionIntro
                eyebrow="About Cube 4 Spaces"
                title="Good design begins with understanding."
                description="We believe a well-designed space should do more than look beautiful. It should feel intuitive, work effortlessly, and reflect the people who use it."
              />

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                From the first conversation to material selection and project
                execution, our approach centres on listening, planning, and
                bringing the details together. Whether you are creating a new
                home, refreshing an existing interior, or planning a commercial
                environment, we aim to make the journey clearer and more
                considered.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-white p-5">
                  <PencilRuler size={22} className="text-[#2457C5]" />
                  <h3 className="mt-4 font-poppins text-base font-semibold text-[#142544]">
                    Thoughtful creativity
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Design choices shaped by purpose, proportion, and
                    personality.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-5">
                  <Layers3 size={22} className="text-[#2457C5]" />
                  <h3 className="mt-4 font-poppins text-base font-semibold text-[#142544]">
                    Connected execution
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A coordinated view of the design, materials, and
                    practical requirements.
                  </p>
                </div>
              </div>

              <a
                href="#services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#2457C5] transition hover:gap-3"
              >
                See how we can help
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <SectionIntro
                eyebrow="Our services"
                title="From the first sketch to the finishing touch."
                description="Explore design and execution services that can be shaped around your project, priorities, and space."
              />

              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 border-b border-[#2457C5] pb-2 text-sm font-bold text-[#2457C5] transition hover:gap-3"
              >
                Tell us about your project
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.number} service={service} />
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-100 bg-[#EDF4FF] p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2457C5]">
                  Have a specific requirement?
                </p>
                <h3 className="mt-3 font-poppins text-xl font-semibold tracking-tight text-[#142544] sm:text-2xl">
                  Let’s find the right approach for your space.
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                  Share your ideas, requirements, and location with our team.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#142544] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1B449B]"
              >
                Enquire Now
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* DESIGN APPROACH */}
        <section className="relative overflow-hidden bg-[#142544] py-16 sm:py-20 lg:py-28">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />

          <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <SectionIntro
                eyebrow="The Cube 4 Spaces approach"
                title="A clear process. A considered outcome."
                description="Every project is different. We focus on understanding your priorities and connecting the creative vision with practical decisions."
                light
              />

              <a
                href="#process"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore our process
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-8">
              {[
                {
                  icon: MessageCircle,
                  title: "We listen first",
                  text: "Your goals, routines, preferences, and constraints shape the starting point.",
                },
                {
                  icon: DraftingCompass,
                  title: "We plan carefully",
                  text: "Layouts, materials, and design decisions are considered as part of the bigger picture.",
                },
                {
                  icon: Ruler,
                  title: "We focus on detail",
                  text: "Proportion, finish, functionality, and the way elements work together all matter.",
                },
                {
                  icon: ShieldCheck,
                  title: "We communicate clearly",
                  text: "Open conversations help align expectations, scope, and the next steps.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`border-white/15 py-6 ${
                      index < 2 ? "sm:border-b" : ""
                    } ${index % 2 === 0 ? "sm:pr-5" : "sm:pl-5"}`}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-blue-200"
                    />
                    <h3 className="mt-5 font-poppins text-lg font-medium text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECT PROCESS */}
        <section
          id="process"
          className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2457C5]">
                <span className="h-px w-8 bg-current" />
                How it works
                <span className="h-px w-8 bg-current" />
              </div>

              <h2 className="font-poppins text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#142544] sm:text-4xl lg:text-5xl">
                Your project, step by step.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                A straightforward framework that helps move your ideas from
                initial discussion towards a finished space.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-5">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-12 right-0 top-6 hidden h-px bg-blue-100 lg:block" />
                  )}

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-[#EDF4FF] font-poppins text-sm font-semibold text-[#2457C5]">
                    {step.number}
                  </div>

                  <h3 className="mt-6 font-poppins text-xl font-semibold text-[#142544]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE BANNER */}
        <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-2xl bg-[#142544]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
              alt="Elegant contemporary architecture and landscaped surroundings"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#142544]/75" />

            <div className="relative grid gap-7 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
              <div className="max-w-2xl">
                <Eyebrow light>
                  Let's create something meaningful
                </Eyebrow>

                <h2 className="font-poppins text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Your ideas deserve a space of their own.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                  Tell us what you have in mind. We’ll start with a conversation
                  about your project and the possibilities ahead.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-bold text-[#142544] transition hover:bg-blue-50"
              >
                Start Your Enquiry
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F8FF] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <div>
              <SectionIntro
                eyebrow="Common questions"
                title="A few things you may want to know."
                description="Have another question about your project? Send us an enquiry and we can discuss your requirements."
              />

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#2457C5] hover:gap-3"
              >
                Ask us directly
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="divide-y divide-blue-100 border-y border-blue-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.question} className="py-5 sm:py-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-start justify-between gap-5 text-left"
                    >
                      <span className="font-poppins text-base font-medium leading-7 text-[#142544] sm:text-lg">
                        {faq.question}
                      </span>

                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-200 text-[#2457C5]">
                        {isOpen ? (
                          <span className="text-lg leading-none">−</span>
                        ) : (
                          <ArrowDownRight size={15} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="max-w-2xl pr-8 pt-4 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION — NO FOOTER */}
        <section
          id="contact"
          className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-12">
              <SectionIntro
                eyebrow="Get in touch"
                title="Let's talk about your space."
                description="Tell us about your vision, project type, and location. Our team can review your enquiry and discuss the next steps with you."
              />

              <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
                Whether you are planning a new home, improving an existing
                space, or developing a commercial property, the first step is
                a conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
              {/* PROJECT ENQUIRY FORM */}
              <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                <div className="mb-7 border-b border-slate-200 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4FF] text-[#2457C5]">
                      <MessageCircle size={21} />
                    </div>

                    <div>
                      <h3 className="font-poppins text-xl font-semibold text-[#142544] sm:text-2xl">
                        Project Enquiry
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Fields marked * are required.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={150}
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        maxLength={20}
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="projectType">
                        Project type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Choose a service</option>
                        <option value="Residential Interiors">
                          Residential Interiors
                        </option>
                        <option value="Commercial Interiors">
                          Commercial Interiors
                        </option>
                        <option value="Architecture and Planning">
                          Architecture & Planning
                        </option>
                        <option value="Construction and Turnkey">
                          Construction & Turnkey
                        </option>
                        <option value="Custom Furniture">
                          Custom Furniture
                        </option>
                        <option value="Renovation">
                          Renovation & Upgrades
                        </option>
                        <option value="Other">Other Requirement</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="location">
                        Project location *
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="address-level2"
                        required
                        maxLength={150}
                        value={formData.location}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="City or locality"
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="budget">
                        Estimated budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Choose a range</option>
                        <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                        <option value="₹5–15 Lakhs">₹5–15 Lakhs</option>
                        <option value="₹15–30 Lakhs">₹15–30 Lakhs</option>
                        <option value="₹30–50 Lakhs">₹30–50 Lakhs</option>
                        <option value="₹50 Lakhs and above">
                          ₹50 Lakhs and above
                        </option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="message">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={3000}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-y`}
                      placeholder="Describe your requirements, preferred style, approximate size, and expected timeline..."
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="source">
                      How did you find us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select an option</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Referral">Friend or Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {status !== "idle" && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                        status === "loading"
                          ? "border-amber-200 bg-amber-50 text-amber-900"
                          : status === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : "border-rose-200 bg-rose-50 text-rose-800"
                      }`}
                    >
                      {status === "loading" && (
                        <LoaderCircle
                          className="mt-0.5 shrink-0 animate-spin"
                          size={19}
                        />
                      )}

                      {status === "success" && (
                        <CheckCircle2
                          className="mt-0.5 shrink-0"
                          size={19}
                        />
                      )}

                      {status === "error" && (
                        <AlertCircle
                          className="mt-0.5 shrink-0"
                          size={19}
                        />
                      )}

                      <span>{result}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#2457C5] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1B449B] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                  >
                    {status === "loading"
                      ? "Submitting your enquiry..."
                      : "Send Project Enquiry"}

                    {status === "loading" ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <Send size={17} />
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Please provide accurate contact details so the team can
                    respond to your enquiry.
                  </p>
                </form>
              </div>

              {/* CONTACT DETAILS */}
              <aside className="min-w-0 space-y-5">
                <div className="rounded-2xl bg-[#142544] p-6 text-white sm:p-8 lg:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    Contact details
                  </p>

                  <h3 className="mt-3 font-poppins text-2xl font-semibold leading-tight sm:text-3xl">
                    Cube 4 Spaces
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Have a project in mind? Reach out to discuss your
                    requirements and explore the next steps.
                  </p>

                  <div className="mt-8 space-y-6">
                    <ContactItem icon={Phone} title="Phone">
                      <a
                        href="tel:+919876543210"
                        className="transition hover:text-blue-200"
                      >
                        +91 98765 43210
                      </a>
                      <br />
                      <a
                        href="tel:+918765432109"
                        className="transition hover:text-blue-200"
                      >
                        +91 87654 32109
                      </a>
                    </ContactItem>

                    <ContactItem icon={Mail} title="Email">
                      <a
                        href="mailto:cubefourspaces@gmail.com"
                        className="break-all transition hover:text-blue-200"
                      >
                        cubefourspaces@gmail.com
                      </a>
                    </ContactItem>

                    <ContactItem icon={Clock3} title="Working hours">
                      Monday – Saturday
                      <br />
                      9:00 AM – 7:00 PM
                      <p className="mt-1 text-xs text-slate-400">
                        Sunday: By prior appointment
                      </p>
                    </ContactItem>

                    <ContactItem icon={MapPin} title="Location">
                      Coimbatore, Tamil Nadu, India
                    </ContactItem>
                  </div>

                  <div className="mt-8 border-t border-white/15 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Service enquiries
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Residential interiors · Commercial spaces · Architecture
                      · Construction · Renovation
                    </p>
                  </div>

                  <a
                    href="https://wa.me/919876543210?text=Hello%20Cube%204%20Spaces%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    Contact on WhatsApp
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-[#EDF4FF] p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2457C5]">
                      <Check size={22} />
                    </div>

                    <div>
                      <h4 className="font-poppins text-base font-semibold text-[#142544]">
                        Start with a conversation
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Share your goals and requirements first. We can then
                        discuss the project scope and possible next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* GOOGLE MAP */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex flex-col justify-between gap-4 pb-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2457C5]">
                    Find us
                  </p>
                  <h3 className="mt-2 font-poppins text-xl font-semibold text-[#142544] sm:text-2xl">
                    Cube 4 Spaces — Coimbatore
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    View the location on Google Maps.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Cube+4+Spaces+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#2457C5]"
                >
                  Open Google Maps
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="h-[280px] overflow-hidden rounded-xl bg-slate-100 sm:h-[380px] lg:h-[460px]">
                <iframe
                  title="Cube 4 Spaces location map"
                  src="https://www.google.com/maps?q=Cube%204%20Spaces%20Coimbatore&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
