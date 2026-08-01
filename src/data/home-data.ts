import {products} from "@/lib";
import {StaticImageData} from "next/image";

export type DressStyle = "casual" | "formal" | "party" | "gym";
export type ProductType = "t-shirts" | "shorts" | "shirts" | "hoodie" | "jeans" | "dresses";

export interface ColorSwatch {
    name: string;
    hex: string;
}

// Fixed swatch palette used across the shop filters.
export const colorPalette: ColorSwatch[] = [
    { name: "Green", hex: "#00C12B" },
    { name: "Red", hex: "#F50606" },
    { name: "Yellow", hex: "#F5DD06" },
    { name: "Orange", hex: "#F57906" },
    { name: "Light Blue", hex: "#06CAF5" },
    { name: "Blue", hex: "#0619F5" },
    { name: "Purple", hex: "#7D06F5" },
    { name: "Pink", hex: "#F506A4" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
];

export const sizeOptions: string[] = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
];

export interface ProductCardProps {
    id: string;
    title: string;
    image: StaticImageData;
    rating: number;
    price: number;
    category: DressStyle;
    type: ProductType;
    colors: string[];
    sizes: string[];
    discountPercentage?: number;
    hasDiscount: boolean;
    available?: boolean;
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
        id: "product-tshirt-tape-details",
        title: "T-shirt with Tape Details",
        image: products.tshirt_with_tape_details2,
        rating: 4,
        price: 120,
        hasDiscount: false,
        category: "casual",
        type: "t-shirts",
        colors: ["#000000", "#FFFFFF"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    
    {
        id: "product-skinny-fit-jeans",
        title: "Skinny Fit Jeans",
        image: products.skinny_fit_jeans3,
        rating: 3.5,
        price: 240,
        discountPercentage: 20,
        hasDiscount: true,
        category: "casual",
        type: "jeans",
        colors: ["#0619F5", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },

    {
        id: "product-checkered-shirt",
        title: "Checkered Shirt",
        image: products.checkered_shirt3,
        rating: 4,
        price: 180,
        hasDiscount: false,
        category: "casual",
        type: "shirts",
        colors: ["#F50606", "#0619F5"],
        sizes: ["Medium", "Large", "X-Large"],
    },

    {
        id: "product-sleeve-striped-tshirt",
        title: "Sleeve Striped T-Shirt",
        image: products.sleeve_striped_tshirt2,
        rating: 4.5,
        price: 130,
        discountPercentage: 30,
        hasDiscount: true,
        category: "casual",
        type: "t-shirts",
        colors: ["#FFFFFF", "#0619F5"],
        sizes: ["Small", "Medium", "Large"],
    },
];

export const topSellingData: ProductCardProps[] = [
    {
        id: "product-vertical-striped-shirt",
        title: "Vertical Striped Shirt",
        image: products.vertical_striped_shirt,
        rating: 5.0,
        price: 212,
        discountPercentage: 20,
        hasDiscount: true,
        category: "formal",
        type: "shirts",
        colors: ["#00C12B", "#06CAF5"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
        id: "product-courage-graphic-tshirt",
        title: "Courage Graphic T-Shirt",
        image: products.courage_graphic_tshirt3,
        rating: 4.0,
        price: 145,
        hasDiscount: false,
        category: "casual",
        type: "t-shirts",
        colors: ["#F57906", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
        id: "product-loose-fit-bermuda-shorts",
        title: "Loose Fit Bermuda Shorts",
        image: products.loose_fit_bermuda_shorts,
        rating: 3.0,
        price: 80,
        hasDiscount: false,
        category: "gym",
        type: "shorts",
        colors: ["#0619F5", "#000000"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
        id: "product-faded-skinny-jeans",
        title: "Faded Skinny Jeans",
        image: products.faded_jeans3,
        rating: 4,
        price: 210,
        hasDiscount: false,
        category: "formal",
        type: "jeans",
        colors: ["#0619F5"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },
];

export const additionalProductsData: ProductCardProps[] = [
    {
        id: "product-gym-tank-top",
        title: "Gym Tank Top",
        image: products.gym_tank_top,
        rating: 4.2,
        price: 45,
        hasDiscount: false,
        category: "gym",
        type: "t-shirts",
        colors: ["#000000", "#F5DD06"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
        id: "product-formal-grid-blazer",
        title: "Formal Grid Blazer",
        image: products.formal_grid_blazer,
        rating: 4.6,
        price: 260,
        discountPercentage: 15,
        hasDiscount: true,
        category: "formal",
        type: "shirts",
        colors: ["#000000", "#0619F5"],
        sizes: ["Medium", "Large", "X-Large", "XX-Large"],
    },
    {
        id: "product-party-off-shoulder-gown",
        title: "Party Off Shoulder Gown",
        image: products.party_off_shoulder_gown,
        rating: 4.4,
        price: 220,
        hasDiscount: false,
        category: "party",
        type: "dresses",
        colors: ["#F506A4", "#7D06F5"],
        sizes: ["Small", "Medium", "Large"],
    },
];

export const testimonialsData: ReviewCardProps[] = [
    {
        id: "review-sarah-m-2023-08-14",
        name: "Sarah M.",
        rating: 5,
        review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        isVerified: true,
        date: "August 14, 2023",
    },
    {
        id: "review-alex-k-2023-08-15",
        name: "Alex K.",
        rating: 5,
        review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        isVerified: true,
        date: "August 15, 2023",
    },
    {
        id: "review-james-l-2023-08-16",
        name: "James L.",
        rating: 5,
        review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        isVerified: true,
        date: "August 16, 2023",
    },
    {
        id: "review-michael-b-2023-08-17",
        name: "Michael B.",
        rating: 5,
        review: "The fit on the skinny jeans is absolutely perfect. Usually, I have to get my pants tailored, but these fit right out of the box. Super fast shipping too!",
        isVerified: true,
        date: "August 17, 2023",
    },
    {
        id: "review-liam-k-2023-08-18",
        name: "Liam K.",
        rating: 4,
        review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art.",
        isVerified: true,
        date: "August 18, 2023",
    },
    {
        id: "review-emma-r-2023-08-19",
        name: "Emma R.",
        rating: 5,
        review: "Customer service was incredibly helpful when I needed to swap a size for my checkered shirt. The replacement arrived within two days. Highly recommend!",
        isVerified: true,
        date: "August 19, 2023",
    },
    {
        id: "review-olivia-w-2023-08-20",
        name: "Olivia W.",
        rating: 4,
        review: "Great selection of summer wear. The materials are breathable and light, perfect for hot weather. Will definitely be placing another order soon.",
        isVerified: true,
        date: "August 20, 2023",
    },
    {
        id: "review-daniel-t-2023-08-21",
        name: "Daniel T.",
        rating: 5,
        review: "The price point for this level of quality is unbeatable. I've washed my graphic tees multiple times now, and the prints haven't faded or cracked at all.",
        isVerified: true,
        date: "August 21, 2023",
    },
    {
        id: "review-sophia-l-2023-08-22",
        name: "Sophia L.",
        rating: 4,
        review: "Love the minimalist packaging and the overall brand vibe. The clothes feel premium, and the size guide on the website was 100% accurate.",
        isVerified: true,
        date: "August 22, 2023",
    },
    {
        id: "review-ethan-j-2023-08-23",
        name: "Ethan J.",
        rating: 5,
        review: "Ordered the vertical striped shirt and got so many compliments on my first day wearing it. True to size and matches the product pictures perfectly.",
        isVerified: true,
        date: "August 23, 2023",
    },
];