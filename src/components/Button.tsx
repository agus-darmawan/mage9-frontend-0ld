import React from 'react'
import Link from 'next/link'

export default function Button(props : any) {
    const { text } = props.text
    const { link } = props.link
  return (
    <Link href={props.link} className='px-1'>
          <div className={'inline-block px-5 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-700 rounded-full hover:bg-blue-300 focus:outline-none focus:bg-blue-60'}
          >{props.text}
          </div>
    </Link>
  )
}
