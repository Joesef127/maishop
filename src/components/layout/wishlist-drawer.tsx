"use client";

import * as React from "react";
import Image from "next/image";
import { Trash2, Heart, HeartOff, ShoppingCart } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { useWishItems, WishDisplayItem } from "@/hooks/use-wish-items";
import { useWishStore } from "@/stores/wish-store";
import { useCartStore } from "@/stores/cart-store";
import StarRating from "@/components/blocks/star-rating";
import { toast } from "sonner";

interface WishlistDrawerProps {
    trigger: React.ReactNode;
}

export function WishlistDrawer({ trigger }: WishlistDrawerProps) {
    const items = useWishItems();
    const removeWishItem = useWishStore((state) => state.removeWishItem);
    const clearWishList = useWishStore((state) => state.clearWishList);
    const addItem = useCartStore((state) => state.addItem);

    function handleAddToCart(item: WishDisplayItem) {
        addItem(item.id);
        toast.success("Added to cart", {
            description: `${item.title} was added to your cart.`,
        });
    }

    const availableItems = items.filter((item) => !item.unavailable);

    function handleAddAllToCart() {
        availableItems.forEach((item) => addItem(item.id));
        toast.success("All items added to cart", {
            description: `${availableItems.length} ${availableItems.length === 1 ? "item" : "items"} added to your cart.`,
        });
    }

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>{trigger}</DrawerTrigger>
            <DrawerContent className="flex flex-col h-full w-full max-w-lg! ml-auto rounded-none">
                <DrawerHeader className="border-b px-4 py-4">
                    <DrawerTitle className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                        <Heart className="w-5 h-5" />
                        Wishlist
                        {items.length > 0 && (
                            <span className="ml-auto text-xs sm:text-sm capitalize! font-normal text-muted-foreground">
                                {items.length}{" "}
                                {items.length === 1 ? "item" : "items"}
                            </span>
                        )}
                    </DrawerTitle>
                </DrawerHeader>

                {/* Wishlist Items */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 no-scrollbar">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground py-16">
                            <HeartOff className="w-12 h-12 opacity-30" />
                            <p className="text-sm">Your wishlist is empty</p>
                            <DrawerClose asChild>
                                <Button
                                    variant="primary"
                                    size="custom"
                                    className="bg-transparent hover:bg-foreground text-foreground hover:text-background border border-foreground rounded-full px-6"
                                >
                                    Continue Shopping
                                </Button>
                            </DrawerClose>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className={`flex gap-3 ${item.unavailable ? "opacity-50" : ""}`}
                            >
                                <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center"
                                    />
                                    {item.unavailable && (
                                        <div className="absolute inset-0 bg-black/40" />
                                    )}
                                </div>
                                <div className="flex flex-col flex-1 gap-1 min-w-0">
                                    <p className="text-sm font-medium leading-tight truncate">
                                        {item.title}
                                    </p>
                                    {item.unavailable ? (
                                        <p className="text-xs text-destructive font-medium">
                                            No longer available
                                        </p>
                                    ) : (
                                        <>
                                            <StarRating
                                                rating={item.rating}
                                                readOnly
                                                size="size-3"
                                            />
                                            <div className="flex items-center gap-1.5">
                                                <p className="text-sm font-semibold">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                                {item.hasDiscount &&
                                                    item.discountPercentage && (
                                                        <span className="text-xs text-muted-foreground line-through">
                                                            $
                                                            {(
                                                                item.price /
                                                                (1 -
                                                                    item.discountPercentage /
                                                                        100)
                                                            ).toFixed(2)}
                                                        </span>
                                                    )}
                                            </div>
                                        </>
                                    )}
                                    <div className="flex items-center gap-2 mt-auto">
                                        <button
                                            className={`flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ${item.unavailable ? "pointer-events-none opacity-50" : ""}`}
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                            disabled={item.unavailable}
                                            aria-label={`Add ${item.title} to cart`}
                                        >
                                            <ShoppingCart className="w-3.5 h-3.5" />
                                            Add to Cart
                                        </button>
                                        <button
                                            className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                                            onClick={() => {
                                                removeWishItem(item.id);
                                                toast.success(
                                                    "Removed from wishlist",
                                                    {
                                                        description: `${item.title} was removed from your wishlist.`,
                                                    },
                                                );
                                            }}
                                            aria-label={`Remove ${item.title} from wishlist`}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <DrawerFooter className="border-t px-4 py-4 gap-3">
                        <Separator />
                        <DrawerClose asChild>
                            <Button
                                variant="primary"
                                size="custom"
                                className="bg-transparent hover:bg-foreground text-foreground hover:text-background border border-foreground w-full"
                                onClick={handleAddAllToCart}
                            >
                                Add All to Cart
                            </Button>
                        </DrawerClose>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="custom"
                                    className="w-full rounded-full"
                                >
                                    Clear Wishlist
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Clear your wishlist?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This will remove all {items.length}{" "}
                                        {items.length === 1 ? "item" : "items"}{" "}
                                        from your wishlist. This action cannot
                                        be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => {
                                            clearWishList();
                                            toast.success("Wishlist cleared", {
                                                description:
                                                    "All items have been removed from your wishlist.",
                                            });
                                        }}
                                    >
                                        Yes, clear wishlist
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
