"use client";

import * as React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCartStore } from "@/stores/cart-store";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
    trigger: React.ReactNode;
}

export function CartDrawer({ trigger }: CartDrawerProps) {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const clearCart = useCartStore((state) => state.clearCart);

    const subtotal = items.reduce((acc, item) => {
        const effectivePrice = item.hasDiscount && item.discountPercentage
            ? item.price * (1 - item.discountPercentage / 100)
            : item.price;
        return acc + effectivePrice * item.quantity;
    }, 0);

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>{trigger}</DrawerTrigger>
            <DrawerContent className="flex flex-col h-full w-full max-w-sm ml-auto rounded-none">
                <DrawerHeader className="border-b px-4 py-4">
                    <DrawerTitle className="flex items-center gap-2 text-lg font-semibold">
                        <ShoppingCart className="w-5 h-5" />
                        Your Cart
                        {items.length > 0 && (
                            <span className="ml-auto text-sm font-normal text-muted-foreground">
                                {items.length} {items.length === 1 ? "item" : "items"}
                            </span>
                        )}
                    </DrawerTitle>
                </DrawerHeader>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-3 text-muted-foreground py-16">
                            <ShoppingCart className="w-12 h-12 opacity-30" />
                            <p className="text-sm">Your cart is empty</p>
                        </div>
                    ) : (
                        items.map((item) => {
                            const effectivePrice = item.hasDiscount && item.discountPercentage
                                ? item.price * (1 - item.discountPercentage / 100)
                                : item.price;
                            return (
                                <div key={item.id} className="flex gap-3">
                                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1 gap-1 min-w-0">
                                        <p className="text-sm font-medium leading-tight truncate">{item.title}</p>
                                        <p className="text-sm font-semibold">
                                            ${effectivePrice.toFixed(2)}
                                            {item.hasDiscount && item.discountPercentage && (
                                                <span className="ml-1.5 text-xs text-muted-foreground line-through">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                            )}
                                        </p>
                                        <div className="flex items-center gap-2 mt-auto">
                                            <div className="flex items-center border rounded-md">
                                                <button
                                                    className="px-2 py-1 hover:bg-muted transition-colors"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="px-2 text-sm min-w-6 text-center">{item.quantity}</span>
                                                <button
                                                    className="px-2 py-1 hover:bg-muted transition-colors"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <button
                                                className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                                                onClick={() => removeItem(item.id)}
                                                aria-label="Remove item"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <DrawerFooter className="border-t px-4 py-4 gap-3">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-semibold">${subtotal.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <DrawerClose asChild>
                            <Button variant="primary" className="w-full" size="lg">
                                Proceed to Checkout
                            </Button>
                        </DrawerClose>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline" className="w-full" size="lg">
                                    Clear Cart
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Clear your cart?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This will remove all {items.length} {items.length === 1 ? "item" : "items"} from your cart. This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={clearCart}>
                                        Yes, clear cart
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </DrawerFooter>
                )}
            </DrawerContent>
        </Drawer>
    );
}
