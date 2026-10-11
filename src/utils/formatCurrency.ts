const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export function formatInr(amount: number): string {
  return inr.format(amount)
}

export function yearlyFromMonthly(monthly: number): number {
  // Two months included: pay for 10 months when billed annually.
  return monthly * 10
}

export function equivalentMonthly(yearly: number): number {
  return Math.round(yearly / 12)
}
