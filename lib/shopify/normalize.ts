import type { ShopifyProduct, NormalizedProduct } from './types'

export function normalizeProduct(p: ShopifyProduct): NormalizedProduct {
  const price = parseFloat(p.priceRange.minVariantPrice.amount)
  const currency = p.priceRange.minVariantPrice.currencyCode

  const priceFormatted = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(price)

  const images = p.images.edges.length > 0
    ? p.images.edges.map((e) => e.node.url)
    : p.featuredImage
    ? [p.featuredImage.url]
    : []

  const collection = p.collections.edges[0]?.node.handle ?? 'essentiels'

  // Mapper productType Shopify → catégorie UI (Hauts / Pantalons / Vestes)
  const type = (p.productType ?? '').toLowerCase()
  const titleLower = p.title.toLowerCase()
  let category = 'Collection'
  if (type.includes('pantalon') || titleLower.includes('pantalon')) {
    category = 'Pantalons'
  } else if (type.includes('veste') || type.includes('blazer') || titleLower.includes('veste')) {
    category = 'Vestes'
  } else if (type.includes('t-shirt') || type.includes('tshirt') || type.includes('haut') || type.includes('chemise') || titleLower.includes('t-shirt') || titleLower.includes('tshirt')) {
    category = 'Hauts'
  }

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
