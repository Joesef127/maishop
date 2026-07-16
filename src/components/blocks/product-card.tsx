import React from 'react';
import Image from "next/image";
import StarRating from "./star-rating";
import {useState} from "react";
import {ProductCardProps} from "@/data/home-data";


const ProductCard = ({title, image, rating, price, discountPercentage, hasDiscount}: ProductCardProps) => {
    const [userRating, setUserRating] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <figure className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 max-w-100">
                <Image src={image} alt="Product Image" className="object-cover object-center w-full h-full"/>
            </figure>
            <div className="flex flex-col gap-2">
                <p className="text-xl font-bold capitalize">{title}</p>

                <div>
                    <StarRating rating={rating} onChange={setUserRating} size={20} readOnly={true}/>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold">${price.toFixed(2)}</p>
                    {hasDiscount &&
                        <p className="text-2xl font-bold text-gray-500 line-through">${(price / (1 - discountPercentage! / 100)).toFixed(2)}</p>}
                    {hasDiscount &&
                        <p className="text-xs sm:text-sm bg-destructive/10 rounded-2xl px-2 py-1 font-normal text-red-500">-{discountPercentage}%</p>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
