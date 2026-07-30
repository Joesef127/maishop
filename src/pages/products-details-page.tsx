"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productDetailsData } from "@/data/product-details-data";
import { topSellingData } from "@/data/home-data";
import {
  Star,
  Check,
  Minus,
  Plus,
  SlidersHorizontal,
  ChevronDown,
  MoreHorizontal,
  CheckCircle2,
} from "lucide-react";
import SuggestedProducts from "@/components/sections/product-details/suggested-products";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = params;
  const product = productDetailsData[id];

  // Fallback if product ID is not found in productDetailsData
  if (!product) {
    notFound();
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
        {/* TOP SECTION: Image Gallery & Product Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 container py-12">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-36 flex-shrink-0">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-full rounded-xl overflow-hidden border-2 transition-all bg-background ${
                    selectedImageIndex === index
                      ? "border-foreground"
                      : "border-transparent hover:border-foreground/30"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Main Preview Image */}
            <div className="relative w-full h-80 sm:h-138 rounded-[20px] overflow-hidden bg-background md:flex-1">
              {product.images[selectedImageIndex] && (
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              )}
            </div>
          </div>

          {/* Right: Purchase Controls */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground uppercase tracking-tight mb-3">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-[#FFC633]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-[#FFC633] text-[#FFC633]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                {product.rating}{" "}
                <span className="text-foreground/60 font-normal">/5</span>
              </span>
            </div>

            {/* Price & Discount */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-bold text-foreground">
                ${product.price}
              </span>
              <span className="text-3xl font-bold text-foreground/30 line-through">
                ${Math.round(product.price * 1.25)}
              </span>
              <span className="bg-[#FF3333]/10 text-[#FF3333] text-xs font-medium px-3.5 py-1.5 rounded-full">
                -20%
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-6">
              {product.description}
            </p>

            <hr className="border-foreground/10 my-2" />

            {/* Color Selector */}
            <div className="py-4">
              <span className="text-sm text-foreground/60 font-normal block mb-3">
                Select Colors
              </span>
              <div className="flex items-center gap-4">
                {product.colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      style={{ backgroundColor: color.hex }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform ${
                        isSelected
                          ? "ring-2 ring-offset-2 ring-black scale-105"
                          : "hover:scale-105 border border-foreground/10"
                      }`}
                      title={color.name}
                    >
                      {isSelected && (
                        <Check
                          size={16}
                          className={
                            color.hex.toLowerCase() === "#ffffff" ||
                            color.hex.toLowerCase() === "#f5f4ef"
                              ? "text-foreground"
                              : "text-background"
                          }
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-foreground/10 my-2" />

            {/* Size Selector */}
            <div className="py-4">
              <span className="text-sm text-foreground/60 font-normal block mb-3">
                Choose Size
              </span>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-foreground/10 my-2" />

            {/* Quantity Counter & Add to Cart */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center justify-between bg-muted px-5 py-3.5 rounded-full w-36">
                <button
                  onClick={() => handleQuantityChange("dec")}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={20} />
                </button>
                <span className="font-semibold text-foreground text-base">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("inc")}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button className="flex-1 bg-foreground text-background py-3.5 px-8 rounded-full font-medium hover:bg-foreground/90 transition-all text-center">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

      <div className="m-0">
        {/* MIDDLE SECTION: Tabs Navigation */}
        <div className="container pb-8">
          <div className="grid grid-cols-3 text-center">
            {[
              { id: "details", label: "Product Details" },
              { id: "reviews", label: "Rating & Reviews" },
              { id: "faqs", label: "FAQs" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as "details" | "reviews" | "faqs")
                }
                className={`pb-5 text-base sm:text-lg font-medium relative transition-colors ${
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground border-b border-foreground/10"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-foreground rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT 1: Rating & Reviews */}
        {activeTab === "reviews" && (
          <section className="container">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  All Reviews
                </h2>
                <span className="text-sm text-foreground/60 font-normal">
                  ({product.reviews.length})
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors"
                  title="Filter reviews"
                >
                  <SlidersHorizontal size={18} />
                </button>

                <div className="relative hidden sm:block">
                  <button className="flex items-center gap-2 bg-muted px-5 py-3 rounded-full text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors">
                    <span>Latest</span>
                    <ChevronDown size={16} />
                  </button>
                </div>

                <button className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            {product.reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-foreground/10 rounded-[20px] p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-[#FFC633]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i < Math.floor(review.rating)
                                  ? "fill-[#FFC633] text-[#FFC633]"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <button className="text-foreground/40 hover:text-foreground">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 mb-3">
                        <h3 className="font-bold text-foreground text-lg">
                          {review.name}
                        </h3>
                        {review.isVerified && (
                          <CheckCircle2
                            size={18}
                            className="text-[#01AB31] fill-[#01AB31]/10"
                          />
                        )}
                      </div>

                      <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                        &ldquo;{review.review}&rdquo;
                      </p>
                    </div>

                    <p className="text-foreground/60 text-xs font-medium">
                      Posted on {review.date}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-foreground/60">
                No reviews yet for this product. Be the first to leave a review!
              </div>
            )}

            {product.reviews.length > 0 && (
              <div className="flex justify-center">
                <button className="border border-foreground/10 bg-background hover:bg-muted text-foreground font-medium px-9 py-3.5 rounded-full transition-all text-sm">
                  Load More Reviews
                </button>
              </div>
            )}
          </section>
        )}

        {/* TAB CONTENT 2: Product Details */}
        {activeTab === "details" && (
          <section className="container py-4 mb-16">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-foreground/10 pb-4">
                <span className="font-semibold text-foreground">Material</span>
                <span className="sm:col-span-2 text-foreground/70">
                  {product.details.material}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-foreground/10 pb-4">
                <span className="font-semibold text-foreground">Fit</span>
                <span className="sm:col-span-2 text-foreground/70">
                  {product.details.fit}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-foreground/10 pb-4">
                <span className="font-semibold text-foreground">
                  Care Instructions
                </span>
                <span className="sm:col-span-2 text-foreground/70">
                  {product.details.careInstructions}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <span className="font-semibold text-foreground">Features</span>
                <ul className="sm:col-span-2 list-disc list-inside space-y-1 text-foreground/70">
                  {product.details.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* TAB CONTENT 3: FAQs */}
        {activeTab === "faqs" && (
          <section className="container py-4 mb-16 space-y-4">
            {product.faqs.length > 0 ? (
              product.faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-foreground/10 rounded-[20px] p-6 max-w-5xl mx-auto"
                >
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-foreground/60">
                No FAQs available for this product yet.
              </div>
            )}
          </section>
        )}
      </div>
        {/* BOTTOM SECTION: You Might Also Like */}
        <SuggestedProducts />
    </main>
  );
}
