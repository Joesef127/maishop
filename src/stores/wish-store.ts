import { create } from "zustand";
import { persist } from "zustand/middleware";
import {ProductCardProps} from "@/data/home-data";

interface WishItemRef {
    title: string;
    image: ProductCardProps["image"];
    id: string;
}

interface WishState {
    items: WishItemRef[];
    hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
    addWishItem: (id: string, title: string, image: ProductCardProps["image"]) => void;
    removeWishItem: (id: string) => void;
    clearWishList: () => void;
    existsInWishList: (id: string) => boolean;
    totalItems: () => number;
}

export const useWishStore = create<WishState>()(
    persist(
        (set, get) => ({
            items: [],
            hasHydrated: false,
            setHasHydrated: (value) => set({ hasHydrated: value }),

            addWishItem: (id, title, image) => {
                if (get().items.some((i) => i.id === id)) return;
                set({ items: [...get().items, { id, title, image }] });
            },

            removeWishItem: (id) =>
                set({ items: get().items.filter((i) => i.id !== id) }),

            clearWishList: () => set({ items: [] }),

            existsInWishList: (id) => get().items.some((i) => i.id === id),

            totalItems: () => get().items.length,
        }),
        {
            name: "wish-list",
            onRehydrateStorage: (state) => () => {
                state.setHasHydrated(true);
            },
        }
    )
);