'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface CollectionCardProps {
  title: string
  subtitle: string
  image: string
  objectPosition?: string
  comingSoon?: boolean
}

function CollectionCard({ title, subtitle, image, objectPosition = '50% 30%', comingSoon }: CollectionCardProps) {
  return (
    <div className="relative group overflow-hidden h-[70vh] min-h-[500px]" style={{ cursor: comingSoon ? 'default' : 'pointer' }}>
      <Image
        src={image}
        alt={title}
        fill
        className="transition-transform duration-700 group-hover:scale-105"
        style={{ objectFit: 'cover', objectPosition }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-muted)] mb-2 font-body">
          {subtitle}
        </p>
        <h2
          className="font-display font-light italic text-[var(--color-text-inverse)] leading-tight"
          style={{ fontSize: 'var(--text-2xl)', marginBottom: comingSoon ? '16px' : '24px' }}
        >
          {title}
        </h2>

        {comingSoon ? (
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            color: 'rgba(255,248,235,0.55)',
            border: '1px solid rgba(255,248,235,0.25)',
            padding: '6px 14px',
          }}>
            Bientôt disponible
          </span>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-inverse)] border-b border-[var(--color-text-inverse)]/50 pb-0.5 font-body">
              Explorer
            </span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export function CollectionsSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <CollectionCard
          title="Été 2026"
          subtitle="Collection"
          image="/été.jpg"
          objectPosition="25% 40%"
          comingSoon
        />
        <CollectionCard
          title="Essentiels Miraa"
          subtitle="Collection"
          image="/essentiel.jpg"
          objectPosition="42% 25%"
          comingSoon
        />
      </div>
    </section>
  )
}
