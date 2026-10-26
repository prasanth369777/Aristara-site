import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Mail,
  Clock3,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Visit Our Studio",
    value: "Coimbatore, Tamil Nadu, India",
    href: "https://maps.google.com/?q=Interior+Design+Coimbatore",
  },
  {
    icon: Mail,
    label: "Email Enquiries",
    value: "Get in touch about your project",
    href: "mailto:hello@aristarainterior.com",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Mon – Sat · 9:00 AM – 6:00 PM",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-[#fbf8f1] px-4 py-8 font-['Poppins',sans-serif] sm:px-6 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* CONTACT CTA BANNER */}
        <div className="relative isolate overflow-hidden bg-[#211e19]">
          {/* Architectural background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Dark gradient for readable content */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171713]/95 via-[#211e19]/80 to-[#211e19]/35"
          />

          <div className="grid min-h-[310px] grid-cols-1 items-center gap-8 p-5 sm:p-8 md:p-10 lg:min-h-[350px] lg:grid-cols-[1fr_310px] lg:gap-10 lg:p-10 xl:grid-cols-[1fr_340px] xl:gap-14 xl:p-12">
            {/* LEFT: Heading and actions */}
            <div className="max-w-[650px]">
              <div className="mb-4 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#e8c46b] sm:text-[10px]">
                <span className="h-px w-7 bg-[#e8c46b]" />
                Aristara Interior
              </div>

              <h2
                id="contact-heading"
                className="max-w-[620px] text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.2] tracking-[-0.05em] text-white"
              >
                Let's Build{" "}
                <span className="text-[#eab934]">
                  Your Dream
                </span>{" "}
                Together.
              </h2>

              <p className="mt-4 max-w-[480px] text-[11px] leading-[1.9] text-white/75 sm:text-xs sm:leading-6">
                Get in touch with us for a free project consultation.
                From interior design and construction to painting and
                renovation, let's create a space that reflects your vision.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                <a
                  href="mailto:hello@aristarainterior.com?subject=Free%20Project%20Consultation"
                  className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-[3px] bg-[#eab934] px-4 py-2.5 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3ca55] sm:px-5 sm:text-[11px]"
                >
                  Get a Free Quote

                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+919876543210"
                  className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-[3px] border border-white/50 bg-white/5 px-4 py-2.5 text-[10px] font-medium text-white transition-all duration-300 hover:border-[#eab934] hover:bg-white/10 sm:px-5 sm:text-[11px]"
                >
                  <Phone size={13} strokeWidth={1.8} />

                  Call Now
                </a>
              </div>

              {/* Service highlights */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4 sm:mt-8">
                {[
                  "Interior Design",
                  "Construction",
                  "Painting & Finishing",
                ].map((service) => (
                  <span
                    key={service}
                    className="text-[9px] text-white/70 sm:text-[10px]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: Contact details card */}
            <aside className="w-full bg-[#fffdf8] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-6 lg:p-5 xl:p-6">
              <div className="mb-4 border-b border-[#e9e1d4] pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#f5ecd8] text-[#9b7626]">
                    <MessageCircle size={17} strokeWidth={1.6} />
                  </span>

                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#92702a]">
                      Get in Touch
                    </p>

                    <h3 className="mt-0.5 text-[13px] font-semibold text-[#29261f]">
                      Let's Talk Projects
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  const content = (
                    <>
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-[#9b7626]">
                        <Icon size={16} strokeWidth={1.7} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[9px] font-medium text-[#898071]">
                          {detail.label}
                        </span>

                        <span className="mt-0.5 block break-words text-[10px] font-medium leading-[1.7] text-[#302c25]">
                          {detail.value}
                        </span>
                      </span>

                      {detail.href && (
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.6}
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
                      className="group flex items-start gap-2 border-b border-[#eee8de] pb-3 last:border-0 last:pb-0"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={detail.label}
                      className="flex items-start gap-2"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Card footer */}
              <div className="mt-5 border-t border-[#e9e1d4] pt-4">
                <p className="text-[9px] leading-5 text-[#81786b]">
                  Have a new home, renovation or commercial project in mind?
                  We'd love to hear about it.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom brand strip */}
        <div className="flex flex-col items-start justify-between gap-2 border-b border-[#e8dfd3] py-4 sm:flex-row sm:items-center">
          <p className="text-[9px] text-[#766d60] sm:text-[10px]">
            Thoughtful design. Quality execution. Spaces made for you.
          </p>

          <a
            href="/projects/"
            className="group inline-flex items-center gap-1.5 text-[9px] font-medium text-[#8c6b24] transition-colors hover:text-[#b58a25] sm:text-[10px]"
          >
            Explore Our Projects

            <ArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}