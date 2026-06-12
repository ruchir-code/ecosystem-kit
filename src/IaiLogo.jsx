/**
 * IaiLogo — instructionalai.org brand mark (6D variant).
 * Dotless "iai" with square orange dots. Canonical SVG implementation.
 */
export default function IaiLogo({ size = 60, dotColor = '#EA580C', className = '', style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 160"
      width={size}
      height={size * (160 / 400)}
      className={className}
      style={style}
      aria-label="instructionalai.org"
      role="img"
    >
      <text
        x="200" y="130"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontWeight="700"
        fontSize="140"
        letterSpacing="-8"
      >ıaı</text>
      <rect x="109" y="14" width="26" height="26" rx="4" fill={dotColor} />
      <rect x="267" y="14" width="26" height="26" rx="4" fill={dotColor} />
    </svg>
  )
}
