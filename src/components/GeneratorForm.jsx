import ToneSelector from './ToneSelector'
import { LOADING_STEPS } from '../data/constants'

export default function GeneratorForm({
  product, setProduct,
  audience, setAudience,
  tone, setTone,
  loading,
  loadingStep,
  canGenerate,
  onGenerate,
}) {
  return (
    <div className="glass-bg glass-border rounded-2xl p-5 md:p-7">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/[0.06]">
        <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-accent/15 to-accent-cyan/15 border border-accent/[0.12] flex items-center justify-center text-accent">
          ✦
        </div>
        <div>
          <div className="text-[15px] font-semibold text-slate-100">
            Novo Criativo
          </div>
          <div className="text-[12px] text-ghost mt-0.5">
            Preencha os dados e deixe a IA trabalhar
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-[7px]">
          <label className="text-[12px] font-semibold text-subtle tracking-wide flex gap-1">
            Produto ou Oferta
            <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex: Curso de Tráfego Pago Avançado"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="px-3.5 py-2.5 rounded-[10px] glass-bg border border-white/[0.08] text-slate-200 text-[13.5px] placeholder:text-white/20 focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all"
          />
        </div>

        <div className="flex flex-col gap-[7px]">
          <label className="text-[12px] font-semibold text-subtle tracking-wide">
            Público-Alvo
          </label>
          <input
            type="text"
            placeholder="Ex: Gestores de tráfego iniciantes"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="px-3.5 py-2.5 rounded-[10px] glass-bg border border-white/[0.08] text-slate-200 text-[13.5px] placeholder:text-white/20 focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all"
          />
        </div>
      </div>

      {/* Tone */}
      <ToneSelector value={tone} onChange={setTone} />

      {/* Generate button */}
      <button
        onClick={onGenerate}
        disabled={loading || !canGenerate}
        className={`
          w-full mt-7 py-3.5 px-6 rounded-xl gradient-btn text-black
          text-[14px] font-bold tracking-tight
          flex items-center justify-center gap-2
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]
          active:scale-[0.98]
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        `}
      >
        {loading ? (
          <span className="flex items-center gap-2.5">
            <span className="w-[18px] h-[18px] border-2 border-black/20 border-t-black rounded-full animate-spin-fast" />
            {LOADING_STEPS[loadingStep] || 'Preparando...'}
          </span>
        ) : (
          '✨ Gerar Criativos'
        )}
      </button>

      {/* Progress bar */}
      {loading && (
        <div className="mt-3 h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className="h-full gradient-btn rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((loadingStep + 1) / (LOADING_STEPS.length + 1)) * 100}%` }}
          />
        </div>
      )}
    </div>
  )
}
