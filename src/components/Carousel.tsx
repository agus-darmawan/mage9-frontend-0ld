"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import appCard from "../assets/images/card/app.svg"
import gameCard from "../assets/images/card/game.svg"
import iotCard from "../assets/images/card/iot.svg"
import robCard from "../assets/images/card/robot.svg"

import appLogo from "../assets/images/logocomp/app.svg"
import gameLogo from "../assets/images/logocomp/game.svg"
import iotLogo from "../assets/images/logocomp/iot.svg"
import robLogo from "../assets/images/logocomp/robot.svg"

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel() {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-8 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} naturalSlideHeight={100}  totalSlides={8} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={appCard}  
                                                alt="app card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-bold text-white">APP DEVELOPMENT</h2>
                                                <p className="text-white font-xl italic"> Lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat. </p>
                                                <div className="h-full items-end pb-24 flex">
                                                    <Button text="See More" link="competition/appdev" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={gameCard}  
                                                alt="game card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-semibold text-white">GAME DEVELOPMENT</h2>
                                                <p className="text-white italic">Lomba pembuatan game pada event ini diadakan untuk siswa/i SMA/SMK/sederajat </p>
                                                <div className="flex h-full items-end pb-24">
                                                    <Button text="See More" link="competition/gamedev" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={iotCard}  
                                                alt="iot card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-semibold text-white">IoT</h2>
                                                <p className="text-white italic"> Lomba pengembangan alat yang terintegrasi aplikasi dengan koneksi nirkabel </p>
                                                <div className="h-full items-end pb-24 flex">
                                                    <Button text="See More" link="competition/iot" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={robCard}  
                                                alt="robotics card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-semibold text-white">ROBOTICS</h2>
                                                <p className="text-white italic">Lomba pembuatan robot berupa line tracer yang diadakan untuk siswa/i SD dan SMP.</p>
                                                <div className="h-full items-end pb-24 flex">
                                                    <Button text="See More" link="competition/robotics" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={appCard}  
                                                alt="app card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-bold text-white">APP DEVELOPMENT</h2>
                                                <p className="text-white font-xl italic"> Lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat. </p>
                                                <div className="h-full items-end pb-24 flex">
                                                    <Button text="See More" link="competition/appdev" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={gameCard}  
                                                alt="game card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-semibold text-white">GAME DEVELOPMENT</h2>
                                                <p className="text-white italic">Lomba pembuatan game pada event ini diadakan untuk siswa/i SMA/SMK/sederajat </p>
                                                <div className="flex h-full items-end pb-24">
                                                    <Button text="See More" link="competition/gamedev" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={iotCard}  
                                                alt="iot card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-semibold text-white">IoT</h2>
                                                <p className="text-white italic"> Lomba pengembangan alat yang terintegrasi aplikasi dengan koneksi nirkabel </p>
                                                <div className="h-full items-end pb-24 flex">
                                                    <Button text="See More" link="competition/iot" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={robCard}  
                                                alt="robotics card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 font-semibold text-white">ROBOTICS</h2>
                                                <p className="text-white italic">Lomba pembuatan robot berupa line tracer yang diadakan untuk siswa/i SD dan SMP.</p>
                                                <div className="h-full items-end pb-24 flex">
                                                    <Button text="See More" link="competition/robotics" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} naturalSlideHeight={100} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                    width={500}
                                                    height={500}
                                                    className="object-cover object-center w-full" 
                                                    src={appCard}  
                                                    alt="app card"
                                                />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="text-2xl leading-4  lg:leading-5 font-bold text-white">APP DEVELOPMENT</h2>
                                                <p className="text-white text-xl italic"> Lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat. </p>
                                                <div className="flex h-full items-end pb-36">
                                                    <Button text="See More" link="competition/appdev" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={gameCard}  
                                                alt="game card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="text-2xl leading-4  lg:leading-5 font-bold text-white">GAME DEVELOPMENT</h2>
                                                <p className="text-white italic text-xl">Lomba pembuatan game pada event ini diadakan untuk siswa/i SMA/SMK/sederajat</p>
                                                <div className="flex h-full items-end pb-36">
                                                    <Button text="See More" link="competition/gamedev" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={iotCard}  
                                                alt="iot card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="text-2xl leading-4 lg:leading-5 font-bold text-white">IoT</h2>
                                                <p className="text-white italic text-xl"> Lomba pengembangan alat yang terintegrasi aplikasi dengan koneksi nirkabel </p>
                                                <div className="flex h-full items-end pb-36">
                                                    <Button text="See More" link="competition/iot" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Image 
                                                width={500}
                                                height={500}
                                                className="object-cover object-center w-full" 
                                                src={robCard}  
                                                alt="robotics card"
                                            />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="text-2xl leading-4  lg:leading-5 font-bold text-white">ROBOTICS</h2>
                                                <p className="text-white italic text-xl"> Lomba pembuatan robot berupa line tracer yang diadakan untuk siswa/i SD dan SMP. </p>
                                                <div className="flex h-full items-end pb-36">
                                                    <Button text="See More" link="competition/robotics" />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}