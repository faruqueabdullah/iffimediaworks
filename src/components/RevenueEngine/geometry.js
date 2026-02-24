/**
 * geometry.js
 * -----------
 * All SVG coordinate math lives here.
 * No other file does any trig or builds path strings.
 */

const toRad = (deg) => (deg * Math.PI) / 180;

/**
 * polar(cx, cy, r, deg) → { x, y }
 *
 * Converts polar to SVG Cartesian.
 * Convention: 0° = 12 o'clock, increases clockwise.
 */
export const polar = (cx, cy, r, deg) => ({
  x: cx + r * Math.cos(toRad(deg - 90)),
  y: cy + r * Math.sin(toRad(deg - 90)),
});

/**
 * buildSegmentPath → SVG path string
 *
 * Traces a donut segment:
 *   outer arc CW → line inward → inner arc CCW → close
 *
 * gapDeg trims both ends to create the gap between adjacent segments.
 */
export const buildSegmentPath = (cx, cy, rOuter, rInner, startDeg, endDeg, gapDeg) => {
  const s     = startDeg + gapDeg;
  const e     = endDeg   - gapDeg;
  const large = (e - s + 360) % 360 > 180 ? 1 : 0;

  const o1 = polar(cx, cy, rOuter, s);
  const o2 = polar(cx, cy, rOuter, e);
  const i1 = polar(cx, cy, rInner, s);
  const i2 = polar(cx, cy, rInner, e);

  return [
    `M ${o1.x},${o1.y}`,
    `A ${rOuter},${rOuter} 0 ${large},1 ${o2.x},${o2.y}`,
    `L ${i2.x},${i2.y}`,
    `A ${rInner},${rInner} 0 ${large},0 ${i1.x},${i1.y}`,
    'Z',
  ].join(' ');
};

/**
 * buildConnectorPath → { path, dotX, dotY, labelX, labelY, anchor }
 *
 * Arc at rConn (fromDeg → toDeg) → smooth bezier elbow → horizontal arm.
 *
 * Elbow: arc stops BEND px before corner, Q bezier uses corner as control
 * point, arm resumes BEND px after — produces a smooth radiused turn.
 */
export const buildConnectorPath = (
  cx, cy, rConn, fromDeg, toDeg, sweep, armDir, armLength
) => {
  const BEND   = 10;

  const dot    = polar(cx, cy, rConn, fromDeg);
  const corner = polar(cx, cy, rConn, toDeg);

  const dir  = sweep === 1 ? 1 : -1;
  const tanX = Math.cos(toRad(toDeg));
  const tanY = Math.sin(toRad(toDeg));

  const pre  = { x: corner.x - dir * tanX * BEND, y: corner.y - dir * tanY * BEND };
  const post = { x: corner.x + armDir * BEND,      y: corner.y };
  const tip  = { x: corner.x + armDir * armLength,  y: corner.y };

  // Label sits 20 px from the curved part (corner + BEND = where arc ends, + 20px gap)
  const textX = corner.x + armDir * (BEND + 20);

  return {
    dotX:   dot.x,
    dotY:   dot.y,
    labelX: textX,
    labelY: tip.y,
    anchor: armDir > 0 ? 'start' : 'end',
    path: [
      `M ${dot.x},${dot.y}`,
      `A ${rConn},${rConn} 0 0,${sweep} ${pre.x},${pre.y}`,
      `Q ${corner.x},${corner.y} ${post.x},${post.y}`,
      `L ${tip.x},${tip.y}`,
    ].join(' '),
  };
};

/**
 * buildLabelArc → SVG path string (used as <textPath> target)
 *
 * Top segments: CW arc — text reads L→R naturally.
 * Bottom segments: CCW arc — prevents upside-down text.
 */
export const buildLabelArc = (cx, cy, r, startDeg, endDeg, gapDeg) => {
  const s        = startDeg + gapDeg + 5;
  const e        = endDeg   - gapDeg - 5;
  const isBottom = startDeg >= 90 && endDeg <= 270;

  if (!isBottom) {
    const p1 = polar(cx, cy, r, s);
    const p2 = polar(cx, cy, r, e);
    return `M ${p1.x},${p1.y} A ${r},${r} 0 0,1 ${p2.x},${p2.y}`;
  } else {
    const p1 = polar(cx, cy, r, e);
    const p2 = polar(cx, cy, r, s);
    return `M ${p1.x},${p1.y} A ${r},${r} 0 0,0 ${p2.x},${p2.y}`;
  }
};
