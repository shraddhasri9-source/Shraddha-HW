'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[520px]"
      style={{ background: '#EEF1FB' }}
    >
      {/* ruled paper texture */}
      <div className="absolute inset-0 ruled-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-[90px] w-px bg-[#C7D2EC]/40 pointer-events-none hidden lg:block" />

      {/* LEFT */}
      <div className="relative z-10 flex flex-col justify-center px-8 lg:px-12 lg:pl-[110px] py-14">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          <span className="inline-flex items-center gap-2 bg-gold-pale border border-gold/30 rounded-full px-4 py-1.5 mb-5 w-fit">
            <span className="text-[11px] font-semibold text-gold tracking-wide">Handwriting Improvement &amp; Calligraphy Art</span>
          </span>

          <h1 className="font-display font-extrabold text-ink leading-tight mb-0.5" style={{ fontSize: 'clamp(30px,4vw,40px)', letterSpacing: '-0.02em' }}>
            Master the Art of
          </h1>
          <span className="font-script text-gold font-bold leading-none block mb-4" style={{ fontSize: 'clamp(40px,5vw,50px)' }}>
            Beautiful Writing
          </span>

          <p className="text-muted text-[15px] leading-relaxed mb-7 max-w-md">
            From neat, confident everyday handwriting to elegant calligraphy art — expert-led training for kids,
            students, adults, and creative hobbyists.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <Link href="/#book" className="btn-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Free Demo
            </Link>
            <Link href="/#programs" className="btn-outline-ink">
              Explore Programs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

        </motion.div>
      </div>

      {/* RIGHT — animated handwriting illustration */}
      <div className="relative hidden lg:flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative w-[440px] max-w-full"
        >
          <video
            src="/hero-writing.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Animation of a hand writing in a notebook"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
