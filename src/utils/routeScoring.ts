import { EDGES, ROUTES, type ScenarioId } from '../data/trafficDemoData'

export type CongestionLevel = 'free' | 'moderate' | 'heavy' | 'severe'

export type ScoredEdge = {
  id: string
  from: string
  to: string
  name: string
  distanceKm: number
  speedKmh: number
  minutes: number
  congestionIndex: number
  level: CongestionLevel
  hasIncident: boolean
}

export type ScoredRoute = {
  id: string
  name: string
  edgeIds: string[]
  distanceKm: number
  estimatedMinutes: number
  congestionIndex: number
  hasIncident: boolean
  score: number
  isFastest: boolean
  isShortest: boolean
}

/**
 * Deterministic route cost. Lower is better.
 *
 * timeCost        — estimated minutes (primary)
 * distanceCost    — slight penalty so very long detours are not preferred
 * congestionCost  — extra cost when many segments are slow
 * incidentCost    — discrete penalty if an obstruction is on the path
 */
export const SCORE_WEIGHTS = {
  time: 1,
  distance: 0.35,
  congestion: 18,
  incident: 12,
} as const

export function congestionLevel(index: number): CongestionLevel {
  if (index < 0.28) return 'free'
  if (index < 0.5) return 'moderate'
  if (index < 0.75) return 'heavy'
  return 'severe'
}

export function scoreRoute(input: {
  distanceKm: number
  estimatedMinutes: number
  congestionIndex: number
  hasIncident: boolean
}): number {
  const cost =
    input.estimatedMinutes * SCORE_WEIGHTS.time +
    input.distanceKm * SCORE_WEIGHTS.distance +
    input.congestionIndex * SCORE_WEIGHTS.congestion +
    (input.hasIncident ? SCORE_WEIGHTS.incident : 0)
  return Math.round(cost * 10) / 10
}

export function evaluateNetwork(scenario: ScenarioId): {
  edges: ScoredEdge[]
  routes: ScoredRoute[]
} {
  const edges: ScoredEdge[] = EDGES.map((edge) => {
    const factor = edge.speedFactor[scenario]
    const speedKmh = Math.max(6, edge.freeFlowKmh * factor)
    const minutes = (edge.distanceKm / speedKmh) * 60
    const congestionIndex = 1 - factor
    return {
      id: edge.id,
      from: edge.from,
      to: edge.to,
      name: edge.name,
      distanceKm: edge.distanceKm,
      speedKmh: Math.round(speedKmh),
      minutes: Math.round(minutes * 10) / 10,
      congestionIndex: Math.round(congestionIndex * 100) / 100,
      level: congestionLevel(congestionIndex),
      hasIncident: edge.incidentOn === scenario,
    }
  })

  const byId = new Map(edges.map((edge) => [edge.id, edge]))

  const routes: ScoredRoute[] = ROUTES.map((route) => {
    const segs = route.edgeIds.map((id) => {
      const edge = byId.get(id)
      if (!edge) throw new Error(`Unknown edge ${id}`)
      return edge
    })
    const distanceKm = segs.reduce((sum, s) => sum + s.distanceKm, 0)
    const estimatedMinutes = segs.reduce((sum, s) => sum + s.minutes, 0)
    const congestionIndex =
      segs.reduce((sum, s) => sum + s.congestionIndex, 0) / segs.length
    const hasIncident = segs.some((s) => s.hasIncident)
    return {
      id: route.id,
      name: route.name,
      edgeIds: route.edgeIds,
      distanceKm: Math.round(distanceKm * 10) / 10,
      estimatedMinutes: Math.round(estimatedMinutes),
      congestionIndex: Math.round(congestionIndex * 100) / 100,
      hasIncident,
      score: scoreRoute({
        distanceKm,
        estimatedMinutes,
        congestionIndex,
        hasIncident,
      }),
      isFastest: false,
      isShortest: false,
    }
  })

  const fastest = Math.min(...routes.map((r) => r.estimatedMinutes))
  const shortest = Math.min(...routes.map((r) => r.distanceKm))

  return {
    edges,
    routes: routes
      .map((route) => ({
        ...route,
        isFastest: route.estimatedMinutes === fastest,
        isShortest: route.distanceKm === shortest,
      }))
      .sort((a, b) => a.score - b.score),
  }
}

export const LEVEL_COLOR: Record<CongestionLevel, string> = {
  free: '#4ade80',
  moderate: '#e8d44d',
  heavy: '#f08a3a',
  severe: '#ef5b5b',
}
