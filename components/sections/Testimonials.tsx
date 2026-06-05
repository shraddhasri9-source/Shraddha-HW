import Image from 'next/image'
import { TESTIMONIALS } from '@/lib/data'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/feature-card'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 lg:px-10 bg-paper">
      <SectionHeading eyebrow="happy students" title="Stories From Our Writers" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-8">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <FeatureCard className="h-full">
              <div className="flex items-center gap-3 mb-3.5">
                <span className="w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-gold-pale flex-shrink-0">
                  <Image src={t.img} alt={t.name} width={54} height={54} className="w-full h-full object-cover" />
                </span>
                <div>
                  <div className="font-display font-bold text-sm text-ink">{t.name}</div>
                  <div className="text-[11px] text-gold font-semibold mt-0.5">{t.course}</div>
                </div>
              </div>
              <div className="text-gold text-xs tracking-wider mb-2.5">★★★★★</div>
              <p className="text-muted text-[13px] leading-relaxed italic">{t.text}</p>
            </FeatureCard>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
