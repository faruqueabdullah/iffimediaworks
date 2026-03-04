import { useState, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BeforeAfterSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const beforeImage = isMobile
    ? "/funnel-before-mobile.webp"
    : "/funnel-before.webp";

  const afterImage = isMobile
    ? "/after.png"
    : "/after-desktop.png";

  return (
    <div className="w-full max-w-7xl mx-auto pt-10">
      <ReactCompareSlider
        position={50}
        handle={
          <div className="w-0.5 bg-blue-500 h-full relative ">
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white rounded-full shadow-md border border-gray-300" />
          </div>
        }
        itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
        itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
      />
    </div>
  );
}
