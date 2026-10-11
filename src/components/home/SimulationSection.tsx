import { SCORE_WEIGHTS } from '../../utils/routeScoring'
import { TrafficDashboard } from '../dashboard/TrafficDashboard'
import { SectionHeading } from '../ui/SectionHeading'

export function SimulationSection() {
  return (
    <section className="section" id="simulation">
      <div className="container-wide">
        <SectionHeading
          kicker="Interactive simulation"
          title="Compare routes on a fictional Indian corridor."
          description="Switch between normal, heavy, and incident-affected demand. Estimated times come from a documented scoring function on mock speeds — not live GPS or your location."
        />
        <TrafficDashboard interactive />
        <p className="muted" style={{ marginTop: 14, fontSize: 13 }}>
          Route cost = {SCORE_WEIGHTS.time}× minutes + {SCORE_WEIGHTS.distance}× km +{' '}
          {SCORE_WEIGHTS.congestion}× congestion index + {SCORE_WEIGHTS.incident} if an
          incident is on the path. Lower scores rank higher. A shorter route is not
          automatically selected.
        </p>
      </div>
    </section>
  )
}
