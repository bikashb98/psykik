export const PRODUCT_FEATURES = [
  {
    id: 'predictive',
    title: 'Predictive Congestion Intelligence',
    problem: 'Peak-hour slowdowns are hard to anticipate from a single snapshot of current conditions.',
    benefit:
      'A commuter can see an estimated congestion window for a regular 8:30 a.m. corridor and leave with a more realistic buffer.',
    to: '/product#forecasting',
    icon: 'activity',
  },
  {
    id: 'routing',
    title: 'Context-Aware Route Planning',
    problem: 'The shortest path is not always the fastest once congestion, restrictions, and incidents are considered.',
    benefit:
      'A delivery coordinator can compare distance against estimated travel time and avoid a canal road that looks short but is incident-affected.',
    to: '/product#routing',
    icon: 'git-branch',
  },
  {
    id: 'fleet',
    title: 'Fleet Operations Dashboard',
    problem: 'Dispatch teams often learn about delays only after a vehicle has already missed a window.',
    benefit:
      'An operator can review illustrative arrival variance across routes and flag trips that need a customer update.',
    to: '/solutions#fleet',
    icon: 'truck',
  },
  {
    id: 'city',
    title: 'City Traffic Analytics',
    problem: 'Recurring bottlenecks are difficult to isolate when data sits across navigation apps, cameras, and municipal systems.',
    benefit:
      'A planner can inspect a congestion heatmap of a corridor and compare typical versus unusual slowdowns before proposing an intervention.',
    to: '/solutions#city',
    icon: 'building-2',
  },
] as const

export const APPROACH_STEPS = [
  {
    id: 'observe',
    title: 'Observe',
    body: 'Ingest permitted traffic feeds, historical road speeds, incident reports, and available contextual data such as known roadworks.',
  },
  {
    id: 'predict',
    title: 'Predict',
    body: 'Apply statistical models and machine learning to estimate near-term conditions and flag anomalies against a historical baseline.',
  },
  {
    id: 'recommend',
    title: 'Recommend',
    body: 'Deliver route suggestions, operational alerts, and planning insights to commuters, fleet teams, and city stakeholders.',
  },
] as const

export const ARCHITECTURE_STEPS = [
  'Authorized Data Sources',
  'Data Validation and Normalization',
  'Road Network and Traffic Features',
  'Forecasting and Anomaly Detection',
  'Route Scoring and Optimization',
  'Dashboards, Alerts, and Reports',
]

export const TRUST_PRINCIPLES = [
  {
    title: 'Authorized sources only',
    body: 'Use licensed or permitted data and respect restrictions on feeds, cameras, and municipal systems.',
  },
  {
    title: 'Observed vs predicted',
    body: 'Show clearly when a value is measured, interpolated, simulated, or forecasted.',
  },
  {
    title: 'Uncertainty, not false precision',
    body: 'Communicate ranges and confidence instead of promising exact arrival times.',
  },
  {
    title: 'Minimal personal data',
    body: 'Avoid collecting unnecessary location history. This website does not request device location.',
  },
  {
    title: 'Human oversight',
    body: 'Recommendations that could affect infrastructure or operations should remain reviewable by people with authority.',
  },
]
