export type PlanId = 'free' | 'pro' | 'fleet' | 'enterprise'

export type PricingPlan = {
  id: PlanId
  name: string
  audience: string
  monthlyInr: number | null
  cta: string
  to: string
  featured?: boolean
  note: string
  features: string[]
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    audience: 'Individual commuters exploring Psykik',
    monthlyInr: 0,
    cta: 'Get Started Free',
    to: '/contact?plan=free',
    note: 'Includes the frontend demonstration only. It is not a connected live traffic service.',
    features: [
      'Basic route comparison demo',
      'Limited traffic insights using sample data',
      'Basic journey-planning interface',
      'Access to product updates on this site',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    audience: 'Frequent commuters and independent professionals',
    monthlyInr: 499,
    cta: 'Choose Pro',
    to: '/contact?plan=pro',
    featured: true,
    note: 'Proposed introductory price, subject to validation. Saved preferences and alerts are not operational in this frontend-only build.',
    features: [
      'Expanded journey-planning features',
      'Saved route preferences (planned)',
      'Illustrative traffic trend history',
      'Personalized planning preferences (planned)',
      'Enhanced route comparisons',
    ],
  },
  {
    id: 'fleet',
    name: 'Fleet',
    audience: 'Small fleet operators',
    monthlyInr: 4999,
    cta: 'Request Fleet Access',
    to: '/contact?plan=fleet',
    note: 'Primary commercial tier for paying customers. Pricing is introductory and may change after customer discovery.',
    features: [
      'Fleet dashboard demo',
      'Multi-route comparison',
      'Illustrative vehicle and delivery metrics',
      'Route performance reports',
      'Operational insights interface',
      'Early-access product support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'Logistics companies, smart-city programmes, and public agencies',
    monthlyInr: null,
    cta: 'Talk to Us',
    to: '/contact?plan=enterprise',
    note: 'Custom pricing depends on data access, integration complexity, deployment, usage, and support.',
    features: [
      'Custom integration planning',
      'Organisation-level analytics',
      'Data-source integration assessment',
      'Deployment and security discussions',
      'Tailored reporting requirements',
    ],
  },
]

export type ComparisonRow = {
  feature: string
  values: Record<PlanId, string>
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Intended user',
    values: {
      free: 'Commuter',
      pro: 'Frequent commuter',
      fleet: 'Small fleet',
      enterprise: 'Large ops / city',
    },
  },
  {
    feature: 'Route comparison demo',
    values: { free: 'Basic', pro: 'Enhanced', fleet: 'Multi-route', enterprise: 'Custom' },
  },
  {
    feature: 'Traffic insights',
    values: {
      free: 'Limited sample',
      pro: 'Trend history (illustrative)',
      fleet: 'Operational views',
      enterprise: 'Org-level',
    },
  },
  {
    feature: 'Saved preferences',
    values: { free: '—', pro: 'Planned', fleet: 'Planned', enterprise: 'Scoped' },
  },
  {
    feature: 'Fleet metrics',
    values: { free: '—', pro: '—', fleet: 'Illustrative', enterprise: 'Custom' },
  },
  {
    feature: 'City / network analytics',
    values: { free: '—', pro: '—', fleet: 'Limited', enterprise: 'Yes, scoped' },
  },
  {
    feature: 'Live connected data',
    values: {
      free: 'Not in this build',
      pro: 'Not in this build',
      fleet: 'Not in this build',
      enterprise: 'Discussed per project',
    },
  },
  {
    feature: 'Support',
    values: {
      free: 'Product updates',
      pro: 'Email interest',
      fleet: 'Early-access support',
      enterprise: 'Named discussions',
    },
  },
]
