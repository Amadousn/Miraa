'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { products as mockProducts } from '@/lib/data/products'
import { getProducts } from '@/lib/shopify'
import { toProduct } from '@/lib/shopify/toProduct'
import { ProductCard } from '@/components/ui/ProductCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { Product } from '@/lib/types'

const categories = ['Tous', 'Hauts', 'Pantalons', 'Vestes', 'Manteaux']
const collections = ['Tous', 'essentiels', 'ete']
const collectionLabels: Record<string, string> = {
  Tous: 'Tous',
  essentiels: 'Essentiels',
  ete: 'Été 2026',
}

const COMING_SOON_COLLECTIONS = ['essentiels', 'ete']

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [activeCollection, setActiveCollection] = useState('Tous')
  const [products, setProducts] = useState<Product[]>(mockProducts)

  useEffect(() => {
    getProducts(24).then((shopifyProducts) => {
      if (shopifyProducts.length > 0) {
        setProducts(shopifyProducts.map(toProduct))
      }
    })
  }, [])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = activeCategory === 'Tous' || p.category === activeCategory
      const colOk = activeCollection === 'Tous' || p.collection === activeCollection
      return catOk && colOk
    })
  }, [products, activeCategory, activeCollection])

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
          {COMING_SOON_COLLECTIONS.includes(activeCollection) ? (
            <motion.div
              key={activeCollection}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-accent-muted)', marginBottom: '20px' }}>
                {collectionLabels[activeCollection]}
              </p>
              <h2 className="font-display font-light" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '16px', lineHeight: 1.1 }}>
                Bientôt disponible.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '360px', lineHeight: 1.75 }}>
                Cette collection est en cours de préparation. Elle sera disponible prochainement.
              </p>
            </motion.div>
          ) : filtered.length === 0 ? (
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
