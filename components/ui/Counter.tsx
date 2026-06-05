'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  value: string
}

export default function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-40px',
  })

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  const [count, setCount] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!inView || !target) return

    let startTime: number | null = null
    let frameId: number

    const duration = 1800

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      )

      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(target * easedProgress))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
        setFinished(true)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [inView, target])

  return (
    <span
      ref={ref}
      style={{
        fontVariantNumeric: 'tabular-nums',
        fontFeatureSettings: '"tnum" 1',
      }}
    >
      {finished ? value : `${count}${suffix}`}
    </span>
  )
}