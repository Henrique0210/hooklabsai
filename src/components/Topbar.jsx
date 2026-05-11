export default function Topbar({ onMenuToggle }) {
  return (
    <header className="px-5 md:px-6 py-4 border-b border-white/[0.06] flex items-center gap-4 shrink-0 bg-base-900/80 backdrop-blur-xl sticky top-0 z-30">
      {/* Hamburger - mobile only */}
      <button
        onClick={onMenuToggle}
        className="flex flex-col gap-[5px] lg:hidden p-1"
        aria-label="Menu"
      >
        <span className="block w-[18px] h-[2px] bg-slate-400 rounded-sm" />
        <span className="block w-[14px] h-[2px] bg-slate-400 rounded-sm" />
        <span className="block w-[18px] h-[2px] bg-slate-400 rounded-sm" />
      </button>

      {/* Title */}
      <div>
        <h1 className="text-[17px] font-bold text-slate-100 tracking-tight">
          Gerador de Criativos
        </h1>
        <p className="text-[12px] text-ghost mt-0.5">
          Gere hooks, headlines e CTAs com IA
        </p>
      </div>

      <div className="flex-1" />

      {/* Status pill */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-[5px] rounded-full bg-accent/[0.06] border border-accent/[0.12]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-[12px] text-white/50">IA Online</span>
      </div>
    </header>
  )
}
