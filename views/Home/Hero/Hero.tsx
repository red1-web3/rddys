import React, { useState } from "react";
import NextButton from "./components/Buttons/NextButton";
import PrevButton from "./components/Buttons/PrevButton";
import SliderDemoImg from "./components/SliderDemoImg";
import SliderMain from "./components/SliderMain";
import SliderText from "./components/SliderText";

function Hero() {
  const [controller, setController] = useState<any>(null);
  const [controller2, setController2] = useState<any>(null);
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[calc(100vh-60px)] lg:h-[80vh]">
          <SliderDemoImg setController={setController} />
          <SliderText setController={setController2} />

          {/* <div className="absolute top-0 left-0 w-full z-[60] flex items-center justify-between h-full">
            <PrevButton />
            <NextButton />
          </div> */}

          <div className="absolute top-0 z-[-1] left-0 ffc h-screen w-full lg:h-full"></div>
        </div>
        <SliderMain controller={controller} controller2={controller2} />
      </div>
    </section>
  );
}

export default Hero;
