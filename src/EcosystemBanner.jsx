import { useState } from 'react'
import IaiLogo from './IaiLogo.jsx'
import { PORTAL_URL, FAMILY_NAME } from './familyRegistry.js'

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

/**
 * EcosystemBanner — "part of the instructionalai.org ecosystem" link.
 * One component, three shapes; per-site visual voice comes in via props,
 * never by forking the file.
 *
 * variant="card"  — logo box + two-line text + arrow (the original template)
 * variant="strip" — single centered sentence above the footer
 * variant="band"  — full-width uppercase bar with a CTA button
 *
 * Common props: siteName, description, accent (hex — used to derive tints),
 * tokens { surface, panel, ink, muted, rule, headingFont, bodyFont, accentFont },
 * className, style. Token values are plain CSS strings, so sites can pass
 * their own custom properties: tokens={{ ink: 'var(--color-ink)' }}.
 */
export default function EcosystemBanner({
  variant = 'card',
  siteName = '',
  description,
  accent = '#EA580C',
  edge = 'bottom',
  tokens = {},
  className = '',
  style,
}) {
  const [hovered, setHovered] = useState(false)
  const text =
    description ||
    `${siteName || 'This site'} is part of a growing suite of free tools built for instructional designers.`

  if (variant === 'strip') {
    return (
      <div
        className={className}
        style={{
          borderTop: `1px solid ${tokens.rule || 'rgba(0,0,0,0.12)'}`,
          padding: '20px 0 4px',
          textAlign: 'center',
          ...style,
        }}
      >
        <p
          style={{
            fontFamily: tokens.headingFont || 'inherit',
            fontSize: '0.82rem',
            fontWeight: 400,
            color: tokens.muted || 'inherit',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          <strong style={{ fontWeight: 600, color: tokens.ink || 'inherit' }}>{siteName}</strong>
          {' '}is part of the{' '}
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: accent, fontWeight: 600, textDecoration: hovered ? 'underline' : 'none' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {FAMILY_NAME}
          </a>
          {' '}ecosystem — open learning resources for instructional designers and educators.
        </p>
      </div>
    )
  }

  if (variant === 'band') {
    return (
      <aside
        className={className}
        style={{
          borderTop: `1.5px solid ${tokens.ink || '#0b0b0e'}`,
          borderBottom: `1.5px solid ${tokens.ink || '#0b0b0e'}`,
          background: tokens.surface || '#ffffff',
          ...style,
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: tokens.headingFont || 'monospace',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: tokens.ink || '#0b0b0e',
            }}
          >
            <span
              aria-hidden="true"
              style={{ display: 'inline-block', width: 10, height: 10, background: accent, marginRight: 10, verticalAlign: 'middle' }}
            />
            Part of {FAMILY_NAME}
          </div>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${FAMILY_NAME} (opens in new tab)`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            style={{
              fontFamily: tokens.headingFont || 'monospace',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: hovered ? (tokens.surface || '#ffffff') : (tokens.ink || '#0b0b0e'),
              background: hovered ? accent : 'transparent',
              border: `1.5px solid ${hovered ? accent : (tokens.ink || '#0b0b0e')}`,
              padding: '8px 16px',
              textDecoration: 'none',
              minHeight: 36,
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'all 150ms',
            }}
          >
            Explore the family ↗
          </a>
        </div>
      </aside>
    )
  }

  // variant === 'card'
  const accentEdge = `3px solid ${hovered ? accent : hexToRgba(accent, 0.35)}`
  return (
    <a
      href={PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${FAMILY_NAME} — the ecosystem portal (opens in new tab)`}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        border: `1px solid ${tokens.rule || 'rgba(0,0,0,0.1)'}`,
        [edge === 'left' ? 'borderLeft' : 'borderBottom']: accentEdge,
        background: hovered ? hexToRgba(accent, 0.04) : (tokens.panel || 'transparent'),
        padding: '1.25rem 1.5rem',
        transition: 'background 0.2s ease, border-color 0.2s ease',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            background: hexToRgba(accent, 0.08),
            border: `1px solid ${hexToRgba(accent, 0.2)}`,
            color: tokens.ink || 'inherit',
          }}
        >
          <IaiLogo size={40} />
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: tokens.headingFont || 'inherit',
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: tokens.ink || 'inherit',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Part of the{' '}
            <span
              style={{
                fontFamily: tokens.accentFont || tokens.headingFont || 'inherit',
                fontSize: '0.8125rem',
                color: accent,
                letterSpacing: '0.03em',
              }}
            >
              {FAMILY_NAME}
            </span>
            {' '}ecosystem
          </p>
          <p
            style={{
              fontFamily: tokens.bodyFont || 'inherit',
              fontSize: '0.8125rem',
              color: tokens.muted || 'inherit',
              margin: '0.25rem 0 0',
              lineHeight: 1.5,
            }}
          >
            {text}
          </p>
        </div>

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            opacity: hovered ? 0.9 : 0.4,
            transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}
