import { ProductDetails } from "@/data/product-details-data";
import React from "react";
import Image from "next/image";
import { Star, Check, Minus, Plus, Heart } from "lucide-react";
import { RiHeartFill } from "@remixicon/react";
import { motion, AnimatePresence } from "motion/react";

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
  handleAddToCart: () => void;
  cartHasHydrated: boolean;
  isWishlisted: boolean;
  wishHasHydrated: boolean;
  handleToggleWish: () => void;
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
  handleAddToCart,
  cartHasHydrated,
  isWishlisted,
  wishHasHydrated,
  handleToggleWish,
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 container py-12">
      {/* Left: Gallery */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col-reverse md:flex-row gap-4"
      >
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-36 shrink-0">
          {product.images.map((img, index: number) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative w-24 h-24 sm:w-28 sm:h-28 xl:w-32 xl:h-32 md:w-full rounded-xl overflow-hidden border-2 transition-all bg-background ${
                selectedImageIndex === index
                  ? "border-foreground shadow-sm"
                  : "border-transparent hover:border-foreground/30"
              }`}
            >
              <Image
                src={img}
                alt={`${product.title} thumbnail ${index + 1}`}
                fill
                className="object-cover object-center"
              />
            </motion.button>
          ))}
        </div>

        {/* Main Preview Image */}
        <div className="relative w-full h-80 sm:h-120 xl:h-138 rounded-[20px] overflow-hidden bg-background md:flex-1 shadow-xs">
          <AnimatePresence mode="wait">
            {product.images[selectedImageIndex] && (
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Right: Purchase Controls */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col justify-center"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-semibold text-foreground uppercase tracking-tight">
            {product.title}
          </h1>
        </div>

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

        <div className="flex items-center gap-6 flex-wrap">
          {/* Color Selector */}
          <div className="py-3 flex flex-col gap-3">
            <span className="text-sm text-foreground/60 font-normal block">
              Select Colors
            </span>
            <div className="flex items-center gap-4">
              {product.colors.map((color) => {
                const isSelected = selectedColor === color.name;
                return (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? "ring-2 ring-offset-2 ring-foreground scale-105"
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
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="py-3 flex flex-col gap-2.5">
            <span className="text-sm text-foreground/60 font-normal block">
              {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            </span>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              title={
                wishHasHydrated
                  ? isWishlisted
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                  : "Loading wishlist"
              }
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              aria-pressed={isWishlisted}
              disabled={!wishHasHydrated}
              aria-disabled={!wishHasHydrated}
              onClick={handleToggleWish}
              className="shrink-0 rounded-full w-8 h-8 flex justify-center items-center bg-muted hover:bg-foreground/10 transition-colors disabled:opacity-60"
            >
              {isWishlisted ? (
                <RiHeartFill size={16} className="text-red-600" />
              ) : (
                <Heart size={16} className="text-foreground/80" />
              )}
            </motion.button>
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
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-foreground text-background shadow-sm"
                      : "bg-muted text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                  }`}
                >
                  {size}
                </motion.button>
              );
            })}
          </div>
        </div>

        <hr className="border-foreground/10 my-2" />

        {/* Quantity Counter & Add to Cart */}
        <div className="flex items-center gap-4 pt-4">
          <div className="flex items-center justify-between bg-muted px-5 py-3.5 rounded-full w-36">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleQuantityChange("dec")}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={20} />
            </motion.button>
            <span className="font-semibold text-foreground text-base">
              {quantity}
            </span>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => handleQuantityChange("inc")}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={20} />
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title={cartHasHydrated ? "Add to cart" : "Loading cart"}
            disabled={!cartHasHydrated}
            aria-disabled={!cartHasHydrated}
            onClick={handleAddToCart}
            className="flex-1 bg-foreground text-background py-3.5 px-8 rounded-full font-medium hover:bg-foreground/90 transition-all text-center disabled:opacity-60 shadow-sm"
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductInfo;
