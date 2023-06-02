import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComHero from '@/components/ComHero'
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Multimedia and Game Event 9',
  description: 'MAGE (Multimedia and Game Event) adalah Wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Event Workshop. Dolor Sit Amet',
}

export default function ComLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {children}
      <Footer />
    </html>
  );
}
