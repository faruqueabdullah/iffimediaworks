import { polar } from '../geometry';
import { CX, CY, R_ICON } from '../constants';
import { IconBadge } from './IconBadge';

/**
 * IconLayer
 * ---------
 * Renders icon badges for the active segment only.
 * Must be the last layer rendered (topmost in SVG paint order).
 * Icons are centered at R_ICON which straddles the circle/segment boundary.
 */
export function IconLayer({ seg }) {
  return (
    <g>
      {seg.icons.map((ic) => {
        const pos = polar(CX, CY, R_ICON, ic.angleDeg);
        return <IconBadge key={ic.type} type={ic.type} cx={pos.x} cy={pos.y} />;
      })}
    </g>
  );
}
