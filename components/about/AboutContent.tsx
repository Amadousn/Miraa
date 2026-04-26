'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal } from '@/lib/animations'

const timeline = [
  {
    year: '2019',
    title: "L'idée",
    description:
      "Miraa naît du refus d'un fondateur qui ne trouvait pas ce qu'il cherchait : des pièces qui durent, sans compromis sur la matière.",
  },
  {
    year: '2021',
    title: 'Premiers ateliers',
    description:
      'Premiers partenariats avec des ateliers en France et au Portugal. Début de la ligne Essentiels.',
  },
  {
    year: '2023',
    title: 'Ouverture en ligne',
    description:
      'Lancement du site Miraa.fr. La collection compte 12 pièces permanentes et deux drops saisonniers par an.',
  },
  {
    year: '2025',
    title: 'Automne–Hiver',
    description:
      "La nouvelle collection AH25 introduit le cachemire et élargit la gamme manteaux. 8 nouvelles références.",
  },
]

export function AboutContent() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://picsum.photos/seed/miraa-about/1920/1080"
          alt="La Maison Miraa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/80 via-[#2C1A0E]/30 to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 left-0 right-0 container-miraa pb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-muted)] mb-3 font-body"
          >
            La Maison
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display font-light italic text-[var(--color-text-inverse)] leading-tight"
            style={{ fontSize: 'var(--text-3xl)' }}
          >
            Une obsession <br />
            pour la matière.
          </motion.h1>
        </motion.div>
      </section>

      {/* Manifeste */}
      <section className="section">
        <div className="container-tight">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-2xl mx-auto"
          >
            <motion.p
              variants={fadeInUp}
              className="font-display font-light leading-relaxed text-[var(--color-text)] mb-6"
              style={{ fontSize: 'var(--text-xl)' }}
            >
              Miraa est née d'un constat simple :{' '}
              <em>la plupart des vêtements ne méritent pas d'être portés.</em>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed mb-6"
            >
              Pas parce qu'ils sont moches. Parce qu'ils sont creux. Assemblés vite, en fibres
              synthétiques, pour une saison. Puis oubliés dans un placard, puis jetés.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed mb-6"
            >
              Miraa propose l'inverse. Des pièces pensées pour s'améliorer avec l'usage.
              Du lin qui s'assouplit. De la laine qui se patine. Du cuir qui prend la forme
              de celui qui le porte. Une garde-robe de caractère, pas de circonstance.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed"
            >
              La matière, avant tout. Pas le logo. Pas la tendance. Pas le prix gonflé
              par un marketing agressif. Juste la matière, la coupe, et le temps long.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-miraa">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display font-light text-[var(--color-text)] mb-16"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            Notre histoire
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08 }}
              >
                <p
                  className="font-display font-light mb-2"
                  style={{
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--color-accent-muted)',
                  }}
                >
                  {item.year}
                </p>
                <h3 className="font-display font-light text-lg text-[var(--color-text)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matières */}
      <section id="matieres" className="section">
        <div className="container-miraa">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/miraa-matieres/900/900"
                alt="Nos matières"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-4 font-body"
              >
                Engagement
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-light text-[var(--color-text)] mb-6 leading-tight"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                Sourcing <br />
                responsable.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base text-[var(--color-text-muted)] font-light leading-relaxed mb-4"
              >
                Nous travaillons uniquement avec des fournisseurs que nous avons visités.
                Pas de traçabilité de façade : nous connaissons les ateliers, les artisans,
                et les filières de production de chaque fibre.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base text-[var(--color-text-muted)] font-light leading-relaxed"
              >
                Nos matières — lin portugais, laine mérinos italienne, cachemire mongol,
                coton selvedge japonais — sont sélectionnées pour leur qualité intrinsèque,
                pas pour leur image.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
