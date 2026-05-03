import type { ShopifyProduct, NormalizedProduct } from './types'

export function normalizeProduct(p: ShopifyProduct): NormalizedProduct {
  const price = parseFloat(p.priceRange.minVariantPrice.amount)
  const currency = p.priceRange.minVariantPrice.currencyCode

  const priceFormatted = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(price)

  const allImages = p.images.edges.length > 0
    ? p.images.edges.map((e) => e.node.url)
    : p.featuredImage
    ? [p.featuredImage.url]
    : []
  // On garde max 2 images : principale (hover off) + alternative (hover on)
  const images = allImages.slice(0, 2)

  const collection = p.collections.edges[0]?.node.handle ?? 'essentiels'
  const category = p.collections.edges[0]?.node.title ?? 'Collection'

  const badge = p.metafield?.value ?? ''
  const isNew = p.tags.includes('new') || badge === 'new'
  const isBestseller = p.tags.includes('bestseller') || badge === 'bestseller'

  const variants = p.variants.edges.map((e) => e.node)
  const availableForSale = variants.some((v) => v.availableForSale)

  return {
    id: p.id,
    handle: p.handle,
    name: p.title,
    price,
    currency,
    priceFormatted,
    category,
    collection,
    images,
    description: p.description,
    tags: p.tags,
    isNew,
    isBestseller,
    variants,
    availableForSale,
  }
}
