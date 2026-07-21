import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItemRef {
    id: string;
    quantity: number;
}

interface CartState {
    items: CartItemRef[];
    hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
    addItem: (id: string) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            hasHydrated: false,
            setHasHydrated: (value) => set({ hasHydrated: value }),
            addItem: (id) => {
                const existing = get().items.find((i) => i.id === id);
                if (existing) {
                    set({
                        items: get().items.map((i) =>
                            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    });
                } else {
                    set({ items: [...get().items, { id, quantity: 1 }] });
                }
            },
            removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
            updateQuantity: (id, quantity) =>
                set({
                    items: quantity <= 0
                        ? get().items.filter((i) => i.id !== id)
                        : get().items.map((i) => (i.id === id ? { ...i, quantity } : i)),
                }),
            clearCart: () => set({ items: [] }),
            totalItems: () => get().items.reduce((total, i) => total + i.quantity, 0),
        }),
        {
            name: "cart-storage",
            onRehydrateStorage: (state) => () => {
                state.setHasHydrated(true);
            },
        }
    )
);