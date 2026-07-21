import { useWishStore } from "@/stores/wish-store";
import { getProductById } from "@/data/products-catalog";

export function useWishItems() {
    const refs = useWishStore((state) => state.items);

    return refs
        .map((ref) => {
            const product = getProductById(ref.id);
            if (!product) return null;
            return product;
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);
}