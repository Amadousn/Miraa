import type { MetadataRoute } from 'next'
import { getProducts } from '@/lib/shopify'
import { products as mockProducts } from '@/lib/data/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://maisonmiraa.com'

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/livraisons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/guide-tailles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/cgv`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  // Pages produits — essayer Shopify d'abord, fallback mock
  let productSlugs: string[] = []
  try {
    const shopifyProducts = await getProducts(100)
    if (shopifyProducts.length > 0) {
      productSlugs = shopifyProducts.map((p) => p.handle)
    }
  } catch {
    // Fallback mock
  }

  if (productSlugs.length === 0) {
    productSlugs = mockProducts.map((p) => p.id)
  }

  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${baseUrl}/shop/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...productPages]
}
