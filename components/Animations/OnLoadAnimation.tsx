import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { slide2, sliderImageAndText } from "constant/home/hero";

function preloadImages(urls: string[], allImagesLoadedCallback: () => void) {
  var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++;
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url: string, anImageLoadedCallback: () => void) {
    var img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
  }
}

function OnLoadAnimation() {
  useEffect(() => {
    preloadImages(
      [`${sliderImageAndText[0].image.src}`, `${slide2[0].image.src}`],
      function () {
        gsap.to("._wrapperLoadAnimation", {
          xPercent: -100,
          duration: 1.5,
          // ease: Expo.easeOut,
        });
      }
    );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-primary z-[999] _wrapperLoadAnimation"></div>
  );
}

export default OnLoadAnimation;
