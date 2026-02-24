/**
 * segments.js
 * -----------
 * Pure configuration. No geometry. No computed values.
 * To add a segment: append one object and update the angles.
 */

export const SEGMENTS = [
  {
    id:       'acquisition',
    label:    'Acquisition',
    color:    '#0693e3',
    gradFrom: '#38aff5',
    gradTo:   '#0578c5',
    desc:     'Drive qualified traffic and top-of-funnel leads',
    startDeg: 270,
    endDeg:   360,
    // Connector: dot at midpoint (315°), arc CCW to 280°, arm exits left
    conn: { fromDeg: 315, toDeg: 280, sweep: 0, armDir: -1 },
    icons: [
      { angleDeg: 302, type: 'google'    },
      { angleDeg: 328, type: 'googleads' },
    ],
  },
  {
    id:       'pipeline',
    label:    'Pipeline',
    color:    '#41d58c',
    gradFrom: '#6ee8a8',
    gradTo:   '#28b870',
    desc:     'Nurture prospects through your revenue funnel',
    startDeg: 0,
    endDeg:   90,
    // Connector: dot at 45°, arc CW to 80°, arm exits right
    conn: { fromDeg: 45, toDeg: 80, sweep: 1, armDir: 1 },
    icons: [
      { angleDeg: 32, type: 'hubspot'    },
      { angleDeg: 58, type: 'salesforce' },
    ],
  },
  {
    id:       'revenue',
    label:    'Revenue',
    color:    '#8ed1fc',
    gradFrom: '#b3e0fd',
    gradTo:   '#5db8f9',
    desc:     'Convert pipeline into measurable business growth',
    startDeg: 90,
    endDeg:   180,
    // Connector: dot at 135°, arc CCW to 100°, arm exits right
    conn: { fromDeg: 135, toDeg: 100, sweep: 0, armDir: 1 },
    icons: [
      { angleDeg: 122, type: 'chart'  },
      { angleDeg: 148, type: 'dollar' },
    ],
  },
  {
    id:       'ai',
    label:    'AI Intelligence',
    color:    '#af3fac',
    gradFrom: '#cb6dc9',
    gradTo:   '#8f2a8d',
    desc:     'Optimize decisions with machine-learning insights',
    startDeg: 180,
    endDeg:   270,
    // Connector: dot at 225°, arc CW to 260°, arm exits left
    conn: { fromDeg: 225, toDeg: 260, sweep: 1, armDir: -1 },
    icons: [
      { angleDeg: 212, type: 'dashboard' },
      { angleDeg: 238, type: 'brain'     },
    ],
  },
];
