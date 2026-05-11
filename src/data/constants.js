export const TONES = [
  { id: 'persuasivo', label: 'Persuasivo', icon: '🎯', desc: 'Direto e convincente' },
  { id: 'urgente', label: 'Urgente', icon: '⚡', desc: 'Escassez e FOMO' },
  { id: 'emocional', label: 'Emocional', icon: '💜', desc: 'Conexão e empatia' },
  { id: 'provocativo', label: 'Provocativo', icon: '🔥', desc: 'Desafia o status quo' },
  { id: 'educativo', label: 'Educativo', icon: '📚', desc: 'Autoridade e valor' },
  { id: 'storytelling', label: 'Storytelling', icon: '✨', desc: 'Narrativa envolvente' },
]

export const NAV_ITEMS = [
  { id: 'gerador', label: 'Gerador', icon: '⚡', active: true },
  { id: 'projetos', label: 'Projetos', icon: '📁', count: 12 },
  { id: 'historico', label: 'Histórico', icon: '🕐', count: 48 },
  { id: 'templates', label: 'Templates', icon: '🎨' },
  { id: 'favoritos', label: 'Favoritos', icon: '⭐', count: 7 },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
]

export const TABS = {
  hooks: { label: 'Hooks', icon: '🎣', color: '#4ade80', tw: 'text-green-400 bg-green-400/10' },
  headlines: { label: 'Headlines', icon: '📰', color: '#facc15', tw: 'text-yellow-400 bg-yellow-400/10' },
  ctas: { label: 'CTAs', icon: '🚀', color: '#818cf8', tw: 'text-indigo-400 bg-indigo-400/10' },
}

export const LOADING_STEPS = [
  'Analisando produto...',
  'Gerando hooks...',
  'Refinando copies...',
]

export const MOCK_RESULTS = {
  hooks: [
    { text: 'Você gasta R$500/dia em ads e ainda não sabe por que não escala?', score: 94 },
    { text: '90% dos gestores de tráfego cometem esse erro todo santo dia', score: 91 },
    { text: 'Eu quebrei 3 vezes antes de descobrir esse método de escalar campanhas', score: 87 },
    { text: 'Se sua copy não converte, o problema não é o público — é o hook', score: 89 },
  ],
  headlines: [
    { text: 'O método que levou gestores de R$10k para R$100k/mês em faturamento de clientes', score: 92 },
    { text: 'Como criar campanhas que escalam sem queimar verba — mesmo começando do zero', score: 88 },
    { text: 'A estratégia de copy que os top affiliates usam e ninguém te conta', score: 85 },
  ],
  ctas: [
    { text: 'Quero escalar minha operação agora →', score: 96 },
    { text: 'Começar meu teste grátis de 7 dias', score: 90 },
    { text: 'Ver como funciona em 2 minutos', score: 87 },
    { text: 'Garantir minha vaga antes que feche', score: 93 },
  ],
}
