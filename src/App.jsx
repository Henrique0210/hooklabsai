import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import GeneratorForm from './components/GeneratorForm'
import ResultsPanel from './components/ResultsPanel'
import { useGenerator } from './hooks/useGenerator'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const gen = useGenerator()

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0 lg:ml-[252px]">
        <Topbar onMenuToggle={() => setSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6">
          <GeneratorForm
            product={gen.product}
            setProduct={gen.setProduct}
            audience={gen.audience}
            setAudience={gen.setAudience}
            tone={gen.tone}
            setTone={gen.setTone}
            loading={gen.loading}
            loadingStep={gen.loadingStep}
            canGenerate={gen.canGenerate}
            onGenerate={gen.generate}
          />

          <ResultsPanel
            loading={gen.loading}
            results={gen.results}
            activeTab={gen.activeTab}
            setActiveTab={gen.setActiveTab}
            copiedId={gen.copiedId}
            onCopy={gen.copyText}
            onClear={gen.clearResults}
            totalResults={gen.totalResults}
            avgScore={gen.avgScore}
          />
        </div>
      </main>
    </div>
  )
}
