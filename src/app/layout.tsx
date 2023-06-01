import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import logoMage from '../assets/images/logo.svg';


export const metadata = {
  title: 'Multimedia and Game Event 9',
  description: 'MAGE (Multimedia and Game Event) adalah Wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Event Workshop. Dolor Sit Amet',
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
