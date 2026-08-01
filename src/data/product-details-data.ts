import { ProductCardProps, ReviewCardProps } from "./home-data";
import { StaticImageData } from "next/image";
import { products } from "@/lib";

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

export const suggestedData: ProductCardProps[] = [
    {
        id: "product-polo-with-contrast-trims",
        title: "Polo with Contrast Trims",
        image: products.polo_with_contrast_trims,
        rating: 4,
        price: 120,
        hasDiscount: true,
        discountPercentage: 15,
    },

    {
        id: "product-gradient-graphic-tshirt",
        title: "Gradient Graphic T-Shirt",
        image: products.gradient_graphic_tshirt,
        rating: 4.2,
        price: 60,
        hasDiscount: false,
    },

    {
        id: "product-polo-with-tipping-details",
        title: "Polo with Tipping Details",
        image: products.polo_with_tipping_details,
        rating: 4.3,
        price: 130,
        hasDiscount: false,
    },

    {
        id: "product-black-striped-tshirt",
        title: "Black Striped T-Shirt",
        image: products.tshirt_with_black_sleeves,
        rating: 4.1,
        price: 55,
        discountPercentage: 30,
        hasDiscount: true,
    },
];

export const productDetailsData: Record<string, ProductDetails> = {
    "product-tshirt-tape-details": {
        id: "product-tshirt-tape-details",
        title: "T-shirt with Tape Details",
        images: [
            products.tshirt_with_tape_details,
            products.tshirt_with_tape_details2,
            products.tshirt_with_tape_details3,
            products.tshirt_with_tape_details4,
        ],
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
            careInstructions:
                "Machine wash cold, tumble dry low, do not bleach.",
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
                review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
                isVerified: true,
                date: "August 14, 2023",
            },
            {
                id: "rev-2",
                name: "Alex M.",
                rating: 4,
                review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me!",
                isVerified: true,
                date: "August 15, 2023",
            },
            {
                id: "rev-3",
                name: "Ethan R.",
                rating: 4.5,
                review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
                isVerified: true,
                date: "August 16, 2023",
            },
            {
                id: "rev-4",
                name: "Olivia P.",
                rating: 4,
                review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
                isVerified: true,
                date: "August 17, 2023",
            },
            {
                id: "rev-5",
                name: "Liam K.",
                rating: 4,
                review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
                isVerified: true,
                date: "August 18, 2023",
            },
            {
                id: "rev-6",
                name: "Ava H.",
                rating: 4.5,
                review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
                isVerified: true,
                date: "August 19, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-1",
                question: "How do I choose the correct size for this t-shirt?",
                answer: "Our t-shirts are true to size with a slightly relaxed fit. If you prefer a tighter fit, we recommend ordering one size down.",
            },
            {
                id: "faq-2",
                question: "What is the return and exchange policy?",
                answer: "We offer a 30-day hassle-free return or exchange policy for all unworn items with original tags intact.",
            },
            {
                id: "faq-3",
                question: "Will the graphic print peel or fade after washing?",
                answer: "No, we use high-grade screen printing and pre-shrunk cotton to ensure colors and prints remain vibrant through many washes.",
            },
        ],
    },

    // 2. Skinny Fit Jeans
    "product-skinny-fit-jeans": {
        id: "product-skinny-fit-jeans",
        title: "Skinny Fit Jeans",
        images: [
            products.skinny_fit_jeans,
            products.skinny_fit_jeans2,
            products.skinny_fit_jeans3,
            products.skinny_fit_jeans4,
        ],
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
            {
                id: "review-sarah-l-2023-08-18",
                name: "Sarah L.",
                rating: 4,
                review: "These skinny fit jeans are great for everyday wear. The stretch denim makes them comfortable, and they hold their shape well after washing.",
                isVerified: true,
                date: "August 18, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-sfj-1",
                question: "Do these jeans stretch out after wearing?",
                answer: "The 2% elastane blend helps them retain shape while giving enough flex for all-day comfort.",
            },
            {
                id: "faq-sfj-2",
                question: "Are these jeans suitable for casual and semi-formal occasions?",
                answer: "Yes, the classic design and clean finish make them versatile for both casual outings and smart-casual events.",
            },
        ],
    },

    // 3. Checkered Shirt
    "product-checkered-shirt": {
        id: "product-checkered-shirt",
        title: "Checkered Shirt",
        images: [
            products.checkered_shirt,
            products.checkered_shirt2,
            products.checkered_shirt3,
            products.checkered_shirt4,
        ],
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
            {
                id: "review-james-t-2023-08-20",
                name: "James T.",
                rating: 5,
                review: "The checkered shirt fits perfectly and the fabric feels premium. I appreciate the attention to detail in the stitching.",
                isVerified: true,
                date: "August 20, 2023",
            },
            {
                id: "review-sophia-m-2023-08-21",
                name: "Sophia M.",
                rating: 4,
                review: "I love the checkered shirt! The fit is just right, and the material feels high-quality.",
                isVerified: true,
                date: "August 21, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-cs-1",
                question: "Is this shirt suitable for winter layering?",
                answer: "Yes, the cotton flannel material makes it a great mid-layer over a tee during colder months.",
            },
        ],
    },

    // 4. Sleeve Striped T-Shirt
    "product-sleeve-striped-tshirt": {
        id: "product-sleeve-striped-tshirt",
        title: "Sleeve Striped T-Shirt",
        images: [
            products.sleeve_striped_tshirt,
            products.sleeve_striped_tshirt2,
            products.sleeve_striped_tshirt3,
            products.sleeve_striped_tshirt4,
        ],
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
            {
                id: "review-noah-d-2023-08-19",
                name: "Noah D.",
                rating: 4,
                review: "Comfortable and stylish. The fit is true to size, and the quality is impressive.",
                isVerified: true,
                date: "August 19, 2023",
            },
            {
                id: "review-emma-w-2023-08-20",
                name: "Emma W.",
                rating: 5,
                review: "Absolutely love this t-shirt! The fit is perfect and the fabric is so soft.",
                isVerified: true,
                date: "August 20, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-sleeve-striped-tshirt-1",
                question: "Is this t-shirt suitable for summer?",
                answer: "Yes, the lightweight cotton material makes it perfect for hot weather.",
            },
            {
                id: "faq-sleeve-striped-tshirt-2",
                question: "Can I machine wash this t-shirt?",
                answer: "Yes, it is safe to machine wash in cold water. We recommend turning it inside out to preserve the stripes.",
            },
            {
                id: "faq-sleeve-striped-tshirt-3",
                question: "Does the t-shirt shrink after washing?",
                answer: "The t-shirt is pre-shrunk, but we recommend following the care instructions to maintain its size and shape.",
            },
            {
                id: "faq-sleeve-striped-tshirt-4",
                question: "Can I iron this t-shirt?",
                answer: "Yes, you can iron it on a low setting. Avoid ironing directly on the stripes to prevent damage.",
            }
        ],
    },

    // 5. Vertical Striped Shirt
    "product-vertical-striped-shirt": {
        id: "product-vertical-striped-shirt",
        title: "Vertical Striped Shirt",
        images: [
            products.vertical_striped_shirt,
            products.vertical_striped_shirt2,
            products.vertical_striped_shirt3,
            products.vertical_striped_shirt4,
        ],
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
                review: "Got so many compliments on my first day wearing it. True to size!",
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
        faqs: [
            {
                id: "faq-vss-1",
                question: "Is this shirt suitable for summer?",
                answer: "Yes, the lightweight linen-blend fabric makes it perfect for hot weather.",
            },
            {
                id: "faq-vss-2",
                question: "Can I machine wash this shirt?",
                answer: "Yes, it is safe to machine wash in cold water. We recommend turning it inside out to preserve the fabric.",
            },
        ],
    },

    // 6. Courage Graphic T-Shirt
    "product-courage-graphic-tshirt": {
        id: "product-courage-graphic-tshirt",
        title: "Courage Graphic T-Shirt",
        images: [
            products.courage_graphic_tshirt,
            products.courage_graphic_tshirt2,
            products.courage_graphic_tshirt3,
            products.courage_graphic_tshirt4,
        ],
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
        faqs: [
            {
                id: "faq-courage-graphic-tshirt-1",
                question: "Is this t-shirt suitable for summer?",
                answer: "Yes, the heavyweight cotton provides structure while remaining breathable for casual summer wear.",
            },
            {
                id: "faq-courage-graphic-tshirt-2",
                question: "Can I machine wash this t-shirt?",
                answer: "Yes, it is safe to machine wash in cold water inside out to protect the graphic print.",
            },
        ],
    },

    // 7. Loose Fit Bermuda Shorts
    "product-loose-fit-bermuda-shorts": {
        id: "product-loose-fit-bermuda-shorts",
        title: "Loose Fit Bermuda Shorts",
        images: [
            products.loose_fit_bermuda_shorts,
            products.loose_fit_bermuda_shorts2,
            products.loose_fit_bermuda_shorts3,
            products.loose_fit_bermuda_shorts4,
        ],
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
        faqs: [
            {
                id: "faq-loose-fit-bermuda-shorts-1",
                question: "Are these shorts suitable for summer?",
                answer: "Yes, the lightweight cotton material makes these shorts perfect for hot weather.",
            },
            {
                id: "faq-loose-fit-bermuda-shorts-2",
                question: "Can I machine wash these shorts?",
                answer: "Yes, it is safe to machine wash in cold water. We recommend turning them inside out to preserve the fabric.",
            },
            {
                id: "faq-loose-fit-bermuda-shorts-3",
                question: "Do these shorts have an adjustable waistband?",
                answer: "Yes, they feature an elastic waistband with an inner drawstring for a customizable fit.",
            }
        ],
    },

    // 8. Faded Skinny Jeans
    "product-faded-skinny-jeans": {
        id: "product-faded-skinny-jeans",
        title: "Faded Skinny Jeans",
        images: [
            products.faded_jeans,
            products.faded_jeans2,
            products.faded_jeans3,
            products.faded_jeans4,
        ],
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
        reviews: [
            {
                id: "review-michael-b-2023-08-17",
                name: "Michael B.",
                rating: 4,
                review: "Great fit and quality. The stretch denim is very comfortable.",
                isVerified: true,
                date: "August 17, 2023",
            },
            {
                id: "review-sarah-l-2023-08-18",
                name: "Sarah L.",
                rating: 5,
                review: "Love these jeans! They fit perfectly and are very comfortable.",
                isVerified: true,
                date: "August 18, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-faded-skinny-jeans-1",
                question: "Do these jeans stretch out after wearing?",
                answer: "Yes, the 1% Spandex allows the jeans to stretch slightly for comfort while maintaining their shape.",
            },
            {
                id: "faq-faded-skinny-jeans-2",
                question: "Are these jeans suitable for casual and semi-formal occasions?",
                answer: "Yes, the faded skinny jeans can be dressed up or down depending on the occasion.",
            },
        ],
    },

    // 9. polo-with-contrast-trims
    "product-polo-with-contrast-trims": {
        id: "product-polo-with-contrast-trims",
        title: "Polo with Contrast Trims",
        images: [
            products.polo_with_contrast_trims,
            products.polo_with_contrast_trims2,
            products.polo_with_contrast_trims3,
            products.polo_with_contrast_trims4,
        ],
        rating: 4.0,
        price: 120,
        description:
            "Classic polo shirt featuring contrast trims on the collar and sleeves for a stylish touch.",
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "100% Cotton",
            fit: "Regular Fit",
            careInstructions: "Machine wash cold with like colors.",
            features: [
                "Contrast trims on collar and sleeves",
                "Buttoned placket",
                "Ribbed cuffs",
            ],
        },
        reviews: [
            {
                id: "review-michael-b-2023-08-17",
                name: "Michael B.",
                rating: 4,
                review: "Good quality polo shirt with stylish contrast trims.",
                isVerified: true,
                date: "August 17, 2023",
            }
        ],
        faqs: [
            {
                id: "faq-polo-with-contrast-trims-1",
                question: "Is this polo shirt suitable for casual and semi-formal occasions?",
                answer: "Yes, this polo shirt can be dressed up or down depending on the occasion.",
            },
        ],
    },

    // 10. gradient-graphic-tshirt
    "product-gradient-graphic-tshirt": {
        id: "product-gradient-graphic-tshirt",
        title: "Gradient Graphic T-Shirt",
        images: [
            products.gradient_graphic_tshirt,
            products.gradient_graphic_tshirt2,
            products.gradient_graphic_tshirt3,
            products.gradient_graphic_tshirt4,
        ],
        rating: 4.2,
        price: 60,
        description:
            "Casual t-shirt featuring a gradient graphic print for a modern look.",
        colors: [
            { name: "Black to Gray", hex: "#2C2C2C" },
            { name: "White to Blue", hex: "#5B708A" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "100% Cotton",
            fit: "Regular Fit",
            careInstructions: "Machine wash cold inside out.",
            features: [
                "Gradient graphic print",
                "Crew neck",
                "Short sleeves",
            ],
        },
        reviews: [
            {
                id: "review-michael-b-2023-08-17",
                name: "Michael B.",
                rating: 4,
                review: "Great casual t-shirt with a modern gradient graphic.",
                isVerified: true,
                date: "August 17, 2023",
            },
            {
                id: "review-sarah-l-2023-08-18",
                name: "Sarah L.",
                rating: 5,
                review: "Love this t-shirt! The gradient graphic is eye-catching and the fit is great.",
                isVerified: true,
                date: "August 18, 2023",
            }
        ],
        faqs: [
            {
                id: "faq-gradient-graphic-tshirt-1",
                question: "Is this t-shirt suitable for casual wear?",
                answer: "Yes, this t-shirt is perfect for casual outings.",
            },  
        ],
    },

    // 11. polo-with-tipping-details
    "product-polo-with-tipping-details": {
        id: "product-polo-with-tipping-details",
        title: "Polo with Tipping Details",
        images: [
            products.polo_with_tipping_details,
            products.polo_with_tipping_details2,
            products.polo_with_tipping_details3,
            products.polo_with_tipping_details4,
        ],
        rating: 4.3,
        price: 130,
        description:
            "Classic polo shirt featuring tipping details on the collar and sleeves for a refined look.",
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Navy", hex: "#001F3F" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "100% Cotton",
            fit: "Regular Fit",
            careInstructions: "Machine wash cold with like colors.",
            features: [
                "Tipping details on collar and sleeves",
                "Buttoned placket",
                "Ribbed cuffs",
            ],
        },
        reviews: [
            {
                id: "review-michael-b-2023-08-17",
                name: "Michael B.",
                rating: 4,
                review: "Good quality polo shirt with tipping details.",
                isVerified: true,
                date: "August 17, 2023",
            },
            {
                id: "review-sarah-l-2023-08-18",
                name: "Sarah L.",
                rating: 5,
                review: "Love this polo shirt! The tipping details add a stylish touch.",
                isVerified: true,
                date: "August 18, 2023",
            },
        ],
        faqs: [
            {
                id: "faq-polo-with-tipping-details-1",
                question: "Is this polo shirt suitable for casual and semi-formal occasions?",
                answer: "Yes, this polo shirt can be dressed up or down depending on the occasion.",
            },
            {
                id: "faq-polo-with-tipping-details-2",
                question: "Can this polo shirt be worn in hot weather?",
                answer: "Yes, the 100% cotton material makes it breathable and comfortable for warm weather.",
            },
        ],
    },


    // 12. black-striped-tshirt
    "product-black-striped-tshirt": {
        id: "product-black-striped-tshirt",
        title: "Black Striped T-Shirt",
        images: [
            products.tshirt_with_black_sleeves,
            products.tshirt_with_black_sleeves2,
            products.tshirt_with_black_sleeves3,
            products.tshirt_with_black_sleeves4,
        ],
        rating: 4.1,
        price: 55,
        description:
            "Casual black t-shirt featuring white stripes for a classic look.",
        colors: [
            { name: "Black with White Stripes", hex: "#000000" },
        ],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        details: {
            material: "100% Cotton",
            fit: "Regular Fit",
            careInstructions: "Machine wash cold with like colors.",
            features: [
                "White stripes on black background",
                "Crew neck",
                "Short sleeves",
            ],
        },
        reviews: [
            {
                id: "review-michael-b-2023-08-17",
                name: "Michael B.",
                rating: 4,
                review: "Good quality black striped t-shirt.",
                isVerified: true,
                date: "August 17, 2023",
            },
            {
                id: "review-sarah-l-2023-08-18",
                name: "Sarah L.",
                rating: 5,
                review: "Love this black striped t-shirt! The fit is great and the stripes are stylish.",
                isVerified: true,
                date: "August 18, 2023",
            },
            {
                id: "review-john-d-2023-08-19",
                name: "John D.",
                rating: 4,
                review: "Comfortable black striped t-shirt with a classic design.",
                isVerified: true,
                date: "August 19, 2023",
            },
            {
                id: "review-emily-r-2023-08-20",
                name: "Emily R.",
                rating: 5,
                review: "Stylish and comfortable black striped t-shirt.",
                isVerified: true,
                date: "August 20, 2023",
            },
            {
                id: "review-michael-b-2023-08-21",
                name: "Michael B.",
                rating: 4,
                review: "Another good black striped t-shirt.",
                isVerified: true,
                date: "August 21, 2023",
            },
            {
                id: "review-sarah-l-2023-08-22",
                name: "Sarah L.",
                rating: 5,
                review: "Another stylish black striped t-shirt.",
                isVerified: true,
                date: "August 22, 2023",
            },
            {
                id: "review-john-d-2023-08-23",
                name: "John D.",
                rating: 4,
                review: "Another comfortable black striped t-shirt.",
                isVerified: true,
                date: "August 23, 2023",
            },
            {
                id: "review-emily-r-2023-08-24",
                name: "Emily R.",
                rating: 5,
                review: "Yet another stylish black striped t-shirt.",
                isVerified: true,
                date: "August 24, 2023",
            }
        ],
        faqs: [
            {
                id: "faq-black-striped-tshirt-1",
                question: "Is this t-shirt suitable for casual wear?",
                answer: "Yes, this t-shirt is perfect for casual outings.",
            },
            {
                id: "faq-black-striped-tshirt-2",
                question: "Can this t-shirt be worn in hot weather?",
                answer: "Yes, the 100% cotton material makes it breathable and comfortable for warm weather.",
            },
        ],
    },





};
