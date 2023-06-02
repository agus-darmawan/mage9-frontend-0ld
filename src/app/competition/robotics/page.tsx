import React from 'react';

import RoboticContent from '@/components/RoboticContent';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ComHero from '@/components/ComHero';

export default function page() {
  return (
    <div className="bg-winterColor1">
      <div className=" bg-Robotic  md:bg-top bg-center">
      </div>
      <div className="min-h-screen bg-cover bg-repeat ">
      <Navbar />
      <ComHero/>
      </div>
       <RoboticContent />
    </div>
  );
}
