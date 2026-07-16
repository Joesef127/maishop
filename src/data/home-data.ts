import { images } from "@/lib";
import {StaticImageData} from "next/image";

export interface ProductCardProps {
    id: string;
    title: string;
    image: StaticImageData;
    rating: number;
    price: number;
    discountPercentage?: number;
    hasDiscount: boolean;
}

export interface ReviewCardProps {
    id: string;
    name: string;
    rating: number;
    review: string;
    isVerified: boolean;
    date: string;
}

export const newArrivalsData: ProductCardProps[] = [
    {
        id: crypto.randomUUID(),
        title: "T-shirt with Tape Details",
        image: images.image15,
        rating: 4,
        price: 120,
        hasDiscount: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Skinny Fit Jeans",
        image: images.image14,
        rating: 3,
        price: 240,
        discountPercentage: 20,
        hasDiscount: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Checkered Shirt",
        image: images.image13,
        rating: 4,
        price: 180,
        hasDiscount: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Sleeve Striped T-Shirt",
        image: images.image12,
        rating: 4,
        price: 130,
        discountPercentage: 30,
        hasDiscount: true,
    },
];

export const topSellingData: ProductCardProps[] = [
    {
        id: crypto.randomUUID(),
        title: "Vertical Striped Shirt",
        image: images.image5,
        rating: 5.0,
        price: 212,
        discountPercentage: 20,
        hasDiscount: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Courage Graphic T-Shirt",
        image: images.image6,
        rating: 4.0,
        price: 145,
        hasDiscount: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Loose Fit Bermuda Shorts",
        image: images.image7,
        rating: 3.0,
        price: 80,
        hasDiscount: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Faded Skinny Jeans",
        image: images.image8,
        rating: 4,
        price: 210,
        hasDiscount: false,
    },
];

export const testimonialsData: ReviewCardProps[] = [
    {
        id: crypto.randomUUID(),
        name: "Sarah M.",
        rating: 5,
        review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        isVerified: true,
        date: "August 14, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Alex K.",
        rating: 5,
        review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        isVerified: true,
        date: "August 15, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "James L.",
        rating: 5,
        review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        isVerified: true,
        date: "August 16, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Michael B.",
        rating: 5,
        review: "The fit on the skinny jeans is absolutely perfect. Usually, I have to get my pants tailored, but these fit right out of the box. Super fast shipping too!",
        isVerified: true,
        date: "August 17, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Liam K.",
        rating: 4,
        review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art.",
        isVerified: true,
        date: "August 18, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Emma R.",
        rating: 5,
        review: "Customer service was incredibly helpful when I needed to swap a size for my checkered shirt. The replacement arrived within two days. Highly recommend!",
        isVerified: true,
        date: "August 19, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Olivia W.",
        rating: 4,
        review: "Great selection of summer wear. The materials are breathable and light, perfect for hot weather. Will definitely be placing another order soon.",
        isVerified: true,
        date: "August 20, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Daniel T.",
        rating: 5,
        review: "The price point for this level of quality is unbeatable. I've washed my graphic tees multiple times now, and the prints haven't faded or cracked at all.",
        isVerified: true,
        date: "August 21, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Sophia L.",
        rating: 4,
        review: "Love the minimalist packaging and the overall brand vibe. The clothes feel premium, and the size guide on the website was 100% accurate.",
        isVerified: true,
        date: "August 22, 2023",
    },
    {
        id: crypto.randomUUID(),
        name: "Ethan J.",
        rating: 5,
        review: "Ordered the vertical striped shirt and got so many compliments on my first day wearing it. True to size and matches the product pictures perfectly.",
        isVerified: true,
        date: "August 23, 2023",
    },
];

// export const allImages: StaticImageData[] = [
//     images.image1,
//     images.image2,
//     images.image3,
//     images.image4,
//     images.image5,
//     images.image6,
//     images.image7,
//     images.image8,
//     images.image9,
//     images.image10,
//     images.image11,
//     images.image12,
//     images.image13,
//     images.image14,
//     images.image15,
//     images.image16,
//     images.image17,
//     images.image18,
//     images.image19,
//     images.image20,
// ]