import { Button } from '../components/ui/Button'
import { PageMeta } from '../components/ui/PageMeta'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page not found — Psykik"
        description="That page does not exist on the Psykik website."
      />
      <div className="container page-shell" style={{ textAlign: 'center', paddingBottom: 80 }}>
        <p className="kicker">404</p>
        <h1 style={{ color: 'var(--ink)', fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>
          This route is not on the network.
        </h1>
        <p className="muted" style={{ margin: '12px auto 24px', maxWidth: 480 }}>
          The page you requested is not part of the Psykik site. Head home, or jump to
          product, pricing, or contact.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Button to="/">Back home</Button>
          <Button to="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </>
  )
}
