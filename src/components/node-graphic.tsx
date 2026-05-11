type Sat = { x: number; y: number; r: number };

function ring({
  count,
  radius,
  baseSize,
  startAngle = 0,
}: {
  count: number;
  radius: number;
  baseSize: number;
  startAngle?: number;
}): Sat[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = startAngle + (i * 2 * Math.PI) / count;
    return {
      x: 240 + radius * Math.cos(angle),
      y: 240 + radius * Math.sin(angle),
      r: baseSize,
    };
  });
}

const stars: { x: number; y: number; r: number; delay: number; dur: number }[] =
  [
    { x: 60, y: 90, r: 0.9, delay: 0, dur: 4.2 },
    { x: 420, y: 70, r: 1.1, delay: 1.2, dur: 5.1 },
    { x: 460, y: 200, r: 0.7, delay: 2.5, dur: 3.8 },
    { x: 30, y: 280, r: 1, delay: 0.8, dur: 4.6 },
    { x: 440, y: 410, r: 0.9, delay: 3, dur: 5.5 },
    { x: 90, y: 440, r: 1.2, delay: 1.7, dur: 4 },
    { x: 380, y: 460, r: 0.8, delay: 2.2, dur: 4.8 },
    { x: 200, y: 30, r: 0.9, delay: 0.3, dur: 5 },
    { x: 280, y: 470, r: 1, delay: 2.8, dur: 4.3 },
    { x: 25, y: 180, r: 0.6, delay: 1, dur: 3.5 },
    { x: 470, y: 320, r: 1, delay: 3.4, dur: 5.2 },
    { x: 130, y: 50, r: 0.8, delay: 0.6, dur: 4.1 },
  ];

export function NodeGraphic({ className = "" }: { className?: string }) {
  const inner = ring({ count: 2, radius: 80, baseSize: 3.5 });
  const middle = ring({ count: 3, radius: 140, baseSize: 4.5 });
  const outer = ring({ count: 5, radius: 200, baseSize: 5.5, startAngle: Math.PI / 5 });
  const drift = ring({ count: 7, radius: 168, baseSize: 2.5, startAngle: Math.PI / 6 });

  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="p-orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="20%" stopColor="#a7f3eb" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#0d8b85" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0a6d68" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="p-orb-core" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#e0fbf7" />
          <stop offset="35%" stopColor="#3bbab2" />
          <stop offset="100%" stopColor="#073d3a" />
        </radialGradient>
        <radialGradient id="p-sat-teal" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#22d3c4" />
          <stop offset="100%" stopColor="#0a6d68" />
        </radialGradient>
        <radialGradient id="p-sat-cyan" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#0891b2" />
        </radialGradient>
        <radialGradient id="p-sat-amber" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
        <radialGradient id="p-haze-1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3c4" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#0d8b85" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0d8b85" stopOpacity="0" />
        </radialGradient>
        <filter id="p-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="p-glow-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="240" cy="240" r="240" fill="url(#p-haze-1)" />

      {stars.map((s, i) => (
        <circle
          key={`star-${i}`}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#0d8b85"
          opacity="0.5"
          style={{
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <circle cx="240" cy="240" r="200" stroke="#0d8b85" strokeOpacity="0.08" strokeWidth="1" fill="none" />
      <circle cx="240" cy="240" r="140" stroke="#0d8b85" strokeOpacity="0.12" strokeWidth="1" fill="none" strokeDasharray="2 5" />
      <circle cx="240" cy="240" r="80" stroke="#0d8b85" strokeOpacity="0.16" strokeWidth="1" fill="none" />

      <g style={{ transformOrigin: "240px 240px", animation: "orbit-cw 42s linear infinite" }}>
        {outer.map((s, i) => {
          const fill = i % 5 === 2 ? "url(#p-sat-amber)" : i % 2 === 0 ? "url(#p-sat-cyan)" : "url(#p-sat-teal)";
          return (
            <g key={`o-${i}`}>
              <line
                x1="240"
                y1="240"
                x2={s.x}
                y2={s.y}
                stroke="#22d3c4"
                strokeOpacity="0.16"
                strokeWidth="1"
              />
              <circle cx={s.x} cy={s.y} r={s.r + 8} fill="#22d3c4" fillOpacity="0.1" />
              <circle cx={s.x} cy={s.y} r={s.r + 2} fill={fill} filter="url(#p-glow)" />
            </g>
          );
        })}
      </g>

      <g style={{ transformOrigin: "240px 240px", animation: "orbit-ccw 28s linear infinite" }}>
        {drift.map((s, i) => (
          <circle
            key={`d-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="#22d3c4"
            fillOpacity="0.85"
            filter="url(#p-glow)"
          />
        ))}
      </g>

      <g style={{ transformOrigin: "240px 240px", animation: "orbit-cw 22s linear infinite" }}>
        {middle.map((s, i) => (
          <g key={`m-${i}`}>
            <line x1="240" y1="240" x2={s.x} y2={s.y} stroke="#22d3c4" strokeOpacity="0.22" strokeWidth="1" />
            <circle cx={s.x} cy={s.y} r={s.r + 6} fill="#22d3c4" fillOpacity="0.14" />
            <circle cx={s.x} cy={s.y} r={s.r} fill="url(#p-sat-teal)" filter="url(#p-glow)" />
          </g>
        ))}
      </g>

      <g style={{ transformOrigin: "240px 240px", animation: "orbit-ccw 14s linear infinite" }}>
        {inner.map((s, i) => (
          <g key={`i-${i}`}>
            <line x1="240" y1="240" x2={s.x} y2={s.y} stroke="#22d3c4" strokeOpacity="0.32" strokeWidth="1.2" />
            <circle cx={s.x} cy={s.y} r={s.r + 5} fill="#22d3c4" fillOpacity="0.2" />
            <circle cx={s.x} cy={s.y} r={s.r} fill="url(#p-sat-cyan)" filter="url(#p-glow)" />
          </g>
        ))}
      </g>

      <g style={{ animation: "pulse-orb 4s ease-in-out infinite" }}>
        <circle cx="240" cy="240" r="36" fill="url(#p-orb-glow)" filter="url(#p-glow-strong)" />
        <circle cx="240" cy="240" r="12" fill="url(#p-orb-core)" />
        <circle cx="240" cy="240" r="18" stroke="#22d3c4" strokeOpacity="0.5" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}
