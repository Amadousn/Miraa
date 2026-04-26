export interface ProductColor {
  name: string
  hex: string
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
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
}

export interface WishlistItem {
  product: Product
}
