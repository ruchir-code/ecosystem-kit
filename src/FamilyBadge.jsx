import IaiLogo from './IaiLogo.jsx'
import { PORTAL_URL, FAMILY_NAME } from './familyRegistry.js'

/**
 * FamilyBadge — small footer mark linking back to the portal.
 * Inherits text color from the surrounding context unless `color` is set.
 */
export default function FamilyBadge({ size = 36, color, className = '', style }) {
  return (
    <a
      href={PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={`Part of ${FAMILY_NAME}`}
      aria-label={`Visit ${FAMILY_NAME} (opens in new tab)`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.5rem',
        opacity: 0.6,
        transition: 'opacity 0.15s ease',
        color: color || 'inherit',
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.6)}
      onFocus={(e) => (e.currentTarget.style.opacity = 1)}
      onBlur={(e) => (e.currentTarget.style.opacity = 0.6)}
    >
      <IaiLogo size={size} className="text-current" />
    </a>
  )
}
