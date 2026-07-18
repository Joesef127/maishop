"use client";

import {useState} from 'react';
import Image from "next/image";
import StarRating from "./star-rating";
import {ProductCardProps} from "@/data/home-data";
import {Button} from "@/components/ui/button";
import {Heart, Plus} from "lucide-react";
import {useCartStore} from "@/stores/cart-store";
import {useWishStore} from "@/stores/wish-store";
import {RiHeartFill} from "@remixicon/react";

const ProductCard = (props: ProductCardProps) => {
    const {title, image, rating, price, discountPercentage, hasDiscount} = props;
    const [mouseEntered, setMouseEntered] = useState(false);
    const addCartItem = useCartStore(state => state.addItem);
    const addWishItem = useWishStore(state => state.addWishItem);
    const existsInWishList = useWishStore(state => state.existsInWishList);
    const removeWishItem = useWishStore(state => state.removeWishItem);

    const handleAddToCart = () => addCartItem(props);
    const handleAddToWish = () => addWishItem(props);

    return (
        <div className="flex flex-col gap-4 relative">
            <figure onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}
                    className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 max-w-100">
                <Image src={image} alt="Product Image" className="object-cover object-center w-full h-full"/>

                <button title="Add to cart"
                        className="sm:hidden absolute top-3 right-3 rounded-full p-1.5 bg-black/50 text-white"
                        onClick={handleAddToCart}>
                    <Plus className="w-4 sm:w-6 h-4 sm:h-6"/>
                </button>
                {existsInWishList(props.id) ? (
                    <button title="Remove from wishlist"
                            className="sm:hidden absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
                            onClick={() => removeWishItem(props.id)}>
                        <RiHeartFill className="w-4 sm:w-6 h-4 sm:h-6 text-red-600"/>
                    </button>
                ) : (
                    <button title="Add to wishlist"
                            className="sm:hidden absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
                            onClick={handleAddToWish}>
                        <Heart className="w-4 sm:w-6 h-4 sm:h-6"/>
                    </button>
                )}

                <div
                    className={`absolute inset-0 bg-black/30 items-center justify-center transition-opacity duration-300 hidden sm:flex gap-2 ${mouseEntered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="grid grid-cols-1 grid-rows-2 gap-6">
                        <button title="Add to cart"
                                className="absolute top-3 right-3 rounded-full p-1.5 bg-black/50 text-white"
                                onClick={handleAddToCart}>
                            <Plus className="w-4 sm:w-6 h-4 sm:h-6"/>
                        </button>
                        {existsInWishList(props.id) ? (
                            <button title="Remove from wishlist"
                                    className="absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
                                    onClick={() => removeWishItem(props.id)}>
                                <RiHeartFill className="w-4 sm:w-6 h-4 sm:h-6 text-red-600"/>
                            </button>
                        ) : (
                            <button title="Add to wishlist"
                                    className="absolute top-3 left-3 rounded-full p-1.5 bg-black/50 text-white"
                                    onClick={handleAddToWish}>
                                <Heart className="w-4 sm:w-6 h-4 sm:h-6"/>
                            </button>
                        )}
                    </div>
                </div>
            </figure>

            <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <p className="text-base sm:text-lg lg:text-xl font-bold capitalize">{title}</p>

                    <div>
                        <StarRating rating={rating} readOnly={true}/>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">${price.toFixed(2)}</p>
                        {hasDiscount &&
                            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-500 line-through">${(price / (1 - discountPercentage! / 100)).toFixed(2)}</p>}
                        {hasDiscount &&
                            <p className="text-xs sm:text-sm bg-destructive/10 rounded-2xl px-2 py-1 font-normal text-red-500">-{discountPercentage}%</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;