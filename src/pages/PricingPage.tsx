import { PRICING_PLANS } from '../data/pricingPlans'
import { useBillingPeriod } from '../hooks/useBillingPeriod'
import { PricingCard } from '../components/pricing/PricingCard'
import { PricingComparison } from '../components/pricing/PricingComparison'
import { PricingFAQ } from '../components/pricing/PricingFAQ'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

export default function PricingPage() {
  const { period, setPeriod } = useBillingPeriod('monthly')

  return (
    <>
      <PageMeta
        title="Pricing — Psykik plans in INR"
        description="Introductory Psykik plans for commuters, fleets, and enterprise teams. Checkout is not implemented on this frontend-only site."
      />
      <div className="container page-shell">
        <SectionHeading
          kicker="Pricing"
          title="Clear plans. Honest about what this build can and cannot do."
          description="Amounts are proposed introductory prices in INR and may change after customer discovery. Checkout, recurring billing, and accounts are not implemented."
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div className="toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={period === 'monthly' ? 'active' : ''}
              onClick={() => setPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={period === 'yearly' ? 'active' : ''}
              onClick={() => setPeriod('yearly')}
            >
              Yearly · 2 months included
            </button>
          </div>
        </div>
        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={period} />
          ))}
        </div>
        <p className="muted" style={{ margin: '20px 0 40px' }}>
          Pro is marked as the recommended individual plan because it matches frequent
          commuters — not because it is a proven bestseller. Fleet is the primary
          commercial offering for paying operators. Enterprise is scoped per
          organisation.
        </p>
        <SectionHeading title="Compare what’s included" />
        <PricingComparison />
        <div style={{ marginTop: 48 }}>
          <SectionHeading title="Questions about subscriptions" />
          <PricingFAQ />
        </div>
      </div>
    </>
  )
}
