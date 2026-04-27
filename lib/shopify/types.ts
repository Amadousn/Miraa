/* Types Shopify Storefront API */

export interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface ShopifyMoney {
  amount: string
  currencyCode: string
}

export interface ShopifyProductVariant {
  id: string
  title: string
  availableForSale: boolean
  price: ShopifyMoney
  selectedOptions: { name: string; value: string }[]
}

export interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml: string
  tags: string[]
  featuredImage: ShopifyImage | null
  images: { edges: { node: ShopifyImage }[] }
  priceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  variants: { edges: { node: ShopifyProductVariant }[] }
  collections: { edges: { node: { handle: string; title: string } }[] }
  metafield: { value: string } | null
}

export interface ShopifyProductEdge {
  node: ShopifyProduct
  cursor: string
}

export interface ShopifyProductsResponse {
  products: {
    edges: ShopifyProductEdge[]
    pageInfo: { hasNextPage: boolean; endCursor: string }
  }
}

export interface ShopifyProductResponse {
  product: ShopifyProduct | null
}

/* Type normalisé pour le front */
export interface NormalizedProduct {
  id: string
  handle: string
  name: string
  price: number
  currency: string
  priceFormatted: string
  category: string
  collection: string
  images: string[]
  description: string
  tags: string[]
  isNew: boolean
  isBestseller: boolean
  variants: ShopifyProductVariant[]
  availableForSale: boolean
}
