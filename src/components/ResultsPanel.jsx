import { useRef, useEffect } from 'react'
import { TABS } from '../data/constants'
import ResultCard from './ResultCard'

function Skeleton({ className = '' }) {
  return (
    <div
      className={`rounded-md bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] bg-[length:200%_100%] animate-shimmer ${className}`}
    />
  )
}

export default function ResultsPanel({
  loading,
  results,
  activeTab,
  setActiveTab,
  copiedId,
  onCopy,
  onClear,
  totalResults,
  avgScore,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (results && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [results])

  if (!loading && !results) return null

  return (
    <div ref={ref} className="animate-fade-up">
      {/* Header */}
      {results && (
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-100">
              Resultados Gerados
            </h2>
            <p className="text-[12px] text-ghost mt-0.5">
              {totalResults} variações · Score médio: {avgScore}/100
            </p>
          </div>
          <button
            onClick={onClear}
            className="text-[12px] font-medium text-ghost glass-bg glass-border rounded-lg px-3.5 py-1.5 hover:text-white/50 hover:bg-white/[0.06] transition-all"
          >
            Limpar
          </button>
        </div>
      )}

      {/* Tabs */}
      {results && (
        <div className="flex gap-1.5 mt-4 p-1 glass-bg rounded-xl border border-white/[0.05]">
          {Object.entries(TABS).map(([key, meta]) => {
            const active = activeTab === key
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  flex-1 flex items-center justify-center gap-[7px]
                  py-2.5 px-3.5 rounded-[9px] text-[13px] font-medium
                  transition-all duration-200
                  ${
                    active
                      ? 'bg-white/[0.04] text-slate-200 border border-white/[0.08]'
                      : 'text-white/40 border border-transparent hover:text-white/55'
                  }
                `}
              >
                <span>{meta.icon}</span>
                <span className="hidden sm:inline">{meta.label}</span>
                <span
                  className="text-[11px] font-semibold px-[7px] py-[1px] rounded-md"
                  style={{
                    background: active ? meta.color + '20' : 'rgba(255,255,255,0.05)',
                    color: active ? meta.color : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {results[key]?.length}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Skeleton loading */}
      {loading && !results && (
        <div className="flex flex-col gap-3 mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-bg glass-border rounded-[14px] p-5 flex flex-col gap-3 animate-pulse-soft"
              style={{ animationDuration: `${1 + i * 0.2}s` }}
            >
              <Skeleton className="w-3/5 h-3.5" />
              <Skeleton className="w-full h-3" />
              <Skeleton className="w-4/5 h-3" />
            </div>
          ))}
        </div>
      )}

      {/* Cards */}
      {results && (
        <div className="flex flex-col gap-2.5 mt-4">
          {results[activeTab]?.map((item, i) => (
            <ResultCard
              key={`${activeTab}-${i}`}
              item={item}
              index={i}
              tabKey={activeTab}
              tabMeta={TABS[activeTab]}
              copiedId={copiedId}
              onCopy={onCopy}
            />
          ))}
        </div>
      )}
    </div>
  )
}
