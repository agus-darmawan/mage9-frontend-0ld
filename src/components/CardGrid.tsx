import React from 'react'
import Card from './Card'
import Title from './Title'
import app from "../assets/images/logocomp/app.svg"
import game from "../assets/images/logocomp/game.svg"
import iot from "../assets/images/logocomp/iot.svg"
import robotics from "../assets/images/logocomp/robotics.svg"
export default function CardGrid() {
  return (
    // create 4 cards grid
    <div className="container px-5 mx-auto">
         <Title
                title='Competition'
                description='Adapun perlombaan yang akan dilaksanakan paga MAGE 9 diantaranya'
                />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card
                title='App Dev'
                description='Application Development Competition merupakan lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Application Development.'
                link='/competition'
                image={app}
                
            />
            <Card
                title='Game Dev'    
                description='Game Development Competition merupakan lomba pembuatan game yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Game Development'
                link='/workshop'
                image={game}
            />
            <Card
                title='IoT'
                description='Internet of Things Development Competition merupakan lomba pengembangan alat (hardware) yang terintegrasi dengan aplikasi (software) yang memanfaatkan koneksi nirkabel seperti jaringan internet.'
                link='/olimpiade'
                image={iot}
            />
            <Card
                title='Robotics'
                description='Robotic Competition merupakan lomba pengoperasian robot yang diadakan untuk siswa/i SD dan SMP. Pada tahun ini MAGE 9 berfokus pada kompetisi line tracer dimana robot akan dibuat untuk bergerak mengikuti garis pandu yang telah disediakan.'
                link='/webinar'
                image={robotics}
            />
        </div>
    </div>
  )
}
