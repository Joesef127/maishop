import { useCartStore } from "@/stores/cart-store";
import { getProductById } from "@/data/products-catalog";
import { StaticImageData } from "next/image";

export interface CartDisplayItem {
    id: string;
    title: string;
    image: StaticImageData;
    price: number;
    rating: number;
    hasDiscount: boolean;
    discountPercentage?: number;
    quantity: number;
    unavailable: boolean;
}

export function useCartItems(): CartDisplayItem[] {
    const refs = useCartStore((state) => state.items);

    return refs.map((ref) => {
        const product = getProductById(ref.id);

        if (product && product.available !== false) {
            return {
                ...product,
                quantity: ref.quantity,
                unavailable: false,
            };
        }

        return {
            id: ref.id,
            title: ref.title,
            image: ref.image as StaticImageData,
            price: 0,
            rating: 0,
            hasDiscount: false,
            quantity: ref.quantity,
            unavailable: true,
        };
    });
}