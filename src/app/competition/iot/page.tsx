import React from 'react';
import IoTContent from '@/components/IoTContent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import bgIOT from "../../../assets/images/bg/comp/iot.svg"
import ComHero from '@/components/ComHero';

export default function page() {
  return (
    <div className="bg-summerColor1">
      <div className=" bg-IoT  md:bg-top bg-center">
      </div>
      <div className="min-h-screen bg-cover bg-repeat ">
      <Navbar />
      <ComHero/>
      </div>
       <IoTContent />
    </div>
  );
}
