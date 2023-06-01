import Image from 'next/image';

import Navbar from '@/components/Navbar';
import MainHero from '@/components/MainHero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Support from '@/components/Support';
import Carousel from '@/components/Carousel';
import bgMage from "../assets/images/bg/Hero1-2.png"

export default function Home() {
  return (
    <body className=" bg-Hero bg-baseColor1 md:bg-top bg-center">
      <Image className="absolute -z-10 bg-cover h-screen w-screen bg-center" 
                    src={bgMage}
                    alt="Background Image"
                    width={1000}
                    quality={100}
                    height={1000}/>

      <div className="min-h-screen bg-Hero1 bg-cover bg-repeat ">
        <Navbar />
        <MainHero />
      </div>

      <div>
        <About />
          <div>
              <div className="md:py-8 py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
                <h1 className="md:text-6xl  font-bold text-blue-700 text-5xl">Competition</h1>
                <p className="mt-2 text-xl md:text-2xl font-medium text-gray-500 ">Adapun perlombaan yang dilaksanakan pada MAGE 9 adalah</p>
              </div>
          </div>
        <Carousel />
        <Testimonials />
        <Support />     
        <Footer/>
      </div>
    </body>
  );
};
