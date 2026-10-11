import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PRICING_FAQS } from '../../data/faqData'

export function PricingFAQ() {
  const [openId, setOpenId] = useState<string | null>(PRICING_FAQS[0]?.id ?? null)

  return (
    <div>
      {PRICING_FAQS.map((item) => {
        const expanded = openId === item.id
        return (
          <div className="faq-item" key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpenId(expanded ? null : item.id)}
              >
                {item.q}
                <ChevronDown size={18} aria-hidden="true" />
              </button>
            </h3>
            {expanded ? <p>{item.a}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
