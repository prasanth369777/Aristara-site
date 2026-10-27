import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Hammer } from "lucide-react";

const MouseConstruction = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const targetPosition = useRef({ x: -100, y: -100 });
  const currentPosition = useRef({ x: -100, y: -100 });
  const animationFrame = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice) return;

    const handleMouseMove = (event) => {
      targetPosition.current = {
        x: event.clientX + 8,
        y: event.clientY + 8,
      };

      setVisible(true);

      const target = event.target;

      if (target instanceof Element) {
        setHovering(
          Boolean(
            target.closest(
              "a, button, input, textarea, select, [role='button']"
            )
          )
        );
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => {
      setVisible(false);
      setClicking(false);
    };
    const handleMouseEnter = () => setVisible(true);
    const handleBlur = () => setVisible(false);
    const handleFocus = () => setVisible(true);

    const animate = () => {
      const current = currentPosition.current;
      const target = targetPosition.current;

      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;

      setPosition({
        x: current.x,
        y: current.y,
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      <style>
        {`
          @media (pointer: fine) {
            body,
            body a,
            body button,
            body input,
            body textarea,
            body select,
            body [role="button"] {
              cursor: none !important;
            }
          }

          @keyframes hammerFloat {
            0%, 100% {
              margin-top: 0;
            }
            50% {
              margin-top: -3px;
            }
          }

          @keyframes hammerGlow {
            0%, 100% {
              filter: drop-shadow(0 2px 3px rgba(201, 154, 41, 0.2));
            }
            50% {
              filter: drop-shadow(0 3px 5px rgba(201, 154, 41, 0.4));
            }
          }

          .construction-hammer {
            animation: hammerFloat 2.5s ease-in-out infinite,
                       hammerGlow 3s ease-in-out infinite;
            transform-origin: center;
            will-change: transform;
          }

          .construction-hammer.clicked {
            animation: none;
            transform: rotate(-18deg) scale(0.82);
          }

          .construction-hammer.hovering {
            transform: scale(1.08);
          }

          @media (prefers-reduced-motion: reduce) {
            .construction-hammer {
              animation: none !important;
            }
          }
        `}
      </style>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99999]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: visible ? 1 : 0,
          transition: "opacity 180ms ease",
          willChange: "transform",
        }}
      >
        <div
          className={[
            "construction-hammer",
            clicking ? "clicked" : "",
            hovering ? "hovering" : "",
          ].join(" ")}
          style={{
            width: "20px",
            height: "20px",
            color: "#c99a29",
          }}
        >
          <Hammer
            size={20}
            strokeWidth={1.8}
            color="#000000"
          />
        </div>
      </div>
    </>,
    document.body
  );
};

export default MouseConstruction;