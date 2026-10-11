import type { LeadFormValues } from '../utils/validation'

export type LeadSubmitResult = {
  ok: boolean
  mode: 'demo'
  message: string
}

/**
 * Frontend-only lead adapter.
 * Replace the body of `submitLead` with a POST to your API when one exists.
 * This implementation does not persist data and does not send email.
 */
export async function submitLead(payload: LeadFormValues): Promise<LeadSubmitResult> {
  void payload
  await new Promise((resolve) => setTimeout(resolve, 650))

  return {
    ok: true,
    mode: 'demo',
    message:
      'Demo submission complete. This form is not connected to a live inbox, and your details were not stored or transmitted.',
  }
}
