'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { products } from '@/lib/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const categories = ['Tous', 'Hauts', 'Pantalons', 'Vestes', 'Manteaux']
const collections = ['Tous', 'essentiels', 'ete']
const collectionLabels: Record<string, string> = {
  Tous: 'Tous',
  essentiels: 'Essentiels',
  ete: 'Automne–Hiver 2025',
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [activeCollection, setActiveCollection] = useState('Tous')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = activeCategory === 'Tous' || p.category === activeCategory
      const colOk = activeCollection === 'Tous' || p.collection === activeCollection
      return catOk && colOk
    })
  }, [activeCategory, activeCollection])

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="section-tight border-b border-[var(--color-border)]">
        <div className="container-miraa">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-display font-light text-[var(--color-text)] mb-8"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            Collection
          </motion.h1>

          {/* Filtres */}
          <div className="flex flex-wrap gap-8">
            {/* Catégorie */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.12em] pb-0.5 font-body transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'text-[var(--color-text)] border-b border-[var(--color-text)]'
                      : 'text-[var(--color-text-faint)] hover:text-[var(--color-text-muted)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-px h-4 bg-[var(--color-border)] self-center hidden sm:block" />

            {/* Collection */}
            <div className="flex flex-wrap gap-3">
              {collections.map((col) => (
                <button
                  key={col}
                  onClick={() => setActiveCollection(col)}
                  className={`text-xs uppercase tracking-[0.12em] pb-0.5 font-body transition-colors duration-200 ${
                    activeCollection === col
                      ? 'text-[var(--color-text)] border-b border-[var(--color-text)]'
                      : 'text-[var(--color-text-faint)] hover:text-[var(--color-text-muted)]'
                  }`}
                >
                  {collectionLabels[col]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="section">
        <div className="container-miraa">
          {filtered.length === 0 ? (
            <p className="text-center text-[var(--color-text-muted)] py-20 font-display font-light text-xl">
              Aucun article dans cette sélection.
            </p>
          ) : (
            <motion.div
              key={`${activeCategory}-${activeCollection}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="product-grid"
            >
              {filtered.map((product, i) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} priority={i < 4} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
