import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroCompetition from '@/components/HeroCompetition'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MAGE 9 ITS',
  description: 'Lorem Ipsum Dolor Sit Amet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Navbar />
        <HeroCompetition />
        {children}
        <Footer />
    </html>
  )
}
