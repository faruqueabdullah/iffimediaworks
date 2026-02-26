import { useState } from "react";

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable ROI and sustainable growth for your business.",
    link: "#",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Social Media & Content",
    description: "Engaging content strategies that build communities and drive meaningful conversations.",
    link: "#",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Lead Generation Systems",
    description: "Automated funnels and systems that consistently deliver qualified leads to your business.",
    link: "#",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Website & Funnels",
    description: "High-converting websites and sales funnels designed to turn visitors into customers.",
    link: "#",
  },
];

const ServiceCard = ({ icon, title, description, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl p-9 flex flex-col gap-4 cursor-pointer"
      style={{
        border: `1px solid ${hovered ? "#207de9" : "#e8e8e8"}`,
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 flex items-center justify-center"
        style={{
          color: hovered ? "#207de9" : "#111",
          transition: "color 0.3s ease",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="m-0 text-xl font-bold text-gray-900 leading-snug tracking-tight"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="m-0 text-sm text-gray-500 leading-relaxed flex-grow">
        {description}
      </p>

      {/* CTA */}
      <a
        href={link}
        className="inline-flex items-center text-sm font-semibold text-gray-900 no-underline mt-1"
        style={{
          gap: hovered ? "10px" : "6px",
          transition: "gap 0.2s ease",
        }}
      >
        Explore Service
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default function ServicesGrid() {
  return (
    <section className="px-6 pt-16 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}
