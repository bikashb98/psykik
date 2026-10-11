import type { ScoredRoute } from '../../utils/routeScoring'
import { LEVEL_COLOR, congestionLevel } from '../../utils/routeScoring'

export function RouteComparison({
  routes,
  selectedId,
  onSelect,
}: {
  routes: ScoredRoute[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {routes.map((route) => {
        const level = congestionLevel(route.congestionIndex)
        return (
          <button
            key={route.id}
            type="button"
            className="route-option"
            aria-pressed={selectedId === route.id}
            onClick={() => onSelect(route.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <strong style={{ color: 'var(--ink)' }}>{route.name}</strong>
              <span className="mono" style={{ fontSize: 12 }}>
                score {route.score}
              </span>
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              {route.distanceKm} km · ~{route.estimatedMinutes} min estimated
              {route.isFastest ? ' · fastest in this scenario' : ''}
              {route.isShortest && !route.isFastest ? ' · shortest distance' : ''}
              {route.hasIncident ? ' · incident on path' : ''}
            </p>
            <div className="congestion-bar" style={{ marginTop: 8 }} aria-hidden="true">
              <span
                style={{
                  width: `${Math.round(route.congestionIndex * 100)}%`,
                  background: LEVEL_COLOR[level],
                }}
              />
            </div>
          </button>
        )
      })}
    </div>
  )
}
