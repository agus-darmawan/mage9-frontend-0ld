import React from 'react'

import Hero from '@/components/Hero'
import Galery from '@/components/Galery'
import Quote from '@/components/Quote'

export default function About() {
  return (
    <div className='item-center'>
      <Hero />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
            <h1 className="lg:text-8xl  font-semibold text-blue-400 text-3xl md:text-6xl">Our Galery</h1>
      </div>
      <div className="container lg:mx-auto">
         <Galery />
         <Quote />
         
      </div>
        
    </div>
  )
}
