import { NavLink } from 'react-router-dom'
import { Button } from '../ui/Button'

const LINKS = [
  { to: '/product', label: 'Product' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`} hidden={!open} id="mobile-nav">
      {LINKS.map((link) => (
        <NavLink key={link.to} to={link.to} onClick={onClose}>
          {link.label}
        </NavLink>
      ))}
      <Button to="/contact?intent=early-access" full>
        Request Early Access
      </Button>
    </div>
  )
}
