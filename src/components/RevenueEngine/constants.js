/**
 * constants.js
 * ------------
 * Single source of truth for all layout dimensions.
 * Change a value here — geometry recalculates everywhere.
 */

export const CX = 220;        // SVG center X
export const CY = 220;        // SVG center Y

export const R_OUTER  = 145;  // outer radius of donut segments
export const R_INNER  = 118;  // inner radius at rest (30px gap from circle)
export const R_ACTIVE = 88;   // inner radius when active (zero gap, flush with circle)
export const R_CIRCLE = 88;   // white center circle radius

export const R_CONN   = 165;  // connector arc radius (20px clearance outside R_OUTER)
export const R_LABEL  = 131.5;// textPath arc radius (midpoint of segment ring)
export const R_ICON   = 93;   // icon badge center (straddles circle/segment boundary)

export const GAP_DEG  = 4.36; // half-gap trimmed from each segment edge (~20px at mid-radius)

export const ARM_BASE  = 65;  // connector arm length at rest
export const ARM_EXTRA = 60;  // additional arm length when segment is active

export const MOBILE_BREAKPOINT = 750; // px
