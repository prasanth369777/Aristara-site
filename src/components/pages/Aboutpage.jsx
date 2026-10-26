
import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,

  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DraftingCompass,
  Hammer,
  HardHat,
  Home,
  Layers3,
  Mail,
  MapPin,

  MessageCircle,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

const services = [
  {
    title: "Residential Interiors",
    description:
      "Thoughtfully planned homes that bring together comfort, functionality, and your personal style.",
    icon: Home,
    category: "residential",
    number: "01",
    features: [
      "Complete home interiors",
      "Modular kitchens and wardrobes",
      "Living rooms and bedrooms",
      "Lighting, ceilings and finishes",
    ],
  },
  {
    title: "Commercial Interiors",
    description:
      "Purpose-built workspaces that reflect your brand and make everyday business easier.",
    icon: Building2,
    category: "commercial",
    number: "02",
    features: [
      "Office interiors",
      "Retail shops and boutiques",
      "Restaurants and cafés",
      "Reception and meeting rooms",
    ],
  },
  {
    title: "Construction",
    description:
      "A coordinated approach to building, renovation, site execution, and finishing.",
    icon: HardHat,
    category: "all",
    number: "03",
    features: [
      "Residential construction",
      "Renovation and remodelling",
      "Site coordination",
      "Quality checks and finishing",
    ],
  },
  {
    title: "Turnkey Solutions",
    description:
      "One coordinated team to manage your project from the first discussion to handover.",
    icon: Layers3,
    category: "all",
    number: "04",
    features: [
      "Planning and design",
      "Material coordination",
      "Execution management",
      "Final inspection and handover",
    ],
  },
  {
    title: "Painting & Finishing",
    description:
      "Carefully selected colours and clean finishes that complete the look of your space.",
    icon: Paintbrush,
    category: "all",
    number: "05",
    features: [
      "Interior and exterior painting",
      "Colour consultation",
      "Surface preparation",
      "Final finishing work",
    ],
  },
  {
    title: "Design & Space Planning",
    description:
      "Practical layouts and visual planning to help you make confident design decisions.",
    icon: DraftingCompass,
    category: "residential",
    number: "06",
    features: [
      "Space planning",
      "2D layouts",
      "3D design visualisation",
      "Material and finish selection",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consult",
    heading: "First, we understand your vision.",
    description:
      "We discuss your requirements, lifestyle, preferred design, budget, and project timeline before recommending the right approach.",
    icon: MessageCircle,
    points: [
      "Initial consultation",
      "Site visit and measurements",
      "Budget and timeline discussion",
    ],
  },
  {
    number: "02",
    title: "Design",
    heading: "Plan every detail with clarity.",
    description:
      "We develop the design direction, space layout, visual concepts, and material choices so you can understand the plan before execution.",
    icon: Ruler,
    points: [
      "Space planning and layouts",
      "3D design visualisation",
      "Material selection and quotation",
    ],
  },
  {
    number: "03",
    title: "Build",
    heading: "Bring the approved plan to life.",
    description:
      "Our project team coordinates the execution, monitors progress, and works towards the agreed scope and quality expectations.",
    icon: Hammer,
    points: [
      "Site and work coordination",
      "Progress updates",
      "Quality checks during execution",
    ],
  },
  {
    number: "04",
    title: "Handover",
    heading: "Get ready to enjoy your space.",
    description:
      "We review the completed work, address finishing details, and guide you through the final handover process.",
    icon: CheckCircle2,
    points: [
      "Final walkthrough",
      "Finishing review",
      "Project handover",
    ],
  },
];

const faqs = [
  {
    question: "What services does Cube4Spaces provide?",
    answer:
      "Cube4Spaces provides interior design, construction, renovation, painting, space planning, and turnkey project solutions for residential and commercial spaces.",
  },
  {
    question: "Do you work on both homes and commercial spaces?",
    answer:
      "Yes. Our service categories include homes, apartments, villas, offices, retail spaces, boutiques, restaurants, and other commercial projects.",
  },
  {
    question: "Can I see the design before the work begins?",
    answer:
      "Design planning can include 2D layouts and 3D visualisations, depending on your project scope. These help you review the proposed space before execution.",
  },
  {
    question: "Do you provide a project quotation?",
    answer:
      "Yes. After understanding your requirements and project scope, our team can discuss the proposed work, materials, budget, and timeline.",
  },
  {
    question: "How long will my project take?",
    answer:
      "The timeline depends on the project size, design requirements, material availability, and execution scope. We discuss the expected schedule during the planning stage.",
  },
  {
    question: "Where is Cube4Spaces located?",
    answer:
      "Cube4Spaces is based in Coimbatore, Tamil Nadu. Contact our team to discuss your location and whether we can take up your project.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "Use the consultation form on this page, call our team, or contact us through WhatsApp to discuss your project requirements.",
  },
];

const stats = [
  {
    value: "50+",
    label: "Projects completed",
    icon: Building2,
  },
  {
    value: "45+",
    label: "Clients served",
    icon: Users,
  },
  {
    value: "8+",
    label: "Cities reached",
    icon: MapPin,
  },
  {
    value: "2023",
    label: "Established",
    icon: Clock3,
  },
];

const values = [
  {
    number: "01",
    title: "Quality",
    description:
      "Attention to materials, workmanship, and the finishing details that make a difference.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "Clear conversations about requirements, project scope, decisions, and expectations.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Coordination",
    description:
      "A connected approach to design, site work, materials, and project execution.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Client Focus",
    description:
      "Your needs, practical requirements, and design preferences guide the project.",
    icon: Users,
  },
];

const locations = [
  "Coimbatore",
  "Chennai",
  "Bengaluru",
  "Mumbai",
  "Pune",
  "Hyderabad",
];

function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[2.5px] sm:text-xs ${
        light ? "text-blue-300" : "text-blue-700"
      }`}
    >
      <span
        className={`h-[2px] w-6 ${
          light ? "bg-blue-300" : "bg-blue-700"
        }`}
      />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <SectionLabel>{eyebrow}</SectionLabel>

      <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-semibold leading-tight tracking-[-1.2px] text-[#172033] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 font-['DM_Sans',sans-serif] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group border-b border-slate-200 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:py-2 last:border-r-0">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
          <Icon size={19} strokeWidth={1.8} />
        </span>

        <div>
          <p className="font-['Poppins',sans-serif] text-2xl font-semibold tracking-tight text-[#172033] sm:text-3xl">
            {item.value}
          </p>
          <p className="mt-1 font-['DM_Sans',sans-serif] text-xs font-medium text-slate-500 sm:text-sm">
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, onConsult }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(23,32,51,0.08)] sm:p-7">
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
          <Icon size={23} strokeWidth={1.7} />
        </span>

        <span className="font-['DM_Sans',sans-serif] text-xs font-bold tracking-[1.5px] text-slate-400">
          {service.number}
        </span>
      </div>

      <h3 className="mt-6 font-['Poppins',sans-serif] text-xl font-semibold tracking-tight text-[#172033] sm:text-2xl">
        {service.title}
      </h3>

      <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
        {service.description}
      </p>

      <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 font-['DM_Sans',sans-serif] text-sm text-slate-600"
          >
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-blue-700"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onConsult(service.title)}
        className="mt-7 inline-flex items-center gap-2 self-start font-['DM_Sans',sans-serif] text-sm font-bold text-blue-700 transition-colors hover:text-[#172033]"
      >
        Discuss this service
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>
    </article>
  );
}

function ConsultationModal({ onClose, initialService }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: initialService || "Full Home Interiors",
    location: "",
    message: "",
  });

  useEffect(() => {
    setForm((previous) => ({
      ...previous,
      projectType: initialService || previous.projectType,
    }));
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Cube4Spaces, I would like to discuss a project.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Project: ${form.projectType}`,
      `Location: ${form.location || "Not provided"}`,
      `Requirements: ${form.message || "Please contact me to discuss."}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/918765432109?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-['DM_Sans',sans-serif] text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-[#101827]/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="relative max-h-[95dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="relative overflow-hidden bg-[#172033] px-6 py-7 text-white sm:px-9 sm:py-9">
          <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-white/10" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close consultation form"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          <SectionLabel light>Let's discuss your project</SectionLabel>

          <h2
            id="consultation-title"
            className="relative mt-4 max-w-lg font-['Poppins',sans-serif] text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
          >
            {submitted
              ? "Your enquiry is ready."
              : "Tell us what you have in mind."}
          </h2>

          <p className="relative mt-3 max-w-lg font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-300 sm:text-base">
            {submitted
              ? "WhatsApp should open in a new tab with your project details. Send the message to reach our team."
              : "Share a few details and continue to WhatsApp to send your project enquiry."}
          </p>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center sm:px-9 sm:py-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <CheckCircle2 size={32} />
            </span>

            <h3 className="mt-5 font-['Poppins',sans-serif] text-xl font-semibold text-[#172033]">
              Thank you for reaching out.
            </h3>

            <p className="mx-auto mt-2 max-w-md font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-600">
              If WhatsApp did not open, you can contact our team directly using
              the contact details on this page.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Close
              <Check size={17} />
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 px-5 py-6 sm:px-9 sm:py-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
                Your name *
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Enter your name"
                  className={fieldClass}
                />
              </label>

              <label className="block font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
                Phone number *
                <input
                  required
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+91"
                  className={fieldClass}
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
                Email address
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>

              <label className="block font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
                Project type *
                <select
                  required
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  {[
                    "Full Home Interiors",
                    "Residential Interiors",
                    "Commercial Interiors",
                    "Construction",
                    "Renovation",
                    "Painting & Finishing",
                    "Design & Space Planning",
                    "Turnkey Solutions",
                    "Other",
                  ].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
              Project location
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City or area"
                className={fieldClass}
              />
            </label>

            <label className="block font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
              Tell us about your project
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Your ideas, requirements, budget or timeline..."
                className={`${fieldClass} resize-y`}
              />
            </label>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-colors hover:bg-[#172033] sm:text-base"
            >
              Continue to WhatsApp
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <p className="text-center font-['DM_Sans',sans-serif] text-xs leading-5 text-slate-500">
              Your enquiry details will be prepared in WhatsApp. You must send
              the message to submit your enquiry.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap";

    document.head.appendChild(fontLink);

    return () => {
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isConsultModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultModalOpen]);

  const openConsultation = (service = "") => {
    setSelectedService(service);
    setIsConsultModalOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultModalOpen(false);
    setSelectedService("");
  };

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  const activeProcess = processSteps[activeStep];
  const ActiveProcessIcon = activeProcess.icon;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-[#172033] selection:bg-blue-700 selection:text-white">
      {/* Global background details */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute -left-40 top-[45%] h-96 w-96 rounded-full bg-slate-100/60 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="lg:col-span-7">
                <SectionLabel>About Cube4Spaces</SectionLabel>

                <h1 className="mt-5 max-w-4xl font-['Poppins',sans-serif] text-4xl font-semibold leading-[1.12] tracking-[-1.8px] text-[#172033] sm:text-5xl lg:text-6xl xl:text-[68px]">
                  We shape spaces
                  <span className="block text-blue-700">
                    around your life.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl font-['DM_Sans',sans-serif] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-xl">
                  Cube4Spaces brings interior design, construction, and
                  project execution together to create spaces that feel right,
                  function well, and reflect your vision.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => openConsultation()}
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-all hover:bg-[#172033] sm:px-7"
                  >
                    Discuss Your Project
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>

                  <a
                    href="#services"
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:px-7"
                  >
                    Explore Our Services
                    <ArrowDownRight size={18} />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2 font-['DM_Sans',sans-serif] text-xs font-semibold text-slate-600 sm:text-sm">
                    <CheckCircle2 size={17} className="text-blue-700" />
                    Design-led planning
                  </div>

                  <div className="flex items-center gap-2 font-['DM_Sans',sans-serif] text-xs font-semibold text-slate-600 sm:text-sm">
                    <CheckCircle2 size={17} className="text-blue-700" />
                    Coordinated execution
                  </div>
                </div>
              </div>

              {/* Architectural composition */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl bg-[#172033] p-5 text-white sm:p-7 lg:p-8">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                      
                      </div>

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                        <DraftingCompass size={24} />
                      </span>
                    </div>

                    <div className="mt-8 space-y-3">
                      {[
                        {
                          number: "01",
                          title: "Plan",
                          text: "Understand your needs",
                          icon: Ruler,
                        },
                        {
                          number: "02",
                          title: "Design",
                          text: "Visualise your space",
                          icon: DraftingCompass,
                        },
                        {
                          number: "03",
                          title: "Execute",
                          text: "Coordinate the work",
                          icon: Hammer,
                        },
                        {
                          number: "04",
                          title: "Handover",
                          text: "Review the finished project",
                          icon: CheckCircle2,
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.number}
                            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:bg-white/10 sm:p-4"
                          >
                            <span className="font-['DM_Sans',sans-serif] text-xs font-bold text-blue-300">
                              {item.number}
                            </span>

                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                              <Icon size={19} />
                            </span>

                            <span className="min-w-0 flex-1">
                              <span className="block font-['Poppins',sans-serif] text-sm font-semibold sm:text-base">
                                {item.title}
                              </span>
                              <span className="mt-1 block font-['DM_Sans',sans-serif] text-xs text-slate-300 sm:text-sm">
                                {item.text}
                              </span>
                            </span>

                            <ArrowUpRight
                              size={17}
                              className="shrink-0 text-slate-400"
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                      <MapPin size={18} className="text-blue-300" />
                      <p className="font-['DM_Sans',sans-serif] text-sm font-medium text-slate-300">
                        Based in Coimbatore, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <ShieldCheck size={22} />
                  </span>

                  <div>
                    <p className="font-['Poppins',sans-serif] text-sm font-semibold text-[#172033] sm:text-base">
                      A more coordinated experience
                    </p>
                    <p className="mt-1 font-['DM_Sans',sans-serif] text-xs leading-5 text-slate-500 sm:text-sm">
                      Planning, design, and execution aligned around your
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-slate-200 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <StatCard key={item.label} item={item} />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Who we are"
                title="Good design starts with understanding."
                description="Every project begins with listening. We take time to understand how you use your space, what matters to you, and what you want to achieve."
              />

              <div className="mt-7 rounded-2xl border-l-4 border-blue-700 bg-blue-50 p-5 sm:p-6">
                <p className="font-['Poppins',sans-serif] text-lg font-semibold leading-7 text-[#172033] sm:text-xl">
                  “Design should look beautiful, work practically, and feel
                  right for the people who use it.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Ruler size={23} />
                  </span>
                  <h3 className="mt-5 font-['Poppins',sans-serif] text-xl font-semibold text-[#172033]">
                    Thoughtful planning
                  </h3>
                  <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600">
                    We consider layout, movement, storage, materials, and
                    everyday usability before the work begins.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Layers3 size={23} />
                  </span>
                  <h3 className="mt-5 font-['Poppins',sans-serif] text-xl font-semibold text-[#172033]">
                    Connected execution
                  </h3>
                  <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600">
                    Design decisions and site execution need to work together.
                    We focus on coordination across the project.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 sm:col-span-2">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Users size={23} />
                    </span>

                    <div>
                      <h3 className="font-['Poppins',sans-serif] text-xl font-semibold text-[#172033]">
                        Built around your requirements
                      </h3>
                      <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:text-base">
                        Whether you are planning a home, office, retail space,
                        or renovation, our goal is to make the process more
                        organised and your decisions more informed.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="What we do"
                title="Everything your space needs."
                description="Explore our interior design, construction, and project services for homes and businesses."
              />

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "All services", value: "all" },
                  { label: "Residential", value: "residential" },
                  { label: "Commercial", value: "commercial" },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveTab(filter.value)}
                    aria-pressed={activeTab === filter.value}
                    className={`rounded-xl border px-4 py-3 font-['DM_Sans',sans-serif] text-xs font-bold transition-all sm:text-sm ${
                      activeTab === filter.value
                        ? "border-blue-700 bg-blue-700 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                  onConsult={openConsultation}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#172033] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[2px] text-blue-300">
                  Have a specific requirement?
                </p>
                <h3 className="mt-2 font-['Poppins',sans-serif] text-xl font-semibold sm:text-2xl">
                  Let's discuss the right solution for your space.
                </h3>
              </div>

              <button
                type="button"
                onClick={() => openConsultation()}
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Get a Consultation
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section
          id="why-us"
          className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              eyebrow="The Cube4Spaces approach"
              title="A better way to manage your project."
              description="A successful project is more than a good design. It also needs clear decisions, consistent coordination, and attention to the details."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "One coordinated team",
                  description:
                    "Bring design, planning, and execution into a more connected project journey.",
                  icon: Users,
                },
                {
                  number: "02",
                  title: "Planning before execution",
                  description:
                    "Discuss the requirements, proposed scope, and priorities before the work starts.",
                  icon: DraftingCompass,
                },
                {
                  number: "03",
                  title: "Clear project discussions",
                  description:
                    "Keep budget, materials, timelines, and important decisions part of the conversation.",
                  icon: MessageCircle,
                },
                {
                  number: "04",
                  title: "Attention to finishing",
                  description:
                    "Consider the small details that contribute to the overall appearance and usability.",
                  icon: Paintbrush,
                },
                {
                  number: "05",
                  title: "Progress coordination",
                  description:
                    "Coordinate work across the project and keep track of important stages.",
                  icon: Clock3,
                },
                {
                  number: "06",
                  title: "A considered handover",
                  description:
                    "Review the completed work and finishing details before the final handover.",
                  icon: CheckCircle2,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(23,32,51,0.06)] sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={22} />
                      </span>

                      <span className="font-['DM_Sans',sans-serif] text-xs font-bold tracking-[2px] text-slate-400">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-['Poppins',sans-serif] text-xl font-semibold text-[#172033]">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* STORY, MISSION AND VISION */}
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 lg:p-10">
              <SectionLabel>Our story</SectionLabel>

              <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Making the building journey simpler.
              </h2>

              <div className="mt-6 space-y-4 font-['DM_Sans',sans-serif] text-base leading-8 text-slate-600">
                <p>
                  Established in 2023 in Coimbatore, Tamil Nadu, Cube4Spaces
                  was built around a simple idea: make interior and construction
                  projects easier to plan and manage.
                </p>

                <p>
                  A project can involve many decisions, different people,
                  materials, and stages of work. Our approach brings those
                  elements into a more coordinated process.
                </p>

                <p>
                  From the first conversation to the finishing details, we aim
                  to create spaces that reflect each client's requirements and
                  work well in everyday life.
                </p>
              </div>

              <div className="mt-7 flex items-start gap-4 rounded-2xl bg-blue-50 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <ShieldCheck size={22} />
                </span>

                <div>
                  <h3 className="font-['Poppins',sans-serif] text-base font-semibold text-[#172033]">
                    Our commitment
                  </h3>
                  <p className="mt-1 font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-600">
                    Clear communication, considered planning, and a
                    coordinated approach to project delivery.
                  </p>
                </div>
              </div>
            </article>

            <div className="flex flex-col gap-6">
              <article className="flex-1 rounded-3xl bg-[#172033] p-6 text-white sm:p-9 lg:p-10">
                <SectionLabel light>Our mission</SectionLabel>

                <h3 className="mt-4 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight sm:text-3xl">
                  Spaces that look beautiful and work better.
                </h3>

                <p className="mt-4 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-300 sm:text-base">
                  To deliver thoughtful interiors and construction solutions
                  that balance aesthetics, practicality, and the needs of the
                  people who use each space.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    ["Practical", "Designed for use"],
                    ["Personal", "Made for you"],
                    ["Considered", "Attention to detail"],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"
                    >
                      <p className="font-['Poppins',sans-serif] text-sm font-semibold text-blue-300 sm:text-base">
                        {title}
                      </p>
                      <p className="mt-1 font-['DM_Sans',sans-serif] text-[10px] leading-5 text-slate-300 sm:text-xs">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
                <SectionLabel>Our vision</SectionLabel>

                <h3 className="mt-4 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight text-[#172033] sm:text-3xl">
                  To be a trusted name in interior design and construction.
                </h3>

                <p className="mt-4 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:text-base">
                  We aim to build lasting client relationships through
                  thoughtful design, transparent discussions, and dependable
                  project coordination.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-y border-slate-200 bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              eyebrow="What guides us"
              title="Our core values."
              description="The principles we bring to every conversation, design decision, and project stage."
              centered
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <Icon size={22} />
                      </span>

                      <span className="font-['DM_Sans',sans-serif] text-xs font-bold tracking-[2px] text-slate-400">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-['Poppins',sans-serif] text-xl font-semibold text-[#172033]">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              eyebrow="How we work"
              title="Four steps. One clear journey."
              description="Our process helps you understand the project from the initial discussion through to completion."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-8">
              <div className="space-y-3 lg:col-span-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                        isActive
                          ? "border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-900/10"
                          : "border-slate-200 bg-white text-[#172033] hover:border-blue-200 hover:bg-blue-50/50"
                      }`}
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        <Icon size={22} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[2px] ${
                            isActive ? "text-blue-100" : "text-slate-400"
                          }`}
                        >
                          Step {step.number}
                        </span>

                        <span className="mt-1 block font-['Poppins',sans-serif] text-base font-semibold sm:text-lg">
                          {step.title}
                        </span>
                      </span>

                      <ChevronRight
                        size={20}
                        className={`shrink-0 ${
                          isActive ? "text-white" : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col justify-between rounded-3xl bg-[#172033] p-6 text-white sm:p-9 lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-lg bg-blue-600 px-3 py-2 font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[1.5px]">
                      Step {activeProcess.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-300">
                      <ActiveProcessIcon size={23} />
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight sm:text-3xl">
                    {activeProcess.heading}
                  </h3>

                  <p className="mt-4 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {activeProcess.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {activeProcess.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <CheckCircle2
                          size={19}
                          className="shrink-0 text-blue-300"
                        />
                        <span className="font-['DM_Sans',sans-serif] text-sm font-medium text-slate-100">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-['DM_Sans',sans-serif] text-xs text-slate-400">
                    {activeStep + 1} of {processSteps.length}
                  </span>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={activeStep === 0}
                      onClick={() =>
                        setActiveStep((previous) => Math.max(0, previous - 1))
                      }
                      aria-label="Previous process step"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ChevronLeft size={19} />
                    </button>

                    <button
                      type="button"
                      disabled={activeStep === processSteps.length - 1}
                      onClick={() =>
                        setActiveStep((previous) =>
                          Math.min(processSteps.length - 1, previous + 1)
                        )
                      }
                      aria-label="Next process step"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ChevronRight size={19} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
            <div>
              <SectionHeading
                eyebrow="The people behind the work"
                title="A coordinated team makes a difference."
                description="Interior design and construction require different skills working towards the same outcome. Our approach brings together the disciplines needed to move a project forward."
              />

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Interior design",
                  "Construction coordination",
                  "Project management",
                  "Skilled workmanship",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-700"
                    />
                    <span className="font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#172033] p-6 text-white sm:p-8 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Users size={27} />
              </span>

              <h3 className="mt-6 font-['Poppins',sans-serif] text-2xl font-semibold sm:text-3xl">
                One point of coordination.
              </h3>

              <p className="mt-4 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                A connected project team helps reduce confusion between
                design decisions and execution. We focus on keeping
                communication, priorities, and project requirements aligned
                throughout the process.
              </p>

              <button
                type="button"
                onClick={() => openConsultation()}
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 font-['DM_Sans',sans-serif] text-sm font-bold text-[#172033] transition-colors hover:bg-blue-50"
              >
                Meet Your Project Team
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section
          id="locations"
          className="scroll-mt-24 bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Find us"
                title="Based in Coimbatore."
                description="Our base is in Tamil Nadu. Contact us to discuss your project location and requirements."
              />

              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <MapPin size={23} />
                  </span>

                  <div>
                    <h3 className="font-['Poppins',sans-serif] text-lg font-semibold text-[#172033]">
                      Cube4Spaces
                    </h3>
                    <address className="mt-2 not-italic font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600">
                      1, Perumal Kovil Street
                      <br />
                      Saravanampatti
                      <br />
                      Coimbatore – 641035
                      <br />
                      Tamil Nadu, India
                    </address>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 rounded-xl p-3 font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Phone size={18} className="text-blue-700" />
                    +91 98765 43210
                  </a>

                  <a
                    href="mailto:hello@cube4spaces.com"
                    className="flex items-center gap-3 rounded-xl p-3 font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Mail size={18} className="text-blue-700" />
                    hello@cube4spaces.com
                  </a>

                  <div className="flex items-center gap-3 rounded-xl p-3 font-['DM_Sans',sans-serif] text-sm font-semibold text-slate-700">
                    <Clock3 size={18} className="text-blue-700" />
                    Mon–Sat, 9:00 AM–7:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-[#172033] p-6 text-white sm:p-9 lg:col-span-7 lg:p-10">
              <div>
                <SectionLabel light>Service areas</SectionLabel>

                <h3 className="mt-4 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight sm:text-3xl">
                  Let's discuss where your project is located.
                </h3>

                <p className="mt-4 max-w-xl font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-300 sm:text-base">
                  Our primary base is Coimbatore. Contact our team to check
                  availability and project requirements for your city.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {locations.map((location, index) => (
                  <div
                    key={location}
                    className={`flex min-h-14 items-center gap-2 rounded-xl border p-3 font-['DM_Sans',sans-serif] text-sm font-semibold ${
                      index === 0
                        ? "border-blue-500 bg-blue-600 text-white"
                        : "border-white/10 bg-white/5 text-slate-200"
                    }`}
                  >
                    <MapPin
                      size={16}
                      className={
                        index === 0 ? "text-white" : "text-blue-300"
                      }
                    />
                    {location}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openConsultation()}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-[#172033] transition-colors hover:bg-blue-50 sm:w-auto sm:self-start"
              >
                Check Project Availability
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <SectionLabel>Client experience</SectionLabel>

              <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl lg:text-5xl">
                Every detail matters.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl font-['DM_Sans',sans-serif] text-base leading-7 text-slate-600">
                A successful project is built on communication, careful
                execution, and an understanding of what matters to the client.
              </p>
            </div>

            <div className="mt-9 rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 lg:p-12">
              <div className="flex gap-1.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <blockquote className="mt-6 font-['Poppins',sans-serif] text-xl font-medium leading-relaxed tracking-tight text-[#172033] sm:text-2xl sm:leading-10">
                “Cube4Spaces delivered a clean and functional home interior.
                The kitchen, wardrobes, and storage planning were handled
                professionally and completed on time.”
              </blockquote>

              <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-['Poppins',sans-serif] text-base font-semibold text-[#172033]">
                    Priya Mehta
                  </p>
                  <p className="mt-1 font-['DM_Sans',sans-serif] text-sm text-slate-500">
                    3BHK Home Interiors, Bengaluru
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 self-start rounded-lg bg-blue-50 px-3 py-2 font-['DM_Sans',sans-serif] text-xs font-bold text-blue-700 sm:self-auto">
                  <CheckCircle2 size={15} />
                  Client feedback
                </span>
              </div>

              <p className="mt-5 font-['DM_Sans',sans-serif] text-xs leading-5 text-slate-400">
                Confirm this testimonial and its attribution before publishing
                it on your website.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-24 bg-[#f6f8fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Need to know"
                title="Frequently asked questions."
                description="Find answers to common questions about our services and project process."
              />

              <button
                type="button"
                onClick={() => openConsultation()}
                className="mt-6 inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-sm font-bold text-blue-700 transition-colors hover:text-[#172033]"
              >
                Ask us about your project
                <ArrowUpRight size={17} />
              </button>
            </div>

            <div className="space-y-3 lg:col-span-8">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                      isOpen
                        ? "border-blue-200"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="font-['Poppins',sans-serif] text-sm font-semibold leading-6 text-[#172033] sm:text-base">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isOpen
                            ? "bg-blue-700 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="contact"
          className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-[#172033] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-5 -top-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <SectionLabel light>Let's get started</SectionLabel>

                <h2 className="mt-5 max-w-3xl font-['Poppins',sans-serif] text-3xl font-semibold leading-tight tracking-[-1px] sm:text-4xl lg:text-5xl">
                  Have a space in mind?
                  <span className="block text-blue-300">
                    Let's bring it to life.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl font-['DM_Sans',sans-serif] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  Tell us about your home, workplace, or construction project.
                  We can discuss your requirements and the next steps.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-4">
                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-colors hover:bg-blue-500"
                >
                  Start Your Project
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <a
                  href="https://wa.me/918765432109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 font-['DM_Sans',sans-serif] text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Phone size={17} className="text-blue-300" />
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@cube4spaces.com"
                className="flex items-center gap-3 font-['DM_Sans',sans-serif] text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail size={17} className="text-blue-300" />
                hello@cube4spaces.com
              </a>

              <div className="flex items-center gap-3 font-['DM_Sans',sans-serif] text-sm text-slate-300">
                <MapPin size={17} className="text-blue-300" />
                Coimbatore, Tamil Nadu
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172033] font-['Poppins',sans-serif] text-sm font-bold text-white">
              C4
            </span>

            <span>
              <span className="block font-['Poppins',sans-serif] text-base font-semibold text-[#172033]">
                Cube4Spaces
              </span>
              <span className="mt-0.5 block font-['DM_Sans',sans-serif] text-xs text-slate-500">
                Design · Build · Handover
              </span>
            </span>
          </a>

          <p className="font-['DM_Sans',sans-serif] text-xs leading-6 text-slate-500 sm:text-right sm:text-sm">
            © {new Date().getFullYear()} Cube4Spaces. All rights reserved.
            <span className="block sm:inline">
              {" "}
              Interior Design & Construction.
            </span>
          </p>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {isConsultModalOpen && (
        <ConsultationModal
          onClose={closeConsultation}
          initialService={selectedService}
        />
      )}
    </div>
  );
}
