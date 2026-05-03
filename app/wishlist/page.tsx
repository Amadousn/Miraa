'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useWishlistStore } from '@/lib/store/cartStore'
import { ProductCard } from '@/components/ui/ProductCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function WishlistPage() {
  const { items } = useWishlistStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="pt-24 pb-24">
      <div className="container-miraa">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="uppercase font-body"
            style={{ fontSize: '11px', letterSpacing: '0.22em', color: 'var(--color-text-faint)', marginBottom: '12px' }}
          >
            Vos pièces préférées
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display font-light"
            style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)' }}
          >
            Liste de souhaits
          </motion.h1>
        </motion.div>

        {!mounted ? null : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Heart size={32} strokeWidth={1} className="text-[var(--color-text-faint)] mb-6" />
            <p
              className="font-display font-light mb-3"
              style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text)' }}
            >
              Aucune pièce sélectionnée
            </p>
            <p
              className="mb-8 max-w-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.7, color: 'var(--color-text-muted)' }}
            >
              Parcourez la collection et ajoutez les pièces qui retiennent votre regard.
            </p>
            <Link
              href="/shop"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-text-inverse)',
                background: 'var(--color-surface-dark)',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Découvrir la collection
            </Link>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="product-grid"
          >
            {items.map((item) => (
              <motion.div key={item.product.id} variants={fadeInUp}>
                <ProductCard product={item.product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
