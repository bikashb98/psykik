import { APPROACH_STEPS } from '../../data/productFeatures'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function ApproachSection() {
  return (
    <section className="section" style={{ background: 'rgba(0,0,0,0.18)' }}>
      <div className="container">
        <SectionHeading
          kicker="The Psykik approach"
          title="From fragmented traffic data to better decisions."
          description="Inputs become intelligence, then outputs people can act on — without claiming control of signals or cameras that Psykik has not been authorized to use."
        />
        <div className="approach">
          {APPROACH_STEPS.map((step, index) => (
            <Card key={step.id} className="approach-step">
              <span className="num">0{index + 1}</span>
              <h3 style={{ color: 'var(--ink)' }}>{step.title}</h3>
              <p className="muted">{step.body}</p>
            </Card>
          ))}
          <Card>
            <span className="num">OUT</span>
            <h3 style={{ color: 'var(--ink)' }}>Decisions</h3>
            <p className="muted">
              Route choices, delay alerts, and planning views for commuters, fleets,
              and cities — always labelled as observed, simulated, or estimated.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
