export type LeadFormValues = {
  fullName: string
  email: string
  organization: string
  category: string
  interest: string
  message: string
  consent: boolean
}

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateLeadForm(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Enter your full name.'
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Name should be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter a work email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.category) {
    errors.category = 'Select the option that best describes you.'
  }

  if (!values.interest.trim()) {
    errors.interest = 'Choose an area of interest.'
  }

  if (values.message.length > 1000) {
    errors.message = 'Keep the message under 1,000 characters.'
  }

  if (!values.consent) {
    errors.consent = 'Please confirm you understand this is a demo form.'
  }

  return errors
}

export function hasErrors(errors: LeadFormErrors): boolean {
  return Object.keys(errors).length > 0
}
