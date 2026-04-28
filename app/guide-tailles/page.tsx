import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide des tailles — Miraa',
  description: 'Trouvez votre taille idéale avec le guide des tailles Maison Miraa.',
}

export default function GuideTaillesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-miraa" style={{ maxWidth: '720px' }}>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', marginBottom: '16px' }}
        >
          Guide des tailles
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: '48px', maxWidth: '480px' }}>
          Nos pièces sont conçues avec une coupe légèrement ample. En cas de doute entre deux tailles, nous vous recommandons de prendre la taille inférieure.
        </p>

        {/* Hauts */}
        <section style={{ marginBottom: '48px' }}>
          <h2 className="font-display font-light text-lg mb-4" style={{ color: 'var(--color-text)' }}>
            Hauts — T-shirts & chemises
          </h2>
          <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-text)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Taille</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Tour de poitrine</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Tour de taille</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Longueur</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}>
                {[
                  ['S', '88-92 cm', '76-80 cm', '68 cm'],
                  ['M', '93-97 cm', '81-85 cm', '70 cm'],
                  ['L', '98-102 cm', '86-90 cm', '72 cm'],
                  ['XL', '103-107 cm', '91-95 cm', '74 cm'],
                ].map(([size, chest, waist, length]) => (
                  <tr key={size} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--color-text)', fontWeight: 400 }}>{size}</td>
                    <td style={{ textAlign: 'center', padding: '12px 16px' }}>{chest}</td>
                    <td style={{ textAlign: 'center', padding: '12px 16px' }}>{waist}</td>
                    <td style={{ textAlign: 'center', padding: '12px 16px' }}>{length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pantalons */}
        <section style={{ marginBottom: '48px' }}>
          <h2 className="font-display font-light text-lg mb-4" style={{ color: 'var(--color-text)' }}>
            Pantalons
          </h2>
          <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-text)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Taille</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Tour de taille</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Tour de hanches</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: 'var(--color-text-faint)' }}>Entrejambe</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}>
                {[
                  ['44', '76-78 cm', '94-96 cm', '82 cm'],
                  ['46', '80-82 cm', '98-100 cm', '82 cm'],
                  ['48', '84-86 cm', '102-104 cm', '83 cm'],
                  ['50', '88-90 cm', '106-108 cm', '83 cm'],
                  ['52', '92-94 cm', '110-112 cm', '84 cm'],
                ].map(([size, waist, hips, inseam]) => (
                  <tr key={size} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--color-text)', fontWeight: 400 }}>{size}</td>
                    <td style={{ textAlign: 'center', padding: '12px 16px' }}>{waist}</td>
                    <td style={{ textAlign: 'center', padding: '12px 16px' }}>{hips}</td>
                    <td style={{ textAlign: 'center', padding: '12px 16px' }}>{inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'var(--color-text-faint)', lineHeight: 1.6 }}>
          Pour toute question sur les tailles, contactez-nous à contact@maisonmiraa.com
        </p>
      </div>
    </div>
  )
}
