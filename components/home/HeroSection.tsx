'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, staggerContainerHero } from '@/lib/animations'

const VIDEO_URL = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || null
const FALLBACK_SRC = 'https://picsum.photos/seed/miraa-man-fashion/1920/1080'

export function HeroSection() {
  const [imgSrc, setImgSrc] = useState('/hero.jpg')

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="hero-sharpen" colorInterpolationFilters="sRGB">
            <feConvolveMatrix order="3" kernelMatrix="0 -0.5 0  -0.5 3 -0.5  0 -0.5 0" preserveAlpha="true" />
          </filter>
        </defs>
      </svg>

      {VIDEO_URL ? (
        <video autoPlay muted loop playsInline poster="/hero.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '55% 25%', filter: 'url(#hero-sharpen) brightness(1.05) contrast(0.97) saturate(0.93)' }}
        >
          <source src={VIDEO_URL} type="video/webm" />
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      ) : (
        <Image src={imgSrc} alt="Maison Miraa" fill priority quality={92}
          onError={() => setImgSrc(FALLBACK_SRC)}
          style={{ objectFit: 'cover', objectPosition: '55% 25%', filter: 'url(#hero-sharpen) brightness(1.05) contrast(0.97) saturate(0.93)' }}
        />
      )}

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, rgba(20,14,8,0.82) 0%, rgba(20,14,8,0.62) 35%, rgba(20,14,8,0.22) 62%, rgba(20,14,8,0.02) 100%), linear-gradient(180deg, rgba(20,14,8,0.25) 0%, transparent 35%)` }} />

      {/* Film grain */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.035, pointerEvents: 'none', mixBlendMode: 'overlay' }} />

      {/* Contenu */}
      <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', alignItems: 'center', paddingLeft: 'clamp(48px, 9%, 140px)', paddingRight: '5%', paddingBottom: '0', paddingTop: '80px' }}>
        <motion.div variants={staggerContainerHero} initial="hidden" animate="visible" style={{ maxWidth: 560, display: 'flex', flexDirection: 'column' }}>

          <motion.p variants={fadeInUp} style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(212,184,150,0.80)', marginBottom: '16px' }}>
            Maison Miraa — Paris
          </motion.p>

          <motion.h1 variants={fadeInUp} style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(76px, 8.5vw, 128px)', lineHeight: 0.90, letterSpacing: '-0.03em', color: 'rgba(255,250,240,0.98)', marginBottom: '24px' }}>
            L&apos;élégance<br />
            sans effort.
          </motion.h1>

          <motion.p variants={fadeInUp} style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,243,225,0.60)', letterSpacing: '0.04em', textTransform: 'uppercase', maxWidth: '320px', marginBottom: '36px' }}>
            L&apos;essentiel, parfaitement exécuté.
          </motion.p>

          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/shop" style={{ height: '46px', padding: '0 34px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 400, border: 'none', color: 'rgba(255,250,240,0.97)', background: 'rgba(130,92,55,0.65)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', transition: 'background 0.3s ease', textDecoration: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(130,92,55,0.85)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(130,92,55,0.65)' }}
            >
              Découvrir la collection
            </Link>

            <Link href="/about" style={{ height: '46px', padding: '0 26px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 300, border: '1px solid rgba(255,250,240,0.28)', color: 'rgba(255,250,240,0.72)', background: 'transparent', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', transition: 'background 0.3s ease, border-color 0.3s ease', textDecoration: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,250,240,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,250,240,0.48)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,250,240,0.28)' }}
            >
              La Maison
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
