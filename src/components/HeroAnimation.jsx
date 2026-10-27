
import React from "react";
import { Lamp } from "lucide-react";

const HeroAnimation = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center overflow-hidden">
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-13px) rotate(2deg); }
        }

        @keyframes hero-float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-3deg); }
        }

        @keyframes hero-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hero-glow {
          0%, 100% { opacity: .45; transform: scale(.95); }
          50% { opacity: .8; transform: scale(1.06); }
        }

        @keyframes hero-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes hero-shadow {
          0%, 100% { transform: scale(1); opacity: .18; }
          50% { transform: scale(.86); opacity: .10; }
        }

        .hero-float {
          animation: hero-float 4.5s ease-in-out infinite;
        }

        .hero-float-reverse {
          animation: hero-float-reverse 5s ease-in-out infinite;
        }

        .hero-bob {
          animation: hero-bob 3s ease-in-out infinite;
        }

        .hero-glow {
          animation: hero-glow 4s ease-in-out infinite;
        }

        .hero-spin {
          animation: hero-spin 22s linear infinite;
        }

        .hero-shadow {
          animation: hero-shadow 4.5s ease-in-out infinite;
        }

        .hero-3d-card {
          box-shadow:
            0 18px 30px rgba(68, 52, 30, .10),
            inset 0 1px 0 rgba(255,255,255,.9);
        }

        .hero-character {
          filter: drop-shadow(0 12px 9px rgba(63, 46, 26, .13));
          transform-origin: bottom center;
          animation: hero-bob 3.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-float,
          .hero-float-reverse,
          .hero-bob,
          .hero-glow,
          .hero-spin,
          .hero-shadow,
          .hero-character {
            animation: none !important;
          }
        }
      `}</style>

      {/* Main illustration background */}
      <div className="relative aspect-[4/4.2] w-full max-w-[530px]">

        {/* Soft background glow */}
        <div className="hero-glow absolute left-[15%] top-[10%] h-[65%] w-[70%] rounded-full bg-[#eab934]/20 blur-3xl" />

        {/* Decorative orbit */}
        <div className="hero-spin absolute left-[8%] top-[7%] h-[78%] w-[84%] rounded-full border border-dashed border-[#c99a29]/30" />

        {/* Floor shadow */}
        <div className="hero-shadow absolute bottom-[8%] left-[15%] h-[13%] w-[70%] rounded-[50%] bg-[#4b3c26]/20 blur-xl" />

        {/* 3D room platform */}
        <div className="absolute bottom-[10%] left-[8%] h-[24%] w-[84%]">
          <div
            className="absolute inset-x-[7%] top-0 h-[65%] rounded-[24px] border border-white/90 bg-[#fffdf7]"
            style={{
              transform: "perspective(500px) rotateX(8deg)",
              boxShadow: "0 12px 22px rgba(62,47,27,.08)",
            }}
          />

          <div
            className="absolute bottom-[3%] left-[4%] h-[45%] w-[92%] rounded-xl bg-[#dfcda9]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 91% 100%, 9% 100%)",
            }}
          />

          {/* Floor plank lines */}
          <div className="absolute bottom-[14%] left-[20%] h-px w-[60%] bg-[#b8a27d]/70" />
          <div className="absolute bottom-[27%] left-[15%] h-px w-[70%] bg-[#b8a27d]/60" />
        </div>

        {/* Mini sofa */}
        <div className="hero-float-reverse absolute bottom-[28%] left-[11%] z-10 w-[36%]">
          <div className="relative mx-auto h-[48px] w-[86%] rounded-t-2xl border border-[#a9783f]/40 bg-[#d7a66d] shadow-md sm:h-[61px]">
            <div className="absolute inset-x-2 top-2 bottom-1 rounded-xl bg-[#e9c395]" />

            <div className="absolute -left-2 top-[17px] h-[28px] w-[15px] rounded-lg bg-[#b98750] sm:h-[36px]" />

            <div className="absolute -right-2 top-[17px] h-[28px] w-[15px] rounded-lg bg-[#b98750] sm:h-[36px]" />
          </div>

          <div className="mx-auto h-[10px] w-[78%] rounded-b-lg bg-[#ad7945]" />

          <div className="mx-auto flex w-[72%] justify-between px-1">
            <div className="h-3 w-2 rounded-b bg-[#765332]" />
            <div className="h-3 w-2 rounded-b bg-[#765332]" />
          </div>
        </div>

        {/* Mini side table and lamp */}
        <div className="hero-float absolute bottom-[31%] right-[12%] z-10 flex flex-col items-center">
          <Lamp
            size={43}
            strokeWidth={1.5}
            className="text-[#c99a29] sm:h-12 sm:w-12"
          />

          <div className="-mt-1 h-2 w-12 rounded-full bg-[#a9793f] shadow-md" />

          <div className="h-5 w-1 rounded-b bg-[#a9793f]" />

          <div className="h-1.5 w-9 rounded-full bg-[#8b633b]" />
        </div>

        {/* Cartoon designer character */}
        <div className="hero-character absolute bottom-[28%] left-1/2 z-30 -translate-x-1/2">
          <div className="relative flex flex-col items-center">

            {/* Hair */}
            <div className="relative z-20 mb-[-10px] h-[34px] w-[47px] rounded-t-[24px] bg-[#35251e] sm:h-[40px] sm:w-[55px]">
              <div className="absolute left-1 top-2 h-3 w-5 rounded-full bg-[#4a3428]" />
            </div>

            {/* Face */}
            <div className="relative z-30 h-[48px] w-[43px] rounded-[43%] border border-[#d49b70] bg-[#f2c49b] sm:h-[55px] sm:w-[49px]">

              {/* Ears */}
              <div className="absolute -left-1 top-[19px] h-3 w-2 rounded-full bg-[#e5ae83]" />

              <div className="absolute -right-1 top-[19px] h-3 w-2 rounded-full bg-[#e5ae83]" />

              {/* Eyes */}
              <div className="absolute left-[10px] top-[20px] h-[5px] w-[4px] rounded-full bg-[#35251e] sm:left-[12px]" />

              <div className="absolute right-[10px] top-[20px] h-[5px] w-[4px] rounded-full bg-[#35251e] sm:right-[12px]" />

              {/* Smile */}
              <div className="absolute left-1/2 top-[30px] h-[6px] w-[12px] -translate-x-1/2 rounded-b-full border-b-2 border-[#9a5141]" />

              {/* Hair fringe */}
              <div className="absolute -top-1 left-[7px] h-[13px] w-[20px] rounded-br-full bg-[#35251e] sm:left-[9px]" />
            </div>

            {/* Neck */}
            <div className="relative z-10 -mt-1 h-[12px] w-[15px] bg-[#e5ae83]" />

            {/* Body / designer outfit */}
            <div className="relative -mt-1 h-[64px] w-[68px] rounded-t-[25px] bg-[#d4a13e] sm:h-[77px] sm:w-[80px]">

              {/* Shirt center */}
              <div className="absolute left-1/2 top-0 h-[50px] w-[22px] -translate-x-1/2 bg-[#fff8e9]" />

              {/* Collar */}
              <div
                className="absolute left-1/2 top-0 h-3 w-5 -translate-x-1/2 bg-[#e6d5b4]"
                style={{
                  clipPath: "polygon(0 0,100% 0,50% 100%)",
                }}
              />

              {/* Arms */}
              <div className="absolute -left-[10px] top-[12px] h-[34px] w-[15px] rotate-[20deg] rounded-full bg-[#d4a13e]" />

              <div className="absolute -right-[10px] top-[12px] h-[34px] w-[15px] -rotate-[20deg] rounded-full bg-[#d4a13e]" />

              {/* Pocket */}
              <div className="absolute right-[9px] top-[17px] h-[12px] w-[11px] rounded-sm border border-[#a97a28] bg-[#e9bc5e]" />
            </div>

            {/* Legs */}
            <div className="relative -mt-1 flex gap-2">
              <div className="h-[25px] w-[23px] rounded-b-lg bg-[#38342e]" />

              <div className="h-[25px] w-[23px] rounded-b-lg bg-[#38342e]" />
            </div>

            {/* Shoes */}
            <div className="-mt-1 flex gap-1">
              <div className="h-[9px] w-[27px] rounded-full bg-[#5a3928]" />

              <div className="h-[9px] w-[27px] rounded-full bg-[#5a3928]" />
            </div>
          </div>
        </div>

        {/* Decorative label */}
        <div className="hero-float-reverse absolute bottom-[7%] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#66512e] shadow-lg sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#d9a52e]" />
          Spaces made personal
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
