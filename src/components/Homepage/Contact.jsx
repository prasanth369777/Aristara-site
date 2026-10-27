
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  MapPin,
  Mail,
  Clock3,
  House,
  Sofa,
  Handshake,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: "https://maps.google.com/?q=Interior+Design+Coimbatore",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@aristarainterior.com",
    href: "mailto:hello@aristarainterior.com",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Monday – Saturday · 9 AM – 6 PM",
    href: null,
  },
];

const enquiryTypes = [
  {
    id: "residential",
    number: "01",
    icon: House,
    title: "Residential Construction Enquiry",
    description:
      "Planning an individual house, villa or residential building? Tell us about your construction requirements.",
    button: "Enquire About Construction",
  },
  {
    id: "interior",
    number: "02",
    icon: Sofa,
    title: "Interior Design Enquiry",
    description:
      "Discuss your home interiors, modular kitchen, living room, bedroom or complete interior design project.",
    button: "Enquire About Interiors",
  },
  {
    id: "joint-venture",
    number: "03",
    icon: Handshake,
    title: "Joint Venture Enquiry",
    description:
      "Are you a landowner exploring a property development partnership? Share your land and project details with us.",
    button: "Discuss a Joint Venture",
  },
];

export default function Contact() {
  const [activeEnquiry, setActiveEnquiry] = useState("residential");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const selectedEnquiry =
    enquiryTypes.find((item) => item.id === activeEnquiry) ||
    enquiryTypes[0];

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `${selectedEnquiry.title} - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Enquiry Type: ${selectedEnquiry.title}\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || "Not provided"}\n` +
        `Location: ${formData.location || "Not provided"}\n\n` +
        `Project Details:\n${formData.message}`
    );

    window.location.href =
      `mailto:hello@aristarainterior.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full overflow-hidden bg-[#fbf8f1] px-4 py-10 font-['Poppins',sans-serif] text-[#25231f] sm:px-6 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* CONTACT HERO */}
        <div className="relative isolate overflow-hidden bg-[#25231f]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171713]/95 via-[#211e19]/85 to-[#211e19]/45"
          />

          <div className="grid min-h-[270px] grid-cols-1 items-end gap-7 p-5 sm:min-h-[310px] sm:p-8 md:p-10 lg:min-h-[350px] lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-12">
            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center gap-2.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#e8c46b] sm:text-[10px]">
                <span className="h-px w-7 bg-[#e8c46b]" />
                Aristara Interior
              </div>

              <h1
                id="contact-heading"
                className="max-w-[700px] text-[clamp(2rem,4.6vw,4rem)] font-semibold leading-[1.12] tracking-[-0.05em] text-white"
              >
                Let's Talk About
                <span className="block text-[#eab934]">
                  Your Next Project.
                </span>
              </h1>

              <p className="mt-4 max-w-[540px] text-[11px] leading-7 text-white/75 sm:text-xs sm:leading-7">
                Whether you're planning a new home, designing your
                interiors or exploring a real estate joint venture,
                choose the enquiry type that best matches your project.
              </p>
            </div>

            <a
              href="#contact-details"
              className="group inline-flex min-h-11 items-center justify-center gap-2 self-start border border-white/40 bg-white/5 px-5 py-3 text-[10px] font-medium text-white transition-colors hover:border-[#eab934] hover:bg-white/10 lg:self-center"
            >
              Contact Details
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* ENQUIRY OPTIONS */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="mb-7 flex flex-col gap-3 sm:mb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#c99a29]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92702a] sm:text-[10px]">
                  Choose Your Enquiry
                </span>
              </div>

              <h2 className="text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl lg:text-4xl">
                How Can We Help You?
              </h2>
            </div>

            <p className="max-w-md text-[11px] leading-6 text-[#746c60] sm:text-xs sm:leading-7">
              Select a service to personalise your enquiry and share
              the details needed to start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {enquiryTypes.map((item) => {
              const Icon = item.icon;
              const isActive = activeEnquiry === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveEnquiry(item.id)}
                  aria-pressed={isActive}
                  className={`group flex h-full min-w-0 flex-col border p-5 text-left transition-all duration-300 sm:p-6 lg:p-7 ${
                    isActive
                      ? "border-[#c99a29] bg-[#f3ecdd] shadow-[0_10px_28px_rgba(65,49,19,0.06)]"
                      : "border-[#e5dccb] bg-white hover:border-[#d6b458]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#eab934] text-[#29251d]"
                          : "border border-[#e8dfd0] bg-[#fbf8f1] text-[#9c792e] group-hover:bg-[#f5ecd8]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.6} />
                    </span>

                    <span className="text-[10px] font-medium tracking-[0.12em] text-[#b0a48d]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[14px] font-semibold leading-snug text-[#29261f] sm:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[11px] leading-6 text-[#746c60] sm:text-xs sm:leading-7">
                    {item.description}
                  </p>

                  <span
                    className={`mt-5 inline-flex items-center gap-2 border-t pt-4 text-[10px] font-semibold transition-colors ${
                      isActive
                        ? "border-[#dfcfad] text-[#8c6b24]"
                        : "border-[#eee7dc] text-[#514634] group-hover:text-[#9c792e]"
                    }`}
                  >
                    {item.button}

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ENQUIRY FORM AND CONTACT DETAILS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* ENQUIRY FORM */}
          <div
            id="enquiry-form"
            className="scroll-mt-24 border border-[#e5dccb] bg-white p-5 sm:p-7 lg:p-9"
          >
            <div className="mb-6 border-b border-[#e9e1d4] pb-5 sm:mb-7">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#c99a29]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#92702a]">
                  Project Enquiry Form
                </span>
              </div>

              <h2 className="text-xl font-semibold leading-snug tracking-[-0.035em] sm:text-2xl">
                {selectedEnquiry.title}
              </h2>

              <p className="mt-2 text-[11px] leading-6 text-[#746c60] sm:text-xs sm:leading-7">
                Share your contact details and a short description of
                your requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[10px] font-medium text-[#514634]"
                  >
                    Full Name <span className="text-[#b58a29]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Enter your name"
                    className="min-h-11 w-full border border-[#e5dccb] bg-[#fbf8f1] px-3.5 py-3 text-xs text-[#29261f] outline-none transition-colors placeholder:text-[#aaa08f] focus:border-[#c99a29]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-[10px] font-medium text-[#514634]"
                  >
                    Phone Number <span className="text-[#b58a29]">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="+91"
                    className="min-h-11 w-full border border-[#e5dccb] bg-[#fbf8f1] px-3.5 py-3 text-xs text-[#29261f] outline-none transition-colors placeholder:text-[#aaa08f] focus:border-[#c99a29]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[10px] font-medium text-[#514634]"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    className="min-h-11 w-full border border-[#e5dccb] bg-[#fbf8f1] px-3.5 py-3 text-xs text-[#29261f] outline-none transition-colors placeholder:text-[#aaa08f] focus:border-[#c99a29]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-location"
                    className="mb-2 block text-[10px] font-medium text-[#514634]"
                  >
                    Project Location
                  </label>

                  <input
                    id="contact-location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    value={formData.location}
                    onChange={updateField}
                    placeholder="City or area"
                    className="min-h-11 w-full border border-[#e5dccb] bg-[#fbf8f1] px-3.5 py-3 text-xs text-[#29261f] outline-none transition-colors placeholder:text-[#aaa08f] focus:border-[#c99a29]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[10px] font-medium text-[#514634]"
                >
                  Project Details{" "}
                  <span className="text-[#b58a29]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={updateField}
                  placeholder={
                    activeEnquiry === "residential"
                      ? "Tell us about your plot, house type, approximate size and construction requirements..."
                      : activeEnquiry === "interior"
                      ? "Tell us about your space, preferred style, rooms and interior requirements..."
                      : "Tell us about your land location, approximate land area and proposed development..."
                  }
                  className="w-full resize-y border border-[#e5dccb] bg-[#fbf8f1] px-3.5 py-3 text-xs leading-6 text-[#29261f] outline-none transition-colors placeholder:text-[#aaa08f] focus:border-[#c99a29]"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#eab934] px-5 py-3 text-[11px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9aa2b] sm:w-auto sm:px-7"
              >
                Send Enquiry by Email

                <Send
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-[9px] leading-5 text-[#8a8173]">
                Submitting opens your default email application with
                the enquiry details prepared. It does not send the
                message automatically.
              </p>
            </form>
          </div>

          {/* CONTACT DETAILS */}
          <aside
            id="contact-details"
            className="scroll-mt-24 border border-[#e5dccb] bg-[#f5f0e6] p-5 sm:p-7 lg:p-8"
          >
            <div className="mb-6 border-b border-[#e1d6c2] pb-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#c99a29]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#92702a]">
                  Contact Details
                </span>
              </div>

              <h2 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                Let's Start a Conversation.
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-[#746c60] sm:text-xs sm:leading-7">
                Contact Aristara Interior to discuss your residential
                construction, interior design or joint venture enquiry.
              </p>
            </div>

            <div className="space-y-1">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4d8c2] bg-[#fbf8f1] text-[#9b7626]">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[9px] font-medium uppercase tracking-[0.1em] text-[#8a7d68]">
                        {detail.label}
                      </span>

                      <span className="mt-1 block break-words text-[11px] font-medium leading-6 text-[#302c25] sm:text-xs">
                        {detail.value}
                      </span>
                    </span>

                    {detail.href && (
                      <ArrowUpRight
                        size={15}
                        className="mt-1 shrink-0 text-[#b79a5c] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={
                      detail.href.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      detail.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3 border-b border-[#e5dccb] py-4 last:border-0"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="flex items-start gap-3 border-b border-[#e5dccb] py-4 last:border-0"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-l-2 border-[#c99a29] bg-[#fbf8f1] p-4">
              <p className="text-[11px] font-semibold text-[#302c25]">
                Have a project in mind?
              </p>

              <p className="mt-1.5 text-[10px] leading-5 text-[#746c60]">
                Share your requirements and project location to start
                the discussion.
              </p>
            </div>
          </aside>
        </div>

        {/* BOTTOM BRAND STRIP */}
        <div className="flex flex-col items-start justify-between gap-3 border-b border-[#e8dfd3] py-5 sm:flex-row sm:items-center">
          <p className="text-[9px] leading-5 text-[#766d60] sm:text-[10px]">
            Thoughtful design. Quality execution. Spaces made for you.
          </p>

          <a
            href="/projects/"
            className="group inline-flex items-center gap-2 text-[10px] font-medium text-[#8c6b24] transition-colors hover:text-[#b58a25]"
          >
            Explore Our Projects

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
