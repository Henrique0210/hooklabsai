import { TONES } from '../data/constants'

export default function ToneSelector({ value, onChange }) {
  return (
    <div className="mt-6">
      <label className="text-[12px] font-semibold text-subtle tracking-wide">
        Tom da Copy
      </label>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-2.5">
        {TONES.map((t) => {
          const active = value === t.id
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`
                flex flex-col items-start gap-1 p-3 rounded-xl text-left
                transition-all duration-200 cursor-pointer
                ${
                  active
                    ? 'accent-ring accent-glow'
                    : 'glass-bg glass-border hover:bg-white/[0.04]'
                }
              `}
            >
              <span className="text-lg">{t.icon}</span>
              <span
                className={`text-[12.5px] font-semibold ${
                  active ? 'text-slate-200' : 'text-white/50'
                }`}
              >
                {t.label}
              </span>
              <span className="text-[10.5px] text-white/30 leading-snug">
                {t.desc}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
