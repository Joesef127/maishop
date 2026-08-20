"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/home-data";
import ReviewCard from "@/components/blocks/review-card";
import { MotionSection, MotionFadeIn } from "@/components/animation/motion-wrapper";
import { motion } from "motion/react";

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triplicate data to guarantee a seamless loop backdrop
  const tripleData = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const viewportWidth = window.innerWidth;
    const cardWidth =
      viewportWidth >= 1280
        ? 400
        : viewportWidth >= 1024
          ? 360
          : viewportWidth >= 640
            ? 340
            : 320;
    const gap = 24; // gap-6
    const totalShift = cardWidth + gap;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -totalShift : totalShift,
      behavior: "smooth",
    });
  };

  return (
    <MotionSection className="relative w-full overflow-hidden">
      {/* Header matches container edges */}
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionFadeIn className="flex items-center justify-between gap-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll("left")}
              aria-label="Previous testimonials"
              className="p-2 border border-foreground/10 rounded-full hover:bg-foreground/5 transition"
            >
              <ArrowLeft className="size-4 sm:size-6 lg:size-8" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll("right")}
              aria-label="Next testimonials"
              className="p-2 border border-foreground/10 rounded-full hover:bg-foreground/5 transition"
            >
              <ArrowRight className="size-4 sm:size-6 lg:size-8" />
            </motion.button>
          </div>
        </MotionFadeIn>
      </div>

      {/* Carousel Frame Wrapper */}
      <div className="relative w-full mt-10 md:mt-16">
        {/* Left Blur Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 xl:w-24 bg-linear-to-r from-background via-background/60 to-transparent backdrop-blur-[2px] z-10 pointer-events-none" />

        {/* Right Blur Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 xl:w-24 bg-linear-to-l from-background via-background/60 to-transparent backdrop-blur-[2px] z-10 pointer-events-none" />

        {/* Scroller Frame */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth w-full px-4 sm:px-6 lg:px-8"
        >
          {/* Infinite Animated Flex Track */}
          <div className="flex gap-6 w-max animate-marquee-track pause-on-hover">
            {tripleData.map((testimonial, idx) => (
              <ReviewCard
                key={`${testimonial.id}-${idx}`}
                name={testimonial.name}
                rating={testimonial.rating}
                review={testimonial.review}
                isVerified={testimonial.isVerified}
                className="w-80 sm:w-85 lg:w-90 xl:w-100 shrink-0 hover:shadow-md transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Testimonials;