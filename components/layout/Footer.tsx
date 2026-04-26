import Link from 'next/link'

const footerLinks = {
  collection: [
    { href: '/shop', label: 'Tous les articles' },
    { href: '/shop?collection=essentiels', label: 'Essentiels' },
    { href: '/shop?collection=ete', label: 'Été 2025' },
  ],
  maison: [
    { href: '/about', label: 'Notre histoire' },
    { href: '/about#matieres', label: 'Nos matières' },
    { href: '/about#engagement', label: 'Engagement' },
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
    <footer className="dark-section">
      <div className="container-miraa py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display italic text-3xl font-medium text-[var(--color-accent-muted)]">
              Miraa
            </span>
            <p className="mt-4 text-sm text-[var(--color-text-faint)] font-light leading-relaxed max-w-xs">
              La matière avant tout. Prêt-à-porter masculin conçu pour durer.
              Matières nobles, silhouettes intemporelles.
            </p>
          </div>

          {/* Collection */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)] mb-5">
              Collection
            </p>
            <ul className="space-y-3">
              {footerLinks.collection.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* La Maison */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)] mb-5">
              La Maison
            </p>
            <ul className="space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aide */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)] mb-5">
              Aide
            </p>
            <ul className="space-y-3">
              {footerLinks.aide.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-inverse)] opacity-70 hover:opacity-100 transition-opacity duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-text-inverse)]/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[var(--color-text-faint)]">
            © {new Date().getFullYear()} Miraa. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-[var(--color-text-faint)] hover:opacity-70 transition-opacity duration-200"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-xs text-[var(--color-text-faint)] hover:opacity-70 transition-opacity duration-200"
            >
              Confidentialité
            </Link>
            <Link
              href="/cgv"
              className="text-xs text-[var(--color-text-faint)] hover:opacity-70 transition-opacity duration-200"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
