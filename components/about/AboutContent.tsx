'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal } from '@/lib/animations'

const timeline = [
  {
    year: '2019',
    title: "La traversée",
    description:
      "Miraa naît d'une conviction forgée entre Amsterdam et Milan : l'élégance masculine n'a pas de nationalité, elle a une mémoire.",
  },
  {
    year: '2021',
    title: 'Les premiers ateliers',
    description:
      "Installation à Paris. Premiers partenariats avec des ateliers en France, en Italie et au Portugal. La ligne Essentiels prend forme.",
  },
  {
    year: '2023',
    title: 'Maison Miraa',
    description:
      'Lancement du site. Douze pièces permanentes. Deux drops par an. La maison devient publique — sans jamais devenir ordinaire.',
  },
  {
    year: '2026',
    title: 'Été 2026',
    description:
      "La nouvelle collection s'ouvre vers le soleil sans perdre sa structure. Huit références. Une évidence.",
  },
]

const influences = [
  {
    city: 'Amsterdam',
    description:
      "La géométrie des façades. La sobriété protestante. Un rapport au vêtement comme à l'architecture — fonctionnel d'abord, beau par nécessité.",
    image: 'https://picsum.photos/seed/miraa-amsterdam-city/900/900',
  },
  {
    city: 'Milan',
    description:
      "Le geste du tailleur. La laine qui tombe. Un savoir-faire transmis comme une langue, dans le silence des ateliers du Quadrilatero.",
    image: 'https://picsum.photos/seed/miraa-milan-city/900/900',
  },
]

export function AboutContent() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/lamaison.jpg"
          alt="Maison Miraa"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 15%' }}
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
            Maison Miraa — Paris
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display font-light italic text-[var(--color-text-inverse)] leading-tight"
            style={{ fontSize: 'var(--text-3xl)' }}
          >
            Une obsession<br />
            de la silhouette.
          </motion.h1>
        </motion.div>
      </section>

      {/* Intro */}
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
              Il y a des maisons que l'on n'oublie pas.{' '}
              <em>Celles qui sentent quelque chose — le lin repassé, l'encre fraîche, la pierre froide.</em>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed mb-6"
            >
              Miraa est née d'une traversée. De canaux hollandais vus au petit matin, de portiques
              milanais où le soleil dessine des ombres parfaites sur la laine. D'une conviction :
              l'élégance masculine n'a pas de nationalité, elle a une mémoire.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-[var(--color-text-muted)] font-light leading-relaxed"
            >
              La maison s'est installée à Paris comme on pose une valise qu'on ne défait qu'à moitié —
              gardant l'œil tourné vers l'ailleurs, les mains ancrées dans l'atelier.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Manifeste */}
      <section className="section bg-[var(--color-surface-dark)]" id="manifeste">
        <div className="container-tight">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-muted)] mb-8 font-body"
            >
              Manifeste
            </motion.p>
            <motion.blockquote
              variants={fadeInUp}
              className="font-display font-light italic text-[var(--color-text-inverse)] leading-tight mb-12"
              style={{ fontSize: 'var(--text-2xl)' }}
            >
              "Nous ne fabriquons pas des vêtements.<br />
              Nous construisons des silhouettes<br />
              que les salles se rappellent."
            </motion.blockquote>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { n: '01', t: 'La coupe comme langue', d: "Amsterdam pour la structure. Milan pour la fluidité. Un dialogue entre deux rigueurs." },
                { n: '02', t: "L'absence comme présence", d: "Ce que Miraa retire d'une pièce vaut autant que ce qu'elle y met." },
                { n: '03', t: 'Le temps comme matière', d: "Des collections conçues pour vieillir mieux que leur époque." },
                { n: '04', t: 'Paris comme arbitre', d: "La ville qui a toujours su distinguer ce qui dure de ce qui brille." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4">
                  <span className="font-body text-[10px] uppercase tracking-widest text-[var(--color-accent-muted)] mt-1 shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-display font-light text-[var(--color-text-inverse)] mb-1">{item.t}</p>
                    <p className="text-sm text-[var(--color-text-faint)] font-light leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </motion.div>
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
            L'histoire
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
                <p className="font-display font-light mb-2" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-accent-muted)' }}>
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

      {/* Influences */}
      <section id="influences" className="section">
        <div className="container-miraa">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display font-light text-[var(--color-text)] mb-4"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            Les deux influences
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-[var(--color-text-muted)] font-light mb-16 max-w-lg"
          >
            Miraa ne vient pas d'un seul endroit. Elle est le résultat d'un dialogue entre deux villes
            qui ne se ressemblent pas mais se respectent.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {influences.map((inf, i) => (
              <motion.div
                key={inf.city}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative aspect-square overflow-hidden mb-6">
                  <Image
                    src={inf.image}
                    alt={inf.city}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-muted)] mb-2 font-body">
                  Origine
                </p>
                <h3 className="font-display font-light text-[var(--color-text)] mb-3" style={{ fontSize: 'var(--text-xl)' }}>
                  {inf.city}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] font-light leading-relaxed">
                  {inf.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour celui qui sait */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-tight">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-6 font-body"
            >
              Pour celui qui sait
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="font-display font-light italic text-[var(--color-text)] leading-relaxed"
              style={{ fontSize: 'var(--text-xl)' }}
            >
              Miraa s'adresse à l'homme qui n'a plus rien à prouver —<br />
              seulement à choisir.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
