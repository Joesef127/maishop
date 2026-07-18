import {create} from "zustand";
import {persist} from "zustand/middleware";
import {ProductCardProps} from "@/data/home-data";

interface WishState {
    items: ProductCardProps[];
    addWishItem: (product: ProductCardProps) => void;
    removeWishItem: (id: string) => void;
    clearWishList: () => void;
    existsInWishList: (id: string) => boolean;
    totalItems: () => number;
}


export const useWishStore = create<WishState>()(
    persist(
        (set, get) => ({
            // inside create:
            items: [],
            addWishItem: (product) => {
                if (get().items.some((i) => i.id === product.id)) return;
                set({ items: [...get().items, product] });
            },
            removeWishItem: (id) =>
                set({ items: get().items.filter((i) => i.id !== id) }),
            clearWishList: () => set({ items: [] }),
            existsInWishList: (id) => get().items.some((i) => i.id === id),
            totalItems: () => get().items.length,

        }),
        {name: "wish-list"}
    )
)