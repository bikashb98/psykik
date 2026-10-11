import type { ReactNode } from 'react'

export function Badge({
  children,
  tone = 'default',
}: {
  children: ReactNode
  tone?: 'default' | 'live' | 'sim' | 'pred' | 'accent'
}) {
  const cls = tone === 'default' ? 'badge' : `badge badge-${tone}`
  return <span className={cls}>{children}</span>
}
