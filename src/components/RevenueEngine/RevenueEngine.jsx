import { useState, useEffect } from 'react';
import { SEGMENTS } from './segments';
import { CX, CY, R_OUTER, R_CONN, ARM_BASE, ARM_EXTRA, GAP_DEG, MOBILE_BREAKPOINT } from './constants';
import { useWindowWidth } from './hooks/useWindowWidth';
import { Connector } from './layers/Connector';
import { Segment, SegmentDefs } from './layers/Segment';
import { CenterPlate } from './layers/CenterPlate';
import { IconLayer } from './layers/IconLayer';
import { MobileLabel } from './layers/MobileLabel';

/**
 * RevenueEngine
 * -------------
 * Root component. Owns all state.
 * Passes minimal, explicit props to each layer component.
 *
 * SVG render order (back → front):
 *   Layer 1 — Connectors  : desktop only, behind segments
 *   Layer 2 — Segments    : above connectors
 *   Layer 3 — CenterPlate : clips segment inner edges
 *   Layer 4 — IconLayer   : topmost, straddles circle/segment boundary
 *   Layer 5 — MobileLabels: mobile only, above/below ring
 */
export function RevenueEngine() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused,    setPaused]    = useState(false);
  const windowWidth               = useWindowWidth();
  const isMobile                  = windowWidth < MOBILE_BREAKPOINT;

  // Auto-rotate every 3s; pause while user hovers
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setActiveIdx((i) => (i + 1) % SEGMENTS.length),
      3000
    );
    return () => clearInterval(timer);
  }, [paused]);

  const activeSeg = SEGMENTS[activeIdx];

  /*
   * viewBox strategy:
   *
   * Desktop: symmetric around CX so the ring stays visually centered.
   *   H_REACH = arc radius + full active arm + 20px label gap + ~90px for label text.
   *   Same value on both sides → ring centered even when one arm is extended.
   *
   * Mobile: tight box, space above/below for labels.
   */
  const DESKTOP_H_REACH = R_CONN + ARM_BASE + ARM_EXTRA + 20 + 90;
  const DESKTOP_V_PAD   = 30;
  const desktopViewBox  = [
    CX - DESKTOP_H_REACH,
    CY - R_OUTER - DESKTOP_V_PAD,
    DESKTOP_H_REACH * 2,
    (R_OUTER + DESKTOP_V_PAD) * 2,
  ].join(' ');

  const MOBILE_PAD_H = 60;
  const MOBILE_PAD_V = 65;
  const mobileViewBox = [
    CX - R_OUTER - MOBILE_PAD_H,
    CY - R_OUTER - MOBILE_PAD_V,
    (R_OUTER + MOBILE_PAD_H) * 2,
    (R_OUTER + MOBILE_PAD_V) * 2,
  ].join(' ');

  const viewBox = isMobile ? mobileViewBox : desktopViewBox;

  return (
    <div className="flex w-full p-4">
      

      <div className={`w-full ${isMobile ? 'max-w-xs' : 'max-w-2xl'}`}>
      <svg
        viewBox={viewBox}
        width="100%"
        height="auto"
        className="overflow-visible"
        onMouseLeave={() => setPaused(false)}
      >
        <defs>
          {/* Gradients + textPath arcs — one per segment */}
          {SEGMENTS.map((s) => (
            <SegmentDefs key={s.id} seg={s} />
          ))}

          {/* Shared drop-shadow for icon badges */}
          <filter id="icon-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>

          {/* Soft additive glow for active segment */}
          <filter id="seg-glow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Elevation shadow under center plate */}
          <filter id="plate-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="8" floodOpacity="0.07" />
          </filter>
        </defs>

        {/* Layer 1 — Connectors (desktop only) */}
        {!isMobile && SEGMENTS.map((seg, i) => (
          <Connector key={seg.id} seg={seg} isActive={i === activeIdx} />
        ))}

        {/* Layer 2 — Segments */}
        {SEGMENTS.map((seg, i) => (
          <Segment
            key={seg.id}
            seg={seg}
            isActive={i === activeIdx}
            onEnter={() => { setPaused(true);  setActiveIdx(i); }}
            onLeave={() =>  { setPaused(false); }}
          />
        ))}

        {/* Layer 3 — Center plate */}
        <CenterPlate activeSeg={activeSeg} />

        {/* Layer 4 — Icon badges */}
        <IconLayer seg={activeSeg} />

        {/* Layer 5 — Mobile labels (above/below ring, replaces connectors) */}
        {isMobile && SEGMENTS.map((seg, i) => (
          <MobileLabel key={seg.id} seg={seg} isActive={i === activeIdx} />
        ))}
      </svg>
      </div>
    </div>
  );
}
