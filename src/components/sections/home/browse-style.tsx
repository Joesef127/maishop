import React from 'react';
import {images} from "@/lib";
import Image from "next/image";

const BrowseStyle = () => {
    return (
        <section className="flex items-center justify-center px-6 sm:px-10 lg:px-16">
            <div className="container flex-flex-col items-center justify-center py-8 md:py-16 px-6 lg:px-12! xl:px-16! bg-layout rounded-4xl lg:rounded-[40px]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">BROWSE BY DRESS STYLE</h1>
                <div className="grid gap-2.5 sm:gap-5">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                        <figure className="zoom-card w-full h-48 sm:h-80 cursor-pointer relative">
                            <Image src={images.casual_wear} alt="Product Image" fill
                                   className="object-cover object-top"/>
                            <p className="absolute top-4 left-4 text-white text-2xl lg:text-3xl font-bold z-20">Casual</p>
                            <div className="absolute inset-0 bg-black opacity-40 z-10" />
                        </figure>

                        <figure className="zoom-card md:col-span-2 w-full h-48 sm:h-80 cursor-pointer relative">
                            <Image src={images.formal_wear} alt="Product Image" fill
                                   className="object-cover object-top"/>
                            <p className="absolute top-4 left-4 text-white text-2xl sm:text-3xl font-bold z-20">Formal</p>
                            <div className="absolute inset-0 bg-black opacity-40 z-10" />
                        </figure>

                        <figure className="zoom-card md:col-span-2 w-full h-48 sm:h-80 cursor-pointer relative">
                            <Image src={images.party_wear} alt="Product Image" fill
                                   className="object-cover object-top"/>
                            <p className="absolute top-4 left-4 text-white text-2xl sm:text-3xl font-bold z-20">Party</p>
                            <div className="absolute inset-0 bg-black opacity-40 z-10" />
                        </figure>

                        <figure className="zoom-card w-full h-48 sm:h-80 cursor-pointer relative">
                            <Image src={images.gym_girl} alt="Product Image" fill
                                   className="object-cover object-top"/>
                            <p className="absolute top-4 left-4 text-white text-2xl sm:text-3xl font-bold z-20">Gym</p>
                            <div className="absolute inset-0 bg-black opacity-40 z-10" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseStyle;