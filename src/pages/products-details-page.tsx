"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { productDetailsData } from "@/data/product-details-data";
import { topSellingData } from "@/data/home-data";
import SuggestedProducts from "@/components/sections/product-details/suggested-products";
import ProductInfo from "@/components/sections/product-details/product-info";
import ProductTabs from "@/components/sections/product-details/product-tabs";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const id = params?.id;
  const product = id ? productDetailsData[id] : null;

  // Fallback if product ID is not found in productDetailsData
  if (!product) {
    return null;
  }

  // Gallery State
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Product Selection State
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || "",
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);

  // Tab State
  const [activeTab, setActiveTab] = useState<"details" | "reviews" | "faqs">(
    "reviews",
  );

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (type === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <main className="space-y-12 sm:space-y-20 flex flex-col gap-20">
      <ProductInfo
        product={product}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
      />

      <ProductTabs
        product={product}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* BOTTOM SECTION: You Might Also Like */}
      <SuggestedProducts />
    </main>
  );
}
