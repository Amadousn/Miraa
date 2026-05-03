'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isTouch, setIsTouch] = useState(false)

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Détection touch — côté client uniquement pour éviter le mismatch SSR
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6)
      cursorY.set(e.clientY - 6)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <motion.div
      style={{
        x,
        y,
        position: 'fixed',
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--color-gold)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'multiply',
      }}
    />
  )
}
