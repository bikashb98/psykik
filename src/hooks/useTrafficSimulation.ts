import { useMemo, useState } from 'react'
import { type ScenarioId } from '../data/trafficDemoData'
import { evaluateNetwork } from '../utils/routeScoring'

export function useTrafficSimulation(initial: ScenarioId = 'heavy') {
  const [scenario, setScenario] = useState<ScenarioId>(initial)
  const [selectedRouteId, setSelectedRouteId] = useState('express')

  const result = useMemo(() => evaluateNetwork(scenario), [scenario])

  const selected =
    result.routes.find((route) => route.id === selectedRouteId) ?? result.routes[0]

  return {
    scenario,
    setScenario,
    selectedRouteId: selected.id,
    setSelectedRouteId,
    edges: result.edges,
    routes: result.routes,
    selected,
    recommended: result.routes[0],
  }
}
