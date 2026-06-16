'use client'
import FadeIn from '@/components/ui/FadeIn'
import { useState } from 'react'

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: 'rgba(6,16,61,0.88)', backdropFilter: 'blur(8px)' }}
    >
      <div onClick={e => e.stopPropagation()} className="relative max-w-md w-full">
        <img src={src} alt="Before and after handwriting transformation" className="w-full rounded-2xl" style={{ maxHeight: '85vh', objectFit: 'contain' }} />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B2AC0" strokeWidth="2.5" strokeLinecap="round" width="15" height="15" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Showcase() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const transformImages = [
    { src: '/before-after-1.webp', label: 'Kids Handwriting' },
    { src: '/before-after-2.webp', label: 'Cursive Writing' },
    { src: '/before-after-3.webp', label: 'Speed Writing' },
  ]

  return (
    <section className="py-16 px-6 lg:px-10 bg-ink">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-8">
            <span className="font-script text-2xl text-gold-light block mb-0.5">proof on paper</span>
            <h2 className="font-display font-extrabold text-3xl text-cream leading-tight">See The Transformation</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {transformImages.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ border: '2px solid rgba(252,187,25,0.25)' }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={`Before and after – ${img.label}`}
                  className="w-full object-cover object-top"
                  style={{ height: '220px', display: 'block' }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(6,16,61,0.45)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="28" height="28" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: 'linear-gradient(to top, rgba(6,16,61,0.85), transparent)' }}>
                  <p className="text-white text-[12px] font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{img.label}</p>
                  <p className="text-white/60 text-[10px]">Before & After</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  )
}
