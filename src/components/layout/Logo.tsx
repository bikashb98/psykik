import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Psykik home">
      <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#101c2a" />
        <path
          d="M6.5 22.5c4.2-1.2 6.2-9 9.5-9s5.3 7.8 9.5 9"
          stroke="#b8ff3c"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="13.5" r="2.3" fill="#b8ff3c" />
      </svg>
      Psykik
    </Link>
  )
}
