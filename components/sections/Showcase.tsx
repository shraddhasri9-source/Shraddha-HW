import FadeIn from '@/components/ui/FadeIn'

export default function Showcase() {
  return (
    <section className="py-16 px-6 lg:px-10 bg-ink">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-2">
            <span className="font-script text-2xl text-gold-light block mb-0.5">proof on paper</span>
            <h2 className="font-display font-extrabold text-3xl text-cream leading-tight">See The Transformation</h2>
          </div>
        </FadeIn>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-9">
          <FadeIn direction="left">
            <div className="bg-paper rounded-2xl p-6 relative">
              <span className="absolute top-3.5 right-4 text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full" style={{ background: '#EEF1FB', color: '#0B2AC0' }}>
                Before
              </span>
              <svg viewBox="0 0 280 140" width="100%" height="130" aria-label="Messy handwriting before training">
                <rect width="280" height="140" fill="#FEFCF7" rx="6" />
                {[44, 78, 112].map((y) => (
                  <line key={y} x1="20" y1={y} x2="260" y2={y} stroke="#C7D2EC" strokeWidth="0.8" />
                ))}
                <path d="M28 41 Q40 27 48 43 Q56 59 70 39 Q82 49 95 37 Q108 54 120 41 Q135 29 148 47" stroke="#4A5680" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                <path d="M30 77 Q45 61 55 81 Q70 91 85 69 Q100 85 118 73 Q130 63 145 83 Q160 71 175 79" stroke="#4A5680" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                <path d="M28 110 Q42 97 52 115 Q68 123 80 103 Q95 117 110 107" stroke="#4A5680" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-paper rounded-2xl p-6 relative">
              <span className="absolute top-3.5 right-4 text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full bg-gold-pale text-[#A5691E]">
                After
              </span>
              <svg viewBox="0 0 280 140" width="100%" height="130" aria-label="Neat handwriting after training">
                <rect width="280" height="140" fill="#FEFCF7" rx="6" />
                {[44, 78, 112].map((y) => (
                  <line key={y} x1="20" y1={y} x2="260" y2={y} stroke="#C7D2EC" strokeWidth="0.8" />
                ))}
                <text x="28" y="40" fontFamily="Dancing Script,cursive" fontSize="25" fontWeight="700" fill="#0B2AC0">Practice</text>
                <text x="28" y="74" fontFamily="Dancing Script,cursive" fontSize="25" fontWeight="700" fill="#E0A407">makes</text>
                <text x="28" y="108" fontFamily="Dancing Script,cursive" fontSize="25" fontWeight="700" fill="#0B2AC0">perfect</text>
              </svg>
            </div>
          </FadeIn>
        </div>

        {/* Calligraphy gallery */}
        <FadeIn>
          <div className="text-center mt-10 mb-1">
            <span className="font-script text-2xl text-gold-light block mb-0.5">from our students</span>
            <h2 className="font-display font-extrabold text-2xl text-cream">Calligraphy Gallery</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          {[
            { word: 'Gratitude', cap: 'Modern brush script', size: 34, fill: '#0B2AC0', border: '#E6DFC4' },
            { word: 'Dream', cap: 'Pointed-pen flourish', size: 40, fill: '#E0A407', border: '#E6DFC4' },
            { word: 'Invited', cap: 'Wedding invitation art', size: 34, fill: '#0B2AC0', border: '#FCBB19', sub: true },
          ].map((g, i) => (
            <FadeIn key={g.word} delay={i * 0.08}>
              <div className="bg-paper rounded-xl overflow-hidden" style={{ border: '1px solid rgba(252,187,25,0.2)' }}>
                <svg viewBox="0 0 240 130" width="100%" height="120" aria-label={`Calligraphy piece reading ${g.word}`}>
                  <rect width="240" height="130" fill="#FEFCF7" />
                  <rect x="10" y="10" width="220" height="110" fill="none" stroke={g.border} strokeWidth="1" rx="4" />
                  {g.sub && (
                    <text x="120" y="48" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="600" fill="#4A5680" letterSpacing="3">YOU ARE</text>
                  )}
                  <text x="120" y={g.sub ? 84 : 70} textAnchor="middle" fontFamily="Dancing Script,cursive" fontSize={g.size} fontWeight="700" fill={g.fill}>
                    {g.word}
                  </text>
                  {!g.sub && <path d="M70 88 Q120 100 170 88" stroke="#E0A407" strokeWidth="1.2" fill="none" />}
                </svg>
                <div className="py-3 px-4 text-[11px] text-muted font-semibold text-center">{g.cap}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
