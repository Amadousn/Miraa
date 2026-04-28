import type { Product } from '@/lib/types'
import type { NormalizedProduct } from './types'

/* Convertit un produit Shopify normalisé vers le type Product du front */
export function toProduct(p: NormalizedProduct): Product {
  const sizeKey = (o: { name: string }) =>
    o.name.toLowerCase() === 'taille' || o.name.toLowerCase() === 'size'

  const colorKey = (o: { name: string }) =>
    o.name.toLowerCase() === 'couleur' || o.name.toLowerCase() === 'color'

  // Extraire les tailles uniques
  const sizes = p.variants
    .filter((v) => v.selectedOptions.some(sizeKey))
    .map((v) => v.selectedOptions.find(sizeKey)?.value ?? v.title)
    .filter((v, i, arr) => arr.indexOf(v) === i)

  // Mapper les variants avec leur ID Shopify
  const variants = p.variants
    .filter((v) => v.selectedOptions.some(sizeKey))
    .map((v) => ({
      id: v.id,
      size: v.selectedOptions.find(sizeKey)?.value ?? v.title,
      availableForSale: v.availableForSale,
    }))

  // Extraire les couleurs depuis les options des variants
  const colorEntries = p.variants
    .filter((v) => v.selectedOptions.some(colorKey))
    .map((v) => v.selectedOptions.find(colorKey)?.value ?? '')
    .filter((v, i, arr) => v && arr.indexOf(v) === i)
  const colors = colorEntries.map((name) => ({ name, hex: '#888888' }))

  return {
    id: p.handle,
    name: p.name,
    price: p.price,
    category: p.category,
    collection: p.collection,
    images: p.images.length > 0 ? p.images : ['/products/placeholder.jpg'],
    sizes,
    materials: '',
    care: '',
    description: p.description,
    isNew: p.isNew,
    isBestseller: p.isBestseller,
    colors,
    variants,
  }
}
