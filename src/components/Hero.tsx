import Head from "next/head";
import Image from "next/image";
import Button2 from "./Button2";


export default function Home() {
  return (
    <div className="mt-1">
      <div className="flex bg-white h-96 container mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 md:text-4xl">
             What is <span className="text-blue-900 font-extrabold">MAGE 9 ?</span>
            </h2>
            <p className="mt-2 text-md text-gray-500 md:text-base">
            MAGE (Multimedia and Game Event) adalah serangkaian acara dibidang IT yang diadakan oleh Departemen Teknik Komputer - FTEIC ITS sebagai wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Olimpiade, Workshop, dan Webinar.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
                <Button2 text="About me." link="/about" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
          <div className="h-full object-cover" style={{backgroundImage: `url('https://www.digitalartsonline.co.uk/cmsdata/features/3641812/laptop_work_garden_lifestyle_2.jpg')`}}>
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}