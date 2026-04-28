'use client'

import Link from 'next/link'

const footerLinks = {
  collection: [
    { href: '/shop', label: 'Tous les articles', comingSoon: false },
    { href: '/shop?collection=essentiels', label: 'Essentiels', comingSoon: true },
    { href: '/shop?collection=ete', label: 'Été 2026', comingSoon: true },
  ],
  maison: [
    { href: '/about', label: "L'histoire" },
    { href: '/about#manifeste', label: 'Le manifeste' },
    { href: '/about#influences', label: 'Amsterdam — Milan' },
  ],
  aide: [
    { href: '/faq', label: 'FAQ' },
    { href: '/livraisons', label: 'Livraisons & retours' },
    { href: '/guide-tailles', label: 'Guide des tailles' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  return (
    <footer style={{ background: '#1A0F0A', color: 'var(--color-text-inverse)' }}>
      <div className="container-miraa" style={{ paddingTop: '80px', paddingBottom: '48px' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '64px', marginBottom: '64px', alignItems: 'start' }}>

          {/* Brand */}
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: '52px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(232,213,175,0.95)', lineHeight: 1, display: 'block', marginBottom: '20px' }}>
              Miraa
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', lineHeight: 1.75, color: 'rgba(232,213,175,0.62)', maxWidth: '220px' }}>
              Prêt-à-porter masculin, Paris.<br />
              Des silhouettes qui restent.
            </p>
          </div>

          {/* Collection */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(232,213,175,0.40)', marginBottom: '20px' }}>
              Collection
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.collection.map((link) => (
                <li key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {link.comingSoon ? (
                    <>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'rgba(232,213,175,0.35)' }}>
                        {link.label}
                      </span>
                      <span style={{ fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,184,150,0.45)', border: '1px solid rgba(212,184,150,0.25)', padding: '2px 5px' }}>
                        Soon
                      </span>
                    </>
                  ) : (
                    <Link href={link.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'rgba(232,213,175,0.72)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.98)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.72)' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* La Maison */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(232,213,175,0.40)', marginBottom: '20px' }}>
              La Maison
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.maison.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'rgba(232,213,175,0.72)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.98)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.72)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aide */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(232,213,175,0.40)', marginBottom: '20px' }}>
              Aide
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.aide.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'rgba(232,213,175,0.72)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.98)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.72)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Citation */}
        <div style={{ borderTop: '1px solid rgba(232,213,175,0.10)', paddingTop: '56px', paddingBottom: '56px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(20px, 2.2vw, 28px)', lineHeight: 1.5, color: 'rgba(232,213,175,0.78)', maxWidth: '600px' }}>
            &ldquo;Nous ne faisons pas des vêtements.<br />
            Nous créons des silhouettes<br />
            qui traversent le temps.&rdquo;
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(232,213,175,0.10)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(232,213,175,0.38)' }}>
            © {new Date().getFullYear()} Maison Miraa. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '28px' }}>
            {[
              { href: '/mentions-legales', label: 'Mentions légales' },
              { href: '/confidentialite', label: 'Confidentialité' },
              { href: '/cgv', label: 'CGV' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(232,213,175,0.38)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.70)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,213,175,0.38)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
