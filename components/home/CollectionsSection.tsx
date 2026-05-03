'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CollectionCardProps {
  title: string
  subtitle: string
  image: string
  href: string
  objectPosition?: string
}

function CollectionCard({ title, subtitle, image, href, objectPosition = '50% 30%' }: CollectionCardProps) {
  return (
    <Link href={href} className="relative group overflow-hidden h-[70vh] min-h-[500px] block">
      <Image
        src={image}
        alt={title}
        fill
        className="transition-transform duration-700 group-hover:scale-105"
        style={{ objectFit: 'cover', objectPosition }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-muted)] mb-2 font-body">
          {subtitle}
        </p>
        <h2
          className="font-display font-light italic text-[var(--color-text-inverse)] leading-tight"
          style={{ fontSize: 'var(--text-2xl)', marginBottom: '24px' }}
        >
          {title}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-inverse)] border-b border-[var(--color-text-inverse)]/50 pb-0.5 font-body">
            Explorer
          </span>
        </motion.div>
      </div>
    </Link>
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
          href="/shop"
          objectPosition="25% 40%"
        />
        <CollectionCard
          title="Essentiels Miraa"
          subtitle="Collection"
          image="/essentiel.jpg"
          href="/shop"
          objectPosition="42% 25%"
        />
      </div>
    </section>
  )
}
