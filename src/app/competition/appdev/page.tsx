import React from 'react';
import AppDevContent from '@/components/AppDevContent';
import ComHero from '@/components/ComHero';
import Navbar from '@/components/Navbar';
export default function page() {
  return (
    <div className='bg-summerColor1'>
      <div className="min-h-screen ">
        <Navbar />
        <ComHero />
      </div>
      <AppDevContent />
    </div>
  );
}
