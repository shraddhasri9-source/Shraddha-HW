import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Pillars from '@/components/sections/Pillars'
import FeaturedCards from '@/components/sections/FeaturedCards'
import Showcase from '@/components/sections/Showcase'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import QuoteBand from '@/components/sections/QuoteBand'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import BookingSection from '@/components/sections/BookingSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pillars />
      <FeaturedCards />
      <Showcase />
      <WhyChooseUs />
      <QuoteBand />
      <Testimonials />
      <CTABanner />
      <BookingSection />
    </>
  )
}
