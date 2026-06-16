'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { TRANSFORMATIONS } from '@/lib/data'

export default function Transformation() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 lg:px-10 bg-cream">
      <SectionHeading
        eyebrow="see the results"
        title="Real Transformations"
        sub="Every student starts somewhere. Here's what 30 days of guided practice looks like."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TRANSFORMATIONS.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, boxShadow: '0 20px 44px rgba(11,42,192,0.14)' }}
            transition={{ duration: 0.2 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer border"
            style={{ borderColor: 'rgba(11,42,192,0.10)', boxShadow: '0 4px 18px rgba(11,42,192,0.08)' }}
            onClick={() => setActive(i)}
          >
            <img
              src={t.img}
              alt={t.alt}
              className="w-full object-cover"
              style={{ height: '360px', objectPosition: 'top' }}
            />
            {/* Bottom label */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{ background: 'linear-gradient(to top, rgba(6,16,61,0.92), transparent)' }}
            >
              <p className="text-white font-bold text-sm" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{t.name}</p>
              <p className="text-white/70 text-xs">{t.program}</p>
            </div>
            {/* Zoom hint */}
            <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2.5 py-1 flex items-center gap-1 text-[10px] font-bold text-[#0B2AC0]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="11" height="11" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              View
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            style={{ background: 'rgba(6,16,61,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-lg w-full"
            >
              <img
                src={TRANSFORMATIONS[active].img}
                alt={TRANSFORMATIONS[active].alt}
                className="w-full rounded-2xl"
                style={{ maxHeight: '85vh', objectFit: 'contain' }}
              />
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#0B2AC0" strokeWidth="2.5" strokeLinecap="round" width="16" height="16" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="mt-3 text-center">
                <p className="text-white font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {TRANSFORMATIONS[active].name} · {TRANSFORMATIONS[active].program}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
