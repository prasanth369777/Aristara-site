
import React from "react";
import {
  House,
  Building2,
  Armchair,
  Zap,
  Paintbrush,
  Hammer,
  Layers3,
  DoorOpen,
  Lightbulb,
  Droplets,
  Sofa,
  CookingPot,
  Ruler,
} from "lucide-react";

const scrollItems = [
  { title: "Home Interiors", icon: House },
  { title: "Modular Kitchens", icon: CookingPot },
  { title: "Wardrobes", icon: DoorOpen },
  { title: "Living Room Design", icon: Sofa },
  { title: "False Ceiling", icon: Layers3 },
  { title: "House Construction", icon: Building2 },
  { title: "Office Interiors", icon: Armchair },
  { title: "Custom Furniture", icon: Ruler },
  { title: "Lighting Design", icon: Lightbulb },
  { title: "Interior Wall Painting", icon: Paintbrush },
  { title: "Exterior Painting", icon: Paintbrush },
  { title: "Texture Painting", icon: Layers3 },
  { title: "Waterproofing", icon: Droplets },
  { title: "Electrical Work", icon: Zap },
  { title: "Renovation & Remodeling", icon: Hammer },
];

function InfiniteScroll() {
  const repeatedItems = [...scrollItems, ...scrollItems];

  return (
    <section
      id="complete-solutions"
      aria-label="Aristara Interior services"
      className="relative w-full overflow-hidden bg-[#fbf8f1] py-5 font-['Poppins',sans-serif] text-[#25231f] sm:py-7 lg:py-9"
    >
      <div className="relative overflow-hidden border-y border-[#e8dfd0] bg-[#f5f0e6] py-5 sm:py-6">
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f5f0e6] to-transparent sm:w-14"
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f5f0e6] to-transparent sm:w-14"
        />

        {/* Marquee track */}
        <div className="aristara-service-strip flex w-max items-center">
          {repeatedItems.map((item, index) => {
            const Icon = item.icon;
            const isDuplicate = index >= scrollItems.length;

            return (
              <div
                key={`${item.title}-${index}`}
                aria-hidden={isDuplicate ? "true" : undefined}
                className="group flex shrink-0 items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#e5d8bd] bg-[#fbf8f1] text-[#a17b27] transition-colors duration-200 group-hover:border-[#d8b75e] group-hover:bg-[#eab934] group-hover:text-[#29251d] sm:h-10 sm:w-10">
                  <Icon size={18} strokeWidth={1.6} />
                </span>

                <span className="whitespace-nowrap text-[10px] font-medium text-[#50483b] transition-colors duration-200 group-hover:text-[#9c792e] sm:text-[11px]">
                  {item.title}
                </span>

                <span className="ml-2 h-1 w-1 shrink-0 rounded-full bg-[#c99a29] sm:ml-4" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .aristara-service-strip {
          animation: aristaraServiceMarquee 42s linear infinite;
        }

        @keyframes aristaraServiceMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .aristara-service-strip {
            animation-duration: 35s;
          }
        }

        @media (hover: hover) {
          .aristara-service-strip:hover {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aristara-service-strip {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default React.memo(InfiniteScroll);
