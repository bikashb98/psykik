import { TRUST_PRINCIPLES } from '../data/productFeatures'
import { CtaSection } from '../components/home/CtaSection'
import { Card } from '../components/ui/Card'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

const VALUES = [
  { title: 'Evidence over hype', body: 'Prefer measured pilots to slogans about eliminating congestion.' },
  { title: 'Practical innovation', body: 'Use models that operators can inspect, not opaque claims of magic AI.' },
  { title: 'Responsible use of data', body: 'Work within licences, permissions, and the minimum data needed.' },
  { title: 'Transparency about uncertainty', body: 'Say when a number is observed, simulated, or forecasted.' },
  { title: 'Real-world outcomes', body: 'Judge success by whether journeys and operations become more predictable — not vanity metrics.' },
]

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Psykik"
        description="Psykik is developing a traffic intelligence platform and validating use cases with potential users in India."
      />
      <div className="container page-shell">
        <SectionHeading
          kicker="About"
          title="A product-led start, not a fictional giant."
          description="Psykik is developing a traffic intelligence platform and validating its use cases with potential users. This page does not invent founders, offices, investors, or traction."
        />
        <div className="split">
          <Card>
            <h3 style={{ color: 'var(--ink)' }}>Mission</h3>
            <p className="muted">
              Help Indian cities and mobility businesses make better traffic decisions
              using responsible, data-driven intelligence.
            </p>
          </Card>
          <Card>
            <h3 style={{ color: 'var(--ink)' }}>Vision</h3>
            <p className="muted">
              A future in which urban mobility becomes more predictable, measurable,
              and responsive — without pretending that software alone clears every road.
            </p>
          </Card>
        </div>
        <div className="values" style={{ marginTop: 24 }}>
          {VALUES.map((value) => (
            <Card key={value.title}>
              <h3 style={{ color: 'var(--ink)' }}>{value.title}</h3>
              <p className="muted">{value.body}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <h2 style={{ color: 'var(--ink)', marginBottom: 12 }}>How we work</h2>
          <p className="muted" style={{ maxWidth: 720 }}>
            The product principles on the homepage also guide the company: authorized
            sources, clear labels on predictions, limited personal data, and human
            oversight when recommendations could affect operations or infrastructure.
          </p>
          <ul className="feature-list" style={{ marginTop: 16 }}>
            {TRUST_PRINCIPLES.map((item) => (
              <li key={item.title}>
                <strong style={{ color: 'var(--ink)' }}>{item.title}.</strong>{' '}
                {item.body}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CtaSection />
    </>
  )
}
