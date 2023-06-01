import Image from 'next/image';

import Navbar from '@/components/Navbar';
import MainHero from '@/components/MainHero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Support from '@/components/Support';




export default function Home() {
  return (
    <body className=" bg-winterColor1 md:bg-top bg-center">
      <div className="min-h-screen bg-Hero1 bg-cover bg-repeat ">
        <Navbar />
        <MainHero />
      </div>
      <div className="">
        <About />
        <Testimonials />
        {/* <Support />      */}
         <Footer/>

        
      </div>
    </body>
  );
}
