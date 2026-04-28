export interface ProductColor {
  name: string
  hex: string
}

export interface ProductVariant {
  id: string
  size: string
  availableForSale: boolean
}

export interface Product {
  id: string
  name: string
  price: number
  category: string
  collection: string
  images: string[]
  sizes: string[]
  materials: string
  care: string
  description: string
  isNew: boolean
  isBestseller: boolean
  colors: ProductColor[]
  variants?: ProductVariant[]
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
  variantId?: string
}

export interface WishlistItem {
  product: Product
}
