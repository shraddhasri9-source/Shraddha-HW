import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Shraddha – Good & Neat Handwriting Institute | Hyderabad',
    template: '%s | Shraddha',
  },
  description:
    'Shraddha offers expert handwriting improvement and calligraphy classes in Hyderabad — for kids, students, adults, and hobbyists. Book a free demo today.',
  keywords: [
    'Handwriting Classes Hyderabad',
    'Calligraphy Classes',
    'Kids Handwriting Improvement',
    'Cursive Writing Course',
    'Handwriting Improvement',
    'Calligraphy Training',
    'Signature Styling',
  ],
  metadataBase: new URL('https://shraddha.edu.in'),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Shraddha',
    title: 'Shraddha | Handwriting & Calligraphy',
    description: 'Master the art of beautiful writing — handwriting improvement and calligraphy for all ages.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
