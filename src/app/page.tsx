import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Hero from '../components/Herro'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'
import Sponsors from '@/components/Sponsors'

import app from "../assets/images/logocomp/app.svg"
import game from "../assets/images/logocomp/game.svg"
import iot from "../assets/images/logocomp/iot.svg"
import robotics from "../assets/images/logocomp/robotics.svg"

export default function Home() {
  return (
    <body className='bg-white dark:bg-gray-900'>
        <Navbar />
        <Hero />
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
              <h1 className="lg:text-8xl  font-semibold text-blue-400 text-3xl md:text-6xl">Competition</h1>
              <p className="mt-2 text-l lg:text-2xl text-gray-500 md:text-base">Adapun perlombaan yang dilaksanakan pada MAGE 9 adalah</p>
          </div>
       </div>
        <div className="container lg:mx-auto md:ml-2 md:mr-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-900">
            <Card
                title='App Dev'
                description='Application Development Competition merupakan lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Application Development.'
                link='/competition/appdev'
                image={app}
                
            />
            <Card
                title='Game Dev'    
                description='Game Development Competition merupakan lomba pembuatan game yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Game Development'
                link='/competition/gamedev'
                image={game}
            />
            <Card
                title='IoT'
                description='Internet of Things Development Competition merupakan lomba pengembangan alat (hardware) yang terintegrasi dengan aplikasi (software) yang memanfaatkan koneksi nirkabel seperti jaringan internet.'
                link='/competition/olimpiade'
                image={iot}
            />
            <Card
                title='Robotics'
                description='Robotic Competition merupakan lomba pengoperasian robot yang diadakan untuk siswa/i SD dan SMP. Pada tahun ini MAGE 9 berfokus pada kompetisi line tracer dimana robot akan dibuat untuk bergerak mengikuti garis pandu yang telah disediakan.'
                link='/competition/robotics'
                image={robotics}
            />
        </div>
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
              <h1 className="lg:text-6xl  font-semibold text-blue-400 text-3xl md:text-6xl">Timeline</h1>
          </div>
       </div>
        <Timeline />
        <Sponsors />
        <Footer />
    </body>
  )
}
