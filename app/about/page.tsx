import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'La Maison — Miraa',
  description:
    "L'histoire de Miraa. Prêt-à-porter masculin construit sur l'exigence des matières, la précision de la coupe et le refus du superflu.",
}

export default function AboutPage() {
  return <AboutContent />
}
