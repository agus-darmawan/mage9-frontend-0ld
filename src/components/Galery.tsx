import React from 'react'
import Image from 'next/image'
import imageGalery0 from '../assets/images/galery/image.jpg'
import imageGalery1 from '../assets/images/galery/image-1.jpg'
import imageGalery2 from '../assets/images/galery/image-2.jpg'
import imageGalery3 from '../assets/images/galery/image-3.jpg'
import imageGalery4 from '../assets/images/galery/image-4.jpg'
import imageGalery5 from '../assets/images/galery/image-5.jpg'
import imageGalery6 from '../assets/images/galery/image-6.jpg'
import imageGalery7 from '../assets/images/galery/image-7.jpg'
import imageGalery8 from '../assets/images/galery/image-8.jpg'
import imageGalery9 from '../assets/images/galery/image-9.jpg'
import imageGalery10 from '../assets/images/galery/image-10.jpg'
import imageGalery11 from '../assets/images/galery/image-11.jpg'

export default function Galery() {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery0}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery1}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery2}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery3}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery4}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery5}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery6}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery7}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery8}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery9} 
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery10}
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" 
                    src={imageGalery11} 
                    alt="Galery 1"
                    width={500}
                    height={500}/>
                </div>
            </div>
        </div>
    </div>
  )
}
