'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROGRAMS, type Program } from '@/lib/data'
import { PROGRAM_ICONS } from '@/components/ui/icons'
import { TravelCard } from '@/components/ui/card-7'
import SectionHeading from '@/components/ui/SectionHeading'

// ── Program detail modal ──────────────────────────────────────────────────────
function ProgramModal({ program, onClose }: { program: Program | null; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (program) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [program, onClose])

  const isCalli = program?.category === 'calligraphy'
  const accent = isCalli ? '#E0A407' : '#0B2AC0'
  const accentPale = isCalli ? '#FEF7E0' : '#EEF1FB'

  return (
    // AnimatePresence wraps the conditional — no early return before it
    <AnimatePresence>
      {program && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
          style={{ background: 'rgba(6,16,61,0.55)', backdropFilter: 'blur(6px)' }}
          role="dialog"
          aria-modal="true"
          aria-label={program.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-lg max-h-[88vh] overflow-y-auto"
            style={{ borderTop: `5px solid ${accent}` }}
          >
            {/* Header */}
            <div className="px-7 pt-7 flex items-start gap-4">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-2xl"
                style={{ width: 52, height: 52, background: accentPale }}
              >
                {PROGRAM_ICONS[program.slug]}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: accent }}>
                  {isCalli ? 'Calligraphy Program' : 'Handwriting Program'}
                </span>
                <h3 className="font-extrabold text-[23px] leading-tight" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>
                  {program.name}
                </h3>
              </div>
            </div>

            <p className="px-7 pt-3 italic text-[14px]" style={{ color: '#4A5980' }}>{program.tagline}</p>
            <p className="px-7 pt-2 pb-1 text-[14px] leading-[1.75]" style={{ color: '#4A5980' }}>{program.overview}</p>

            {/* Curriculum */}
            <div className="px-7 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
                What You&apos;ll Learn
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {program.curriculum.map(mod => (
                  <div key={mod.title} className="rounded-xl p-3" style={{ background: accentPale }}>
                    <p className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{ color: accent }}>{mod.title}</p>
                    {mod.topics.map(t => (
                      <p key={t} className="text-[12px] leading-relaxed" style={{ color: '#4A5980' }}>· {t}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="px-7 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: accent }}>Benefits</p>
              <div className="flex flex-wrap gap-2">
                {program.benefits.map(b => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 text-[12px] rounded-full px-3 py-1"
                    style={{ color: '#0F2566', background: '#F4F7FF', border: '1px solid rgba(11,42,192,0.10)' }}
                  >
                    <svg viewBox="0 0 16 16" fill="none" width="10" height="10" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill={accent} opacity=".2" />
                      <polyline points="4.5 8 7 10.5 11.5 5.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 px-7 py-6">
              <button
                onClick={() => { onClose(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="flex-1 flex items-center justify-center gap-2 font-bold text-[14px] text-white py-3 rounded-xl transition-opacity hover:opacity-90"
                style={{ background: accent, fontFamily: 'Fraunces, Georgia, serif' }}
              >
                Book Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 font-bold text-[14px] py-3 rounded-xl border transition-colors"
                style={{ color: '#0B2AC0', borderColor: 'rgba(11,42,192,0.22)', fontFamily: 'Fraunces, Georgia, serif', background: 'white' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#0B2AC0')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(11,42,192,0.22)')}
              >
                Close
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function FeaturedCards() {
  const [active, setActive] = useState<Program | null>(null)

  const handwriting = PROGRAMS.filter(p => p.category === 'handwriting')
  const calligraphy = PROGRAMS.filter(p => p.category === 'calligraphy')

  return (
    <section className="scroll-mt-20">

      {/* ── Handwriting Programs ── */}
      <div id="handwriting" className="py-16 px-6 lg:px-10 bg-paper scroll-mt-20">
        <SectionHeading eyebrow="everyday writing" title="Handwriting Programs" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {handwriting.map(p => (
            <TravelCard
              key={p.slug}
              badge="Free Demo"
              badgeColor="#0B2AC0"
              badgeBg="#EEF1FB"
              icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[p.slug]}</div>}
              title={p.name}
              subtitle={p.short}
              overview={p.overview.slice(0, 120) + '…'}
              accentColor="#0B2AC0"
              accentPale="#EEF1FB"
              onLearnMore={() => setActive(p)}
            />
          ))}
        </div>
      </div>

      {/* ── Calligraphy Programs ── */}
      <div id="calligraphy" className="py-16 px-6 lg:px-10 bg-cream scroll-mt-20">
        <SectionHeading eyebrow="the art of lettering" title="Calligraphy Programs" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {calligraphy.map(p => (
            <TravelCard
              key={p.slug}
              badge="Free Demo"
              badgeColor="#E0A407"
              badgeBg="#FEF7E0"
              icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[p.slug]}</div>}
              title={p.name}
              subtitle={p.short}
              overview={p.overview.slice(0, 120) + '…'}
              accentColor="#E0A407"
              accentPale="#FEF7E0"
              onLearnMore={() => setActive(p)}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <ProgramModal program={active} onClose={() => setActive(null)} />
    </section>
  )
}
