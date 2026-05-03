'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/lib/store/cartStore'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { Product } from '@/lib/types'

interface Props {
  product: Product
}

export function ProductDetailClient({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) return
    const variant = product.variants?.find((v) => v.size === selectedSize)
    addItem(product, selectedSize, product.colors[0]?.name || '', variant?.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20 pb-24">
      <div className="container-miraa">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-[11px] font-body" style={{ color: 'var(--color-text-faint)' }}>
            <Link href="/shop" className="hover:opacity-60 transition-opacity">Collection</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Main image */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden mb-4"
              style={{ backgroundColor: '#EFECEB', aspectRatio: '3/4' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    quality={100}
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <motion.div variants={fadeInUp} className="grid grid-cols-5 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className="relative overflow-hidden transition-opacity duration-200"
                    style={{
                      aspectRatio: '1',
                      backgroundColor: '#EFECEB',
                      opacity: selectedImage === i ? 1 : 0.5,
                      outline: selectedImage === i ? '2px solid var(--color-text)' : 'none',
                      outlineOffset: '2px',
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - ${i + 1}`}
                      fill
                      quality={90}
                      className="object-contain"
                      sizes="200px"
                    />
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Product info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:pt-4"
          >
            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '10px' }}
            >
              {product.category}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-light"
              style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', lineHeight: 1.1, marginBottom: '16px' }}
            >
              {product.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '16px', letterSpacing: '0.03em', color: 'var(--color-text)', marginBottom: '32px' }}
            >
              {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: '32px', maxWidth: '400px' }}
            >
              {product.description}
            </motion.p>

            {/* Sizes */}
            <motion.div variants={fadeInUp} style={{ marginBottom: '28px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '12px' }}>
                Taille
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: selectedSize === size ? '2px solid var(--color-text)' : '1px solid var(--color-border)',
                      background: 'transparent',
                      color: selectedSize === size ? 'var(--color-text)' : 'var(--color-text-muted)',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s ease, color 0.2s ease',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Add to cart */}
            <motion.div variants={fadeInUp} style={{ marginBottom: '40px' }}>
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: '52px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  background: selectedSize ? 'var(--color-surface-dark)' : 'var(--color-surface-2)',
                  color: selectedSize ? 'var(--color-text-inverse)' : 'var(--color-text-faint)',
                  border: 'none',
                  cursor: selectedSize ? 'pointer' : 'not-allowed',
                  transition: 'background 0.3s ease, opacity 0.3s ease',
                }}
                onMouseEnter={(e) => { if (selectedSize) e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                {added ? 'Ajouté au panier' : selectedSize ? 'Ajouter au panier' : 'Sélectionner une taille'}
              </button>
            </motion.div>

            {/* Details */}
            {(product.materials || product.care) && (
              <motion.div variants={fadeInUp} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
                {product.materials && (
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '6px' }}>
                      Matières
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      {product.materials}
                    </p>
                  </div>
                )}
                {product.care && (
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '6px' }}>
                      Entretien
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      {product.care}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
