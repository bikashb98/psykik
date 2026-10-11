import { useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { INTEREST_OPTIONS, USER_CATEGORIES } from '../../data/faqData'
import { submitLead } from '../../services/leadService'
import {
  hasErrors,
  validateLeadForm,
  type LeadFormErrors,
  type LeadFormValues,
} from '../../utils/validation'
import { Button } from '../ui/Button'
import { FormField } from '../ui/FormField'

const PLAN_INTEREST: Record<string, string> = {
  free: 'Commuter journey planning',
  pro: 'Commuter journey planning',
  fleet: 'Fleet operations',
  enterprise: 'City / urban mobility analytics',
}

export function EarlyAccessForm() {
  const [params] = useSearchParams()
  const presetCategory = params.get('category') ?? ''
  const plan = params.get('plan') ?? ''
  const intent = params.get('intent') ?? ''

  const initial = useMemo<LeadFormValues>(
    () => ({
      fullName: '',
      email: '',
      organization: '',
      category: USER_CATEGORIES.includes(presetCategory) ? presetCategory : '',
      interest:
        intent === 'early-access'
          ? 'Early access updates'
          : PLAN_INTEREST[plan] ?? '',
      message: plan ? `Interested in the ${plan} plan.` : '',
      consent: false,
    }),
    [presetCategory, plan, intent],
  )

  const [values, setValues] = useState<LeadFormValues>(initial)
  const [errors, setErrors] = useState<LeadFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  function update<K extends keyof LeadFormValues>(key: K, value: LeadFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    const nextErrors = validateLeadForm(values)
    setErrors(nextErrors)
    if (hasErrors(nextErrors)) return

    setStatus('submitting')
    try {
      const result = await submitLead(values)
      setStatus(result.ok ? 'success' : 'error')
      setMessage(result.message)
    } catch {
      setStatus('error')
      setMessage('The demo submission could not be completed. Please try again.')
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
      <p className="notice">
        Demo form — not connected to a live inbox. Submitting does not send your
        details to Psykik and does not store them in the browser.
      </p>

      <FormField id="fullName" label="Full name" error={errors.fullName}>
        <input
          id="fullName"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          aria-invalid={Boolean(errors.fullName)}
          onChange={(e) => update('fullName', e.target.value)}
        />
      </FormField>

      <FormField id="email" label="Work email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          onChange={(e) => update('email', e.target.value)}
        />
      </FormField>

      <FormField id="organization" label="Organisation (optional)">
        <input
          id="organization"
          name="organization"
          autoComplete="organization"
          value={values.organization}
          onChange={(e) => update('organization', e.target.value)}
        />
      </FormField>

      <FormField id="category" label="I am a" error={errors.category}>
        <select
          id="category"
          name="category"
          value={values.category}
          aria-invalid={Boolean(errors.category)}
          onChange={(e) => update('category', e.target.value)}
        >
          <option value="">Select a category</option>
          {USER_CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="interest" label="Area of interest" error={errors.interest}>
        <select
          id="interest"
          name="interest"
          value={values.interest}
          aria-invalid={Boolean(errors.interest)}
          onChange={(e) => update('interest', e.target.value)}
        >
          <option value="">Select an option</option>
          {INTEREST_OPTIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="message" label="Message (optional)" error={errors.message}>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
        />
      </FormField>

      <div className="field">
        <label className="checkbox" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update('consent', e.target.checked)}
          />
          <span>
            I understand this is a demonstration form and that Psykik will not
            receive or store these details from this website.
          </span>
        </label>
        {errors.consent ? (
          <p className="error" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === 'success' ? (
        <p className="form-status success" role="status">
          {message}
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="form-status error" role="alert">
          {message}
        </p>
      ) : null}

      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting demo…' : 'Submit interest'}
      </Button>
    </form>
  )
}
