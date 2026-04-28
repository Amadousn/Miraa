import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Miraa',
  description: 'Questions fréquentes sur les commandes, livraisons et retours Maison Miraa.',
}

const faqs = [
  {
    q: 'Comment passer commande ?',
    a: 'Sélectionnez votre article, choisissez votre taille, puis ajoutez-le au panier. Finalisez votre commande via notre paiement sécurisé.',
  },
  {
    q: 'Quels sont les délais de livraison ?',
    a: 'Les commandes sont expédiées sous 3 à 5 jours ouvrés. La livraison en France métropolitaine prend généralement 2 à 4 jours supplémentaires.',
  },
  {
    q: 'La livraison est-elle offerte ?',
    a: 'Oui, la livraison est offerte en France métropolitaine pour toute commande supérieure à 200 €.',
  },
  {
    q: 'Comment effectuer un retour ?',
    a: 'Vous disposez de 14 jours après réception pour retourner un article. Contactez-nous à contact@maisonmiraa.com pour obtenir une étiquette de retour.',
  },
  {
    q: 'Comment choisir ma taille ?',
    a: 'Consultez notre guide des tailles pour trouver la coupe idéale. En cas de doute, n\'hésitez pas à nous contacter.',
  },
  {
    q: 'Les articles sont-ils fabriqués en Europe ?',
    a: 'Oui. Nos pièces sont confectionnées dans des ateliers partenaires en France, en Italie et au Portugal, à partir de matières premières sélectionnées.',
  },
  {
    q: 'Comment entretenir mes vêtements Miraa ?',
    a: 'Chaque article dispose d\'instructions d\'entretien spécifiques sur sa fiche produit. De manière générale, nous recommandons un lavage délicat ou un nettoyage à sec.',
  },
]

export default function FAQPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '48px' }}
        >
          Questions fréquentes
        </h1>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid var(--color-border)',
                paddingBlock: '24px',
              }}
            >
              <h2
                className="font-display font-light"
                style={{ fontSize: '17px', color: 'var(--color-text)', marginBottom: '8px' }}
              >
                {faq.q}
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: 'var(--color-text-muted)' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
