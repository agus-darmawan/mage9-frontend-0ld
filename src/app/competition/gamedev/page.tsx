import React from 'react';
import GameDevContent from '@/components/GameDevContent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ComHero from '@/components/ComHero';

export default function page() {
  return (
    <div>
       <div className="bg-fallColor1">
      <div className=" bg-IoT  md:bg-top bg-center">
      </div>
      <div className="min-h-screen bg-cover bg-repeat ">
      <Navbar />
      <ComHero/>
      </div>
       <GameDevContent />
    </div>
    </div>
  );
}
