import { buildSegmentPath } from '../geometry';
import { CX, CY, R_OUTER, R_INNER, R_ACTIVE, R_LABEL, GAP_DEG } from '../constants';
import { buildLabelArc } from '../geometry';
import styles from '../RevenueEngine.module.css';

/**
 * Segment
 * -------
 * Donut segment shape + curved label rendered along a textPath arc.
 * Active state: inner radius expands to R_ACTIVE (flush with circle, zero gap).
 */
export function Segment({ seg, isActive, onEnter, onLeave }) {
  const rInner  = isActive ? R_ACTIVE : R_INNER;
  const segPath = buildSegmentPath(CX, CY, R_OUTER, rInner, seg.startDeg, seg.endDeg, GAP_DEG);
  const labelId = `lp-${seg.id}`;
  const state   = isActive ? styles.isActive : styles.isInactive;

  return (
    <g>
      <path
        d={segPath}
        fill={`url(#grad-${seg.id})`}
        stroke={`url(#grad-${seg.id})`}
        strokeWidth={isActive ? 8 : 6}
        strokeLinejoin="round"
        strokeLinecap="round"
        filter={isActive ? 'url(#seg-glow)' : undefined}
        className={`${styles.segPath} ${state}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      />

      {/* Curved label follows the arc defined in <defs> */}
      <text
        fontSize="12"
        fontWeight="800"
        fill="white"
        letterSpacing="1.5"
        fontFamily="Plus Jakarta Sans, sans-serif"
        style={{ pointerEvents: 'none' }}
      >
        <textPath href={`#${labelId}`} startOffset="50%" textAnchor="middle">
          {seg.label.toUpperCase()}
        </textPath>
      </text>
    </g>
  );
}

/**
 * SegmentDefs
 * -----------
 * Gradient + textPath arc defs for one segment.
 * Must be rendered inside SVG <defs>.
 */
export function SegmentDefs({ seg }) {
  const labelArc = buildLabelArc(CX, CY, R_LABEL, seg.startDeg, seg.endDeg, GAP_DEG);
  return (
    <>
      <linearGradient id={`grad-${seg.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor={seg.gradFrom} />
        <stop offset="100%" stopColor={seg.gradTo}   />
      </linearGradient>
      <path id={`lp-${seg.id}`} d={labelArc} fill="none" />
    </>
  );
}
