import { useCartStore } from "@/stores/cart-store";
import { getProductById } from "@/data/products-catalog";

export function useCartItems() {
    const refs = useCartStore((state) => state.items);

    return refs
        .map((ref) => {
            const product = getProductById(ref.id);
            if (!product) return null;
            return { ...product, quantity: ref.quantity };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);
}