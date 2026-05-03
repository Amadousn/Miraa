import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions générales de vente — Miraa',
  description: 'Conditions générales de vente de Maison Miraa.',
}

export default function CGVPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '48px' }}
        >
          Conditions générales de vente
        </h1>

        <div className="space-y-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 1 — Objet
            </h2>
            <p>
              Les présentes conditions générales de vente régissent les ventes de produits
              effectuées par Ali-Erdem Eroglu (Entreprise individuelle, SIRET : 10338547200016),
              exploitant la marque Maison Miraa, via le site maisonmiraa.com. Toute commande
              implique l&apos;acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 2 — Prix
            </h2>
            <p>
              Les prix sont indiqués en euros (EUR), toutes taxes comprises (TTC).
              Maison Miraa se réserve le droit de modifier ses prix à tout moment,
              étant entendu que le prix applicable est celui en vigueur au moment de la commande.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 3 — Commandes
            </h2>
            <p>
              La validation de la commande vaut acceptation des prix et descriptions
              des produits. Maison Miraa s&apos;engage à honorer la commande dans la
              limite des stocks disponibles. En cas d&apos;indisponibilité, le client
              sera informé dans les plus brefs délais.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 4 — Paiement
            </h2>
            <p>
              Le paiement s&apos;effectue en ligne par carte bancaire via la plateforme
              sécurisée Shopify Payments. Le montant est débité au moment de la
              validation de la commande.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 5 — Livraison
            </h2>
            <p>
              Les commandes sont expédiées sous 3 à 5 jours ouvrés. La livraison est
              offerte en France métropolitaine à partir de 100 €. Les délais de
              livraison sont donnés à titre indicatif.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 6 — Droit de rétractation
            </h2>
            <p>
              Conformément à la législation en vigueur, vous disposez d&apos;un délai de
              14 jours à compter de la réception de votre commande pour exercer votre
              droit de rétractation. Les articles doivent être retournés dans leur état
              d&apos;origine, non portés, avec leurs étiquettes.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 7 — Retours et remboursements
            </h2>
            <p>
              Les retours sont acceptés sous 14 jours après réception. Le remboursement
              sera effectué dans un délai de 14 jours suivant la réception du retour,
              par le même moyen de paiement que celui utilisé lors de la commande.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Article 8 — Contact
            </h2>
            <p>
              Pour toute question relative à votre commande ou aux présentes CGV :<br />
              Email : contact@maisonmiraa.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
