import { NAV_ITEMS } from '../data/constants'

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-50 w-[252px] bg-base-850
          border-r border-white/[0.06] flex flex-col
          transition-transform duration-300 ease-out
          lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 pt-5 pb-5 border-b border-white/[0.06]">
          <div className="w-[34px] h-[34px] rounded-[10px] gradient-btn flex items-center justify-center text-base shrink-0">
            ⚡
          </div>
          <div>
            <div className="text-[15px] font-bold text-slate-100 tracking-tight">
              HookLabs
            </div>
            <div className="text-[9px] font-bold tracking-widest gradient-text">
              AI
            </div>
          </div>
        </div>

        {/* Section label */}
        <div className="px-5 pt-4 pb-2">
          <span className="text-[10px] font-semibold tracking-[0.1em] text-white/25 uppercase">
            Workspace
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 flex flex-col gap-0.5 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={onClose}
              className={`
                w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                text-[13px] font-medium transition-all duration-150
                ${
                  item.active
                    ? 'bg-accent/[0.08] text-accent'
                    : 'text-white/40 hover:bg-white/[0.03] hover:text-white/60'
                }
              `}
            >
              <span className="w-[22px] text-center text-[15px]">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <span className="text-[10px] font-semibold bg-white/[0.06] text-white/30 px-[7px] py-[2px] rounded-full">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/[0.06] flex flex-col gap-2.5">
          {/* Plan badge */}
          <div className="px-3 py-2.5 rounded-[10px] glass-bg glass-border flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[12px] font-semibold text-slate-200">
                Plano Pro
              </span>
            </div>
            <span className="text-[11px] text-ghost">
              847 gerações restantes
            </span>
          </div>

          {/* User */}
          <div className="flex items-center gap-2.5 px-1.5 py-1.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center text-[11px] font-bold shrink-0">
              RL
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-slate-200 truncate">
                Rafael Lima
              </div>
              <div className="text-[11px] text-ghost truncate">
                rafael@agencia.com
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
