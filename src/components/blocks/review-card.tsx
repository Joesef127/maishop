import React from 'react';
import StarRating from "@/components/blocks/star-rating";
import {Check} from "lucide-react";

export interface ReviewCardProps {
    name: string;
    rating: number;
    review: string;
    isVerified: boolean;
    className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({name, rating, review, isVerified, className}) => {
    return (
        <div className={`border border-foreground/15 py-7 px-8 rounded-3xl flex flex-col ${className}`}>
            <StarRating rating={rating} readOnly={true} />
            <div className="flex items-center gap-2 mt-3 mb-2">
                <p className="text-xl font-bold capitalize">{name}</p>
                {isVerified ? (<span className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center"><Check
                    className="inline-block w-4 h-4 text-white"/></span>) : null}
            </div>
            <p className="text-sm text-foreground/70">{review}</p>
        </div>
    );
};

export default ReviewCard;
