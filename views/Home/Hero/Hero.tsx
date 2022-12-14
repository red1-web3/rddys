import React, { useState } from "react";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";

function Hero() {
  const [controller, setController] = useState<any>(null);
  return (
    <section>
      <div className="h-[600px] grid grid-cols-2">
        <div>
          <Slider1 setController={setController} />
        </div>
        <div>
          <Slider2 controller={controller} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
