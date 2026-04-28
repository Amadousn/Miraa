'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1
          className="font-display font-light"
          style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text)', marginBottom: '12px' }}
        >
          Une erreur est survenue
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
          Nous nous excusons pour la gêne occasionnée.
        </p>
        <button
          onClick={reset}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-text-inverse)',
            background: 'var(--color-surface-dark)',
            padding: '14px 32px',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }}
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
