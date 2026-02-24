import { CX, CY, R_OUTER } from '../constants';
import styles from '../RevenueEngine.module.css';

/**
 * MobileLabel
 * -----------
 * Shown only on small screens (<750px) in place of connector lines.
 *
 * - Acquisition + Pipeline (top segments) → label ABOVE the ring
 * - Revenue + AI Intelligence (bottom segments) → label BELOW the ring
 *
 * Both labels are horizontally centered at CX (true center of ring).
 * 20px gap from the outer edge of the ring.
 */
export function MobileLabel({ seg, isActive }) {
  if (!isActive) return null;

  const isTop  = seg.startDeg === 270 || seg.startDeg === 0;
  const textX  = CX; // always true center

  // 20px gap outside R_OUTER
  const baseY  = isTop ? CY - R_OUTER - 35 : CY + R_OUTER + 35;
  const titleY = isTop ? baseY - 20 : baseY;
  const descY  = isTop ? baseY      : baseY + 20;

  return (
    <g className={`${styles.connLabel} ${styles.isActive}`}>
      <text
        x={textX} y={titleY}
        textAnchor="middle"
        fill={seg.color}
        fontSize="16"
        fontWeight="800"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        {seg.label}
      </text>
      <text
        x={textX} y={descY}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="14"
        fontWeight="500"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        {seg.desc}
      </text>
    </g>
  );
}
