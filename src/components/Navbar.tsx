"use client";
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import Image from 'next/image';

import logoMage from '../assets/images/logo.svg';
import logoText from '../assets/images/logotext/blue.svg';

import Button from './Button';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [comp, setComp] = useState(false)
    function handleOpen() {
        if (!isOpen) {
        setOpen(true)
        } else {
        setOpen(false)
        setComp(false)
        }
    }
    function handleComp() {
        comp ? setComp(false) : setComp(true)
    }
    return (
        <nav>
            <div className="bg-gray-100 border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image
                                src={logoMage}
                                width={35}
                                height={40}
                                alt="mage-logo"
                                className='mr-2 h-8'
                            />
                            <Image
                                src={logoText}
                                width={100}
                                height={100}
                                alt="mage-text-logo"
                                className='h-8'
                            />
                        </div>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0'>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' href="/about">Home</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ' href="/about">About</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ' href="/about">Competition</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ' href="/about">Workshop</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="inline-block ">
                        <Button text='Login' link='/login' />
                        <Button text='Sign Up' link='/login' />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
