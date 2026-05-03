'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag, Loader2 } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useCartStore } from '@/lib/store/cartStore'
import { createCart } from '@/lib/shopify'

interface CartSidebarProps {
  open: boolean
  onClose: () => void
}

export function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const total = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0)

  const handleCheckout = async () => {
    // Construire les lignes pour le cart Shopify
    const lines = items
      .filter((item) => item.variantId) // uniquement les items avec un variantId Shopify
      .map((item) => ({
        merchandiseId: item.variantId!,
        quantity: item.quantity,
      }))

    if (lines.length === 0) {
      // Pas de variantId = données mock, on ne peut pas checkout
      // Ouvrir un lien direct vers le shop Shopify
      window.open('https://maison-miraa.myshopify.com', '_blank')
      return
    }

    setCheckoutLoading(true)
    const cart = await createCart(lines)
    setCheckoutLoading(false)

    if (cart?.checkoutUrl) {
      clearCart()
      window.location.href = cart.checkoutUrl
    }
  }

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] p-0 bg-[var(--color-bg)] border-l border-[var(--color-border)] flex flex-col"
      >
        <SheetHeader className="px-6 py-5 border-b border-[var(--color-border)]">
          <SheetTitle className="font-display font-light text-xl text-[var(--color-text)] flex items-center gap-2">
            Votre panier
            {items.length > 0 && (
              <span className="text-sm font-body font-300 text-[var(--color-text-muted)]">
                ({items.reduce((a, i) => a + i.quantity, 0)})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag
                size={40}
                strokeWidth={1}
                className="text-[var(--color-text-faint)]"
              />
              <div>
                <p className="font-display font-light text-lg text-[var(--color-text)]">
                  Votre panier est vide
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1 font-light">
                  Découvrez notre collection
                </p>
              </div>
              <Link
                href="/shop"
                onClick={onClose}
                className="text-xs uppercase tracking-[0.12em] border border-[var(--color-text)] px-6 py-3 hover:bg-[var(--color-text)] hover:text-[var(--color-text-inverse)] transition-colors duration-300 font-body font-400"
              >
                Explorer la collection
              </Link>
            </div>
          ) : (
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-4 py-4 border-b border-[var(--color-border)]">
                    {/* Image */}
                    <div className="relative w-20 aspect-[3/4] shrink-0 bg-[var(--color-surface)] overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        quality={90}
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h4 className="font-display font-light text-base text-[var(--color-text)] leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          aria-label="Retirer du panier"
                          className="text-[var(--color-text-faint)] hover:text-[var(--color-text)] transition-colors duration-200 shrink-0"
                        >
                          <X size={14} strokeWidth={1.5} />
                        </button>
                      </div>

                      <p className="text-xs text-[var(--color-text-faint)] mt-1 font-body">
                        Taille : {item.size}
                        {item.color && ` · ${item.color}`}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity - 1)
                            }
                            aria-label="Diminuer la quantité"
                            className="w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="text-sm font-body font-400 text-[var(--color-text)] w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity + 1)
                            }
                            aria-label="Augmenter la quantité"
                            className="w-6 h-6 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-body font-400 tracking-[0.05em] text-[var(--color-text)]">
                          {new Intl.NumberFormat('fr-FR', {
                            style: 'currency',
                            currency: 'EUR',
                          }).format(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[var(--color-border)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm uppercase tracking-[0.1em] text-[var(--color-text-muted)] font-body">
                Total
              </span>
              <span className="font-display font-light text-xl text-[var(--color-text)]">
                {new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(total)}
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-faint)] mb-4 font-light">
              Livraison offerte à partir de 100 €. Taxes incluses.
            </p>
            <button
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="block w-full bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)] text-xs uppercase tracking-[0.12em] py-4 text-center hover:bg-[var(--color-accent)] transition-colors duration-300 font-body font-400 disabled:opacity-60"
            >
              {checkoutLoading ? (
                <Loader2 size={16} className="animate-spin mx-auto" />
              ) : (
                'Commander'
              )}
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
