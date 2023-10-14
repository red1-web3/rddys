import gsap from "gsap";
import { useEffect, useRef } from "react";

const Card = () => {
  const rotateEl = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(rotateEl.current, {
        rotation: "360",
        repeat: -1,
        duration: 15,
        ease: "none",
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-[90vh] max-w-[1200px] w-full bg-[#3e3d3d] relative isolate rounded-xl overflow-hidden shadow-[0_0_8px_rgba(0,0,0,.13),_0_20px_30px_rgba(0,0,0,.15)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(355deg,rgba(14,18,25,.6),rgba(0,0,0,.18))",
          }}
        ></div>

        {/* Bg Noise */}
        <div
          style={{ backgroundSize: "auto", backgroundPosition: "0 0" }}
          className="absolute inset-0 bg-[url('/bg-noise.png')] opacity-30"
        ></div>

        {/* Blending group wrapper */}
        <div className="mix-blend-overlay blur-[120px]">
          <div className="shape-8"></div>
          <div className="shape-9"></div>
          <div className="shape-4"></div>
          <div className="shape-5"></div>
          <div className="shape-7"></div>
          <div className="shape-6"></div>
        </div>

        {/* Animating Shapes */}
        <div style={{ direction: "ltr" }} className="blur-[120px]">
          <div className="shape-2"></div>
          <div className="shape-1"></div>
          <div
            className="shape-3 rotate-[-28deg]"
            // style={{
            //   transformStyle: "preserve-3d",
            //   willChange: "transform",
            // }}
            ref={rotateEl}
          ></div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-8xl font-extrabold uppercase text-white">
          Background Effect
        </h2>
      </div>
    </div>
  );
};

export default Card;
