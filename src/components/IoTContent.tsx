import { InfoCircle, Category2, Timeline, AddressBook, Book } from 'tabler-icons-react';
import Link from 'next/link';
import Image from 'next/image';
import bgIOT from "../assets/images/bg/comp/iot.svg"

const IoTContent = () => {
  return (
    <div className='font-Lexend'>

      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="inline-flex bg-summerColor2 text-summerColor4 text-lg p-3 rounded-full text-[20px] decoration-2 font-Lexend font-bold mb-5">
          <InfoCircle size={32} className="mr-4 ml-2" />
          ABOUT
        </h1>
        <p className="text-[25px] decoration-2 font-Lexend text-white drop-shadow-lg font-normal text-justify">
          <span className="font-bold text-summerColor3 drop-shadow-sm">Internet of Things Development Competition</span> merupakan lomba pengembangan alat (hardware) yang terintegrasi dengan aplikasi (software) yang memanfaatkan koneksi nirkabel seperti jaringan internet.
          Pada tahun ini MAGE 9 berfokus pada keyword “Smart Enviroment” yang dapat digunakan peserta untuk memunculkan ide-ide baru dan mengembangkan kreativitas yang mungkin tidak pernah terpikirkan sebelumnya.
        </p>
      </div>

      <hr className="h-[5px] mx-auto my-4 md:my-10 bg-black border-0" />

      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="inline-flex bg-summerColor2 text-summerColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5">
          <Category2 size={32} className="mr-4 ml-2" />
          CATEGORY
        </h1>
        <p className="text-[25px] decoration-2 font-Lexend font-normal text-white drop-shadow-lg text-justify">
          Terbuka untuk <span className="font-bold ">siswa/i SMA/SMK/Sederajat dan Mahasiswa S1/D4/Sederajat</span> - (Kelompok 1 sampai 3 Orang)
        </p>
      </div>

      <hr className="h-[5px] mx-auto my-4 md:my-10 bg-black border-0" />

      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="inline-flex bg-summerColor2 text-summerColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5">
          <Timeline size={32} className="mr-4 ml-2" />
          TIMELINE
        </h1>
        <section>
          <div className="border-l-4 border-summerColor4 ml-3 mt-3 py-16 space-y-14 font-Lexend">
            <div className="relative">
            <div className="top-5 -left-3.5 text-white drop-shadow-lg bg-summerColor3 border-white h-6 w-6 rounded-full border-4"></div>
              <div className="pl-10">
                <span className="drop-shadow-lg text-white text-sm font-bold tracking-widest">
                  June 1<sup>st</sup>, 2023
                </span>
                <h3 className=" text-3xl drop-shadow-lg text-summerColor3 font-bold tracking-wide mb-2">Registration</h3>
                <p className="text-justify text-white drop-shadow-lg text-md sm:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugit quia deleniti labore necessitatibus delectus nam quos, nobis numquam recusandae reprehenderit reiciendis pariatur esse natus magni? Mollitia,
                  fugiat! Eius, accusamus.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="top-5 -left-3.5 bg-summerColor3 h-6 w-6 rounded-full border-white border-4"></div>
              <div className="pl-10">
                <span className="text-sm font-bold text-white tracking-widest">
                  June 30<sup>th</sup>, 2023
                </span>
                <h3 className="text-3xl text-summerColor3 font-bold tracking-wide mb-2  ">Announcement</h3>
                <p className="text-justify drop-shadow-lg text-white text-md sm:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugit quia deleniti labore necessitatibus delectus nam quos, nobis numquam recusandae reprehenderit reiciendis pariatur esse natus magni? Mollitia,
                  fugiat! Eius, accusamus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="h-[5px] mx-auto my-2 md:my-10 bg-black border-0" />
      <div className="flex-col container mx-auto px-10">
        <div>
          <h1 className="inline-flex bg-summerColor2 text-summerColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5;">
            <AddressBook size={32} className="mr-4 -ml-2" />
            CONTACT PERSON
          </h1>
          <p className="drop-shadow-lg text-white text-md sm:text-lg decoration-2 font-Lexend font-normal text-justify">
            0815 5993 8908 - <span className="font-bold">Nabila</span>
            <br />
            0851 5889 9726 - <span className="font-bold">Nico</span>
          </p>
        </div>
      </div>
      <hr className="h-[5px] mx-auto my-4 md:my-10 bg-black border-0" />

      <div className=" flex-col mt-20 pb-20 container mx-auto px-10">
        <h1 className="inline-flex bg-summerColor2 text-summerColor4 text-lg rounded-full p-3   text-[32px] decoration-2 font-Lexend font-bold mb-5;">
          <Book size={32} className="mr-4 -ml-2" />
          GUIDEBOOK
        </h1>
        <p className="drop-shadow-lg text-white text-md sm:text-lg decoration-2 font-Lexend font-normal text-justify">
          Silahkan unduh guidebooknya{' '}
          <Link href="#" className="text-summerColor4 font-Lexend font-bold hover:text-[#FCA652]">
            di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default IoTContent;
