import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Livraisons & retours — Miraa',
  description: 'Informations sur la livraison et les retours chez Maison Miraa.',
}

export default function LivraisonsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '48px' }}
        >
          Livraisons & retours
        </h1>

        <div className="space-y-10" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
          <section>
            <h2 className="font-display font-light text-lg mb-4" style={{ color: 'var(--color-text)' }}>
              Livraison
            </h2>
            <div className="space-y-4">
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                <p style={{ color: 'var(--color-text)', fontWeight: 400, marginBottom: '4px' }}>France métropolitaine</p>
                <p>Livraison offerte dès 200 € — Sinon 9,90 €<br />Délai : 3 à 7 jours ouvrés</p>
              </div>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                <p style={{ color: 'var(--color-text)', fontWeight: 400, marginBottom: '4px' }}>Europe (UE)</p>
                <p>14,90 €<br />Délai : 5 à 10 jours ouvrés</p>
              </div>
              <div>
                <p style={{ color: 'var(--color-text)', fontWeight: 400, marginBottom: '4px' }}>International</p>
                <p>Sur devis — Contactez-nous</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-4" style={{ color: 'var(--color-text)' }}>
              Retours
            </h2>
            <p>
              Vous disposez de 14 jours à compter de la réception de votre commande
              pour effectuer un retour. Les articles doivent être retournés dans leur
              état d&apos;origine, non portés, avec les étiquettes attachées.
            </p>
            <p className="mt-3">
              Pour initier un retour, envoyez un email à contact@maisonmiraa.com
              avec votre numéro de commande. Nous vous transmettrons une étiquette
              de retour prépayée.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-4" style={{ color: 'var(--color-text)' }}>
              Remboursement
            </h2>
            <p>
              Le remboursement est effectué sous 14 jours après réception et
              vérification du retour, via le même moyen de paiement utilisé lors
              de la commande.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
