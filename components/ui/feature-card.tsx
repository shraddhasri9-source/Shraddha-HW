import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * A clean, palette-matched content card used across the site (features,
 * testimonials, curriculum, gallery info, etc.). Hover lifts the card and
 * warms the border to the brand gold — consistent with the program cards.
 */
const FeatureCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative w-full rounded-2xl border border-gold-pale bg-paper p-6',
          'shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-card hover:border-gold/50',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FeatureCard.displayName = 'FeatureCard'

export { FeatureCard }
