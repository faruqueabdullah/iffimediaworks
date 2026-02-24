import { CX, CY, R_CIRCLE } from '../constants';
import styles from '../RevenueEngine.module.css';

/**
 * CenterPlate
 * -----------
 * The white circle with branding text and play button.
 * Rendered above segments so it cleanly clips the segment inner edges.
 */
export function CenterPlate({ activeSeg }) {
  return (
    <g>
      <circle cx={CX} cy={CY} r={R_CIRCLE} fill="white" filter="url(#plate-shadow)" />
      <circle cx={CX} cy={CY} r={R_CIRCLE} fill="none" stroke="#dde6f0" strokeWidth={1.5} />

      {/* <text x={CX} y={CY - 26} textAnchor="middle"
        fill="#c8d8ea" fontSize="10" fontWeight="800" letterSpacing="3"
        fontFamily="Plus Jakarta Sans, sans-serif">
        WebFX
      </text> */}

      <text x={CX} y={CY - 15} textAnchor="middle"
        fill="#1e293b" fontSize="15" fontWeight="800"
        fontFamily="Plus Jakarta Sans, sans-serif">
        Revenue Engine
      </text>

      {/* Active segment name — colour transitions with segment */}
      <text x={CX} y={CY + 5} textAnchor="middle"
        fill={activeSeg.color} fontSize="13" fontWeight="700"
        fontFamily="Plus Jakarta Sans, sans-serif"
        className={styles.colorTransition}>
        {activeSeg.label}
      </text>

      <text x={CX} y={CY + 19} textAnchor="middle"
        fill="#94a3b8" fontSize="10" fontWeight="500"
        fontFamily="Plus Jakarta Sans, sans-serif">
        15% Higher Lead Growth
      </text>

      {/* Play button */}
      <circle
        cx={CX} cy={CY + 38} r={13}
        fill={activeSeg.color} opacity="0.92"
        className={styles.colorTransition}
      />
      <polygon
        points={`${CX - 4},${CY + 32} ${CX + 7},${CY + 38} ${CX - 4},${CY + 44}`}
        fill="white"
      />
    </g>
  );
}
