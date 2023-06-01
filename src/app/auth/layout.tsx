import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import authBg from "../../assets/images/bg/bg-auth.svg"

export const metadata = {
  title: 'MAGE 9 ITS',
  description: 'Lorem Ipsum Dolor Sit Amet',
  icons: {}
,
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen min-w-full w-sc">
        <Image className="absolute -z-10 bg-cover h-screen w-screen bg-center" 
            src={authBg}
            alt="Background Image"
            width={1000}
            quality={100}
            height={1000}/>
        {children}
    </div>
  )
}
