import { useState, useEffect, useRef } from "react";
import ChatButton from "../components/chatbutton/ChatButton";

const BLUE = "#207de9";
const BLUE_DIM = "rgba(32,125,233,0.12)";
const BLUE_BORDER = "rgba(32,125,233,0.28)";

const services = [
  {
    id: 1,
    tag: "Performance Marketing",
    title: "Stop Burning Budget. Start Buying Revenue.",
    description:
      "Most brands throw money at ads and hope. We engineer precision funnels where every rupee is tracked, attributed, and optimised toward qualified buyer intent — not impressions.",
    metric: "3.8× avg. ROAS improvement",
    before: {
      points: [
        "Burning budget on random boosts",
        "Vanity metrics — likes & reach",
        "No clear attribution model",
        "Scattered audience targeting",
        "Zero funnel visibility",
      ],
      chart: {
        label: "Monthly Ad Spend vs Revenue",
        bars: [
          { name: "Jan", a: 80, b: 30 },
          { name: "Feb", a: 85, b: 28 },
          { name: "Mar", a: 90, b: 32 },
          { name: "Apr", a: 88, b: 27 },
          { name: "May", a: 92, b: 31 },
          { name: "Jun", a: 95, b: 29 },
        ],
        colorA: "#ef4444",
        colorB: "#f97316",
        labelA: "Ad Spend",
        labelB: "Revenue",
      },
    },
    after: {
      points: [
        "Targeted buyer-intent spending",
        "Leads, pipeline & revenue metrics",
        "Full-funnel attribution tracking",
        "Precision audience segmentation",
        "Real-time performance dashboards",
      ],
      chart: {
        label: "Monthly Ad Spend vs Revenue",
        bars: [
          { name: "Jan", a: 50, b: 55 },
          { name: "Feb", a: 52, b: 68 },
          { name: "Mar", a: 55, b: 80 },
          { name: "Apr", a: 53, b: 88 },
          { name: "May", a: 54, b: 95 },
          { name: "Jun", a: 55, b: 110 },
        ],
        colorA: BLUE,
        colorB: "#22c55e",
        labelA: "Ad Spend",
        labelB: "Revenue",
      },
    },
  },
  {
    id: 2,
    tag: "SEO & Content Strategy",
    title: "Rank for Intent. Not Just Keywords.",
    description:
      "Content without strategy is noise. We build topical authority ecosystems that compound over time — turning your site into the industry's go-to resource and sales engine.",
    metric: "62% avg. organic traffic growth in 6 months",
    before: {
      points: [
        "Publishing random blog posts",
        "Targeting high-volume, low-intent terms",
        "No internal linking architecture",
        "Content that doesn't convert",
        "Flat or declining organic traffic",
      ],
      chart: {
        label: "Impressions vs Organic Clicks",
        bars: [
          { name: "Jan", a: 40, b: 12 },
          { name: "Feb", a: 42, b: 11 },
          { name: "Mar", a: 39, b: 13 },
          { name: "Apr", a: 41, b: 11 },
          { name: "May", a: 40, b: 12 },
          { name: "Jun", a: 43, b: 11 },
        ],
        colorA: "#ef4444",
        colorB: "#f97316",
        labelA: "Impressions",
        labelB: "Clicks",
      },
    },
    after: {
      points: [
        "Intent-mapped content clusters",
        "Bottom-funnel keyword prioritisation",
        "Strategic internal link mesh",
        "Content engineered to convert",
        "Compounding organic growth curve",
      ],
      chart: {
        label: "Impressions vs Organic Clicks",
        bars: [
          { name: "Jan", a: 38, b: 42 },
          { name: "Feb", a: 40, b: 58 },
          { name: "Mar", a: 42, b: 72 },
          { name: "Apr", a: 44, b: 85 },
          { name: "May", a: 43, b: 96 },
          { name: "Jun", a: 45, b: 112 },
        ],
        colorA: BLUE,
        colorB: "#22c55e",
        labelA: "Impressions",
        labelB: "Organic Visits",
      },
    },
  },
  {
    id: 3,
    tag: "Brand Identity & Positioning",
    title: "Be Remembered. Be Chosen.",
    description:
      "Logos don't build brands — positioning does. We craft identities rooted in market differentiation that make your brand the obvious choice in a crowded category.",
    metric: "2.1× increase in brand recall scores",
    before: {
      points: [
        "Generic visual identity",
        "Inconsistent brand voice",
        "No clear positioning statement",
        "Competing on price alone",
        "Forgettable first impressions",
      ],
      chart: {
        label: "Brand Recall & Trust Score",
        bars: [
          { name: "Q1", a: 30, b: 28 },
          { name: "Q2", a: 32, b: 29 },
          { name: "Q3", a: 29, b: 27 },
          { name: "Q4", a: 31, b: 30 },
          { name: "Q5", a: 30, b: 28 },
          { name: "Q6", a: 33, b: 29 },
        ],
        colorA: "#ef4444",
        colorB: "#f97316",
        labelA: "Recall",
        labelB: "Trust",
      },
    },
    after: {
      points: [
        "Distinctive, ownable visual system",
        "Sharp, consistent brand voice",
        "Crystal-clear market positioning",
        "Competing on value & authority",
        "Memorable brand experience",
      ],
      chart: {
        label: "Brand Recall & Trust Score",
        bars: [
          { name: "Q1", a: 35, b: 40 },
          { name: "Q2", a: 45, b: 55 },
          { name: "Q3", a: 55, b: 68 },
          { name: "Q4", a: 62, b: 78 },
          { name: "Q5", a: 68, b: 88 },
          { name: "Q6", a: 72, b: 95 },
        ],
        colorA: BLUE,
        colorB: "#22c55e",
        labelA: "Recall",
        labelB: "Trust",
      },
    },
  },
  {
    id: 4,
    tag: "Social Media & Community",
    title: "Build an Audience That Buys.",
    description:
      "Followers are vanity. Engaged communities are assets. We design social strategies that convert attention into pipeline — turning your platforms into active revenue channels.",
    metric: "4.3× avg. engagement-to-lead conversion",
    before: {
      points: [
        "Posting for the sake of posting",
        "Chasing follower counts",
        "No content-to-conversion path",
        "Inconsistent posting cadence",
        "Social that never drives revenue",
      ],
      chart: {
        label: "Followers vs Leads Generated",
        bars: [
          { name: "Jan", a: 90, b: 5 },
          { name: "Feb", a: 92, b: 6 },
          { name: "Mar", a: 95, b: 4 },
          { name: "Apr", a: 93, b: 5 },
          { name: "May", a: 96, b: 6 },
          { name: "Jun", a: 98, b: 5 },
        ],
        colorA: "#ef4444",
        colorB: "#f97316",
        labelA: "Followers",
        labelB: "Leads",
      },
    },
    after: {
      points: [
        "Content mapped to buyer journey",
        "Growing high-intent community",
        "Clear conversion pathways",
        "Data-driven content calendar",
        "Social as a measurable revenue channel",
      ],
      chart: {
        label: "Followers vs Leads Generated",
        bars: [
          { name: "Jan", a: 55, b: 30 },
          { name: "Feb", a: 58, b: 45 },
          { name: "Mar", a: 60, b: 58 },
          { name: "Apr", a: 62, b: 70 },
          { name: "May", a: 63, b: 82 },
          { name: "Jun", a: 65, b: 95 },
        ],
        colorA: BLUE,
        colorB: "#22c55e",
        labelA: "Reach",
        labelB: "Leads",
      },
    },
  },
  {
    id: 5,
    tag: "Analytics & Growth Intelligence",
    title: "Know What's Working. Scale It.",
    description:
      "Most marketing teams are flying blind. We install growth intelligence systems that surface exactly what's driving revenue — so you double down on signal, not noise.",
    metric: "41% avg. reduction in wasted ad spend",
    before: {
      points: [
        "Gut-feel decision making",
        "Siloed data across platforms",
        "No cohesive reporting structure",
        "Unable to prove marketing ROI",
        "Scaling what feels good",
      ],
      chart: {
        label: "Budget Utilisation Efficiency",
        bars: [
          { name: "Jan", a: 85, b: 22 },
          { name: "Feb", a: 88, b: 20 },
          { name: "Mar", a: 84, b: 23 },
          { name: "Apr", a: 87, b: 21 },
          { name: "May", a: 89, b: 22 },
          { name: "Jun", a: 86, b: 20 },
        ],
        colorA: "#ef4444",
        colorB: "#f97316",
        labelA: "Wasted",
        labelB: "Effective",
      },
    },
    after: {
      points: [
        "Data-driven growth decisions",
        "Unified cross-channel dashboard",
        "Executive-ready reporting",
        "Clear marketing ROI attribution",
        "Scaling what's proven to work",
      ],
      chart: {
        label: "Budget Utilisation Efficiency",
        bars: [
          { name: "Jan", a: 45, b: 60 },
          { name: "Feb", a: 40, b: 70 },
          { name: "Mar", a: 36, b: 78 },
          { name: "Apr", a: 32, b: 85 },
          { name: "May", a: 28, b: 92 },
          { name: "Jun", a: 25, b: 98 },
        ],
        colorA: BLUE,
        colorB: "#22c55e",
        labelA: "Wasted",
        labelB: "Effective",
      },
    },
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function BarChart({ chart, animate }) {
  const { bars, colorA, colorB, labelA, labelB, label } = chart;
  const maxVal = Math.max(...bars.flatMap((b) => [b.a, b.b]));
  const W = 260,
    H = 148;
  const pad = { top: 12, bottom: 26, left: 6, right: 6 };
  const chartH = H - pad.top - pad.bottom;
  const chartW = W - pad.left - pad.right;
  const groupW = chartW / bars.length;
  const barW = Math.min(13, groupW * 0.36);
  const gap = 3;

  return (
    <div className="w-full">
      <p
        className="text-xs mb-2 font-medium"
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.65rem",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        className="overflow-visible"
      >
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={i}
            x1={pad.left}
            y1={pad.top + chartH * t}
            x2={W - pad.right}
            y2={pad.top + chartH * t}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}
        {bars.map((b, i) => {
          const cx = pad.left + i * groupW + groupW / 2;
          const hA = animate ? (b.a / maxVal) * chartH : 0;
          const hB = animate ? (b.b / maxVal) * chartH : 0;
          const xA = cx - barW - gap / 2;
          const xB = cx + gap / 2;
          const delay = `${i * 0.07}s`;
          const delayB = `${i * 0.07 + 0.04}s`;
          return (
            <g key={i}>
              <rect
                x={xA}
                width={barW}
                rx="2"
                y={pad.top + chartH - hA}
                height={hA}
                fill={colorA}
                opacity="0.82"
                style={{
                  transition: `height 0.55s ease ${delay}, y 0.55s ease ${delay}`,
                }}
              />
              <rect
                x={xB}
                width={barW}
                rx="2"
                y={pad.top + chartH - hB}
                height={hB}
                fill={colorB}
                opacity="0.9"
                style={{
                  transition: `height 0.55s ease ${delayB}, y 0.55s ease ${delayB}`,
                }}
              />
              <text
                x={cx}
                y={H - 6}
                textAnchor="middle"
                fontSize="7.5"
                fill="rgba(255,255,255,0.28)"
                fontFamily="monospace"
              >
                {b.name}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="flex items-center gap-4 mt-0.5">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-sm flex-shrink-0"
            style={{ background: colorA }}
          />
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.67rem" }}
          >
            {labelA}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-sm flex-shrink-0"
            style={{ background: colorB }}
          />
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.67rem" }}
          >
            {labelB}
          </span>
        </div>
      </div>
    </div>
  );
}

function ComparisonBox({ service, inView }) {
  const [mode, setMode] = useState("before");
  const isAfter = mode === "after";
  const data = isAfter ? service.after : service.before;
  const windowWidth = useWindowWidth();
  const showChart = windowWidth >= 500;

  return (
    <div
      className={`rounded-2xl overflow-hidden bg-dark shadow-lg border ${isAfter ? "border-[rgba(32,125,233,0.28)]" : "border-[rgba(255,255,255,0.07)]"} transition-[border-color] duration-300`}
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-3.5 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)]">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-1 h-8 rounded-full transition-[background] duration-300 ${isAfter ? "bg-[#207de9]" : "bg-red-500"}`}
          />
          <div>
            <p className="text-[0.6rem] text-neutral-600 uppercase tracking-widest font-medium">
              Impact Comparison
            </p>
            <p
              className={`text-sm font-semibold transition-colors duration-300 ${isAfter ? "text-blue-300" : "text-red-300"}`}
            >
              {isAfter ? "With iFFi Media Works" : "Without Strategy"}
            </p>
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center rounded-lg p-0.5 gap-0.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]">
          <button
            onClick={() => setMode("before")}
            className={`text-xs font-bold px-4 py-1.5 rounded-md transition-all duration-200 border ${!isAfter ? "bg-[rgba(239,68,68,0.14)] text-red-400 border-[rgba(239,68,68,0.28)]" : "bg-transparent text-[rgba(255,255,255,0.3)] border-transparent"}`}
          >
            Before
          </button>
          <button
            onClick={() => setMode("after")}
            className={`text-xs font-bold px-4 py-1.5 rounded-md transition-all duration-200 border ${isAfter ? "bg-[rgba(32,125,233,0.12)] text-blue-400 border-[rgba(32,125,233,0.28)]" : "bg-transparent text-[rgba(255,255,255,0.3)] border-transparent"}`}
          >
            After
          </button>
        </div>
      </div>

      {/* Body */}
      <div
        className={`grid border-b border-[rgba(255,255,255,0.05)] ${showChart ? "grid-cols-2" : "grid-cols-1"}`}
      >
        {/* Left — bullet list */}
        <div
          className={`p-5 ${showChart ? "border-r border-[rgba(255,255,255,0.05)]" : ""}`}
        >
          <p
            className={`text-[0.6rem] font-bold uppercase tracking-[0.12em] mb-4 ${isAfter ? "text-blue-400" : "text-red-400"}`}
          >
            {isAfter ? "✦ With iFFi" : "✕ No Strategy"}
          </p>
          <ul className="space-y-2.5">
            {data.points.map((pt, i) => (
              <li
                key={`${mode}-${i}`}
                className={`flex items-start gap-2 text-xs leading-snug transition-[opacity,transform] duration-[350ms] ${isAfter ? "text-[rgba(255,255,255,0.78)]" : "text-[rgba(255,255,255,0.42)]"} ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1.5"}`}
                style={{ transitionDelay: `${i * 0.055}s` }}
              >
                <span
                  className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isAfter ? "bg-[#207de9]" : "bg-red-500"}`}
                />
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — bar chart (only on screens >= 500px) */}
        {showChart && (
          <div className="p-5 flex items-center">
            <BarChart chart={data.chart} animate={inView} />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-2.5 flex items-center justify-between">
        <p className="text-[0.67rem] text-[rgba(255,255,255,0.2)]">
          Based on client averages
        </p>
        <span
          className={`text-[0.67rem] font-semibold transition-colors duration-300 ${isAfter ? "text-blue-400" : "text-red-400"}`}
        >
          {isAfter ? "↑ Measurable growth" : "↓ Inefficient spend"}
        </span>
      </div>
    </div>
  );
}

function ServiceSection({ service, index }) {
  const [sectionRef, inView] = useInView(0.1);
  const compRight = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 lg:px-16 border-b border-black/10"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-14 items-center ${compRight ? "direction-ltr" : "direction-rtl"}`}
          style={{ direction: compRight ? "ltr" : "rtl" }}
        >
          {/* Content */}
          <div
            className={`transition-[opacity,transform] duration-[600ms] delay-[50ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[22px]"}`}
            style={{ direction: "ltr" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.13em] px-3 py-1 rounded-full text-[#111] bg-[rgba(32,125,233,0.12)] border border-[rgba(32,125,233,0.28)]">
                {service.tag}
              </span>
              <span className="text-xs text-dark font-mono">
                0{service.id} / 05
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-softDark tracking-tighter">
              {service.title}
            </h2>

            <p className="text-lg leading-relaxed text-softDark mb-6">
              {service.description}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[rgba(32,125,233,0.12)] border border-[rgba(32,125,233,0.28)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#207de9]" />
              <span className="text-sm font-semibold text-[#207de9]">
                {service.metric}
              </span>
            </div>

            <div>
              <ChatButton text={"Chat on WhatsApp"} />
            </div>
          </div>

          {/* Comparison Box */}
          <div
            className={`transition-[opacity,transform] duration-[650ms] delay-[180ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[26px]"}`}
            style={{ direction: "ltr" }}
          >
            <ComparisonBox service={service} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="relative py-24 px-6 text-center overflow-hidden bg-dark flex flex-col items-center justify-center min-h-[520px] border-b border-[rgba(255,255,255,0.05)]">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Vignette so grid fades to dark at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, #0c0d11 100%)",
        }}
      />
      <div
        className="absolute pointer-events-none w-[700px] h-[340px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
        style={{
          background: `radial-gradient(ellipse, rgba(32,125,233,0.09) 0%, transparent 68%)`,
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.22em] uppercase font-bold mb-4 text-blue-400">
          iFFi Media Works
        </p>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-5 text-slate-50 leading-none">
          Strategy. <span className="text-[#207de9]">Not&nbsp;Guesswork.</span>
        </h1>
        <p className="text-base leading-relaxed text-neutral-400 mx-auto mb-10 max-w-[52ch]">
          See exactly what separates brands that grow from brands that bleed
          budget.
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="h-px w-16 bg-[rgba(255,255,255,0.07)]" />
          <p className="text-xs text-neutral-600 font-mono tracking-widest uppercase">
            Use Before / After buttons on each card
          </p>
          <div className="h-px w-16 bg-[rgba(255,255,255,0.07)]" />
        </div>
      </div>
    </header>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl md:text-5xl text-blue font-extrabold leading-[2.75rem] tracking-tighter pb-8">
          Ready to <span className="text-dark">accelerate?</span>
        </h2>
        <ChatButton text={"Chat on WhatsApp"} />
      </div>
    </div>
  );
}

