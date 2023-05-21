import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import logoMage from '../assets/images/logo.svg';

export const metadata = {
  title: 'MAGE 9 ITS',
  description: 'Lorem Ipsum Dolor Sit Amet',
  icons: {
    icon: {
      url: {logoMage},
      type: "image/svg",
    },
    shortcut: { url: "../assets/images/logo.svg", type: "image/svg" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        {children}
    </html>
  )
}
