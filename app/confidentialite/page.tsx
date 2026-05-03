import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Miraa',
  description: 'Politique de confidentialité et protection des données personnelles de Maison Miraa.',
}

export default function ConfidentialitePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '48px' }}
        >
          Politique de confidentialité
        </h1>

        <div className="space-y-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Responsable du traitement
            </h2>
            <p>
              Ali-Erdem Eroglu, Entreprise individuelle (SIRET : 10338547200016),
              exploitant la marque Maison Miraa, 2 Rue des Grands Champs, France,
              est responsable du traitement de vos données personnelles dans le cadre
              de l&apos;utilisation de ce site et de ses services.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Données collectées
            </h2>
            <p>
              Lors de votre navigation ou de vos achats, nous pouvons collecter les données suivantes :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nom, prénom, adresse email</li>
              <li>Adresse de livraison et de facturation</li>
              <li>Numéro de téléphone</li>
              <li>Données de navigation (cookies, adresse IP)</li>
              <li>Historique de commandes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Finalités du traitement
            </h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Le traitement et le suivi de vos commandes</li>
              <li>La gestion de votre compte client</li>
              <li>L&apos;envoi de communications commerciales (avec votre consentement)</li>
              <li>L&apos;amélioration de nos services et de votre expérience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire aux
              finalités pour lesquelles elles ont été collectées, et conformément à la
              réglementation en vigueur. Les données liées aux commandes sont conservées
              pendant 5 ans à compter de la dernière commande.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              de suppression, de limitation du traitement, de portabilité et d&apos;opposition
              concernant vos données personnelles. Pour exercer ces droits, contactez-nous à :
              contact@maisonmiraa.com
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-lg mb-3" style={{ color: 'var(--color-text)' }}>
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies strictement nécessaires au fonctionnement du
              panier d&apos;achat et à la mémorisation de vos préférences. Aucun cookie
              publicitaire n&apos;est déposé sans votre consentement préalable.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
