import {create} from "zustand";
import {persist} from "zustand/middleware";
import {ProductCardProps} from "@/data/home-data";

export interface CartItem extends ProductCardProps {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (product: ProductCardProps) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const existingItem = get().items.find((item) => item.id === product.id);
                if (existingItem) {
                    set({
                        items: get().items.map((item) =>
                            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                        )
                    });
                } else {
                    set({items: [...get().items, {...product, quantity: 1}]});
                }
            },
            removeItem: (id) => {
                set({items: get().items.filter((item) => item.id !== id)});
            },
            updateQuantity: (id, quantity) => {
                set({
                    items: quantity <= 0
                        ? get().items.filter((item) => item.id !== id)
                        : get().items.map((item) => item.id === id ? {...item, quantity} : item),
                })
            },
            clearCart: () => {
                set({items: []});
            },
            totalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            }
        }),
        {
            name: "cart-storage"
        }
    )
)