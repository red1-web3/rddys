import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { slide2, sliderImageAndText } from "constant/home/hero";

function preloadImages(urls: string[], allImagesLoadedCallback: () => void) {
  let loadedCounter = 0;
  let toBeLoadedNumber = urls.length;
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++;
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url: string, anImageLoadedCallback: () => void) {
    let img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
  }
}

function OnLoadAnimation() {
  useEffect(() => {
    const timeLine = gsap.timeline();
    preloadImages(
      [`${sliderImageAndText[0].image.src}`, `${slide2[0].image.src}`],
      function () {
        setTimeout(() => {
          timeLine
            .to("._wrapperLoadAnimation", {
              xPercent: -100,
              duration: 0.65,
              clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            })
            .to(
              "._homeMainBody",
              {
                webkitFilter: "blur(" + 0 + "px)",
              },
              "-=.3"
            );
        }, 100);
      }
    );
  }, []);

  return (
    <div
      style={{ clipPath: "polygon(0 0, 100% 0%, 92% 100%, 0% 100%)" }}
      className="fixed top-0 left-0 w-[calc(100vw+200px)] h-screen bg-primary z-[999] _wrapperLoadAnimation"
    ></div>
  );
}

export default OnLoadAnimation;
