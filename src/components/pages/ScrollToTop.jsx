
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
        ticking = false;
      });
    };

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Use Lenis if it has been exposed globally.
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(0, {
        duration: 1.1,
      });
      return;
    }

    // Fallback when Lenis is not available.
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#29261f] text-white shadow-lg transition-[opacity,transform,background-color] duration-300 hover:bg-[#a17b27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eab934] focus-visible:ring-offset-2 sm:bottom-6 sm:left-6 sm:h-12 sm:w-12 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
};

export default ScrollToTop;
