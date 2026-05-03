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
  productType: string
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

/* Types Cart Shopify */
export interface ShopifyCartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: ShopifyMoney
    product: { title: string; handle: string }
    image: ShopifyImage | null
  }
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    totalAmount: ShopifyMoney
    subtotalAmount: ShopifyMoney
  }
  lines: { edges: { node: ShopifyCartLine }[] }
}

export interface ShopifyCartResponse {
  cartCreate?: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
  cartLinesAdd?: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
  cartLinesRemove?: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
  cartLinesUpdate?: { cart: ShopifyCart; userErrors: { field: string; message: string }[] }
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
