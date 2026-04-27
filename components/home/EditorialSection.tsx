'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, scrollReveal, staggerContainer } from '@/lib/animations'

export function EditorialSection() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-miraa">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/maison.jpg"
              alt="Maison Miraa — Paris"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
            style={{ maxWidth: '420px' }}
          >
            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '14px' }}
            >
              La Maison
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'var(--text-2xl)', lineHeight: 1.05, letterSpacing: '-0.01em', color: '#2C1A10', marginBottom: '20px' }}
            >
              Il y a des maisons<br />
              que l&apos;on n&apos;oublie pas.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: '#5A4035', marginBottom: '12px' }}
            >
              Miraa est née d&apos;un mouvement, d&apos;un regard posé ailleurs. Des matins calmes le long des canaux, des lumières chaudes sur la pierre, des ombres qui glissent sur la laine.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: '#5A4035', marginBottom: '12px' }}
            >
              Une idée simple nous guide depuis le début : l&apos;élégance masculine n&apos;a pas de frontière, mais elle garde une mémoire.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: '#5A4035', marginBottom: '28px' }}
            >
              À Paris, la maison s&apos;installe sans jamais se figer. Toujours entre deux lieux, entre deux instants, avec le souci du détail et le goût des matières justes.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/about"
                style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2C1A10', borderBottom: '1px solid #2C1A10', paddingBottom: '2px', textDecoration: 'none', transition: 'opacity 0.2s ease', opacity: 1 }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.55' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                L&apos;histoire complète
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
