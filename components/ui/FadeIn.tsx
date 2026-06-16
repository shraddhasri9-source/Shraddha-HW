'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const dir = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
}

export default function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...dir[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.25, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
