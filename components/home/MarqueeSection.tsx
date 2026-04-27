const items = [
  'Amsterdam — Milan — Paris',
  'La coupe comme langue',
  'Des silhouettes que les salles se rappellent',
  "L'absence comme présence",
  'Pour celui qui n\'a plus rien à prouver',
  'Le temps comme matière',
  'Maison Miraa',
  'Ce qui tombe juste ne s\'explique pas',
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
              style={{ backgroundColor: 'rgba(212,184,150,0.55)' }}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </section>
  )
}
