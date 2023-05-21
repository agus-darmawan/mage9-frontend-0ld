import React from 'react'
import Image from 'next/image'
import logoITS from '../assets/images/sponsors/its.png';
import logoDPTSI from '../assets/images/sponsors/dptsi.png';
import logoCe from '../assets/images/sponsors/ce.png';
import logoHima from '../assets/images/sponsors/hima.svg';
import logoApi from '../assets/images/sponsors/api.png';
import logoAir from '../assets/images/sponsors/air.png';

export default function Sponsors() {
  return (
    <div className="bg-blue-100 dark:bg-gray-800">
        <div className="py-2"></div>
        <div className="sm:max-w-5xl pt-8 rounded-xl bg-blue-100  dark:bg-gray-800 mx-4 sm:mx-8 md:mx-auto">
            <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
            <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 dark:text-blue-400 font-extrabold pt-4">Media Partner</h1>
            </div>
            <div className="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
            <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                <Image className="focus:outline-none w-12 sm:w-16 " 
                       src={logoITS}
                       alt="ITS"
                       width={100}
                       height={100}
                />
            </div>
            <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl ">
                <Image className="focus:outline-none w-12 sm:w-16" 
                       src={logoDPTSI}
                       alt="DPTSI ITS"
                       width={100}
                       height={100}
                />
            </div>
            <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                <Image className="focus:outline-none w-12 sm:w-16" 
                       src={logoCe}
                       alt="CE ITS"
                       width={100}
                       height={100}
                />
            </div>
            <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                <Image className="focus:outline-none w-12 sm:w-16" 
                       src={logoHima}
                       alt="HIMATEKOM"
                       width={100}
                       height={100}
                />
            </div>
            <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                <Image className="focus:outline-none w-12 sm:w-16" 
                       src={logoApi}
                       alt="BARUNASTRA ITS"
                       width={100}
                       height={100}
                />
            </div>
            <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                <Image className="focus:outline-none w-12 sm:w-16" 
                       src={logoAir}
                       alt="BAYUCARAKA"
                       width={100}
                       height={100}
                />
            </div>
            </div>
        </div>
    </div>
  )
}
