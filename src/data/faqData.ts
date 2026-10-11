export const PRICING_FAQS = [
  {
    id: 'billing',
    q: 'Can I subscribe and pay on this website?',
    a: 'No. Checkout, recurring billing, and account creation are not implemented because this project is frontend-only. Plan buttons open an interest form so we can learn what you need.',
  },
  {
    id: 'intro-price',
    q: 'Are these prices final?',
    a: 'The listed amounts are proposed introductory prices in INR and may change after customer discovery. Enterprise pricing is scoped per organisation.',
  },
  {
    id: 'yearly',
    q: 'How does yearly billing work in this demo?',
    a: 'If you choose yearly, the displayed amount is 10 months of the monthly price (two months included). Nothing is charged. The toggle is only to show how an annual discount could be presented.',
  },
  {
    id: 'data',
    q: 'Does Pro or Fleet include live traffic data today?',
    a: 'Not in this build. Visualisations use deterministic sample data for a fictional corridor. Production coverage would depend on authorized feeds and local conditions.',
  },
  {
    id: 'cancel',
    q: 'How would cancellation work later?',
    a: 'A production product would let you cancel before the next billing cycle and keep access until the period ends. There is no account to cancel here.',
  },
  {
    id: 'privacy',
    q: 'What personal data do you collect?',
    a: 'The demo form does not store or transmit your details. A future service would collect only what is needed to provide the product and would state that in a privacy notice.',
  },
  {
    id: 'enterprise',
    q: 'What does an enterprise integration involve?',
    a: 'Typically: confirming data-source permissions, mapping your road network or fleet identifiers, agreeing security requirements, and validating forecasts against local conditions before any operational use.',
  },
]

export const INTEREST_OPTIONS = [
  'Early access updates',
  'Commuter journey planning',
  'Fleet operations',
  'City / urban mobility analytics',
  'Data partnership discussion',
  'Pricing and pilots',
]

export const USER_CATEGORIES = [
  'Commuter',
  'Fleet Operator',
  'City/Urban Planning',
  'Other',
]
