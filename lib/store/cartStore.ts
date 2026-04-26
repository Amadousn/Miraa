'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product, WishlistItem } from '@/lib/types'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, size: string, color: string) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  total: number
}

interface WishlistStore {
  items: WishlistItem[]
  toggleItem: (product: Product) => void
  isWishlisted: (productId: string) => boolean
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      get itemCount() {
        return get().items.reduce((acc, item) => acc + item.quantity, 0)
      },
      get total() {
        return get().items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        )
      },
      addItem: (product, size, color) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.size === size
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.size === size
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            }
          }
          return {
            items: [...state.items, { product, quantity: 1, size, color }],
          }
        })
      },
      removeItem: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.size === size)
          ),
        }))
      },
      updateQuantity: (productId, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size)
          return
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId && i.size === size
              ? { ...i, quantity }
              : i
          ),
        }))
      },
      clearCart: () => set({ items: [] }),
    }),
    { name: 'miraa-cart' }
  )
)

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (product) => {
        const exists = get().items.some((i) => i.product.id === product.id)
        set((state) => ({
          items: exists
            ? state.items.filter((i) => i.product.id !== product.id)
            : [...state.items, { product }],
        }))
      },
      isWishlisted: (productId) =>
        get().items.some((i) => i.product.id === productId),
    }),
    { name: 'miraa-wishlist' }
  )
)
