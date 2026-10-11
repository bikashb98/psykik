export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker?: string
  title: string
  description?: string
}) {
  return (
    <header className="section-heading">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="muted">{description}</p> : null}
    </header>
  )
}
