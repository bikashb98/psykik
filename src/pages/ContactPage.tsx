import { useSearchParams } from 'react-router-dom'
import { EarlyAccessForm } from '../components/forms/EarlyAccessForm'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

export default function ContactPage() {
  const [params] = useSearchParams()
  const key = params.toString()

  return (
    <>
      <PageMeta
        title="Contact and early access — Psykik"
        description="Share interest in Psykik. This demonstration form does not send messages to a live inbox."
      />
      <div className="container page-shell split">
        <div>
          <SectionHeading
            kicker="Contact"
            title="Tell us where traffic intelligence would help."
            description="Use this form for early access, fleet conversations, or city scoping. Because the project is frontend-only, the submission is a labelled demo — it is designed so a real API can replace leadService later."
          />
          <p className="muted">
            We are especially interested in fleet operators and public-sector mobility
            teams. Commuters are welcome too; the commercial product is expected to be
            funded by organisations, with a limited offering for individuals.
          </p>
        </div>
        <EarlyAccessForm key={key} />
      </div>
    </>
  )
}
