import { useState, useCallback } from 'react'
import { MOCK_RESULTS, LOADING_STEPS } from '../data/constants'

export function useGenerator() {
  const [product, setProduct] = useState('')
  const [audience, setAudience] = useState('')
  const [tone, setTone] = useState('persuasivo')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [activeTab, setActiveTab] = useState('hooks')
  const [loadingStep, setLoadingStep] = useState(0)
  const [copiedId, setCopiedId] = useState(null)

  const canGenerate = product.trim().length > 0

  const generate = useCallback(() => {
    if (!canGenerate || loading) return
    setLoading(true)
    setResults(null)
    setLoadingStep(0)

    let step = 0
    const interval = setInterval(() => {
      step++
      setLoadingStep(step)
      if (step >= LOADING_STEPS.length) {
        clearInterval(interval)
        setTimeout(() => {
          setLoading(false)
          setResults(MOCK_RESULTS)
          setActiveTab('hooks')
        }, 500)
      }
    }, 800)
  }, [canGenerate, loading])

  const clearResults = useCallback(() => {
    setResults(null)
  }, [])

  const copyText = useCallback((text, id) => {
    navigator.clipboard?.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }, [])

  const totalResults = results
    ? Object.values(results).flat().length
    : 0

  const avgScore = results
    ? Math.round(
        Object.values(results).flat().reduce((a, b) => a + b.score, 0) / totalResults
      )
    : 0

  return {
    product, setProduct,
    audience, setAudience,
    tone, setTone,
    loading,
    results,
    activeTab, setActiveTab,
    loadingStep,
    copiedId,
    canGenerate,
    generate,
    clearResults,
    copyText,
    totalResults,
    avgScore,
  }
}
