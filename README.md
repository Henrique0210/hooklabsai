# ⚡ HookLabs AI — Dashboard

Dashboard moderno para geração de hooks, headlines e CTAs com IA.  
Stack: **React 18 + Vite + Tailwind CSS**

![HookLabs AI](https://img.shields.io/badge/React-18-blue?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square)

---

## 🚀 Instalação

```bash
# Clone ou extraia o projeto
cd hooklabs-ai

# Instale dependências
npm install

# Inicie em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

---

## 📦 Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`.

---

## ▲ Deploy na Vercel

### Opção 1 — Via CLI

```bash
npm i -g vercel
vercel
```

### Opção 2 — Via GitHub

1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Importe o repositório
4. A Vercel detecta Vite automaticamente — clique **Deploy**

> Não precisa de configuração extra. O `vite.config.js` já está pronto.

---

## 🗂 Estrutura do projeto

```
hooklabs-ai/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── GeneratorForm.jsx    # Formulário principal
│   │   ├── ResultCard.jsx       # Card individual de resultado
│   │   ├── ResultsPanel.jsx     # Painel com tabs e lista de cards
│   │   ├── ScoreRing.jsx        # SVG circular de score
│   │   ├── Sidebar.jsx          # Navegação lateral
│   │   ├── ToneSelector.jsx     # Grid de seleção de tom
│   │   └── Topbar.jsx           # Barra superior
│   ├── data/
│   │   └── constants.js         # Dados mock e configurações
│   ├── hooks/
│   │   └── useGenerator.js      # Lógica de estado do gerador
│   ├── App.jsx                  # Componente raiz
│   ├── index.css                # Tailwind + estilos globais
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Features

- **Sidebar** com navegação, plano ativo e perfil do usuário
- **Formulário** com campos de produto, público-alvo e seletor de tom
- **6 tons de copy**: Persuasivo, Urgente, Emocional, Provocativo, Educativo, Storytelling
- **Geração simulada** com loading progressivo em 3 etapas
- **Tabs de resultado**: Hooks 🎣, Headlines 📰, CTAs 🚀
- **Score Ring SVG** com indicador visual de qualidade (verde/amarelo/vermelho)
- **Copiar com 1 clique** + feedback visual
- **100% responsivo** — mobile-first com sidebar retrátil
- **Dark theme premium** inspirado em Linear/Stripe

---

## 📄 Licença

MIT — use como quiser.
