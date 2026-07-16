import { images } from "@/lib";
import {StaticImageData} from "next/image";

export interface ProductCardProps {
    title: string;
    image: StaticImageData;
    rating: number;
    price: number;
    discountPercentage?: number;
    hasDiscount: boolean;
}

export const newArrivalsData: ProductCardProps[] = [
    {
        title: "T-shirt with Tape Details",
        image: images.image15,
        rating: 4.5,
        price: 120,
        hasDiscount: false,
    },
    {
        title: "Skinny Fit Jeans",
        image: images.image14,
        rating: 3.5,
        price: 240,
        discountPercentage: 20,
        hasDiscount: true,
    },
    {
        title: "Checkered Shirt",
        image: images.image13,
        rating: 4.5,
        price: 180,
        hasDiscount: false,
    },
    {
        title: "Sleeve Striped T-Shirt",
        image: images.image12,
        rating: 4.5,
        price: 130,
        discountPercentage: 30,
        hasDiscount: true,
    },
];

export const topSellingData: ProductCardProps[] = [
    {
        title: "Vertical Striped Shirt",
        image: images.image5,
        rating: 5.0,
        price: 212,
        discountPercentage: 20,
        hasDiscount: true,
    },
    {
        title: "Courage Graphic T-Shirt",
        image: images.image6,
        rating: 4.0,
        price: 145,
        hasDiscount: false,
    },
    {
        title: "Loose Fit Bermuda Shorts",
        image: images.image7,
        rating: 3.0,
        price: 80,
        hasDiscount: false,
    },
    {
        title: "Faded Skinny Jeans",
        image: images.image8,
        rating: 4.5,
        price: 210,
        hasDiscount: false,
    },
];

export const allImages: StaticImageData[] = [
    images.image1,
    images.image2,
    images.image3,
    images.image4,
    images.image5,
    images.image6,
    images.image7,
    images.image8,
    images.image9,
    images.image10,
    images.image11,
    images.image12,
    images.image13,
    images.image14,
    images.image15,
    images.image16,
    images.image17,
    images.image18,
    images.image19,
    images.image20,
]