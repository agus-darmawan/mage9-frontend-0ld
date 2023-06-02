import { InfoCircle, Category2, Timeline, AddressBook, Book } from 'tabler-icons-react';
import Link from 'next/link';

const AppDevContent = () => {
  return (
    <div className='font-Lexend'>
      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="inline-flex bg-springColor2 text-springColor4 text-lg p-3  rounded-full text-[32px] decoration-2 font-Lexend font-bold mb-5">
          <InfoCircle size={32} className="mr-4 ml-2" />
          ABOUT
        </h1>
        <p className="text-[25px] decoration-2 text-white font-Lexend font-normal text-justify drop-shadow-lg">
          <span className="font-bold text-springColor4">Application Development Competition</span> merupakan lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Application Development. Pada tahun ini MAGE 9 berfokus pada keyword “Smart City” sebagai tema untuk application development competition yang dapat diimplementasikan untuk menciptakan aplikasi yang dapat bermanfaat dan dapat memberikan dampak positif bagi masyarakat Indonesia. Aplikasi yang dilombakan terbatas pada platform mobile app, web app, dan dekstop app.
        </p>
      </div>

      <hr className="h-[5px] mx-auto my-4 md:my-10 bg-springColor3 border-0" />

      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="inline-flex bg-springColor2 text-springColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5">
          <Category2 size={32} className="mr-4 ml-2" />
          CATEGORY
        </h1>
        <p className="text-[25px] text-white decoration-2 font-Lexend font-normal text-justify">
          Terbuka untuk <span className="font-bold drop-shadow-lg">siswa/i SMA/SMK/Sederajat dan Mahasiswa S1/D4/Sederajat</span> - (Kelompok 1 sampai 3 Orang)
        </p>
      </div>

      <hr className="h-[5px] mx-auto my-4 md:my-10 bg-springColor3 border-0" />

      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="inline-flex bg-springColor2 text-springColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5">
          <Timeline size={32} className="mr-4 ml-2" />
          TIMELINE
        </h1>
        <section>
          <div className="border-l-4 border-springColor3 ml-3 mt-3 py-16 space-y-14 font-Lexend">
            <div className="relative">
              <div className="top-5 -left-3.5 border-white bg-springColor4 h-6 w-6 rounded-full border-4"></div>
              <div className="pl-10">
                <span className="text-sm text-white font-bold tracking-widest drop-shadow-lg">
                  June 1<sup>st</sup>, 2023
                </span>
                <h3 className="text-3xl font-bold tracking-wide text-springColor4 mb-2">Registration</h3>
                <p className="text-justify text-white text-md sm:text-lg drop-shadow-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugit quia deleniti labore necessitatibus delectus nam quos, nobis numquam recusandae reprehenderit reiciendis pariatur esse natus magni? Mollitia,
                  fugiat! Eius, accusamus.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="top-5 -left-3.5 border-white bg-springColor4 h-6 w-6 rounded-full border-4"></div>
              <div className="pl-10">
                <span className="text-sm text-white font-bold tracking-widest drop-shadow-lg">
                  June 30<sup>th</sup>, 2023
                </span>
                <h3 className="text-3xl text-springColor4 font-bold tracking-wide mb-2">Announcement</h3>
                <p className="text-white text-justify text-md sm:text-lg drop-shadow-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugit quia deleniti labore necessitatibus delectus nam quos, nobis numquam recusandae reprehenderit reiciendis pariatur esse natus magni? Mollitia,
                  fugiat! Eius, accusamus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="h-[5px] mx-auto my-2 md:my-10 bg-springColor3 border-0" />
      <div className="flex-col container mx-auto px-10">
        <div>
          <h1 className="inline-flex bg-springColor2 text-springColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5;">
            <AddressBook size={32} className="mr-4 -ml-2" />
            CONTACT PERSON
          </h1>
          <p className="text-md text-white sm:text-lg decoration-2 font-Lexend font-normal text-justify drop-shadow-lg">
          0853 9441 0418 - <span className="font-bold">Hasan</span>
            <br />
            0812 5936 6896 - <span className="font-bold">Tia</span>
          </p>
        </div>
      </div>
      <hr className="h-[5px] mx-auto my-4 md:my-10 bg-springColor3 border-0" />

      <div className="flex-col mt-20 pb-20 container text-white mx-auto px-10">
        <h1 className="inline-flex bg-springColor2 text-springColor4 text-lg rounded-full p-3 text-[32px] decoration-2 font-Lexend font-bold mb-5;">
          <Book size={32} className="mr-4 -ml-2" />
          GUIDEBOOK
        </h1>
        <p className="text-md sm:text-lg decoration-2 font-Lexend font-normal text-justify drop-shadow-lg">
          Silahkan unduh guidebooknya{' '}
          <Link href="#" className="text-springColor4 font-Lexend font-bold hover:text-springColor2">
            di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AppDevContent;
