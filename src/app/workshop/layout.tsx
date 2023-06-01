import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import bgHero from "../../assets/images/bg/Hero1-2.png"

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
    <body className='bg-white dark:bg-gray-900 min-h-screen'>
        <Image className="absolute -z-10 bg-cover h-screen w-screen bg-center" 
              src={bgHero}
              alt="Background Image"
              width={1000}
              quality={100}
              height={1000}/>
        <Navbar />
        {children}
        <div className="mt-[10%]">
          <Footer />
        </div>
    </body>
  )
}
