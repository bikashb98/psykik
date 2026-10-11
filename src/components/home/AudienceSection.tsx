import { SOLUTIONS } from '../../data/solutionsData'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function AudienceSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading kicker="Who Psykik helps" title="Different users, different decisions." />
        <div className="grid-3">
          {SOLUTIONS.map((item) => (
            <Card key={item.id} className="audience-card">
              <p className="kicker">{item.kicker}</p>
              <h3 style={{ color: 'var(--ink)' }}>{item.title}</h3>
              <ul className="feature-list">
                {item.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <Button to={item.cta.to} variant="ghost">
                {item.cta.label}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
