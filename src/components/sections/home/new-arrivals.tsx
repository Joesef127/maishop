"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/blocks/product-card";
import { newArrivalsData } from "@/data/home-data";
import AutoScrollingList from "@/components/blocks/auto-scrolling-list";
import { useRouter } from "next/navigation";
import { MotionSection, MotionFadeIn } from "@/components/animation/motion-wrapper";
import { motion } from "motion/react";

const NewArrivals = () => {
  const router = useRouter();

  return (
    <MotionSection className="flex items-center justify-center">
      <div className="container flex-flex-col items-center justify-center space-y-12">
        <MotionFadeIn>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-12">
            New Arrivals
          </h2>
        </MotionFadeIn>
        <AutoScrollingList>
          {newArrivalsData.map((arr, index) => (
            <ProductCard key={index} {...arr} />
          ))}
        </AutoScrollingList>
        <div className="mt-9 w-full flex justify-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={() => router.push("/shop")}
              variant="primary"
              size="custom"
              className="bg-transparent hover:bg-foreground text-foreground hover:text-background border border-foreground mx-auto transition-colors"
            >
              View All
            </Button>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
};

export default NewArrivals;
