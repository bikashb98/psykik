import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide footer-grid">
        <div>
          <Logo />
          <p style={{ marginTop: 12, maxWidth: 360 }}>
            See traffic differently. Move India forward. Psykik is developing traffic
            intelligence for commuters, fleets, and cities — with honest limits about
            data and deployment.
          </p>
        </div>
        <div>
          <h3>Product</h3>
          <div className="footer-links">
            <Link to="/product">Platform</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/product#limitations">Limitations</Link>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact?intent=early-access">Early access</Link>
          </div>
        </div>
        <div>
          <h3>Notes</h3>
          <p>
            Dashboards on this site use illustrative demo data. Psykik does not claim
            live city-wide coverage or government partnerships from this website.
          </p>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <span>© {new Date().getFullYear()} Psykik. Early-stage product website.</span>
        <span>Frontend-only demonstration. No payment processing.</span>
      </div>
    </footer>
  )
}
