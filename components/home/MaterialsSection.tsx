'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const pillars = [
  {
    number: '01',
    title: 'La coupe avant tout',
    description: 'Amsterdam pour la structure, Milan pour le mouvement. Deux approches différentes, une même exigence.',
    image: '/01.jpg',
  },
  {
    number: '02',
    title: "L'essentiel, rien de plus",
    description: "Ce que Miraa enlève compte autant que ce qu'elle garde. Rien d'inutile, seulement ce qui se remarque sans s'imposer.",
    image: '/02.jpg',
  },
  {
    number: '03',
    title: 'Le temps comme allié',
    description: "Des pièces faites pour durer. Passer les années sans perdre leur place.",
    image: '/03.jpg',
  },
]

export function MaterialsSection() {
  return (
    <section className="section bg-[var(--color-bg)]">
      <div className="container-miraa">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 max-w-lg"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display font-light leading-tight"
            style={{ fontSize: 'var(--text-2xl)', color: '#2C1A10', letterSpacing: '-0.01em' }}
          >
            Trois partis pris.<br />
            Aucun compromis.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.number} variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="relative overflow-hidden bg-[var(--color-surface)]" style={{ aspectRatio: '3/2', marginBottom: '16px' }}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ filter: 'sepia(0.08) brightness(0.97) contrast(1.02) saturate(0.92)' }}
                />
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent-muted)', marginBottom: '6px' }}>
                {pillar.number}
              </p>
              <h3
                className="font-display font-light"
                style={{ fontSize: 'var(--text-lg)', color: '#2C1A10', marginBottom: '8px', lineHeight: 1.2 }}
              >
                {pillar.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300, lineHeight: 1.72, color: '#5A4035' }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
