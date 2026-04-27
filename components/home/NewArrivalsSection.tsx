'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { newArrivals } from '@/lib/data/products'
import { getNewProducts } from '@/lib/shopify'
import { toProduct } from '@/lib/shopify/toProduct'
import { ProductCard } from '@/components/ui/ProductCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { Product } from '@/lib/types'
import Link from 'next/link'

export function NewArrivalsSection() {
  const [products, setProducts] = useState<Product[]>(newArrivals.slice(0, 4))

  useEffect(() => {
    getNewProducts(4).then((shopifyProducts) => {
      if (shopifyProducts.length > 0) {
        setProducts(shopifyProducts.map(toProduct))
      }
    })
  }, [])

  return (
    <section className="section bg-[var(--color-bg)]">
      <div className="container-miraa">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-end justify-between mb-12"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-2 font-body">
              Arrivages
            </p>
            <h2
              className="font-display font-light text-[var(--color-text)]"
              style={{ fontSize: 'var(--text-2xl)' }}
            >
              Nouveautés
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/shop"
              className="hidden md:block text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)] border-b border-[var(--color-text-muted)] pb-0.5 hover:text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors duration-200 font-body"
            >
              Voir tout
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="product-grid"
        >
          {products.map((product, i) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} priority={i < 2} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <Link
            href="/shop"
            className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)] border-b border-[var(--color-text-muted)] pb-0.5 font-body"
          >
            Voir tout
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
