import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: "Deva's The Real Home Stay | Bani, Theog, Shimla",
  description:
    'Experience the serenity of the Himalayas at Deva\'s The Real Home Stay in Bani, Theog, Shimla. Mountain views, home-cooked meals, and warm hospitality await you.',
  keywords: [
    'homestay shimla',
    'shimla homestay',
    'theog homestay',
    'bani shimla',
    'mountain homestay himachal',
    'shimla accommodation',
    'budget homestay shimla',
  ],
  openGraph: {
    title: "Deva's The Real Home Stay | Mountain View Homestay Shimla",
    description:
      'A peaceful mountain retreat in Bani, Theog, Shimla with stunning Himalayan views.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B6914',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
