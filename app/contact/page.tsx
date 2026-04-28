import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Miraa',
  description: 'Contactez Maison Miraa pour toute question sur nos collections ou vos commandes.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '16px' }}
        >
          Contact
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: '48px', maxWidth: '480px' }}>
          Une question sur une commande, une taille ou nos collections ?
          Notre équipe vous répond sous 24 heures.
        </p>

        <div className="space-y-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
          <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '24px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '8px' }}>
              Email
            </p>
            <a
              href="mailto:contact@maisonmiraa.com"
              style={{ color: 'var(--color-text)', fontWeight: 400, textDecoration: 'none', borderBottom: '1px solid var(--color-border)' }}
            >
              contact@maisonmiraa.com
            </a>
          </div>

          <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '24px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '8px' }}>
              Horaires
            </p>
            <p>
              Du lundi au vendredi, de 10h à 18h (heure de Paris)
            </p>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: '8px' }}>
              Adresse
            </p>
            <p>
              Maison Miraa<br />
              Paris, France
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
