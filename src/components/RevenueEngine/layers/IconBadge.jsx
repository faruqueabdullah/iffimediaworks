/**
 * IconBadge.jsx
 * -------------
 * White circle badge with a small SVG illustration.
 * Uses shared filter "icon-shadow" defined in RevenueEngine.jsx <defs>.
 *
 * To use real brand logos, replace the switch cases with:
 *   <image href="/icons/{type}.svg" x={cx - 8} y={cy - 8} width={16} height={16} />
 */

export function IconBadge({ type, cx, cy }) {
  const R = 13;

  const icons = {
    google: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
          fontSize="13" fontWeight="900" fontFamily="Arial" fill="#4285F4">G</text>
      </>
    ),

    googleads: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <path
          d={`M${cx-6},${cy+3} L${cx-2},${cy+3} L${cx+5},${cy-4} L${cx+5},${cy+4} L${cx-2},${cy-1} Z`}
          fill="#FBBC05"
        />
        <rect x={cx-6} y={cy-1} width={4} height={4} rx={1} fill="#EA4335" />
      </>
    ),

    hubspot: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <circle cx={cx} cy={cy}     r={4.5} fill="none" stroke="#FF7A59" strokeWidth={2} />
        <circle cx={cx} cy={cy}     r={1.8} fill="#FF7A59" />
        <circle cx={cx} cy={cy - 6} r={2}   fill="#FF7A59" />
      </>
    ),

    salesforce: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <path
          d={`M${cx-4},${cy+4} Q${cx-7},${cy+4} ${cx-7},${cy+1}
              Q${cx-7},${cy-2} ${cx-4},${cy-2} Q${cx-4},${cy-5} ${cx-1},${cy-5}
              Q${cx+1},${cy-7} ${cx+4},${cy-6} Q${cx+8},${cy-6} ${cx+7},${cy-2}
              Q${cx+9},${cy-2} ${cx+9},${cy+1} Q${cx+9},${cy+4} ${cx+6},${cy+4} Z`}
          fill="#00A1E0"
        />
      </>
    ),

    chart: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <rect x={cx-6} y={cy+1} width={3} height={4}  rx={0.5} fill="#0693e3" />
        <rect x={cx-2} y={cy-2} width={3} height={7}  rx={0.5} fill="#0693e3" />
        <rect x={cx+2} y={cy-5} width={3} height={10} rx={0.5} fill="#0693e3" />
        <path
          d={`M${cx-6},${cy} L${cx-3},${cy-3} L${cx+1},${cy-5} L${cx+5},${cy-8}`}
          fill="none" stroke="#34D399" strokeWidth={1.5} strokeLinecap="round"
        />
      </>
    ),

    dollar: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <circle cx={cx} cy={cy} r={9} fill="#41d58c" />
        <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
          fontSize="11" fontWeight="900" fontFamily="Arial" fill="white">$</text>
      </>
    ),

    dashboard: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <rect x={cx-6} y={cy-6} width={5} height={5} rx={1} fill="#af3fac" />
        <rect x={cx+1} y={cy-6} width={5} height={5} rx={1} fill="#cb6dc9" />
        <rect x={cx-6} y={cy+1} width={5} height={5} rx={1} fill="#cb6dc9" />
        <rect x={cx+1} y={cy+1} width={5} height={3} rx={1} fill="#af3fac" />
      </>
    ),

    brain: (
      <>
        <circle cx={cx} cy={cy} r={R} fill="white" filter="url(#icon-shadow)" />
        <circle cx={cx}     cy={cy}     r={5} fill="none" stroke="#7c3aed" strokeWidth={1.5} />
        <circle cx={cx}     cy={cy}     r={2} fill="#7c3aed" />
        <line x1={cx}     y1={cy - 5} x2={cx}   y2={cy - 9} stroke="#7c3aed" strokeWidth={1.5} />
        <line x1={cx+4.3} y1={cy+2.5} x2={cx+7} y2={cy + 4} stroke="#7c3aed" strokeWidth={1.5} />
        <line x1={cx-4.3} y1={cy+2.5} x2={cx-7} y2={cy + 4} stroke="#7c3aed" strokeWidth={1.5} />
      </>
    ),
  };

  return <g>{icons[type] ?? null}</g>;
}
