import type { Product } from '@/lib/types'
import type { NormalizedProduct } from './types'

/* Convertit un produit Shopify normalisé vers le type Product du front */
export function toProduct(p: NormalizedProduct): Product {
  return {
    id: p.handle, // handle = slug URL friendly
    name: p.name,
    price: p.price,
    category: p.category,
    collection: p.collection,
    images: p.images.length > 0 ? p.images : ['https://picsum.photos/seed/miraa-placeholder/800/1067'],
    sizes: p.variants
      .filter((v) => v.selectedOptions.some((o) => o.name.toLowerCase() === 'taille' || o.name.toLowerCase() === 'size'))
      .map((v) => v.selectedOptions.find((o) => o.name.toLowerCase() === 'taille' || o.name.toLowerCase() === 'size')?.value ?? v.title)
      .filter((v, i, arr) => arr.indexOf(v) === i),
    materials: '',
    care: '',
    description: p.description,
    isNew: p.isNew,
    isBestseller: p.isBestseller,
    colors: [],
  }
}
