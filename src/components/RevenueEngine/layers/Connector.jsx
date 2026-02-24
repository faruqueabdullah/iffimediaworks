import { buildConnectorPath } from '../geometry';
import { CX, CY, R_CONN, ARM_BASE, ARM_EXTRA } from '../constants';
import styles from '../RevenueEngine.module.css';

/**
 * Connector
 * ---------
 * Renders one connector: arc → bezier elbow → horizontal arm.
 * Always present in the DOM. Active state extends the arm and fades the label in.
 * Hidden entirely on mobile (caller decides — this component is never rendered mobile).
 */
export function Connector({ seg, isActive }) {
  const armLen = ARM_BASE + (isActive ? ARM_EXTRA : 0);
  const conn   = buildConnectorPath(
    CX, CY, R_CONN,
    seg.conn.fromDeg, seg.conn.toDeg,
    seg.conn.sweep,   seg.conn.armDir,
    armLen
  );

  // Q4 (270–360) and Q1 (0–90) are top segments — labels sit above the arm
  const isTop  = seg.startDeg === 270 || seg.startDeg === 0;
  const labelY = isTop ? conn.labelY - 30 : conn.labelY + 26;
  const descY  = isTop ? conn.labelY - 12  : conn.labelY + 45;
  const state  = isActive ? styles.isActive : styles.isInactive;

  return (
    <g>
      {/* Arc + elbow + arm */}
      <path
        d={conn.path}
        fill="none"
        stroke={seg.color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${styles.connLine} ${state}`}
      />

      {/* Dot at arc origin — scales up when active */}
      <circle
        cx={conn.dotX} cy={conn.dotY} r={4}
        fill="white"
        stroke={seg.color}
        strokeWidth={2}
        className={`${styles.connDot} ${state}`}
        style={{ transformOrigin: `${conn.dotX}px ${conn.dotY}px` }}
      />

      {/* Label — fades in when active */}
      <g className={`${styles.connLabel} ${state}`}>
        <text
          x={conn.labelX} y={labelY}
          textAnchor={conn.anchor}
          fill={seg.color}
          fontSize="16"
          fontWeight="800"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          {seg.label}
        </text>
        <text
          x={conn.labelX} y={descY}
          textAnchor={conn.anchor}
          fill="#94a3b8"
          fontSize="14"
          fontWeight="500"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          {seg.desc}
        </text>
      </g>
    </g>
  );
}
