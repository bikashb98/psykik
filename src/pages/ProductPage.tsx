import { ARCHITECTURE_STEPS } from '../data/productFeatures'
import { SCORE_WEIGHTS } from '../utils/routeScoring'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { CtaSection } from '../components/home/CtaSection'

const BLOCKS = [
  {
    id: 'overview',
    title: 'Platform overview',
    body: 'Psykik is proposed as an AI-assisted traffic intelligence layer: it ingests authorized data, represents roads as a network, estimates congestion, scores alternative routes, and presents the result in dashboards for commuters, fleets, and cities.',
  },
  {
    id: 'ingestion',
    title: 'Data ingestion and validation',
    body: 'Production systems would accept permitted speed samples, incident reports, scheduled roadworks, and contextual feeds. Validation would reject implausible speeds, align timestamps, and normalise road identifiers before features are built. This website does not connect to those feeds.',
  },
  {
    id: 'network',
    title: 'Road-network representation and features',
    body: 'Roads are modelled as a graph: junctions as nodes, segments as edges with length, typical free-flow speed, and time-varying congestion. Feature engineering can include time of day, day of week, historical baselines, and incident flags.',
  },
  {
    id: 'forecasting',
    title: 'Congestion forecasting',
    body: 'Near-term estimates can use time-series methods and, when labelled data exists, supervised models such as gradient boosting. Anomaly detection compares current or forecast values with a historical baseline. Outputs are estimates, not guarantees, and accuracy depends on freshness, coverage, and local conditions.',
  },
  {
    id: 'routing',
    title: 'Route scoring and recommendation',
    body: `Candidate paths are scored with a weighted cost. In the on-site demo, cost = ${SCORE_WEIGHTS.time}× minutes + ${SCORE_WEIGHTS.distance}× km + ${SCORE_WEIGHTS.congestion}× congestion index + ${SCORE_WEIGHTS.incident} when an incident sits on the path. Production systems may add restrictions, turn penalties, and operator preferences.`,
  },
  {
    id: 'fleet-analytics',
    title: 'Fleet analytics and reporting',
    body: 'Fleet views would attach trips to vehicles, compare estimated versus planned arrivals, and summarise delay by route. Operators remain in control of dispatch decisions.',
  },
  {
    id: 'city-viz',
    title: 'City-level visualisation',
    body: 'City users would see corridor heatmaps, recurring bottleneck lists, and intersection indicators where compatible data exists. Adaptive signal control is a separate capability that needs infrastructure, integrations, and approvals — it is not implied by this website.',
  },
  {
    id: 'limitations',
    title: 'Limitations and responsible deployment',
    body: 'Models described here are proposed implementation choices, not trained production systems. Psykik should not be used as the sole input to safety-critical or enforcement decisions. Live CCTV and signal control require explicit authorization. Coverage will vary by city.',
  },
]

export default function ProductPage() {
  return (
    <>
      <PageMeta
        title="Product — Psykik traffic intelligence"
        description="How Psykik proposes to turn authorized traffic data into forecasts, route scores, and operational dashboards."
      />
      <div className="container page-shell">
        <SectionHeading
          kicker="Product"
          title="From authorized data to recommendations people can inspect."
          description="A proposed architecture for Indian urban mobility — designed to be integrated carefully, not switched on overnight."
        />
        <div className="product-block" id="architecture">
          <h3 style={{ color: 'var(--ink)' }}>Proposed technical architecture</h3>
          <div className="arch">
            {ARCHITECTURE_STEPS.map((step, index) => (
              <div className="arch-step" key={step}>
                <span className="mono" style={{ color: 'var(--accent)', fontSize: 12 }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong style={{ color: 'var(--ink)' }}>{step}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="split" style={{ marginTop: 32 }}>
          {BLOCKS.map((block) => (
            <Card key={block.id} className="product-block">
              <h3 id={block.id}>{block.title}</h3>
              <p className="muted">{block.body}</p>
            </Card>
          ))}
        </div>
      </div>
      <CtaSection />
    </>
  )
}
