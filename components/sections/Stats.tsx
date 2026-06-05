import { STATS } from '@/lib/data'

export default function Stats() {
  return (
    <div className="bg-ink">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/20">
        {STATS.map((s) => (
          <div key={s.label} className="py-7 px-5 text-center">
            <div
              className="font-serif font-black text-3xl text-gold-light leading-none"
              style={{
                fontVariantNumeric: 'tabular-nums',
                fontFeatureSettings: '"tnum" 1, "lnum" 1',
              }}
            >
              {s.num}
            </div>

            <div className="text-cream/60 text-[11px] font-medium mt-1.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}