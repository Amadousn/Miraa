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
    default: 'Miraa — La matière avant tout',
    template: '%s — Miraa',
  },
  description:
    'Miraa. Prêt-à-porter masculin haut de gamme. Matières nobles, silhouettes intemporelles, savoir-faire européen.',
  openGraph: {
    title: 'Miraa — La matière avant tout',
    description: 'Prêt-à-porter masculin haut de gamme.',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Maison Miraa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miraa — La matière avant tout',
    description: 'Prêt-à-porter masculin haut de gamme.',
  },
  robots: { index: true, follow: true },
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
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Maison Miraa',
              url: 'https://maisonmiraa.com',
              logo: 'https://maisonmiraa.com/favicon.ico',
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
