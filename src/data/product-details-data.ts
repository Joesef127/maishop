import { ReviewCardProps } from "./home-data";
import {StaticImageData} from "next/image";
import {products} from "@/lib";

export interface ColorOption {
    name: string;
    hex: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface ProductDetails {
    id: string; // Links directly to ProductCardProps.id
    title: string;
    rating: number;
    price: number;
    description: string;
    colors: ColorOption[];
    sizes: string[];
    images: StaticImageData[];
    details: {
        material: string;
        fit: string;
        careInstructions: string;
        features: string[];
    };
    reviews: ReviewCardProps[];
    faqs: FAQItem[];
}

export const  productDetailsData: Record<string, ProductDetails> = {
    "product-tshirt-tape-details": {
        id: "product-tshirt-tape-details",
        title: "T-shirt with Tape Details",
        images: [products.tshirt_with_tape_details, products.tshirt_with_tape_details2, products.tshirt_with_tape_details3, products.tshirt_with_tape_details4],
        rating: 4,
        price: 120,
        description:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        colors: [
            { name: "Olive Green", hex: "#4F4E33" },
            { name: "Deep Forest", hex: "#314F4A" },
            { name: "Navy Blue", hex: "#31344F" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "100% Premium Combed Cotton",
            fit: "Relaxed Fit",
            careInstructions: "Machine wash cold, tumble dry low, do not bleach.",
            features: [
                "Unique tape accent detailing along the seams",
                "Breathable, lightweight cotton fabric",
                "Pre-shrunk fabric to maintain size over time",
                "Ribbed crew neck collar",
            ],
        },
        reviews: [
            {
                id: "rev-1",
                name: "Samantha D.",
                rating: 4.5,
                review:
                    "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
                isVerified: true,
                date: "August 14, 2023",
            },
            {
                id: "rev-2",
                name: "Alex M.",
                rating: 4,
                review:
                    "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me!",
                isVerified: true,
                date: "August 15, 2023",
            },
            {
                id: "rev-3",
                name: "Ethan R.",
                rating: 4.5,
                review:
                    "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
                isVerified: true,
                date: "August 16, 2023",
            },
            {
                id: "rev-4",
                name: "Olivia P.",
                rating: 4,
                review:
                    "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
                isVerified: true,
                date: "August 17, 2023",
            },
            {
                id: "rev-5",
                name: "Liam K.",
                rating: 4,
                review:
                    "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
                isVerified: true,
                date: "August 18, 2023",
            },
            {
                id: "rev-6",
                name: "Ava H.",
                rating: 4.5,
                review:
                    "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
                isVerified: true,
                date: "August 19, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-1",
                question: "How do I choose the correct size for this t-shirt?",
                answer:
                    "Our t-shirts are true to size with a slightly relaxed fit. If you prefer a tighter fit, we recommend ordering one size down.",
            },
            {
                id: "faq-2",
                question: "What is the return and exchange policy?",
                answer:
                    "We offer a 30-day hassle-free return or exchange policy for all unworn items with original tags intact.",
            },
            {
                id: "faq-3",
                question: "Will the graphic print peel or fade after washing?",
                answer:
                    "No, we use high-grade screen printing and pre-shrunk cotton to ensure colors and prints remain vibrant through many washes.",
            },
        ],
    },

    // 2. Skinny Fit Jeans
    "product-skinny-fit-jeans": {
        id: "product-skinny-fit-jeans",
        title: "Skinny Fit Jeans",
        images: [products.skinny_fit_jeans, products.skinny_fit_jeans2, products.skinny_fit_jeans3, products.skinny_fit_jeans4],
        rating: 3,
        price: 240,
        description:
            "Crafted from premium stretch denim, these skinny fit jeans provide both flexibility and modern silhouette style for everyday wear.",
        colors: [
            { name: "Classic Blue", hex: "#1C3B5E" },
            { name: "Dark Indigo", hex: "#0F1E33" },
            { name: "Black", hex: "#1A1A1A" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "98% Cotton, 2% Elastane",
            fit: "Skinny Fit",
            careInstructions: "Machine wash cold inside out with like colors.",
            features: [
                "4-way stretch denim for max movement",
                "Classic 5-pocket styling",
                "Durable zip fly with button closure",
            ],
        },
        reviews: [
            {
                id: "review-michael-b-2023-08-17",
                name: "Michael B.",
                rating: 5,
                review: "The fit on the skinny jeans is absolutely perfect. Usually, I have to get my pants tailored, but these fit right out of the box. Super fast shipping too!",
                isVerified: true,
                date: "August 17, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-sfj-1",
                question: "Do these jeans stretch out after wearing?",
                answer:
                    "The 2% elastane blend helps them retain shape while giving enough flex for all-day comfort.",
            },
        ],
    },

    // 3. Checkered Shirt
    "product-checkered-shirt": {
        id: "product-checkered-shirt",
        title: "Checkered Shirt",
        images: [products.checkered_shirt, products.checkered_shirt2, products.checkered_shirt3, products.checkered_shirt4],
        rating: 4,
        price: 180,
        description:
            "A classic checkered button-down crafted from lightweight cotton flannel, offering timeless versatility for layering or solo wear.",
        colors: [
            { name: "Red/Black", hex: "#8B0000" },
            { name: "Navy/White", hex: "#1D2A44" },
        ],
        sizes: ["Medium", "Large", "X-Large"],
        details: {
            material: "100% Cotton Flannel",
            fit: "Regular Fit",
            careInstructions: "Machine wash warm, tumble dry medium.",
            features: [
                "Button-down collar",
                "Single chest pocket",
                "Adjustable button cuffs",
            ],
        },
        reviews: [
            {
                id: "review-emma-r-2023-08-19",
                name: "Emma R.",
                rating: 5,
                review: "Customer service was incredibly helpful when I needed to swap a size for my checkered shirt. The replacement arrived within two days. Highly recommend!",
                isVerified: true,
                date: "August 19, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-cs-1",
                question: "Is this shirt suitable for winter layering?",
                answer:
                    "Yes, the cotton flannel material makes it a great mid-layer over a tee during colder months.",
            },
        ],
    },

    // 4. Sleeve Striped T-Shirt
    "product-sleeve-striped-tshirt": {
        id: "product-sleeve-striped-tshirt",
        title: "Sleeve Striped T-Shirt",
        images: [products.sleeve_striped_tshirt, products.sleeve_striped_tshirt2, products.sleeve_striped_tshirt3, products.sleeve_striped_tshirt4],
        rating: 4,
        price: 130,
        description:
            "A retro-inspired crewneck tee featuring athletic contrast stripes on the sleeves for an effortlessly sporty look.",
        colors: [
            { name: "White/Red Stripe", hex: "#FFFFFF" },
            { name: "Navy/White Stripe", hex: "#182030" },
        ],
        sizes: ["Small", "Medium", "Large"],
        details: {
            material: "100% Ring-spun Cotton",
            fit: "Regular Fit",
            careInstructions: "Machine wash cold with similar colors.",
            features: [
                "Contrast athletic arm striping",
                "Ribbed collar and cuffs",
                "Ultra-soft hand feel",
            ],
        },
        reviews: [
            {
                id: "review-liam-k-2023-08-18",
                name: "Liam K.",
                rating: 4,
                review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art.",
                isVerified: true,
                date: "August 18, 2023",
            },
        ],
        faqs: [],
    },

    // 5. Vertical Striped Shirt
    "product-vertical-striped-shirt": {
        id: "product-vertical-striped-shirt",
        title: "Vertical Striped Shirt",
        images: [products.vertical_striped_shirt, products.vertical_striped_shirt2, products.vertical_striped_shirt3, products.vertical_striped_shirt4],
        rating: 5.0,
        price: 212,
        description:
            "Elevate your casual outfit with this light linen-blend vertical striped shirt. Breathable, sleek, and perfect for warm weather.",
        colors: [
            { name: "Olive Stripe", hex: "#5C6146" },
            { name: "Sky Blue Stripe", hex: "#7AA2C2" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "55% Linen, 45% Cotton",
            fit: "Relaxed Fit",
            careInstructions: "Hand wash or gentle cycle cold. Line dry.",
            features: [
                "Breathable linen-blend fabric",
                "Camp collar detail",
                "Elongating vertical stripe pattern",
            ],
        },
        reviews: [
            {
                id: "rev-vss-1",
                name: "Ethan J.",
                rating: 5,
                review:
                    "Got so many compliments on my first day wearing it. True to size!",
                isVerified: true,
                date: "August 23, 2023",
            },
            {
                id: "review-ethan-j-2023-08-23",
                name: "Ethan J.",
                rating: 5,
                review: "Ordered the vertical striped shirt and got so many compliments on my first day wearing it. True to size and matches the product pictures perfectly.",
                isVerified: true,
                date: "August 23, 2023",
            },
        ],
        faqs: [],
    },

    // 6. Courage Graphic T-Shirt
    "product-courage-graphic-tshirt": {
        id: "product-courage-graphic-tshirt",
        title: "Courage Graphic T-Shirt",
        images: [products.courage_graphic_tshirt, products.courage_graphic_tshirt2, products.courage_graphic_tshirt3, products.courage_graphic_tshirt4],
        rating: 4.0,
        price: 145,
        description:
            "Featuring bold typography on heavy-weight cotton, this graphic tee brings a street-style vibe with all-day structure.",
        colors: [
            { name: "Off White", hex: "#F5F4EF" },
            { name: "Charcoal", hex: "#2C2C2C" },
        ],
        sizes: ["Medium", "Large", "X-Large", "2X-Large"],
        details: {
            material: "100% Heavyweight Cotton",
            fit: "Oversized Fit",
            careInstructions: "Machine wash cold inside out.",
            features: [
                "High-density graphic print",
                "Drop shoulder design",
                "Heavy-duty neck ribbing",
            ],
        },
        reviews: [],
        faqs: [],
    },

    // 7. Loose Fit Bermuda Shorts
    "product-loose-fit-bermuda-shorts": {
        id: "product-loose-fit-bermuda-shorts",
        title: "Loose Fit Bermuda Shorts",
        images: [products.loose_fit_bermuda_shorts, products.loose_fit_bermuda_shorts2, products.loose_fit_bermuda_shorts3, products.loose_fit_bermuda_shorts4],
        rating: 3.0,
        price: 80,
        description:
            "Casual bermuda shorts tailored with a spacious leg opening and adjustable waistband for maximum outdoor comfort.",
        colors: [
            { name: "Khaki", hex: "#C2B280" },
            { name: "Navy", hex: "#1B263B" },
        ],
        sizes: ["Small", "Medium", "Large"],
        details: {
            material: "100% Cotton Twill",
            fit: "Loose Fit",
            careInstructions: "Machine wash cold with like colors.",
            features: [
                "Elastic waistband with inner drawstring",
                "Deep side pockets & rear welt pocket",
                "Knee-length cut",
            ],
        },
        reviews: [],
        faqs: [],
    },

    // 8. Faded Skinny Jeans
    "product-faded-skinny-jeans": {
        id: "product-faded-skinny-jeans",
        title: "Faded Skinny Jeans",
        images: [products.faded_jeans, products.faded_jeans2, products.faded_jeans3, products.faded_jeans4],
        rating: 4.5,
        price: 210,
        description:
            "Vintage-washed skinny jeans featuring authentic whiskering and light distressing for a worn-in casual aesthetic.",
        colors: [{ name: "Faded Vintage Wash", hex: "#5B708A" }],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "99% Cotton, 1% Spandex",
            fit: "Skinny Fit",
            careInstructions: "Machine wash cold inside out.",
            features: [
                "Hand-sanded fading and distressing",
                "Flexible stretch denim construction",
                "Signature metal hardware",
            ],
        },
        reviews: [],
        faqs: [],
    },
};