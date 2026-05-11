export default function ScoreRing({ score, size = 38 }) {
  const r = (size - 4) / 2
  const c = 2 * Math.PI * r
  const offset = c - (score / 100) * c
  const color = score >= 90 ? '#4ade80' : score >= 80 ? '#facc15' : '#f87171'

  return (
    <svg
      width={size}
      height={size}
      className="shrink-0 -rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="3"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize="10"
        fontWeight="700"
        className="rotate-90 origin-center"
      >
        {score}
      </text>
    </svg>
  )
}
