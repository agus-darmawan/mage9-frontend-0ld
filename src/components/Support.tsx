
import Image from "next/image"
import itsLogo from "../assets/images/sponsors/its.png"
import ceLogo from "../assets/images/sponsors/ce.png"
import himaLogo from "../assets/images/sponsors/hima.svg"


export default function Support() {
    return (
      <div className="">
        <div className="py-12 flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-xl md:text-2xl font-semibold leading-none text-gray-600">DIDUKUNG OLEH :</h1>
            <div className="w-9 h-0.5 bg-gray-300" />
          </div>
          <div className="flex justify-center items-center space-x-9 md:space-x-10 lg:space-x-16">
            <div className="w-25 md:w-24 lg:w-30">
            <Image 
                width={500}
                height={500}
                className="w-20 h-20 rounded-full" 
                src={itsLogo}  
                alt="ITS"
            />
            </div>
            <div className="w-25 md:w-24 lg:w-30">
            <Image 
                width={500}
                height={500}
                className="w-20 h-20 rounded-full" 
                src={ceLogo}  
                alt="CE ITS"
            />
            </div>
            <div className="w-25 md:w-24 lg:w-30">
            <Image 
                width={500}
                height={500}
                className="w-20 h-20 rounded-full" 
                src={himaLogo}  
                alt="HIMATEKOM"
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
  