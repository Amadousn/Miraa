import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { MotionProvider } from '@/components/providers/MotionProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maisonmiraa.com'),
  title: {
    default: 'Maison Miraa — Prêt-à-porter masculin Paris',
    template: '%s | Maison Miraa',
  },
  description:
    'Maison Miraa — Prêt-à-porter masculin haut de gamme à Paris. Pantalons, t-shirts, vestes. Matières nobles, silhouettes intemporelles, livraison France & Europe.',
  keywords: [
    'prêt-à-porter masculin', 'mode homme Paris', 'vêtements homme luxe',
    'pantalon homme', 'veste homme', 'Maison Miraa', 'mode masculine Paris',
    'vêtements homme haut de gamme', 't-shirt homme qualité',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Miraa — Prêt-à-porter masculin Paris',
    description: 'Prêt-à-porter masculin haut de gamme. Matières nobles, silhouettes intemporelles.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://maisonmiraa.com' },
  icons: {
    icon: '/logo/logo-monogram.png',
    apple: '/logo/logo-monogram.png',
  },
  openGraph: {
    title: 'Maison Miraa — Prêt-à-porter masculin Paris',
    description: 'Prêt-à-porter masculin haut de gamme. Matières nobles, silhouettes intemporelles.',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Maison Miraa',
    url: 'https://maisonmiraa.com',
    images: [{ url: '/logo/og-image.png', width: 1200, height: 630, alt: 'Maison Miraa' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.shopify.com" />
        <link rel="dns-prefetch" href="https://maison-miraa.myshopify.com" />
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Maison Miraa',
              url: 'https://maisonmiraa.com',
              logo: 'https://maisonmiraa.com/logo/logo-horizontal-light.png',
              description: 'Prêt-à-porter masculin haut de gamme. Matières nobles, silhouettes intemporelles.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Paris',
                addressCountry: 'FR',
              },
            }),
          }}
        />
        <MotionProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
