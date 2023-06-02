import React from 'react'
import Image from 'next/image'
import appBg from "../assets/images/bg/comp/app.svg"
import gameBg from "../assets/images/bg/comp/game.svg"
import iotBg from "../assets/images/bg/comp/iot.svg"
import robotBg from "../assets/images/bg/comp/robot.svg"

export default function ComHero() {
  return (
    <div className='w-[100%]'>
        <Image className="absolute -z-10 bg-cover w-screen bg-center" 
            src={appBg}
            alt="Background Image"
            width={1000}
            quality={100}
            height={1000}/>
    </div>
  )
}
