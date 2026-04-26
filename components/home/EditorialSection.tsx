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
              src="https://picsum.photos/seed/miraa-editorial/900/1125"
              alt="Miraa — La Maison"
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
          >
            <motion.p
              variants={fadeInUp}
              className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-6 font-body"
            >
              La Maison
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="font-display font-light text-[var(--color-text)] mb-6 leading-tight"
              style={{ fontSize: 'var(--text-2xl)' }}
            >
              Des pièces <br />
              qui existent.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed mb-4 max-w-md"
            >
              Miraa naît d'un refus. Refus du superflu, de la tendance,
              du spectacle. Chaque pièce est pensée pour traverser le temps —
              construite dans des matières nobles, coupée pour le corps qui bouge.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed mb-8 max-w-md"
            >
              Nous travaillons avec des ateliers en France, en Italie et au Portugal.
              Des partenaires qui partagent notre exigence : savoir-faire, durabilité,
              respect de la matière.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/about"
                className="text-xs uppercase tracking-[0.15em] text-[var(--color-text)] border-b border-[var(--color-text)] pb-0.5 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-300 font-body font-400"
              >
                Découvrir la maison
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
