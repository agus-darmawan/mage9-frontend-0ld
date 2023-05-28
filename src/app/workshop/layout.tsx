import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'MAGE 9 ITS',
  description: 'Lorem Ipsum Dolor Sit Amet',
  icons: {}
,
}

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className='bg-white dark:bg-gray-900'>
        <Navbar />
        {children}
        <Footer />
    </body>
  )
}
