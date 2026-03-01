const industries = [
  {
    title: "Education",
    sub: "Schools & Colleges",
    desc: "Driving enrollments and brand awareness for institutions that shape the future.",
    icon: "🎓",
  },
  {
    title: "Retail",
    sub: "Local & Regional",
    desc: "Performance campaigns that convert browsers into loyal, repeat customers.",
    icon: "🛍️",
  },
  {
    title: "Services",
    sub: "B2B & B2C",
    desc: "Lead generation and pipeline growth for service-based businesses at scale.",
    icon: "⚙️",
  },
  {
    title: "Personal Brand",
    sub: "Founders & Leaders",
    desc: "Building authority, audience, and income for visionaries who lead with voice.",
    icon: "🚀",
  },
];

export default function IndustriesSection() {
  return (
    <>
      <style>{`

        /* ── Card base: black background ── */
        .industry-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        /* ── Blue fill pseudo element — slides up from bottom on hover ── */
        .industry-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, #207de9 0%, #1250a8 100%);
          transform: translateY(101%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }
        .industry-card:hover::after {
          transform: translateY(0%);
        }

        /* ── Static content (icon + title + sub) always visible, fades on hover ── */
        .card-static {
          position: relative;
          z-index: 2;
          transition: opacity 0.25s ease;
        }
        .industry-card:hover .card-static {
          opacity: 0;
        }

        /* ── Hover overlay: slides up in sync with the blue fill ── */
        .hover-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          transform: translateY(101%);
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .industry-card:hover .hover-overlay {
          transform: translateY(0%);
        }

        /* ── Arrow shift ── */
        .arrow-btn {
          transition: transform 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .industry-card:hover .arrow-btn {
          transform: translateX(5px);
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.12);
        }
      `}</style>

      <section
        className="py-24 px-6 bg-dark"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#207de9] mb-4">
              Our Focus Areas
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Industries We{" "}
              <span className="text-[#207de9]">Transform</span>
            </h2>
            <p className="mt-4 text-white/40 text-base max-w-lg mx-auto leading-relaxed font-light">
              Deep vertical expertise across sectors that demand measurable, performance-driven results.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/8 bg-dark">
            {industries.map((industry, i) => (
              <div
                key={industry.title}
                className={`industry-card min-h-60 flex flex-col justify-between p-8
                  ${i < industries.length - 1 ? "md:border-r border-b md:border-b-0 border-white/8" : ""}`}
              >

                {/* ── Default visible content: icon + title + sub only ── */}
                <div className="card-static flex flex-col gap-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-xl tracking-tight mb-1">
                      {industry.title}
                    </h3>
                    <p className="text-white/40 text-sm">
                      {industry.sub}
                    </p>
                  </div>
                </div>

                {/* ── Default arrow (hidden on hover via card-static fade) ── */}
                <div className="card-static mt-auto">
                  <div className="arrow-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* ── Hover overlay: slides up with the blue fill ── */}
                <div className="hover-overlay">
                  <span className="text-3xl mb-5 block">{industry.icon}</span>
                  <p className="text-white/85 text-sm leading-relaxed font-light">
                    {industry.desc}
                  </p>
                  <div className="mt-6">
                    <div className="arrow-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {["Pan-India Reach", "Niche Expertise", "Full-Funnel Strategy"].map((tag) => (
              <span key={tag} className="text-xs font-medium uppercase tracking-widest text-white/25">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
