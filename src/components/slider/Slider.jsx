import { useState, useEffect } from "react";

const DATA = [
  {
    title: "PERFORMANCE FOCUSED",
    subtitle: "Driving measurable ROI for clients",
  },
  {
    title: "15% HIGHER QUALIFIED LEAD GROWTH",
    subtitle: "For clients who connect their data",
  },
  {
    title: "98% CLIENT RETENTION RATE",
    subtitle: "Long-term partnerships built on trust",
  },
  {
    title: "CLEAR REPORTING",
    subtitle: "Strategic experts across industries",
  },
];

export default function AccordionSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 2;
  const maxIndex = DATA.length - visibleCount;

  const handleDotClick = (i) => {
    if (i <= maxIndex) setIndex(i);
  };

  return (
    <div className="max-w-[750px] mx-auto overflow-hidden px-4 py-20">
      
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * (100 / visibleCount)}%)`,
        }}
      >
        {DATA.map((item, i) => (
          <div
            key={i}
            className="shrink-0 w-full md:w-1/2 px-4"
          >
            <div className="bg-gray-100 rounded-lg flex flex-col items-center py-5 h-30">
              <h3 className="text-sm md:text-base font-extrabold text-softDark mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-softDark italic">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-blue-900 w-3" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}