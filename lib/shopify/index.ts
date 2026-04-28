import { shopifyFetch } from './client'
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE, GET_COLLECTION_PRODUCTS, CART_CREATE, CART_LINES_ADD, CART_LINES_REMOVE, CART_LINES_UPDATE } from './queries'
import { normalizeProduct } from './normalize'
import type {
  ShopifyProductsResponse,
  ShopifyProductResponse,
  ShopifyCartResponse,
  ShopifyCart,
  NormalizedProduct,
} from './types'

export type { NormalizedProduct, ShopifyCart }

/* ── Récupérer tous les produits ── */
export async function getProducts(first = 12, query?: string): Promise<NormalizedProduct[]> {
  try {
    const data = await shopifyFetch<ShopifyProductsResponse>(GET_PRODUCTS, { first, query })
    return data.products.edges.map((e) => normalizeProduct(e.node))
  } catch {
    return []
  }
}

/* ── Produit par handle ── */
export async function getProductByHandle(handle: string): Promise<NormalizedProduct | null> {
  try {
    const data = await shopifyFetch<ShopifyProductResponse>(GET_PRODUCT_BY_HANDLE, { handle })
    return data.product ? normalizeProduct(data.product) : null
  } catch {
    return null
  }
}

/* ── Produits d'une collection ── */
export async function getCollectionProducts(handle: string, first = 8): Promise<NormalizedProduct[]> {
  try {
    const data = await shopifyFetch<{ collection: { products: { edges: { node: import('./types').ShopifyProduct }[] } } | null }>(
      GET_COLLECTION_PRODUCTS,
      { handle, first }
    )
    return data.collection?.products.edges.map((e) => normalizeProduct(e.node)) ?? []
  } catch {
    return []
  }
}

/* ── Nouveautés (tag "new") ── */
export async function getNewProducts(first = 4): Promise<NormalizedProduct[]> {
  return getProducts(first, 'tag:new')
}

/* ── Bestsellers ── */
export async function getBestsellerProducts(first = 4): Promise<NormalizedProduct[]> {
  return getProducts(first, 'tag:bestseller')
}

/* ── Cart ── */

/** Créer un cart Shopify avec des lignes initiales */
export async function createCart(lines: { merchandiseId: string; quantity: number }[]): Promise<ShopifyCart | null> {
  try {
    const data = await shopifyFetch<ShopifyCartResponse>(CART_CREATE, { lines })
    if (data.cartCreate?.userErrors.length) {
      console.error('Shopify cartCreate errors:', data.cartCreate.userErrors)
      return null
    }
    return data.cartCreate?.cart ?? null
  } catch {
    return null
  }
}

/** Ajouter des lignes à un cart existant */
export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number }[]): Promise<ShopifyCart | null> {
  try {
    const data = await shopifyFetch<ShopifyCartResponse>(CART_LINES_ADD, { cartId, lines })
    if (data.cartLinesAdd?.userErrors.length) {
      console.error('Shopify cartLinesAdd errors:', data.cartLinesAdd.userErrors)
      return null
    }
    return data.cartLinesAdd?.cart ?? null
  } catch {
    return null
  }
}

/** Retirer des lignes d'un cart */
export async function removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart | null> {
  try {
    const data = await shopifyFetch<ShopifyCartResponse>(CART_LINES_REMOVE, { cartId, lineIds })
    return data.cartLinesRemove?.cart ?? null
  } catch {
    return null
  }
}

/** Mettre à jour les quantités */
export async function updateCart(cartId: string, lines: { id: string; quantity: number }[]): Promise<ShopifyCart | null> {
  try {
    const data = await shopifyFetch<ShopifyCartResponse>(CART_LINES_UPDATE, { cartId, lines })
    return data.cartLinesUpdate?.cart ?? null
  } catch {
    return null
  }
}
