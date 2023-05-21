import React from 'react'

export default function Title(props: any) {
    const { title } = props.title
    const { description } = props.description
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-3 mt-10">
            <h1 className="text-9xl font-semibold text-blue-400 md:text-6xl">{props.title}</h1>
            <p className="mt-2 text-md text-gray-500 md:text-base">{props.description}</p>
        </div>
    </section>
  )
}
