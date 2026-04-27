import { shopifyFetch } from './client'
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE, GET_COLLECTION_PRODUCTS } from './queries'
import { normalizeProduct } from './normalize'
import type {
  ShopifyProductsResponse,
  ShopifyProductResponse,
  NormalizedProduct,
} from './types'

export type { NormalizedProduct }

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
