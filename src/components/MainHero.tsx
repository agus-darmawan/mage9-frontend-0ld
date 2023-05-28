import React from 'react'
import Button from './Button'

export default function MainHero() {
  return (
    <div className="container px-6 md:ml-10 mx-auto ">
      <div className= "text-gray-800 text-center lg:text-left">
        <div className="flex-col gap-6 xl:gap-1=9 mt-24 items-center md:mt-52 max-w-md">
          <div className="lg:mb-0">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
              MAGE 9 
              <span className="text-blue-600"> ITS 2023</span>
            </h2>
          </div>
          <div className="lg:mb-0">
            <p className="uppercase text-blue-600 text-2xl font-bold mt-8">MULTIMEDIA AND GAME EVENT</p>
            <h6 className="text-black text-xl mb-3">
              Build a Better Society with Smart City</h6>
          </div>
          <Button 
            text="Daftar Sekarang"
            link="/auth/login"
          />
        </div>
      </div>
    </div>
  )
}
