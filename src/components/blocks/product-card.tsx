"use client";

import { useState } from "react";
import Image from "next/image";
import StarRating from "./star-rating";
import { ProductCardProps } from "@/data/home-data";
import { Heart, Plus } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { useWishStore } from "@/stores/wish-store";
import { RiHeartFill } from "@remixicon/react";
import { toast } from "sonner";

const ProductCard = (props: ProductCardProps) => {
  const { title, image, rating, price, discountPercentage, hasDiscount } =
    props;
  const [mouseEntered, setMouseEntered] = useState(false);
  const addCartItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);
  const addWishItem = useWishStore((state) => state.addWishItem);
  const removeWishItem = useWishStore((state) => state.removeWishItem);
  const hasHydrated = useWishStore((state) => state.hasHydrated);
  const isWishlisted = useWishStore((state) =>
    state.items.some((item) => item.id === props.id),
  );

  const handleAddToCart = () => {
    const alreadyInCart = cartItems.some((item) => item.id === props.id);
    addCartItem(props);
    if (alreadyInCart) {
      toast.success("Quantity updated", {
        description: `${props.title} quantity increased.`,
      });
    } else {
      toast.success("Added to cart", {
        description: `${props.title} was added to your cart.`,
      });
    }
  };

  const handleAddToWish = () => {
    if (!hasHydrated) return;

    if (isWishlisted) {
      toast.info("Already in wishlist", {
        description: `${props.title} is already in your wishlist.`,
      });
      return;
    }

    addWishItem(props);
    toast.success("Added to wishlist", {
      description: `${props.title} was added to your wishlist.`,
    });
  };

  const handleRemoveFromWish = () => {
    if (!hasHydrated) return;

    removeWishItem(props.id);
    toast.success("Removed from wishlist", {
      description: `${props.title} was removed from your wishlist.`,
    });
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <figure
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
        className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 min-w-64 sm:min-w-96 xl:min-w-full"
      >
        <Image
          src={image}
          alt="Product Image"
          className="object-cover object-center w-full h-full"
        />

        <button
          title="Add to cart"
          className="sm:hidden absolute top-3 right-3 rounded-full p-1.5 bg-black/50 text-white"
          onClick={handleAddToCart}
        >
          <Plus className="w-4 sm:w-6 h-4 sm:h-6" />
        </button>
        {hasHydrated && isWishlisted ? (
          <button
            title="Remove from wishlist"
            className="sm:hidden absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
            onClick={handleRemoveFromWish}
          >
            <RiHeartFill className="w-4 sm:w-6 h-4 sm:h-6 text-red-600" />
          </button>
        ) : (
          <button
            title={hasHydrated ? "Add to wishlist" : "Loading wishlist"}
            disabled={!hasHydrated}
            aria-disabled={!hasHydrated}
            className="sm:hidden absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
            onClick={handleAddToWish}
          >
            <Heart className="w-4 sm:w-6 h-4 sm:h-6" />
          </button>
        )}

        <div
          className={`absolute inset-0 bg-black/30 items-center justify-center transition-opacity duration-300 hidden sm:flex gap-2 ${mouseEntered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 grid-rows-2 gap-6">
            <button
              title="Add to cart"
              className="absolute top-3 right-3 rounded-full p-1.5 bg-black/50 text-white"
              onClick={handleAddToCart}
            >
              <Plus className="w-4 sm:w-6 h-4 sm:h-6" />
            </button>
            {hasHydrated && isWishlisted ? (
              <button
                title="Remove from wishlist"
                className="absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
                onClick={handleRemoveFromWish}
              >
                <RiHeartFill className="w-4 sm:w-6 h-4 sm:h-6 text-red-600" />
              </button>
            ) : (
              <button
                title={hasHydrated ? "Add to wishlist" : "Loading wishlist"}
                disabled={!hasHydrated}
                aria-disabled={!hasHydrated}
                className="absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
                onClick={handleAddToWish}
              >
                <Heart className="w-4 sm:w-6 h-4 sm:h-6" />
              </button>
            )}
          </div>
        </div>
      </figure>

      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-base sm:text-lg lg:text-xl font-bold capitalize">
            {title}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs sm:text-sm md:text-lg lg:text-lg font-bold">
              ${price.toFixed(2)}
            </p>

            {hasDiscount && (
              <p className="text-xs sm:text-sm md:text-lg lg:text-lg font-bold text-gray-500 line-through">
                ${(price / (1 - discountPercentage! / 100)).toFixed(2)}
              </p>
            )}
            {/* {hasDiscount && (
              <p className="text-xs lg:text-sm bg-destructive/10 rounded-2xl px-2 py-1 font-normal text-red-500">
                -{discountPercentage}%
              </p>
            )} */}


            <div>
              <StarRating rating={rating} readOnly={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
