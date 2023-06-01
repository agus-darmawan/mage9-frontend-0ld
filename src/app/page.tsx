import Image from 'next/image';

import Navbar from '@/components/Navbar';
import MainHero from '@/components/MainHero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Support from '@/components/Support';
import Carousel from '@/components/Carousel';




export default function Home() {
  return (
    <div className="">
      <div className="h-screen bg-Hero bg-cover md:bg-top bg-center" >
        <Navbar />
        <MainHero />
      </div>

      <div>
        <About />
          <div className="bg-Hero bg-cover ">
              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
                <h1 className="lg:text-4xl  font-semibold text-blue-700 text-2xl md:text-6xl">Competition</h1>
                <p className="mt-2 text-l lg:text-xl text-gray-500 md:text-base">Adapun perlombaan yang dilaksanakan pada MAGE 9 adalah</p>
              </div>
          </div>
        <Carousel />
        <Testimonials />
        <Support />
        <Footer />
      </div>
    </div> 
  );
};
