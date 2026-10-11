import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
  href?: string
  full?: boolean
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  full,
  className = '',
  type = 'button',
  ...rest
}: Props) {
  const cls = `btn btn-${variant} ${full ? 'btn-full' : ''} ${className}`.trim()

  if (to) {
    return (
      <Link className={cls} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type={type} {...rest}>
      {children}
    </button>
  )
}
