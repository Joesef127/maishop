import { ProductDetails } from "@/data/product-details-data";
import React from "react";
import Image from "next/image";
import { Star, Check, Minus, Plus } from "lucide-react";

interface ProductInfoProps {
  product: ProductDetails;
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  handleQuantityChange: (type: "inc" | "dec") => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  handleQuantityChange,
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 container py-12">
      {/* Left: Gallery */}
      <div className="flex flex-col-reverse md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-36 flex-shrink-0">
          {product.images.map((img, index: number) => (
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
            {product.sizes.map((size: string) => {
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
  );
};

export default ProductInfo;
