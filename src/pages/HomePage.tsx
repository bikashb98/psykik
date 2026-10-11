import { ApproachSection } from '../components/home/ApproachSection'
import { AudienceSection } from '../components/home/AudienceSection'
import { CapabilitiesSection } from '../components/home/CapabilitiesSection'
import { CtaSection } from '../components/home/CtaSection'
import { HeroSection } from '../components/home/HeroSection'
import { ProblemSection } from '../components/home/ProblemSection'
import { SimulationSection } from '../components/home/SimulationSection'
import { TrustSection } from '../components/home/TrustSection'
import { PageMeta } from '../components/ui/PageMeta'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Psykik — See traffic differently. Move India forward."
        description="Psykik turns traffic patterns into actionable intelligence for Indian commuters, fleets, and cities."
      />
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <CapabilitiesSection />
      <SimulationSection />
      <AudienceSection />
      <TrustSection />
      <CtaSection />
    </>
  )
}
