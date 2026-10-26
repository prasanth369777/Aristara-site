import React, { useState } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Priya & Karthik",
    role: "Homeowners",
    location: "Coimbatore",
    project: "Residential Interior",
    content:
      "Aristara Interior understood our dream home and helped us bring our ideas to life. The design feels beautiful, practical, and comfortable for our family.",
    rating: 5,
  },
  {
    name: "Arun Prakash",
    role: "Business Owner",
    location: "Coimbatore",
    project: "Commercial Interiors",
    content:
      "The team approached our project with careful planning and clear communication. The space looks professional, and the overall design works well for our business.",
    rating: 5,
  },
  {
    name: "Meena S.",
    role: "Homeowner",
    location: "Coimbatore",
    project: "Interior Design",
    content:
      "We wanted a modern interior that still felt warm and welcoming. The attention to detail, colour selection, and finishing made a real difference to our space.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Property Owner",
    location: "Tamil Nadu",
    project: "Construction",
    content:
      "Having a clear plan for the project helped us understand the work involved. We appreciated the focus on practical solutions, coordination, and finishing details.",
    rating: 5,
  },
  {
    name: "Divya R.",
    role: "Homeowner",
    location: "Coimbatore",
    project: "Home Renovation",
    content:
      "Our renovation needed a fresh look without losing the comfort of our existing home. The design direction helped us make better use of our available space.",
    rating: 5,
  },
  {
    name: "Vijay Anand",
    role: "Business Owner",
    location: "Tamil Nadu",
    project: "Commercial Project",
    content:
      "We wanted a space that reflected our business and served our everyday needs. The emphasis on layout, appearance, and functionality was important to us.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, index) =>
      testimonials[(activeIndex + index) % testimonials.length]
  );

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full overflow-hidden bg-[#fbf9f4] font-['Poppins',sans-serif] text-[#25231f]"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-9">
          <h2
            id="testimonials-heading"
            className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.055em] text-[#25231f]"
          >
            What Our{" "}
            <span className="text-[#c99a29]">
              Clients Say
            </span>
          </h2>

          <p className="mt-2 text-[10px] leading-5 text-[#746d62] sm:text-[11px]">
            Trusted relationships start with thoughtful design and
            a commitment to quality.
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-[#d9bd77]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />
            <span className="h-px w-7 bg-[#d9bd77]" />
          </div>
        </div>

        {/* TESTIMONIAL CAROUSEL */}
        <div className="relative">

          {/* Previous button */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous client reviews"
            className="absolute -left-1 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5ddcf] bg-[#fbf9f4] text-[#49443b] transition-all duration-200 hover:border-[#d6b458] hover:bg-[#f2e7cb] sm:-left-3 lg:-left-5"
          >
            <ArrowLeft size={15} strokeWidth={1.7} />
          </button>

          {/* Review cards */}
          <div
            aria-live="polite"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${activeIndex}`}
                className="group relative flex min-h-[185px] min-w-0 flex-col border border-[#ebe5db] bg-white p-4 shadow-[0_3px_14px_rgba(44,35,19,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dfc47f] hover:shadow-[0_9px_24px_rgba(44,35,19,0.07)] sm:min-h-[195px] sm:p-5"
              >
                {/* Quote mark */}
                <div className="mb-2 flex items-center justify-between">
                  <Quote
                    size={19}
                    strokeWidth={1.7}
                    className="fill-[#e8dfcd] text-[#8f7a4b]"
                    aria-hidden="true"
                  />

                  <span className="text-[9px] font-medium text-[#a59a86]">
                    {String(
                      ((activeIndex + index) % testimonials.length) + 1
                    ).padStart(2, "0")}
                  </span>
                </div>

                {/* Review content */}
                <blockquote className="flex-1 text-[10px] leading-[1.9] text-[#625d53] sm:text-[11px] sm:leading-[1.85]">
                  {testimonial.content}
                </blockquote>

                {/* Star rating */}
                <div
                  className="mt-3 flex items-center gap-0.5"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from(
                    { length: testimonial.rating },
                    (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={12}
                        strokeWidth={1.4}
                        className="fill-[#eab934] text-[#eab934]"
                      />
                    )
                  )}
                </div>

                {/* Reviewer information */}
                <div className="mt-3 border-t border-[#eee8de] pt-3">
                  <h3 className="text-[10px] font-semibold text-[#29261f] sm:text-[11px]">
                    {testimonial.name}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[9px] text-[#81786b]">
                    <span>{testimonial.role}</span>
                    <span className="text-[#c99a29]">•</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next client reviews"
            className="absolute -right-1 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5ddcf] bg-[#fbf9f4] text-[#49443b] transition-all duration-200 hover:border-[#d6b458] hover:bg-[#f2e7cb] sm:-right-3 lg:-right-5"
          >
            <ArrowRight size={15} strokeWidth={1.7} />
          </button>
        </div>

        {/* CAROUSEL CONTROLS */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show reviews starting with ${testimonial.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-[#c99a29]"
                    : "w-1.5 bg-[#d9d0c0] hover:bg-[#bca56f]"
                }`}
              />
            ))}
          </div>

          <span className="ml-1 text-[9px] tabular-nums text-[#81786b]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* BOTTOM BRAND STATEMENT */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#e8e0d3] pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] font-medium text-[#49443b] sm:text-[11px]">
            Thoughtful spaces. Lasting relationships.
          </p>

          <p className="text-[9px] text-[#81786b]">
            Aristara Interior
          </p>
        </div>
      </div>
    </section>
  );
}