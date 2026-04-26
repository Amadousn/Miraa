'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Leaf, Compass, BadgeCheck } from 'lucide-react'
import { fadeInUp, staggerContainerHero } from '@/lib/animations'

const VIDEO_URL = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || null
const FALLBACK_SRC = 'https://picsum.photos/seed/miraa-man-fashion/1920/1080'

/* ── Features bar data ── */
const features = [
  {
    icon: <Leaf size={16} strokeWidth={1.25} />,
    title: 'Matières sélectionnées',
    description: 'Durables & responsables',
  },
  {
    icon: <Compass size={16} strokeWidth={1.25} />,
    title: 'Design intemporel',
    description: 'Épuré, fonctionnel, essentiel',
  },
  {
    icon: <BadgeCheck size={16} strokeWidth={1.25} />,
    title: 'Conçu pour durer',
    description: 'Qualité, dans les moindres détails',
  },
]

export function HeroSection() {
  const [imgSrc, setImgSrc] = useState('/hero.jpg')

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── IMAGE DE FOND ── */}
      {VIDEO_URL ? (
        <video
          autoPlay muted loop playsInline poster="/hero.jpg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(1.12) contrast(0.96) saturate(0.95)',
          }}
        >
          <source src={VIDEO_URL} type="video/webm" />
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={imgSrc}
          alt="Miraa — La matière avant tout"
          fill
          priority
          onError={() => setImgSrc(FALLBACK_SRC)}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(1.12) contrast(0.96) saturate(0.95)',
          }}
        />
      )}

      {/* ── OVERLAY — gradient horizontal subtil + voile chaud ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              90deg,
              rgba(45,38,32,0.38) 0%,
              rgba(45,38,32,0.20) 28%,
              rgba(45,38,32,0.08) 52%,
              rgba(45,38,32,0.02) 100%
            ),
            rgba(210,190,165,0.08)
          `,
        }}
      />

      {/* ── CONTENU PRINCIPAL ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '9%',
          paddingRight: '5%',
          paddingBottom: '5%',
        }}
      >
        <motion.div
          variants={staggerContainerHero}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 520 }}
        >
          {/* Label */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,250,240,0.78)',
              marginBottom: '20px',
            }}
          >
            Nouvelle Collection Été 2025
          </motion.p>

          {/* Titre */}
          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(58px, 7.5vw, 108px)',
              lineHeight: 0.97,
              letterSpacing: '-0.01em',
              color: 'rgba(255,250,240,0.92)',
              marginBottom: '24px',
            }}
          >
            La matière<br />
            avant tout.
          </motion.h1>

          {/* Sous-texte */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.62,
              color: 'rgba(255,250,240,0.82)',
              letterSpacing: '0.01em',
              marginBottom: '40px',
            }}
          >
            Des pièces qui existent.<br />
            Silence, matière, présence.
          </motion.p>

          {/* Boutons */}
          <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <Link
              href="/shop"
              style={{
                height: '56px',
                padding: '0 36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                border: '1px solid rgba(255,255,255,0.55)',
                color: 'rgba(255,255,255,0.92)',
                background: 'rgba(205,190,165,0.45)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(205,190,165,0.58)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(205,190,165,0.45)'
              }}
            >
              Découvrir la collection
            </Link>

            <Link
              href="/about"
              style={{
                height: '56px',
                padding: '0 36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                border: '1px solid rgba(255,255,255,0.55)',
                color: 'rgba(255,255,255,0.92)',
                background: 'transparent',
                transition: 'background 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(205,190,165,0.58)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Notre histoire
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── FEATURES BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(25,22,18,0.32)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,255,255,0.16)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--content-wide)',
            marginInline: 'auto',
            paddingInline: 'var(--space-6)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {features.map((feat, i) => (
            <div
              key={feat.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                paddingBlock: '18px',
                paddingLeft: i === 0 ? 0 : '32px',
                paddingRight: i === 2 ? 0 : '32px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}
            >
              {/* Icône cercle */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.86)',
                  flexShrink: 0,
                }}
              >
                {feat.icon}
              </div>

              {/* Texte */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '11px',
                    letterSpacing: '0.11em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '3px',
                    lineHeight: 1.3,
                  }}
                >
                  {feat.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.56)',
                    lineHeight: 1.4,
                  }}
                >
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
