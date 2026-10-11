import { SOLUTIONS } from '../data/solutionsData'
import { Button } from '../components/ui/Button'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CtaSection } from '../components/home/CtaSection'

export default function SolutionsPage() {
  return (
    <>
      <PageMeta
        title="Solutions — Commuters, fleets, and cities | Psykik"
        description="Psykik solutions for commuter planning, fleet operations, and urban mobility intelligence."
      />
      <div className="container page-shell">
        <SectionHeading
          kicker="Solutions"
          title="Built around three customer groups, with fleets and enterprises as the primary commercial focus."
          description="Individual commuters can explore a free or limited offering. Paying customers are expected to be fleet operators and larger organisations."
        />
        {SOLUTIONS.map((item) => (
          <section key={item.id} id={item.id} className="solution-section">
            <p className="kicker">{item.kicker}</p>
            <h2 style={{ color: 'var(--ink)', letterSpacing: '-0.03em' }}>{item.title}</h2>
            <div className="meta-grid">
              <div>
                <h4>Intended users</h4>
                <p className="muted">{item.users}</p>
              </div>
              <div>
                <h4>Dependencies and limits</h4>
                <p className="muted">{item.limits}</p>
              </div>
              <div>
                <h4>Pain points</h4>
                <ul className="feature-list">
                  {item.pains.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Proposed features</h4>
                <ul className="feature-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4>Expected operational benefits</h4>
              <ul className="feature-list">
                {item.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <Button to={item.cta.to}>{item.cta.label}</Button>
          </section>
        ))}
      </div>
      <CtaSection />
    </>
  )
}
