import Image from "next/image";
import React, { useState } from "react";
import SliderDemoImg from "./components/SliderDemoImg";
import SliderMain from "./components/SliderMain";
import SliderText from "./components/SliderText";

function Hero() {
  const [controller, setController] = useState<any>(null);
  const [controller2, setController2] = useState<any>(null);
  return (
    <section>
      <div className="h-[80vh] grid grid-cols-2">
        <div className="relative">
          <SliderDemoImg setController={setController} />
          <SliderText setController={setController2} />
        </div>
        <SliderMain controller={controller} controller2={controller2} />
      </div>
    </section>
  );
}

export default Hero;
