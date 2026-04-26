import { HeroSection } from '@/components/home/HeroSection'
import { NewArrivalsSection } from '@/components/home/NewArrivalsSection'
import { EditorialSection } from '@/components/home/EditorialSection'
import { CollectionsSection } from '@/components/home/CollectionsSection'
import { MarqueeSection } from '@/components/home/MarqueeSection'
import { MaterialsSection } from '@/components/home/MaterialsSection'
import { BestsellersSection } from '@/components/home/BestsellersSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewArrivalsSection />
      <EditorialSection />
      <CollectionsSection />
      <MarqueeSection />
      <MaterialsSection />
      <BestsellersSection />
    </>
  )
}
