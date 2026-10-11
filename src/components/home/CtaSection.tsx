import { Button } from '../ui/Button'

export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Let's make every journey more predictable.</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              Help us build a smarter way to understand and manage urban mobility in
              India.
            </p>
          </div>
          <div className="hero-actions">
            <Button to="/contact?intent=early-access">Request Early Access</Button>
            <Button to="/pricing" variant="secondary">
              Explore Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
