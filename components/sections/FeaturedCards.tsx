'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROGRAMS, type Program } from '@/lib/data'
import { PROGRAM_ICONS } from '@/components/ui/icons'
import { TravelCard } from '@/components/ui/card-7'
import SectionHeading from '@/components/ui/SectionHeading'

// ── Program detail modal ──────────────────────────────────────────────────────
function ProgramModal({ program, onClose }: { program: Program | null; onClose: () => void }) {
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
    <AnimatePresence>
      {program && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
          style={{ background: 'rgba(6,16,61,0.55)', backdropFilter: 'blur(6px)' }}
          role="dialog" aria-modal="true" aria-label={program.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-lg max-h-[88vh] overflow-y-auto"
            style={{ borderTop: `5px solid ${accent}` }}
          >
            <div className="px-7 pt-7 flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center rounded-2xl" style={{ width: 52, height: 52, background: accentPale }}>
                {PROGRAM_ICONS[program.slug]}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: accent }}>
                  {isCalli ? 'Calligraphy Program' : 'Handwriting Program'}
                </span>
                <h3 className="font-extrabold text-[22px] leading-tight" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>
                  {program.name}
                </h3>
              </div>
            </div>

            <p className="px-7 pt-3 italic text-[13px]" style={{ color: '#4A5980' }}>{program.tagline}</p>
            <p className="px-7 pt-2 text-[13.5px] leading-[1.75]" style={{ color: '#4A5980' }}>{program.overview}</p>

            <div className="px-7 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>Course Steps</p>
              <div className="flex flex-col gap-3">
                {program.curriculum.map((mod, i) => (
                  <div key={mod.title} className="flex gap-3 rounded-xl p-3.5" style={{ background: accentPale }}>
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold text-[12px]"
                      style={{ width: 28, height: 28, background: accent, fontFamily: 'Fraunces, Georgia, serif', marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-[13px] mb-0.5" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>
                        Step {i + 1}: {mod.title}
                      </p>
                      {mod.topics.map(t => (
                        <p key={t} className="text-[12.5px] leading-relaxed" style={{ color: '#4A5980' }}>{t}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-7 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: accent }}>Benefits</p>
              <div className="flex flex-wrap gap-2">
                {program.benefits.map(b => (
                  <span key={b} className="inline-flex items-center gap-1.5 text-[12px] rounded-full px-3 py-1"
                    style={{ color: '#0F2566', background: '#F4F7FF', border: '1px solid rgba(11,42,192,0.10)' }}>
                    <svg viewBox="0 0 16 16" fill="none" width="10" height="10" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill={accent} opacity=".2" />
                      <polyline points="4.5 8 7 10.5 11.5 5.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 px-7 py-6">
              <button
                onClick={() => { onClose(); document.getElementById('book')?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }) }}
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

// ── Calligraphy Modal — same style as ProgramModal ───────────────────────────
function CalligraphyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const accent = '#E0A407'
  const accentPale = '#FEF7E0'

  const services = [
    { title: 'Wedding Invitations', desc: 'Elegant hand-lettered cards crafted for your special day, with beautifully styled scripts that match your wedding theme and create a lasting first impression for every guest.' },
    { title: 'Quote Art & Frames', desc: 'Inspirational quotes, meaningful words, or personal messages transformed into stunning wall art — perfect as a gift or as a centrepiece in your home or office.' },
    { title: 'Event Signage', desc: 'Hand-lettered signs, welcome boards, seating charts, and décor pieces for birthdays, baby showers, corporate events, and any celebration that deserves a personal touch.' },
    { title: 'Personalised Gifts', desc: 'Names, monograms, initials, and heartfelt messages lettered on cards, envelopes, gift tags, and keepsakes — making every gift feel uniquely crafted.' },
    { title: 'Modern Calligraphy', desc: 'Contemporary brush-pen lettering for personal projects, social media content, journals, branding, and creative art pieces that stand out with style and personality.' },
    { title: 'Classic Nib Lettering', desc: 'Traditional pointed-pen and broad-nib scripts including Copperplate, Italic, and Spencerian — ideal for formal documents, certificates, and timeless handcrafted pieces.' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
          style={{ background: 'rgba(6,16,61,0.55)', backdropFilter: 'blur(6px)' }}
          role="dialog" aria-modal="true" aria-label="Calligraphy Service"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-lg max-h-[88vh] overflow-y-auto"
            style={{ borderTop: `5px solid ${accent}` }}
          >
            {/* Header */}
            <div className="px-7 pt-7 flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center rounded-2xl" style={{ width: 52, height: 52, background: accentPale }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" aria-hidden="true">
                  <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
                  <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: accent }}>
                  Calligraphy Service
                </span>
                <h3 className="font-extrabold text-[22px] leading-tight" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>
                  Calligraphy Service
                </h3>
              </div>
            </div>

            <p className="px-7 pt-3 italic text-[13px]" style={{ color: '#4A5980' }}>
              Beautiful handcrafted lettering for weddings, events, gifts, and personal art.
            </p>
            <p className="px-7 pt-2 text-[13.5px] leading-[1.75]" style={{ color: '#4A5980' }}>
              Our trained calligraphers craft every piece with care and precision — from elegant wedding invitations to personalised gifts and framed quote art. Each creation is unique, handcrafted, and made to leave a lasting impression.
            </p>

            {/* All 6 services */}
            <div className="px-7 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>Our Services</p>
              <div className="flex flex-col gap-3">
                {services.map((s, i) => (
                  <div key={s.title} className="flex gap-3 rounded-xl p-3.5" style={{ background: accentPale }}>
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold text-[12px]"
                      style={{ width: 28, height: 28, background: accent, fontFamily: 'Fraunces, Georgia, serif', marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-[13px] mb-0.5" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>{s.title}</p>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: '#4A5980' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Now + Close */}
            <div className="flex gap-3 px-7 py-6">
              <button
                onClick={() => { onClose(); document.getElementById('book')?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }) }}
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
                style={{ color: accent, borderColor: 'rgba(224,164,7,0.30)', fontFamily: 'Fraunces, Georgia, serif', background: 'white' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(224,164,7,0.30)')}
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

// ── Calligraphy Service Card — opens modal just like handwriting cards ────────
function CalligraphyServiceCard({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 44px rgba(224,164,7,0.18)' }}
      transition={{ duration: 0.22 }}
      className="bg-white rounded-2xl overflow-hidden w-full"
      style={{ border: '1.5px solid rgba(224,164,7,0.25)', boxShadow: '0 4px 20px rgba(224,164,7,0.08)' }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-start gap-3" style={{ background: '#FEF7E0' }}>
        <div className="flex-shrink-0 flex items-center justify-center rounded-xl"
          style={{ width: 48, height: 48, background: 'white', boxShadow: '0 2px 10px rgba(224,164,7,0.20)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" aria-hidden="true">
            <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
            <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
          </svg>
        </div>
        <div className="flex-1">
          <span className="inline-block text-[10px] font-bold tracking-[1.5px] uppercase rounded-full px-2.5 py-1 mb-1.5"
            style={{ color: '#E0A407', background: 'rgba(224,164,7,0.15)' }}>
            Calligraphy
          </span>
          <h3 className="font-extrabold text-[18px] leading-tight" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>
            Calligraphy Service
          </h3>
          <p className="text-[12px] mt-0.5" style={{ color: 'rgba(224,164,7,0.8)' }}>
            Beautiful handcrafted lettering for every occasion
          </p>
        </div>
      </div>

      {/* Preview — 2 services always visible */}
      <div className="px-6 pt-4 pb-1 grid grid-cols-2 gap-2.5">
        {[
          { title: 'Wedding Invitations', desc: 'Elegant hand-lettered cards for your special day.' },
          { title: 'Quote Art & Frames', desc: 'Inspirational quotes crafted as beautiful wall art.' },
        ].map(s => (
          <div key={s.title} className="rounded-xl p-3" style={{ background: '#FEF7E0' }}>
            <p className="font-bold text-[12px] mb-0.5" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>{s.title}</p>
            <p className="text-[11.5px] leading-relaxed" style={{ color: '#4A5980' }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="px-6 pb-3 pt-1 text-[11px]" style={{ color: '#9AA6C4' }}>+ 4 more services — click Learn More</p>

      {/* Divider + Learn More */}
      <div style={{ height: 1, background: 'rgba(224,164,7,0.12)' }} />
      <div className="px-6 py-4">
        <button
          onClick={onLearnMore}
          className="w-full flex items-center justify-center gap-2 font-bold text-[13px] py-2.5 rounded-xl transition-all"
          style={{ background: 'white', border: '1.5px solid rgba(224,164,7,0.30)', color: '#E0A407', fontFamily: 'Fraunces, Georgia, serif' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#E0A407'; e.currentTarget.style.background = '#FEF7E0' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(224,164,7,0.30)'; e.currentTarget.style.background = 'white' }}
        >
          Learn More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
            <circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

// ── Legible & Neat Handwriting card ──────────────────────────────────────────
function LegibleNeatCard({ onLearnMore }: { onLearnMore: () => void }) {
  const adultProgram = PROGRAMS.find(p => p.slug === 'adult-handwriting')!

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 44px rgba(11,42,192,0.15)' }}
      transition={{ duration: 0.22 }}
      className="bg-white rounded-2xl overflow-hidden w-full"
      style={{ border: '1.5px solid rgba(11,42,192,0.12)', boxShadow: '0 4px 20px rgba(11,42,192,0.07)' }}
    >
      <div className="px-6 pt-6 pb-4 flex items-start gap-3" style={{ background: '#EEF1FB' }}>
        <div className="flex-shrink-0 flex items-center justify-center rounded-xl"
          style={{ width: 48, height: 48, background: 'white', boxShadow: '0 2px 10px rgba(11,42,192,0.15)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B2AC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" aria-hidden="true">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </div>
        <div className="flex-1">
          <span className="inline-block text-[10px] font-bold tracking-[1.5px] uppercase rounded-full px-2.5 py-1 mb-1.5"
            style={{ color: '#0B2AC0', background: 'rgba(11,42,192,0.10)' }}>
            Handwriting
          </span>
          <h3 className="font-extrabold text-[18px] leading-tight" style={{ color: '#0F2566', fontFamily: 'Fraunces, Georgia, serif' }}>
            Legible & Neat Handwriting
          </h3>
          <p className="text-[12px] mt-0.5" style={{ color: 'rgba(11,42,192,0.6)' }}>Adults, students & professionals</p>
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="text-[13.5px] leading-relaxed" style={{ color: '#4A5980' }}>
          Develop clear, consistent, and professional handwriting that makes a strong impression.
          From foundation building to signature design — every aspect of your writing is refined
          and polished through structured, personalised practice.
        </p>
      </div>

      <div style={{ height: 1, background: 'rgba(11,42,192,0.07)' }} />
      <div className="px-5 py-4">
        <button
          onClick={onLearnMore}
          className="w-full flex items-center justify-center gap-2 font-bold text-[13px] py-2.5 rounded-xl transition-all"
          style={{ background: 'white', border: '1.5px solid rgba(11,42,192,0.20)', color: '#0B2AC0', fontFamily: 'Fraunces, Georgia, serif' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#0B2AC0'; e.currentTarget.style.background = '#EEF1FB' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(11,42,192,0.20)'; e.currentTarget.style.background = 'white' }}
        >
          Learn More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
            <circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function FeaturedCards() {
  const [active, setActive] = useState<Program | null>(null)
  const [calliOpen, setCalliOpen] = useState(false)

  const kidsProgram = PROGRAMS.find(p => p.slug === 'kids-handwriting')!
  const adultProgram = PROGRAMS.find(p => p.slug === 'adult-handwriting')!
  const examProgram = PROGRAMS.find(p => p.slug === 'exam-writing')!

  return (
    <section className="scroll-mt-20">

      {/* ── Handwriting Programs ── */}
      <div id="handwriting" className="py-16 px-6 lg:px-10 bg-paper scroll-mt-20">
        <SectionHeading eyebrow="everyday writing" title="Handwriting Programs" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">

          {/* Kids Handwriting — Learn More only */}
          <TravelCard
            badge="Free Demo"
            badgeColor="#0B2AC0"
            badgeBg="#EEF1FB"
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[kidsProgram.slug]}</div>}
            title={kidsProgram.name}
            subtitle={kidsProgram.short}
            overview={kidsProgram.overview.slice(0, 120) + '…'}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(kidsProgram)}
          />

          {/* Legible & Neat Handwriting — Learn More only */}
          <LegibleNeatCard onLearnMore={() => setActive(adultProgram)} />

          {/* Adult Handwriting — Learn More only */}
          <TravelCard
            badge="Free Demo"
            badgeColor="#0B2AC0"
            badgeBg="#EEF1FB"
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[adultProgram.slug]}</div>}
            title={adultProgram.name}
            subtitle={adultProgram.short}
            overview={adultProgram.overview.slice(0, 120) + '…'}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(adultProgram)}
          />

          {/* Speed & Exam Writing — Learn More only */}
          <TravelCard
            badge="Free Demo"
            badgeColor="#0B2AC0"
            badgeBg="#EEF1FB"
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[examProgram.slug]}</div>}
            title={examProgram.name}
            subtitle={examProgram.short}
            overview={examProgram.overview.slice(0, 120) + '…'}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(examProgram)}
          />

        </div>
      </div>

      {/* ── Calligraphy Service ── */}
      <div id="calligraphy" className="py-16 px-6 lg:px-10 bg-cream scroll-mt-20">
        <SectionHeading eyebrow="the art of lettering" title="Calligraphy Programs" />
        <div className="mt-8 max-w-2xl mx-auto">
          <CalligraphyServiceCard onLearnMore={() => setCalliOpen(true)} />
        </div>
      </div>

      <ProgramModal program={active} onClose={() => setActive(null)} />
      <CalligraphyModal open={calliOpen} onClose={() => setCalliOpen(false)} />
    </section>
  )
}
