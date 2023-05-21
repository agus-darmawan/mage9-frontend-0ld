import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MAGE 9 ITS',
  description: 'Lorem Ipsum Dolor Sit Amet',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
