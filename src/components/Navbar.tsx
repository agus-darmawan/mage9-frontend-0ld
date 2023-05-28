"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import NavLinks from "./NavLinks";

import Logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <div className="items-center">
                <Image src={Logo} width={100} height={100} alt="mage-logo" className="md:cursor-pointer h-12" />
            </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    setOpen(!open)
                } else {
                }
                }} />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button 
            text="Login"
            link="/auth"
          />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto z-10 bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button 
              text="Login"
              link="/auth"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
