import React from 'react'
import Button2 from './Button2'

export default function Herro() {
  return (
    <section className="items-center bg-blue-100 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl"> Build a Better Society
                <span className="text-violet-400">  with </span>  Smart City
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg"> MAGE (Multimedia and Game Event) adalah serangkaian acara dibidang IT yang diadakan oleh Departemen Teknik Komputer - FTEIC ITS sebagai wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Olimpiade, Workshop, dan Webinar. </p>
            <div className="flex flex-wrap justify-center">
                <Button2
                    text="About Us" 
                    link="/about"
                />
            </div>
        </div>
    </section>
  )
}
