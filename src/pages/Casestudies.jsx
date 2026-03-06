import ChatButton from "../components/chatbutton/ChatButton";

const caseStudies = [
  {
    title: "EdTech Platform Growth",
    subtitle: "300% Increase in Enrollments",
    industry: "Education",
    gradient: "from-blue-600 via-blue-700 to-indigo-700",
    accentColor: "blue",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-white"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    metrics: ["300%", "2.5X", "45%", "85%"],
    challenge:
      "An online learning platform needed to scale student enrollments while maintaining cost-per-acquisition efficiency.",
    solution:
      "We implemented a multi-channel performance marketing strategy combining Google Ads, Facebook campaigns, and strategic content marketing to reach prospective students.",
    resultsLeft: ["300% increase in enrollments", "2.5X improvement in ROI"],
    resultsRight: [
      "45% reduction in cost per acquisition",
      "85% increase in organic traffic",
    ],
  },
  {
    title: "Local Business Expansion",
    subtitle: "5X ROI in 6 Months",
    industry: "Retail",
    gradient: "from-violet-600 via-indigo-600 to-blue-700",
    accentColor: "violet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-white"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    metrics: ["5X", "250%", "8", "4.8★"],
    challenge:
      "A regional service provider wanted to expand across multiple cities while maintaining profitability and brand consistency.",
    solution:
      "We developed location-specific campaigns, optimized local SEO, and created a referral program to drive growth in new markets.",
    resultsLeft: ["5X return on ad spend", "250% increase in monthly revenue"],
    resultsRight: [
      "Expansion to 8 new cities",
      "4.8-star average rating maintained",
    ],
  },
  {
    title: "Professional Services Lead Gen",
    subtitle: "200+ Qualified Leads/Month",
    industry: "B2B Services",
    gradient: "from-indigo-700 via-blue-700 to-cyan-700",
    accentColor: "cyan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-white"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    metrics: ["200+", "180%", "35%", "∞"],
    challenge:
      "A B2B consulting firm struggled with inconsistent lead flow and needed a predictable system for generating qualified prospects.",
    solution:
      "We built an automated lead generation system with LinkedIn advertising, email nurturing, and content-driven funnels.",
    resultsLeft: [
      "200+ qualified leads per month",
      "180% increase in pipeline value",
    ],
    resultsRight: [
      "35% lead-to-client conversion rate",
      "Consistent monthly growth",
    ],
  },
  {
    title: "E-commerce Brand Launch",
    subtitle: "₹50L+ Revenue in First Quarter",
    industry: "E-commerce",
    gradient: "from-blue-700 via-indigo-600 to-purple-700",
    accentColor: "purple",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-white"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    metrics: ["₹50L+", "4.2%", "15K+", "68%"],
    challenge:
      "A new D2C brand needed to establish market presence and drive sales from day one with limited brand awareness.",
    solution:
      "We created a comprehensive launch strategy including influencer partnerships, performance ads, and conversion optimization.",
    resultsLeft: ["₹50L+ revenue in Q1", "4.2% conversion rate"],
    resultsRight: ["15,000+ customers acquired", "68% repeat purchase rate"],
  },
];

const CheckIcon = ({ color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    violet: "bg-violet-100 text-violet-600",
    cyan: "bg-cyan-100 text-cyan-700",
    purple: "bg-purple-100 text-purple-600",
  };
  return (
    <span
      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${colors[color] || colors.blue}`}
    >
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
};

const MetricBadge = ({ value, color }) => {
  const colors = {
    blue: "bg-white/10 text-white border-white/20",
    violet: "bg-white/10 text-white border-white/20",
    cyan: "bg-white/10 text-white border-white/20",
    purple: "bg-white/10 text-white border-white/20",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold border ${colors[color]} backdrop-blur-sm`}
    >
      {value}
    </span>
  );
};

export default function CaseStudies() {
  return (
    <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Case Studies
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
            Proven Growth Across{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Industries
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 rounded-sm z-0" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Real campaigns. Real numbers. Real impact.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Hero Strip */}
              <div
                className={`relative bg-linear-to-r ${study.gradient} px-8 py-7 lg:px-12 lg:py-9 overflow-hidden`}
              >
                {/* Glow orbs */}
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  {/* Left: Icon + Text */}
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner mt-1">
                      {study.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                          {study.title}
                        </h3>
                      </div>
                      <p className="text-blue-100 font-semibold text-base lg:text-lg">
                        {study.subtitle}
                      </p>
                      {/* Metric pills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {study.metrics.map((m, i) => (
                          <MetricBadge
                            key={i}
                            value={m}
                            color={study.accentColor}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Industry Badge */}
                  <div className="shrink-0">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold tracking-wider uppercase shadow-inner">
                      {study.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider accent */}
              <div
                className={`h-0.5 bg-linear-to-r ${study.gradient} opacity-20`}
              />

              {/* Content Body */}
              <div className="px-8 py-8 lg:px-12 lg:py-10">
                <div className="grid lg:grid-cols-2 lg:gap-12 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        The Challenge
                      </h4>
                      <div className="w-8 h-0.5 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full mb-3" />
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Our Solution
                      </h4>
                      <div className="w-8 h-0.5 bg-linear-to-r from-indigo-500 to-blue-500 rounded-full mb-3" />
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                        Results Achieved
                      </h4>
                      <div className="space-y-2.5">
                        {study.resultsLeft.map((result, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 rounded-xl px-4 py-3 transition-colors duration-200 group/row"
                          >
                            <CheckIcon color={study.accentColor} />
                            <span className="text-gray-700 text-sm font-semibold leading-snug group-hover/row:text-gray-900 transition-colors">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                        Additional Results
                      </h4>
                      <div className="space-y-2.5">
                        {study.resultsRight.map((result, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 rounded-xl px-4 py-3 transition-colors duration-200 group/row"
                          >
                            <CheckIcon color={study.accentColor} />
                            <span className="text-gray-700 text-sm font-semibold leading-snug group-hover/row:text-gray-900 transition-colors">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${study.gradient} rounded-b-3xl transition-all duration-500 w-0 group-hover:w-full`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-medium mb-4">
            Ready to become our next success story?{" "}
            <span className="text-blue">Start Your Growth Journey</span>
          </p>
          <div className="flex justify-center items-center">
            <ChatButton
              to={"https://wa.me/919473370867"}
              text={"Chat on WhatsApp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
