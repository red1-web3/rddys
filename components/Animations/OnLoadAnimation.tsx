import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";

function OnLoadAnimation() {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      gsap.to("._wrapperLoadAnimation", {
        xPercent: -100,
        duration: 1.5,
        ease: Expo.easeOut,
      });
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-primary z-[999] _wrapperLoadAnimation"></div>
  );
}

export default OnLoadAnimation;
