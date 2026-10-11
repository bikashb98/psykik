import type { PricingPlan } from '../../data/pricingPlans'
import type { BillingPeriod } from '../../hooks/useBillingPeriod'
import { equivalentMonthly, formatInr, yearlyFromMonthly } from '../../utils/formatCurrency'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function PricingCard({
  plan,
  period,
}: {
  plan: PricingPlan
  period: BillingPeriod
}) {
  const yearly = plan.monthlyInr === null ? null : yearlyFromMonthly(plan.monthlyInr)
  const showYearly = period === 'yearly' && yearly !== null && plan.monthlyInr !== 0

  return (
    <Card className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured ? <Badge tone="accent">Recommended for individuals</Badge> : null}
      <div>
        <h3 style={{ color: 'var(--ink)', fontSize: 22 }}>{plan.name}</h3>
        <p className="muted" style={{ fontSize: 14 }}>
          {plan.audience}
        </p>
      </div>
      <p className="price">
        {plan.monthlyInr === null
          ? 'Custom'
          : showYearly
            ? formatInr(yearly)
            : formatInr(plan.monthlyInr)}
        {plan.monthlyInr !== null ? (
          <span>{showYearly ? ' / year' : ' / month'}</span>
        ) : (
          <span> pricing</span>
        )}
      </p>
      {showYearly && yearly !== null ? (
        <p className="muted" style={{ fontSize: 13 }}>
          Equivalent to {formatInr(equivalentMonthly(yearly))}/month. Two months included
          vs monthly billing. Nothing is charged on this site.
        </p>
      ) : null}
      <ul className="feature-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span aria-hidden="true" style={{ color: 'var(--accent)' }}>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <p className="muted" style={{ fontSize: 13 }}>
        {plan.note}
      </p>
      <Button to={plan.to} variant={plan.featured ? 'primary' : 'secondary'} full>
        {plan.cta}
      </Button>
    </Card>
  )
}
