const items = [
  'Savoir-faire français',
  'Matières nobles',
  'Coupe intemporelle',
  'Production éthique',
  'Fait en Europe',
  'Silence, matière, présence',
  'La matière avant tout',
  'Garde-robe de caractère',
]

export function MarqueeSection() {
  const doubled = [...items, ...items]

  return (
    <section className="py-8 border-y border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-body font-300 px-8">
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--color-accent)' }}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </section>
  )
}
