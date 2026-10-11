import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

const ITEMS = [
  {
    title: 'Unpredictable commutes',
    body: 'People struggle to estimate journey times reliably when peak demand, incidents, and local conditions change faster than a fixed mental model of “usual traffic.”',
  },
  {
    title: 'Costly fleet delays',
    body: 'Congestion creates uncertainty around deliveries, vehicle utilisation, and service commitments. The impact varies by corridor, time of day, and how much slack an operation already has.',
  },
  {
    title: 'Limited planning visibility',
    body: 'Recurring bottlenecks are difficult to address without consolidated analytics. Cities differ: some corridors fail at junctions, others from roadworks, waterlogging, or seasonal demand.',
  },
]

export function ProblemSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="The problem"
          title="Traffic is more than a delay. It's an operational problem."
          description="These are common challenges in Indian urban areas. They do not apply equally everywhere, and their severity depends on local infrastructure, demand, and weather."
        />
        <div className="grid-3">
          {ITEMS.map((item) => (
            <Card key={item.title}>
              <h3 style={{ color: 'var(--ink)', marginBottom: 8 }}>{item.title}</h3>
              <p className="muted">{item.body}</p>
            </Card>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 18, maxWidth: 720 }}>
          Where congestion persists, it can contribute to wasted time, higher fuel use,
          and reduced productivity. The extent of those effects should be measured
          locally rather than assumed from a national average.
        </p>
      </div>
    </section>
  )
}
