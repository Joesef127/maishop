"use client";

import { images } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { MotionSection, MotionFadeIn, MotionStagger, MotionStaggerItem } from "@/components/animation/motion-wrapper";
import { motion } from "motion/react";

const BrowseStyle = () => {
  return (
    <MotionSection className="flex items-center justify-center px-6 sm:px-10 lg:px-16 max-w-384 mx-auto">
      <div className="container items-center justify-center py-8 md:py-16 px-6 lg:px-12! xl:px-16! bg-layout rounded-4xl lg:rounded-[40px]">
        <MotionFadeIn>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
            BROWSE BY DRESS STYLE
          </h2>
        </MotionFadeIn>
        <div className="grid gap-2.5 sm:gap-5">
          <MotionStagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            <MotionStaggerItem className="w-full">
              <Link
                href="/shop?category=casual"
                className="zoom-card block w-full h-48 sm:h-80 cursor-pointer relative group rounded-2xl overflow-hidden shadow-sm"
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={images.casual_wear}
                    alt="Casual Wear"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300 z-10" />
                </motion.div>
                <p className="absolute top-4 left-4 text-white text-2xl lg:text-3xl font-bold z-20 drop-shadow-md">
                  Casual
                </p>
              </Link>
            </MotionStaggerItem>

            <MotionStaggerItem className="w-full md:col-span-2">
              <Link
                href="/shop?category=formal"
                className="zoom-card block w-full h-48 sm:h-80 cursor-pointer relative group rounded-2xl overflow-hidden shadow-sm"
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={images.formal_wear}
                    alt="Formal Wear"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300 z-10" />
                </motion.div>
                <p className="absolute top-4 left-4 text-white text-2xl sm:text-3xl font-bold z-20 drop-shadow-md">
                  Formal
                </p>
              </Link>
            </MotionStaggerItem>

            <MotionStaggerItem className="w-full md:col-span-2">
              <Link
                href="/shop?category=party"
                className="zoom-card block w-full h-48 sm:h-80 cursor-pointer relative group rounded-2xl overflow-hidden shadow-sm"
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={images.party_wear}
                    alt="Party Wear"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300 z-10" />
                </motion.div>
                <p className="absolute top-4 left-4 text-white text-2xl sm:text-3xl font-bold z-20 drop-shadow-md">
                  Party
                </p>
              </Link>
            </MotionStaggerItem>

            <MotionStaggerItem className="w-full">
              <Link
                href="/shop?category=gym"
                className="zoom-card block w-full h-48 sm:h-80 cursor-pointer relative group rounded-2xl overflow-hidden shadow-sm"
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={images.gym_girl}
                    alt="Gym Wear"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300 z-10" />
                </motion.div>
                <p className="absolute top-4 left-4 text-white text-2xl sm:text-3xl font-bold z-20 drop-shadow-md">
                  Gym
                </p>
              </Link>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </div>
    </MotionSection>
  );
};

export default BrowseStyle;
