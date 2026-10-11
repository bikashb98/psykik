import { TrafficDashboard } from '../dashboard/TrafficDashboard'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="container-wide hero page-shell">
      <div style={{ display: 'grid', gap: 18 }}>
        <p className="kicker">AI traffic intelligence for Indian cities</p>
        <h1>India moves every day. Its traffic systems should move smarter.</h1>
        <p className="lead">
          Psykik turns traffic patterns into actionable intelligence, helping commuters
          plan smarter journeys, fleets reduce operational uncertainty, and cities
          understand congestion before it compounds.
        </p>
        <div className="hero-actions">
          <Button to="/product">Explore the Platform</Button>
          <Button to="/pricing" variant="secondary">
            View Pricing
          </Button>
        </div>
      </div>
      <TrafficDashboard interactive={false} />
    </section>
  )
}
