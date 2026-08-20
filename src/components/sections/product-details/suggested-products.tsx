"use client";

import React from "react";
import ProductCard from "@/components/blocks/product-card";
import AutoScrollingList from "@/components/blocks/auto-scrolling-list";
import { suggestedData } from "@/data/product-details-data";
import { MotionSection, MotionFadeIn } from "@/components/animation/motion-wrapper";

const SuggestedProducts = () => {
  return (
    <MotionSection className="flex items-center justify-center">
      <div className="container flex-flex-col items-center justify-center space-y-12">
        <MotionFadeIn>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            You might also like
          </h2>
        </MotionFadeIn>
        <AutoScrollingList>
          {suggestedData.map((arr, index) => (
            <ProductCard key={index} {...arr} />
          ))}
        </AutoScrollingList>
      </div>
    </MotionSection>
  );
};

export default SuggestedProducts;
