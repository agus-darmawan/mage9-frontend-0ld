import React from 'react'
import Link from 'next/link'

export default function Button2(props : any) {
    const { text } = props.text
    const { link } = props.link
  return (
    <Link href={props.link} className='px-1'>
          <div className='px-8 py-3 m-2 text-lg md:mt-0 mt-2 md:mr-0 mr-2 bg-blue-500 rounded-xl  text-white hover:text-white shadow-xl hover:shadow-xl hover:shadow-blue-300/80 shadow-blue-400/40 hover:bg-blue-600'
          >{props.text}
          </div>
    </Link>
  )
}
