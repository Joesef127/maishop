"use client";

import { useState } from "react";
import { toast } from "sonner";
import { productDetailsData } from "@/data/product-details-data";
import SuggestedProducts from "@/components/sections/product-details/suggested-products";
import ProductInfo from "@/components/sections/product-details/product-info";
import ProductTabs from "@/components/sections/product-details/product-tabs";
import { useCartStore } from "@/stores/cart-store";
import { useWishStore } from "@/stores/wish-store";

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

  // Gallery State
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Product Selection State
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0]?.name || "",
  );
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
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

  // Cart
  const cartItems = useCartStore((state) => state.items);
  const cartHasHydrated = useCartStore((state) => state.hasHydrated);
  const addCartItem = useCartStore((state) => state.addItem);
  const updateCartQuantity = useCartStore((state) => state.updateQuantity);

  const handleAddToCart = () => {
    if (!cartHasHydrated || !product) return;

    const existing = cartItems.find((item) => item.id === product.id);
    addCartItem(product.id);
    updateCartQuantity(product.id, (existing?.quantity ?? 0) + quantity);

    toast.success(existing ? "Quantity updated" : "Added to cart", {
      description: existing
        ? `${product.title} quantity increased.`
        : `${product.title} was added to your cart.`,
    });
  };

  // Wishlist
  const wishHasHydrated = useWishStore((state) => state.hasHydrated);
  const addWishItem = useWishStore((state) => state.addWishItem);
  const removeWishItem = useWishStore((state) => state.removeWishItem);
  const isWishlisted = useWishStore(
    (state) =>
      state.hasHydrated &&
      !!product &&
      state.items.some((item) => item.id === product.id),
  );

  const handleToggleWish = () => {
    if (!wishHasHydrated || !product) return;

    if (isWishlisted) {
      removeWishItem(product.id);
      toast.success("Removed from wishlist", {
        description: `${product.title} was removed from your wishlist.`,
      });
    } else {
      addWishItem(product.id, product.title, product.images[0]);
      toast.success("Added to wishlist", {
        description: `${product.title} was added to your wishlist.`,
      });
    }
  };

  // Fallback if product ID is not found in productDetailsData
  if (!product) {
    return null;
  }

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
        handleAddToCart={handleAddToCart}
        cartHasHydrated={cartHasHydrated}
        isWishlisted={isWishlisted}
        wishHasHydrated={wishHasHydrated}
        handleToggleWish={handleToggleWish}
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
