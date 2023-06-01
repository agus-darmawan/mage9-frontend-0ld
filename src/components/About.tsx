
import React from "react";
import Image from "next/image";
import AboutImg from "../assets/images/about/Hero.png"
import Bg2 from "../assets/images/bg/Hero2-2.png"

export default function About() {
  return (
    <div>
        <div >
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <Image 
                    className="absolute -z-10 bg-cover h-screen w-screen bg-center inset-0" 
                    src={Bg2} 
                    alt="/"
                />
                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <Image 
                            width={500}
                            height={500}
                            className="mx-auto" 
                            src={AboutImg}  
                            alt="people smiling"
                        />
                    </div>
                    <div className="w-full text-center md:text-left lg:w-1/2 h-full">
                        <h1  className="text-primaryColor1 uppercase text-3xl font-black mb-1">About</h1>
                        <h1  className="text-primaryColor1 text-5xl lg:text-6xl font-black mb-4">MAGE 9</h1>
                        <p  className="text-gray-500 font-medium mb-8 text-xl">MAGE (Multimedia and Game Event) adalah serangkaian acara 
                            dibidang IT yang diadakan oleh Departemen Teknik Komputer - FTEIC ITS sebagai wadah bagi generasi muda dalam berkreasi, 
                            berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai
                            macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Olimpiade, Workshop, dan Webinar.</p>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};