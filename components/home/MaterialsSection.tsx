'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const materials = [
  {
    name: 'Lin lavé',
    origin: 'Portugal',
    description:
      "Filé dans les meilleures filatures portugaises. S'assouplit au fil des lavages pour révéler son tombé naturel.",
    image: 'https://picsum.photos/seed/matiere-lin/600/400',
  },
  {
    name: 'Laine mérinos',
    origin: 'Italie & Australie',
    description:
      'Extra-fine, thermorégulatrice, douce contre la peau. Le mérinos est le fil conducteur de notre collection Essentiels.',
    image: 'https://picsum.photos/seed/matiere-laine/600/400',
  },
  {
    name: 'Cachemire',
    origin: 'Mongolie',
    description:
      "Grade A. Récolté à la main sur les flancs de l'Himalaya. Incomparable en douceur, en légèreté, en durabilité.",
    image: 'https://picsum.photos/seed/matiere-cachemire/600/400',
  },
]

export function MaterialsSection() {
  return (
    <section className="section bg-[var(--color-bg)]">
      <div className="container-miraa">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 max-w-lg"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-3 font-body"
          >
            Philosophie
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-light text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            Le tissu, <br />
            première couture.
          </motion.h2>
        </motion.div>

        {/* Grid matières */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {materials.map((mat) => (
            <motion.div key={mat.name} variants={fadeInUp}>
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden mb-6 bg-[var(--color-surface)]">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-1 font-body">
                {mat.origin}
              </p>
              <h3
                className="font-display font-light text-[var(--color-text)] mb-3"
                style={{ fontSize: 'var(--text-lg)' }}
              >
                {mat.name}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                {mat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
