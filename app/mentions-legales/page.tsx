import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Miraa',
  description: 'Mentions légales du site Maison Miraa.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '48px' }}
        >
          Mentions légales
        </h1>

        <div className="space-y-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Éditeur du site
            </h2>
            <p>
              Maison Miraa<br />
              [Forme juridique] — [Numéro SIRET]<br />
              [Adresse du siège social]<br />
              [Code postal, Ville]<br />
              France
            </p>
            <p className="mt-2">
              Directeur de la publication : [Nom du responsable]<br />
              Email : contact@maisonmiraa.com
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, photographies, logos, vidéos)
              est la propriété exclusive de Maison Miraa ou de ses partenaires. Toute reproduction,
              représentation ou diffusion, en tout ou partie, du contenu de ce site sans
              l&apos;autorisation expresse de Maison Miraa est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Crédits
            </h2>
            <p>
              Conception et développement : Sirius Agency<br />
              Photographies : [Nom du photographe]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
