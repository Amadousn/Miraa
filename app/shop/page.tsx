'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { products as mockProducts } from '@/lib/data/products'
import { getProducts } from '@/lib/shopify'
import { toProduct } from '@/lib/shopify/toProduct'
import { ProductCard } from '@/components/ui/ProductCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { Product } from '@/lib/types'

const categories = ['Tous', 'Hauts', 'Pantalons', 'Vestes']

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [products, setProducts] = useState<Product[]>(mockProducts)

  useEffect(() => {
    getProducts(24).then((shopifyProducts) => {
      if (shopifyProducts.length > 0) {
        setProducts(shopifyProducts.map(toProduct))
      }
    })
  }, [])

  const filtered = useMemo(() => {
    if (activeCategory === 'Tous') return products
    return products.filter((p) => {
      const cat = p.category?.toLowerCase() ?? ''
      if (activeCategory === 'Hauts') return cat.includes('t-shirt') || cat.includes('haut') || cat.includes('chemise') || cat.includes('top')
      if (activeCategory === 'Pantalons') return cat.includes('pantalon')
      if (activeCategory === 'Vestes') return cat.includes('veste') || cat.includes('blazer') || cat.includes('manteau')
      return false
    })
  }, [products, activeCategory])

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
              key={activeCategory}
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
