"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    readOnly?: boolean;
    onChange?: (rating: number) => void;
    size?: number;
}

export default function StarRating({
                                       rating,
                                       maxStars = 5,
                                       readOnly = false,
                                       onChange,
                                       size = 24,
                                   }: StarRatingProps) {
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        if (readOnly) return;
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        if (readOnly) return;
        setHoverRating(null);
    };

    const handleClick = (index: number) => {
        if (readOnly || !onChange) return;
        onChange(index);
    };

    return (
        <div
            className="flex items-center gap-1"
            onMouseLeave={handleMouseLeave}
        >
            {Array.from({ length: maxStars }).map((_, i) => {
                const starValue = i + 1;
                // Determine fill state based on active hover or current active selection
                const isFilled = hoverRating !== null
                    ? starValue <= hoverRating
                    : starValue <= rating;

                return (
                    <button
                        key={i}
                        type="button"
                        disabled={readOnly}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => handleMouseEnter(starValue)}
                        className={`transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm
              ${readOnly ? "cursor-default" : "cursor-pointer hover:scale-110 active:scale-95 transform"}
            `}
                        aria-label={`Rate ${starValue} out of ${maxStars}`}
                    >
                        <Star
                            size={size}
                            className={`transition-all duration-150 ${
                                isFilled
                                    ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                                    : "text-zinc-300 dark:text-zinc-600 fill-transparent"
                            }`}
                        />
                    </button>
                );
            })}
            <p className="ml-2 text-sm text-gray-500">{rating} / {maxStars}</p>
        </div>
    );
}
