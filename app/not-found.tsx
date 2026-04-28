import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p
          className="font-display font-light"
          style={{ fontSize: 'clamp(80px, 12vw, 160px)', color: 'var(--color-text-faint)', lineHeight: 1, marginBottom: '16px', opacity: 0.3 }}
        >
          404
        </p>
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text)', marginBottom: '12px' }}
        >
          Page introuvable
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-text-inverse)',
            background: 'var(--color-surface-dark)',
            padding: '14px 32px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'opacity 0.2s ease',
          }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
