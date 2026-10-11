import { DEMO_LABEL, NETWORK, SCENARIOS } from '../../data/trafficDemoData'
import { useTrafficSimulation } from '../../hooks/useTrafficSimulation'
import { Badge } from '../ui/Badge'
import { RouteComparison } from './RouteComparison'
import { TrafficMap } from './TrafficMap'
import { TrafficScenarioControls } from './TrafficScenarioControls'
import { TrendChart } from './TrendChart'

export function TrafficDashboard({ interactive = true }: { interactive?: boolean }) {
  const sim = useTrafficSimulation('heavy')
  const scenarioMeta = SCENARIOS.find((item) => item.id === sim.scenario)

  return (
    <section className="dashboard" aria-label="Traffic intelligence dashboard mockup">
      <div className="dashboard-top">
        <div>
          <p className="kicker">{NETWORK.name}</p>
          <p style={{ color: 'var(--ink)', fontWeight: 700 }}>
            {NETWORK.origin} → {NETWORK.destination}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Badge tone="sim">{DEMO_LABEL}</Badge>
          <Badge tone="pred">Predictions are estimates</Badge>
          <Badge tone="live">No live feed connected</Badge>
        </div>
      </div>

      {interactive ? (
        <>
          <TrafficScenarioControls value={sim.scenario} onChange={sim.setScenario} />
          <p className="muted" style={{ fontSize: 13 }}>
            Simulation: {scenarioMeta?.description} This is not a navigation service
            and does not use your location.
          </p>
        </>
      ) : (
        <p className="muted" style={{ fontSize: 13 }}>
          Sample peak-hour view. Switch scenarios in the interactive demo below.
        </p>
      )}

      <div className="panel-grid">
        <TrafficMap edges={sim.edges} selectedEdgeIds={sim.selected.edgeIds} />
        <div className="card" style={{ margin: 0, padding: 14 }}>
          <p className="kicker">Route comparison</p>
          <RouteComparison
            routes={sim.routes}
            selectedId={sim.selectedRouteId}
            onSelect={sim.setSelectedRouteId}
          />
        </div>
      </div>

      <div className="panel-grid">
        <div className="card" style={{ margin: 0, padding: 14 }}>
          <p className="kicker">Selected route</p>
          <div className="stat-row" style={{ marginTop: 10 }}>
            <div className="mini-stat">
              <span className="muted">Est. time</span>
              <b>~{sim.selected.estimatedMinutes} min</b>
            </div>
            <div className="mini-stat">
              <span className="muted">Distance</span>
              <b>{sim.selected.distanceKm} km</b>
            </div>
            <div className="mini-stat">
              <span className="muted">Recommended</span>
              <b>{sim.recommended.name}</b>
            </div>
          </div>
        </div>
        <div className="card" style={{ margin: 0, padding: 14 }}>
          <p className="kicker">Illustrative daily trend</p>
          <TrendChart />
        </div>
      </div>

      <div className="legend">
        <span>
          <i className="swatch" style={{ background: '#4ade80' }} /> Free-flow
        </span>
        <span>
          <i className="swatch" style={{ background: '#e8d44d' }} /> Moderate
        </span>
        <span>
          <i className="swatch" style={{ background: '#f08a3a' }} /> Heavy
        </span>
        <span>
          <i className="swatch" style={{ background: '#ef5b5b' }} /> Severe
        </span>
      </div>
    </section>
  )
}
