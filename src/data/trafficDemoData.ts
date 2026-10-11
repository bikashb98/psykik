export const DEMO_LABEL = 'Illustrative demo data'

export const NETWORK = {
  id: 'navapura-corridor',
  name: 'Navapura Corridor',
  cityNote:
    'A fictional Indian urban district used for product demonstration. It is not a live map of any city.',
  origin: 'Airport Link',
  destination: 'Tech Park Gate',
} as const

export type ScenarioId = 'normal' | 'heavy' | 'incident'

export const SCENARIOS: { id: ScenarioId; label: string; description: string }[] = [
  {
    id: 'normal',
    label: 'Normal',
    description: 'Typical midday demand with mixed free-flow and moderate segments.',
  },
  {
    id: 'heavy',
    label: 'Heavy',
    description: 'Peak-hour demand across arterial roads and the station approach.',
  },
  {
    id: 'incident',
    label: 'Incident-affected',
    description: 'A simulated obstruction near Canal Flyover that slows the canal corridor.',
  },
]

export type MapNode = {
  id: string
  name: string
  x: number
  y: number
}

export const NODES: MapNode[] = [
  { id: 'F', name: 'Airport Link', x: 48, y: 268 },
  { id: 'D', name: 'Station Circle', x: 168, y: 214 },
  { id: 'B', name: 'Market Junction', x: 292, y: 158 },
  { id: 'A', name: 'Tech Park Gate', x: 430, y: 72 },
  { id: 'E', name: 'Hospital Road', x: 108, y: 148 },
  { id: 'C', name: 'Canal Flyover', x: 262, y: 86 },
  { id: 'G', name: 'Ring West', x: 70, y: 78 },
  { id: 'H', name: 'Lakeside', x: 188, y: 36 },
]

export type Edge = {
  id: string
  from: string
  to: string
  name: string
  distanceKm: number
  /** Typical free-flow speed used as a baseline, not a live reading. */
  freeFlowKmh: number
  /** Speed multipliers by scenario. Lower means slower traffic. */
  speedFactor: Record<ScenarioId, number>
  incidentOn?: ScenarioId
}

export const EDGES: Edge[] = [
  {
    id: 'F-D',
    from: 'F',
    to: 'D',
    name: 'Airport Approach',
    distanceKm: 3.4,
    freeFlowKmh: 42,
    speedFactor: { normal: 0.86, heavy: 0.48, incident: 0.72 },
  },
  {
    id: 'D-B',
    from: 'D',
    to: 'B',
    name: 'Station Arterial',
    distanceKm: 2.8,
    freeFlowKmh: 36,
    speedFactor: { normal: 0.78, heavy: 0.4, incident: 0.7 },
  },
  {
    id: 'B-A',
    from: 'B',
    to: 'A',
    name: 'Tech Park Link',
    distanceKm: 3.1,
    freeFlowKmh: 40,
    speedFactor: { normal: 0.9, heavy: 0.55, incident: 0.82 },
  },
  {
    id: 'F-E',
    from: 'F',
    to: 'E',
    name: 'Hospital Connector',
    distanceKm: 2.2,
    freeFlowKmh: 32,
    speedFactor: { normal: 0.8, heavy: 0.58, incident: 0.5 },
  },
  {
    id: 'E-C',
    from: 'E',
    to: 'C',
    name: 'Canal Road',
    distanceKm: 3.6,
    freeFlowKmh: 38,
    speedFactor: { normal: 0.84, heavy: 0.62, incident: 0.28 },
    incidentOn: 'incident',
  },
  {
    id: 'C-A',
    from: 'C',
    to: 'A',
    name: 'Flyover Exit',
    distanceKm: 2.4,
    freeFlowKmh: 44,
    speedFactor: { normal: 0.92, heavy: 0.66, incident: 0.45 },
    incidentOn: 'incident',
  },
  {
    id: 'F-G',
    from: 'F',
    to: 'G',
    name: 'Ring West',
    distanceKm: 3.8,
    freeFlowKmh: 48,
    speedFactor: { normal: 0.94, heavy: 0.72, incident: 0.88 },
  },
  {
    id: 'G-H',
    from: 'G',
    to: 'H',
    name: 'Lakeside Ring',
    distanceKm: 2.6,
    freeFlowKmh: 46,
    speedFactor: { normal: 0.95, heavy: 0.78, incident: 0.9 },
  },
  {
    id: 'H-C',
    from: 'H',
    to: 'C',
    name: 'North Canal',
    distanceKm: 2.1,
    freeFlowKmh: 40,
    speedFactor: { normal: 0.88, heavy: 0.7, incident: 0.6 },
  },
]

export type RouteDef = {
  id: string
  name: string
  edgeIds: string[]
}

export const ROUTES: RouteDef[] = [
  { id: 'express', name: 'Station Express', edgeIds: ['F-D', 'D-B', 'B-A'] },
  { id: 'canal', name: 'Canal Road', edgeIds: ['F-E', 'E-C', 'C-A'] },
  { id: 'ring', name: 'Ring Connector', edgeIds: ['F-G', 'G-H', 'H-C', 'C-A'] },
]

export const TREND_SERIES = [
  { hour: '06:00', index: 28 },
  { hour: '07:00', index: 46 },
  { hour: '08:00', index: 71 },
  { hour: '09:00', index: 82 },
  { hour: '10:00', index: 54 },
  { hour: '11:00', index: 41 },
  { hour: '12:00', index: 48 },
  { hour: '13:00', index: 52 },
  { hour: '16:00', index: 58 },
  { hour: '18:00', index: 86 },
  { hour: '20:00', index: 63 },
  { hour: '22:00', index: 34 },
]
