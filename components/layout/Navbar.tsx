'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'

/* Pages avec hero sombre — navbar démarre en blanc */
const DARK_HERO_PAGES = ['/']

const navLinks = [
  { href: '/shop', label: 'Collection', comingSoon: false },
  { href: '/shop?collection=essentiels', label: 'Essentiels', comingSoon: true },
  { href: '/shop?collection=ete', label: 'Été 2026', comingSoon: true },
  { href: '/about', label: 'La Maison', comingSoon: false },
]

/* Hauteur navbar réduite pour coller au mockup */
const NAV_H = 'h-14'

export function Navbar() {
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const isHeroPage = DARK_HERO_PAGES.includes(pathname)

  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(245,239,230,0)', 'rgba(245,239,230,0.92)']
  )
  const navBorderOpacity = useTransform(scrollY, [0, 80], [0.4, 1])

  useEffect(() => {
    setMounted(true)

    // Initialiser le count et s'abonner aux changements du store
    const getCount = () =>
      useCartStore.getState().items.reduce((a, i) => a + i.quantity, 0)
    setCartCount(getCount())
    const unsubCart = useCartStore.subscribe(() => setCartCount(getCount()))

    const unsubScroll = scrollY.on('change', (v) => setIsScrolled(v > 40))

    return () => {
      unsubCart()
      unsubScroll()
    }
  }, [scrollY])

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]"
      >
        <motion.div
          style={{
            opacity: navBorderOpacity,
            backgroundColor: (isScrolled || !isHeroPage) ? 'var(--color-border)' : 'rgba(255,255,255,0.18)',
          }}
          className="absolute bottom-0 left-0 right-0 h-px"
        />

        <div className={`container-miraa flex items-center justify-between ${NAV_H}`}>
          {/* Logo — Cormorant italic, uppercase tracké comme dans le mockup */}
          <Link
            href="/"
            className="font-display font-light transition-opacity duration-200 hover:opacity-70"
            style={{
              fontSize: '32px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: (isScrolled || !isHeroPage) ? 'var(--color-text)' : 'rgba(255,248,235,1)',
              textShadow: (isScrolled || !isHeroPage) ? 'none' : '0 1px 12px rgba(30,20,10,0.35)',
            }}
          >
            Miraa
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              link.comingSoon ? (
                <span
                  key={link.href}
                  className="font-body font-light relative"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: (isScrolled || !isHeroPage) ? 'var(--color-text-faint)' : 'rgba(255,248,235,0.45)',
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {link.label}
                  <span style={{
                    fontSize: '8px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: (isScrolled || !isHeroPage) ? 'var(--color-accent-muted)' : 'rgba(212,184,150,0.70)',
                    border: `1px solid ${(isScrolled || !isHeroPage) ? 'var(--color-accent-muted)' : 'rgba(212,184,150,0.40)'}`,
                    padding: '2px 5px',
                    lineHeight: 1.4,
                  }}>
                    Soon
                  </span>
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body font-light transition-opacity duration-200 hover:opacity-50"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: (isScrolled || !isHeroPage) ? 'var(--color-text-muted)' : 'rgba(255,248,235,0.95)',
                    textShadow: (isScrolled || !isHeroPage) ? 'none' : '0 1px 8px rgba(30,20,10,0.4)',
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Icons right */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Rechercher"
              className="p-1 transition-opacity duration-200 hover:opacity-50"
              style={{ color: (isScrolled || !isHeroPage) ? 'var(--color-text)' : 'white' }}
            >
              <Search size={16} strokeWidth={1.25} />
            </button>

            <Link
              href="/wishlist"
              aria-label="Liste de souhaits"
              className="p-1 transition-opacity duration-200 hover:opacity-50"
              style={{ color: (isScrolled || !isHeroPage) ? 'var(--color-text)' : 'white' }}
            >
              <Heart size={16} strokeWidth={1.25} />
            </Link>

            <Link
              href="/cart"
              aria-label={`Panier${mounted && cartCount > 0 ? `, ${cartCount} article${cartCount > 1 ? 's' : ''}` : ''}`}
              className="relative p-1 transition-opacity duration-200 hover:opacity-50"
              style={{ color: (isScrolled || !isHeroPage) ? 'var(--color-text)' : 'white' }}
            >
              <ShoppingBag size={16} strokeWidth={1.25} />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[var(--color-accent)] text-[var(--color-text-inverse)] text-[10px] flex items-center justify-center font-body font-400">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Burger — mobile */}
            <button
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-1 transition-opacity duration-200 hover:opacity-50"
              style={{ color: (isScrolled || !isHeroPage) ? 'var(--color-text)' : 'white' }}
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[var(--color-surface-dark)] flex flex-col pt-20 px-8"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, type: 'spring', damping: 25 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  {link.comingSoon ? (
                    <span className="font-display text-3xl font-light" style={{ color: 'rgba(255,248,235,0.35)' }}>
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-3xl font-light text-[var(--color-text-inverse)] hover:opacity-60 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.comingSoon && (
                    <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(212,184,150,0.55)', border: '1px solid rgba(212,184,150,0.30)', padding: '3px 7px' }}>
                      Soon
                    </span>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
