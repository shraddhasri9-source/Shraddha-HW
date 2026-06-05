import Link from 'next/link'

export default function CTABanner() {
  return (
    <section
      className="py-16 px-6 lg:px-10 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#082A8C,#0B2AC0,#1640E8)' }}
    >
      <div className="absolute -top-32 -left-20 w-80 h-80 rounded-full" style={{ background: 'rgba(252,187,25,0.08)' }} />
      <div className="absolute -bottom-24 -right-12 w-60 h-60 rounded-full" style={{ background: 'rgba(252,187,25,0.06)' }} />
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="font-script text-3xl text-gold-light block mb-1.5">ready when you are</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-cream leading-tight mb-3">Start Writing Beautifully Today</h2>
        <p className="text-cream/70 text-sm leading-relaxed mb-7 max-w-md mx-auto">
          Book your free demo class and take the first step — whether towards neater handwriting or the art of calligraphy.
        </p>
        <Link href="/#book" className="btn-gold !px-9 !py-4 !text-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book Free Demo
        </Link>
      </div>
    </section>
  )
}
