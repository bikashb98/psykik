import { NODES } from '../../data/trafficDemoData'
import { LEVEL_COLOR, type ScoredEdge } from '../../utils/routeScoring'

export function TrafficMap({
  edges,
  selectedEdgeIds,
}: {
  edges: ScoredEdge[]
  selectedEdgeIds: string[]
}) {
  const nodeById = new Map(NODES.map((node) => [node.id, node]))

  return (
    <div className="map-frame">
      <svg className="map-svg" viewBox="0 0 480 310" role="img" aria-label="Stylized Navapura road network">
        <title>Stylized fictional road network with colour-coded congestion</title>
        {edges.map((edge) => {
          const from = nodeById.get(edge.from)
          const to = nodeById.get(edge.to)
          if (!from || !to) return null
          const selected = selectedEdgeIds.includes(edge.id)
          return (
            <line
              key={edge.id}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={LEVEL_COLOR[edge.level]}
              strokeWidth={selected ? 7 : 4}
              strokeLinecap="round"
              opacity={selected ? 1 : 0.72}
              className={selected ? 'route-flow' : undefined}
            />
          )
        })}
        {NODES.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r={6} fill="#071018" stroke="#b8ff3c" strokeWidth="1.6" />
            <text
              x={node.x + 8}
              y={node.y - 8}
              fill="#d5deea"
              fontSize="10"
              fontFamily="Manrope, sans-serif"
            >
              {node.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
