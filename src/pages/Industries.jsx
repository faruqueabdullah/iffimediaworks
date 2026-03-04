import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const industries = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#207de9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Schools & Colleges",
    description: "Drive admissions and build brand authority in the education sector with targeted digital strategies.",
    challenges: ["Increasing student enrollments", "Building institutional credibility", "Parent and student engagement", "Competitive differentiation"],
    solutions: ["Admission-focused campaigns", "Parent engagement content", "Virtual campus tours", "Student testimonial campaigns"],
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#207de9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Local & Regional Businesses",
    description: "Dominate your local market with targeted digital strategies that drive foot traffic and online sales.",
    challenges: ["Limited marketing budget", "Local market competition", "Building brand awareness", "Driving store visits"],
    solutions: ["Local SEO optimization", "Google My Business management", "Location-based advertising", "Community engagement campaigns"],
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#207de9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Service Brands",
    description: "Generate consistent leads and build trust with your target audience through strategic digital marketing.",
    challenges: ["Lead generation consistency", "Building client trust", "Demonstrating expertise", "Long sales cycles"],
    solutions: ["Lead nurturing funnels", "Thought leadership content", "Case study development", "Email marketing automation"],
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#207de9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Founders & Professionals",
    description: "Build your personal brand and establish thought leadership in your industry.",
    challenges: ["Personal brand positioning", "Content consistency", "Audience building", "Credibility establishment"],
    solutions: ["LinkedIn strategy", "Content creation systems", "Speaking engagement promotion", "Authority building campaigns"],
  },
];

function IndustryCard({ industry, side, inView }) {
  return (
    <div
      className={`h-full transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${side === "left" ? "lg:pr-7" : "lg:pl-7"}`}
    >
      <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md   flex flex-col h-full transition-all duration-300 group">

        {/* Blue top accent */}
        <div className="h-[3px] bg-linear-to-r from-[#207de9] to-blue-300 shrink-0" />

        <div className="p-6 lg:p-7 flex flex-col flex-1">

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="shrink-0 rounded-xl p-2.5 bg-blue-50 border border-blue-100">
              {industry.icon}
            </div>
            <h3
              className="text-[22px] font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {industry.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-[16px] text-gray-500 leading-relaxed mb-5">
            {industry.description}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-300 mb-5" />

          {/* Challenges + Solutions */}
          <div className="md:absolute left-0 top-100 group-hover:top-0 transition-all duration-500  w-full h-full md:bg-gray-100 grid grid-cols-1 md:grid-cols-2 md:p-5 flex-1">

            <div className="md:pr-5 pb-5 md:pb-0">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-gray-400 mb-3">
                Common Challenges
              </p>
              <ul className="space-y-2">
                {industry.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-5 pt-5 md:pt-0 border-t border-gray-100 md:border-t-0">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#207de9] mb-3">
                Our Solutions
              </p>
              <ul className="space-y-2">
                {industry.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-blue-800 leading-snug">
                    <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="7.5" r="7.5" fill="#dbeafe" />
                      <path d="M4.5 7.5l2 2 4-4" stroke="#207de9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function IndustryRow({ left, right }) {
  const [rowRef, inView] = useInView(0.06);

  return (
    <div ref={rowRef} className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-0 mb-6 lg:mb-12">

      {/* Left card */}
      <div className="flex-1 min-w-0">
        <IndustryCard industry={left} side="left" inView={inView} />
      </div>

      {/* Centre dot column */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-px pt-8">
        <div
          className={`w-3.5 h-3.5 rounded-full border-[3px] transition-all duration-500 ${
            inView
              ? "bg-[#207de9] border-blue-200 shadow-[0_0_0_3px_rgba(32,125,233,0.15)]"
              : "bg-gray-300 border-gray-100"
          }`}
        />
      </div>

      {/* Right card */}
      <div className="flex-1 min-w-0">
        {right ? (
          <IndustryCard industry={right} side="right" inView={inView} />
        ) : (
          <div className="lg:pl-7 h-full" />
        )}
      </div>

    </div>
  );
}

function PageHeader() {
  return (
    <div className="text-center pt-24 mb-20 px-6 bg-dark min-h-120 flex flex-col justify-center items-center">
      <span className="inline-block text-[0.6rem] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full mb-5 text-[#207de9] bg-blue-50 border border-blue-100">
        iFFi Media Works
      </span>
      <h1
        className="text-4xl lg:text-6xl font-extrabold text-light mb-4 leading-tight"
      >
        Industries We Serve
      </h1>
      <p className="text-base text-softDark mx-auto max-w-xl leading-7">
        Every industry has unique challenges. Here's how we craft strategies that are specific,
        measurable, and built for each sector.
      </p>
      <div className="flex items-center justify-center gap-3 mt-7">
        <div className="h-px w-12 bg-gray-200" />
        <div className="w-2 h-2 rounded-full bg-[#207de9]" />
        <div className="h-px w-12 bg-gray-200" />
      </div>
    </div>
  );
}

export default function App() {
  const rows = [];
  for (let i = 0; i < industries.length; i += 2) {
    rows.push({ left: industries[i], right: industries[i + 1] || null });
  }

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans','Helvetica Neue',Arial,sans-serif" }}
    >
      <PageHeader />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8 pb-16">

        {/* Vertical centre line — desktop only */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 w-px pointer-events-none"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(to bottom, transparent, #207de9 60px, #207de9 calc(100% - 40px), transparent)",
          }}
        />

        <div className="relative pt-2">
          {rows.map((row, i) => (
            <IndustryRow key={i} left={row.left} right={row.right} />
          ))}
        </div>
      </div>
    </div>
  );
}
