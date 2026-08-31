/**
 * Hero visual: a restrained engineering schematic — layered planes, signal
 * paths and nodes. No AI clichés, no particles, no decoration for its own sake.
 */
export function SystemDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 420"
      role="img"
      aria-label="Schematic diagram of a layered technology system: signal inputs feeding an architecture layer, an AI reasoning layer and a monitored production layer"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="mbk-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </linearGradient>
        <pattern id="mbk-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="var(--hairline)" strokeWidth="0.6" />
        </pattern>
      </defs>

      <rect x="0.5" y="0.5" width="459" height="419" fill="url(#mbk-grid)" opacity="0.75" />
      <rect x="0.5" y="0.5" width="459" height="419" stroke="var(--hairline)" />

      {/* layer planes */}
      {[
        { y: 70, label: "INPUTS" },
        { y: 170, label: "ARCHITECTURE" },
        { y: 270, label: "AI LAYER" },
      ].map((layer) => (
        <g key={layer.y}>
          <path
            d={`M60 ${layer.y} L230 ${layer.y - 44} L400 ${layer.y} L230 ${layer.y + 44} Z`}
            stroke="var(--foreground)"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="url(#mbk-fade)"
          />
          <text
            x="60"
            y={layer.y - 8}
            fontFamily="var(--font-mono)"
            fontSize="8"
            letterSpacing="2"
            fill="var(--muted-foreground)"
          >
            {layer.label}
          </text>
        </g>
      ))}

      {/* vertical signal spine */}
      <path d="M230 26 V 314" stroke="var(--signal)" strokeWidth="1" strokeDasharray="3 5" opacity="0.7" />

      {/* nodes */}
      {[
        [230, 26],
        [230, 126],
        [230, 226],
        [230, 314],
        [145, 148],
        [315, 148],
        [145, 248],
        [315, 248],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="3.5" fill="var(--background)" stroke="var(--foreground)" strokeWidth="1.2" />
        </g>
      ))}
      <circle cx="230" cy="226" r="9" stroke="var(--signal)" strokeWidth="1" opacity="0.65" />

      {/* lateral relations */}
      <path d="M145 148 H 230 M230 148 H 315" stroke="var(--foreground)" strokeOpacity="0.28" />
      <path d="M145 248 H 230 M230 248 H 315" stroke="var(--foreground)" strokeOpacity="0.28" />
      <path d="M145 148 V 248 M315 148 V 248" stroke="var(--foreground)" strokeOpacity="0.16" />

      {/* production / monitoring baseline */}
      <path d="M60 358 H 400" stroke="var(--foreground)" strokeOpacity="0.45" />
      <path
        d="M60 380 h34 l10 -14 l14 26 l12 -20 l16 8 h44 l10 -18 l14 24 l12 -14 h44 l10 -10 l14 18 l12 -8 h74"
        stroke="var(--signal)"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <text x="60" y="404" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="2" fill="var(--muted-foreground)">
        PRODUCTION BEHAVIOUR — OBSERVED
      </text>
      <text x="60" y="348" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="2" fill="var(--muted-foreground)">
        CONSTRAINT LINE
      </text>
    </svg>
  );
}
