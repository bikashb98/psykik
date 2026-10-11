export const SOLUTIONS = [
  {
    id: 'commuters',
    kicker: 'Commuter Intelligence',
    title: 'Make more informed journey decisions before you leave.',
    users: 'Everyday commuters and independent professionals who travel the same corridors often.',
    pains: [
      'Journey times vary by time of day, weather, and incidents, so a single “usual” estimate is unreliable.',
      'Navigation apps can disagree, and municipal information is not always in the same place.',
    ],
    features: [
      'Route comparisons that weigh estimated time, distance, and congestion — not distance alone.',
      'Congestion alerts described as estimates, with a clear distinction from observed conditions.',
      'A simple planning view for recurring origin–destination pairs.',
    ],
    benefits: [
      'A more realistic buffer before important appointments.',
      'A chance to pick a slightly longer but less congested corridor when the short path is saturated.',
    ],
    limits:
      'Useful alerts require timely, authorized traffic data. This site uses sample data and does not access your location.',
    cta: { label: 'Request commuter access', to: '/contact?plan=pro&category=Commuter' },
  },
  {
    id: 'fleet',
    kicker: 'Fleet Intelligence',
    title: 'Turn unpredictable road conditions into more manageable operations.',
    users: 'Small fleet operators, logistics coordinators, and field-service dispatchers.',
    pains: [
      'Arrival windows slip when a few vehicles hit the same bottleneck.',
      'It is hard to explain delays to customers without a shared view of route performance.',
    ],
    features: [
      'Vehicle-level visibility in a dashboard (illustrative in this build).',
      'Estimated arrivals with delay analysis against a planned window.',
      'Route performance reports and operational insight views.',
    ],
    benefits: [
      'Goal: reduce surprise delays on known corridors — to be validated in pilots, not promised as a fixed percentage.',
      'Clearer conversations with customers when a delay is forming.',
    ],
    limits:
      'Accuracy depends on vehicle identifiers, planned ETAs, and data freshness. Psykik does not automatically re-assign drivers without operator control.',
    cta: { label: 'Request Fleet Access', to: '/contact?plan=fleet&category=Fleet%20Operator' },
  },
  {
    id: 'city',
    kicker: 'Urban Mobility Intelligence',
    title: 'Use congestion patterns to see where interventions may matter most.',
    users: 'Traffic engineers, urban planners, and mobility programme teams in government or consulting.',
    pains: [
      'Bottlenecks recur, but evidence is fragmented across systems.',
      'It is difficult to compare a typical Tuesday with an incident day without a consistent baseline.',
    ],
    features: [
      'Congestion heatmaps and recurring bottleneck analysis.',
      'Intersection performance indicators where compatible data exists.',
      'Planning views that separate typical demand from unusual events.',
    ],
    benefits: [
      'A shared evidence base for discussing signal timing studies, lane use, or roadwork staging.',
      'Better questions for field teams: which junctions fail first, and at what hours?',
    ],
    limits:
      'Adaptive signal control and CCTV access require compatible infrastructure, authorized integrations, and city approvals. Psykik does not control signals by default.',
    cta: { label: 'Talk to us about city use', to: '/contact?plan=enterprise&category=City%2FUrban%20Planning' },
  },
] as const
