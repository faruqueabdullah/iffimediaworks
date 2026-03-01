import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "We analyze your current digital footprint and market position.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We build a custom roadmap aligned with your business KPIs.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Agile implementation with real-time optimization.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Doubling down on winning channels to maximize ROI.",
  },
];

export default function Scroll() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Our Methodology
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* LEFT CONTENT */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-700 ease-out transform ${
                  visible.includes(String(index))
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-start gap-6">
                  
                  {/* Number */}
                  <span className="text-3xl font-bold text-gray-300">
                    {step.number}
                  </span>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Team Strategy"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}