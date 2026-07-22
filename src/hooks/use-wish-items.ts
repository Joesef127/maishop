import { useWishStore } from "@/stores/wish-store";
import { getProductById } from "@/data/products-catalog";
import { StaticImageData } from "next/image";

export interface WishDisplayItem {
    id: string;
    title: string;
    image: StaticImageData;
    price: number;
    rating: number;
    hasDiscount: boolean;
    discountPercentage?: number;
    unavailable: boolean;
}

export function useWishItems(): WishDisplayItem[] {
    const refs = useWishStore((state) => state.items);

    return refs.map((ref) => {
        const product = getProductById(ref.id);

        if (!product) {
            return {
                id: ref.id,
                title: ref.title,
                image: ref.image,
                price: 0,
                rating: 0,
                hasDiscount: false,
                unavailable: true,
            };
        }

        return {
            ...product,
            unavailable: product.available === false,
        };
    });
}