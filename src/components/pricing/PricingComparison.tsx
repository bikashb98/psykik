import { COMPARISON_ROWS, PRICING_PLANS } from '../../data/pricingPlans'

export function PricingComparison() {
  return (
    <div className="comparison-wrap">
      <table className="comparison">
        <caption className="sr-only">Feature comparison across Psykik plans</caption>
        <thead>
          <tr>
            <th>Feature</th>
            {PRICING_PLANS.map((plan) => (
              <th key={plan.id}>{plan.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.feature}>
              <th scope="row">{row.feature}</th>
              {PRICING_PLANS.map((plan) => (
                <td key={plan.id}>{row.values[plan.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
