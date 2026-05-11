import ScoreRing from './ScoreRing'

export default function ResultCard({
  item,
  index,
  tabKey,
  tabMeta,
  copiedId,
  onCopy,
}) {
  const id = `${tabKey}-${index}`
  const isCopied = copiedId === id

  return (
    <div
      className={`
        glass-bg rounded-[14px] p-4 md:p-5
        flex flex-col gap-3 transition-all duration-200
        animate-scale-in
        ${isCopied ? 'border border-accent/40' : 'glass-border glass-border-hover'}
      `}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-semibold px-2.5 py-[3px] rounded-md tracking-wide"
          style={{
            background: tabMeta.color + '15',
            color: tabMeta.color,
          }}
        >
          {tabMeta.icon} {tabMeta.label} #{index + 1}
        </span>
        <ScoreRing score={item.score} />
      </div>

      {/* Text */}
      <p className="text-[14.5px] leading-relaxed text-slate-200">
        {item.text}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-1.5 pt-1">
        <button
          onClick={() => onCopy(item.text, id)}
          className={`
            text-[12px] font-semibold px-3.5 py-[5px] rounded-lg
            transition-all duration-150
            ${
              isCopied
                ? 'bg-accent/20 text-accent border border-accent/30'
                : 'bg-accent/[0.08] text-accent border border-accent/[0.15] hover:bg-accent/[0.12]'
            }
          `}
        >
          {isCopied ? '✓ Copiado!' : 'Copiar'}
        </button>
        <button className="w-[30px] h-[30px] flex items-center justify-center rounded-lg glass-bg glass-border hover:bg-white/[0.06] transition-all text-[12px]">
          ⭐
        </button>
        <button className="w-[30px] h-[30px] flex items-center justify-center rounded-lg glass-bg glass-border hover:bg-white/[0.06] transition-all text-[12px]">
          ✏️
        </button>
      </div>
    </div>
  )
}
