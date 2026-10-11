import { TRUST_PRINCIPLES } from '../../data/productFeatures'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function TrustSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="Trust"
          title="Intelligence you can understand. Data you can trust."
          description="Psykik is an early-stage product. This site does not display customer logos, government partnerships, certifications, or deployment history."
        />
        <ul className="trust-list">
          {TRUST_PRINCIPLES.map((item) => (
            <li key={item.title}>
              <Card>
                <h3 style={{ color: 'var(--ink)' }}>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
