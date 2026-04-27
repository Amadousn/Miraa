'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useWishlistStore } from '@/lib/store/cartStore'
import type { Product } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { toggleItem, isWishlisted } = useWishlistStore()
  const wishlisted = isWishlisted(product.id)

  return (
    <motion.article
      className="group"
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      style={{ cursor: 'pointer' }}
    >
      <Link href={`/shop/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[3/4] bg-[var(--color-surface)]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)] font-body font-400">
                Nouveau
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute top-3 right-3 p-2 bg-[var(--color-bg)]/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => {
              e.preventDefault()
              toggleItem(product)
            }}
            aria-label={wishlisted ? 'Retirer de la liste de souhaits' : 'Ajouter à la liste de souhaits'}
          >
            <Heart
              size={16}
              strokeWidth={1.5}
              className={cn(
                'transition-colors duration-200',
                wishlisted
                  ? 'fill-[var(--color-accent)] stroke-[var(--color-accent)]'
                  : 'stroke-[var(--color-text)]'
              )}
            />
          </motion.button>

          {/* Quick view */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            initial={{ y: '100%' }}
            whileHover={{ y: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
          >
            <div className="bg-[var(--color-surface-dark)]/90 backdrop-blur-sm py-3 text-center">
              <span className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-inverse)] font-body font-400">
                Vue rapide
              </span>
            </div>
          </motion.div>
        </div>

        {/* Info */}
        <div className="pt-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-faint)] mb-1 font-body">
            {product.category}
          </p>
          <h3 className="font-display font-light text-lg leading-tight text-[var(--color-text)]">
            {product.name}
          </h3>
          <p
            className="text-sm mt-1 font-body font-400 tracking-[0.05em]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {new Intl.NumberFormat('fr-FR', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>

          {/* Color dots */}
          {product.colors.length > 1 && (
            <div className="flex gap-1.5 mt-2">
              {product.colors.map((color) => (
                <span
                  key={color.name}
                  title={color.name}
                  className="w-3 h-3 rounded-full border border-[var(--color-border)]"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}
