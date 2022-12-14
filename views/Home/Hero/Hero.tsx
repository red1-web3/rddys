import React from "react";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";

function Hero() {
  return (
    <section>
      <div className="h-[600px] grid grid-cols-2">
        <div>
          <Slider1 />
        </div>
        <div>
          <Slider2 />
        </div>
      </div>
    </section>
  );
}

export default Hero;
