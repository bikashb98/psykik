import { Activity, Building2, GitBranch, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PRODUCT_FEATURES } from '../../data/productFeatures'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

const ICONS = {
  activity: Activity,
  'git-branch': GitBranch,
  truck: Truck,
  'building-2': Building2,
}

export function CapabilitiesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          kicker="Capabilities"
          title="Four ways Psykik turns movement into insight."
        />
        <div className="grid-2">
          {PRODUCT_FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon]
            return (
              <Card key={feature.id}>
                <Icon color="#b8ff3c" size={22} aria-hidden="true" />
                <h3 style={{ color: 'var(--ink)', margin: '10px 0 8px' }}>{feature.title}</h3>
                <p>{feature.problem}</p>
                <p className="muted" style={{ marginTop: 10 }}>
                  Example: {feature.benefit}
                </p>
                <Link to={feature.to} style={{ color: 'var(--accent)', fontWeight: 700, display: 'inline-block', marginTop: 12 }}>
                  Learn how it works
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
