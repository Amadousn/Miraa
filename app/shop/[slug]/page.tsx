import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductByHandle } from '@/lib/shopify'
import { toProduct } from '@/lib/shopify/toProduct'
import { products as mockProducts } from '@/lib/data/products'
import { ProductDetailClient } from '@/components/shop/ProductDetailClient'

interface Props {
  params: Promise<{ slug: string }>
}

async function getProduct(slug: string) {
  // 1. Essayer Shopify d'abord
  const shopifyProduct = await getProductByHandle(slug)
  if (shopifyProduct) return toProduct(shopifyProduct)

  // 2. Fallback sur les données mock
  const mock = mockProducts.find((p) => p.id === slug)
  return mock ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    return { title: 'Produit introuvable — Miraa' }
  }

  return {
    title: `${product.name} — Miraa`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Miraa`,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
      locale: 'fr_FR',
      type: 'website',
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0],
    brand: { '@type': 'Brand', name: 'Miraa' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `https://maisonmiraa.com/shop/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  )
}
