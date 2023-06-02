import React from 'react';
import AppDevContent from '@/components/AppDevContent';
import ComHero from '@/components/ComHero';
import Navbar from '@/components/Navbar';


export default function page() {
  return (
    <div className="bg-springColor1">
      <div className=" bg-appDev  md:bg-top bg-center">
      </div>
      <div className="min-h-screen bg-cover bg-repeat ">
      <Navbar />
      <ComHero/>
      </div>
       <AppDevContent />
    </div>
  );
}
