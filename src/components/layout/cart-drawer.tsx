"use client";

import * as React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingCart, Tag, X } from "lucide-react";
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
import {useCartItems} from "@/hooks/use-cart-items";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const VALID_DISCOUNT_CODES = ["098765"];

interface CartDrawerProps {
  trigger: React.ReactNode;
}

export function CartDrawer({ trigger }: CartDrawerProps) {
  const items = useCartItems()
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const [codeInput, setCodeInput] = React.useState("");
  const [appliedCode, setAppliedCode] = React.useState<string | null>(null);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const hasEligibleItems = items.some(
    (item) => item.hasDiscount && item.discountPercentage,
  );

  const effectiveCode = appliedCode && hasEligibleItems ? appliedCode : null;

  const discount = effectiveCode
    ? items.reduce((acc, item) => {
        if (item.hasDiscount && item.discountPercentage) {
          return (
            acc +
            ((item.price * item.discountPercentage) / 100) * item.quantity
          );
        }
        return acc;
      }, 0)
    : 0;

  const total = subtotal - discount;

  function handleApplyCode() {
    const trimmed = codeInput.trim();
    if (!trimmed) return;
    if (!VALID_DISCOUNT_CODES.includes(trimmed.toUpperCase())) {
      toast.error("Invalid discount code", {
        description: `The code "${trimmed}" is not valid.`,
      });
      return;
    }
    if (!hasEligibleItems) {
      toast.error("No eligible items", {
        description:
          "None of the items in your cart are eligible for a discount.",
      });
      return;
    }
    setAppliedCode(trimmed);
    toast.success("Discount applied!", {
      description: `Code "${trimmed}" applied successfully.`,
    });
  }

  function handleRemoveCode() {
    setAppliedCode(null);
    setCodeInput("");
  }

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col h-full w-full max-w-lg! ml-auto rounded-none">
        <DrawerHeader className="border-b px-4 py-4">
          <DrawerTitle className="flex items-center gap-2 text-base sm:text-lg font-semibold">
            <ShoppingCart className="w-5 h-5" />
            Your Cart
            {items.length > 0 && (
              <span className="ml-auto text-xs sm:text-sm capitalize! font-normal text-muted-foreground">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            )}
          </DrawerTitle>
        </DrawerHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 no-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-muted-foreground py-16">
              <ShoppingCart className="w-12 h-12 opacity-30" />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
              items.map((item) => (
                  <div key={item.id} className={`flex gap-3 transition-opacity ${item.unavailable ? "opacity-50" : ""}`}>
                    <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1 min-w-0">
                      <p className="text-sm font-medium leading-tight truncate">
                        {item.title}
                      </p>
                      {item.unavailable ? (
                          <p className="text-xs text-destructive font-medium">No longer available</p>
                      ) : (
                          <p className="text-sm font-semibold truncate">${item.price.toFixed(2)}</p>
                      )}
                      <div className="flex items-center gap-2 mt-auto">
                        <div className={`flex items-center border rounded-md ${item.unavailable ? "pointer-events-none" : ""}`}>
                          <button
                              className="px-2 py-1 hover:bg-muted active:scale-90 transition-all"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                              disabled={item.unavailable}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-sm min-w-6 text-center font-medium">{item.quantity}</span>
                          <button
                              className="px-2 py-1 hover:bg-muted active:scale-90 transition-all"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                              disabled={item.unavailable}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                            className="ml-auto text-muted-foreground hover:text-destructive active:scale-90 transition-all"
                            onClick={() => {
                              removeItem(item.id);
                              toast.success("Item removed", {
                                description: `${item.title} was removed from your cart.`,
                              });
                            }}
                            aria-label="Remove item"
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
            {/* Discount code input */}
            {!effectiveCode ? (
              <div className=" flex items-center gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    aria-label="Discount code"
                    placeholder="Discount code"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyCode()}
                    className="w-full pl-8 pr-3 py-2 text-sm border rounded-full bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                  />                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full px-4 shrink-0"
                  onClick={handleApplyCode}
                  disabled={!codeInput.trim()}
                >
                  Apply
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between text-sm px-1">
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <Tag className="w-3.5 h-3.5" />
                  <span className="font-medium">{effectiveCode}</span>
                </div>
                <button
                  onClick={handleRemoveCode}
                  className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors"
                  aria-label="Remove discount code"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </button>
              </div>
            )}

            {/* Price breakdown */}
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span>Discount</span>
                  <span>−${discount.toFixed(2)}</span>
                </div>
              )}
            </div>
            <Separator />
            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <DrawerClose asChild>
              <Button
                variant="primary"
                size="custom"
                className="bg-transparent hover:bg-foreground text-foreground hover:text-background border border-foreground w-full"
                onClick={() =>
                  toast.info("Checkout coming soon!", {
                    description: "We're working on it. Stay tuned!",
                  })
                }
              >
                Proceed to Checkout
              </Button>
            </DrawerClose>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="custom"
                  className="w-full rounded-full"
                >
                  Clear Cart
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear your cart?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove all {items.length}{" "}
                    {items.length === 1 ? "item" : "items"} from your cart. This
                    action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      clearCart();
                      setAppliedCode(null);
                      setCodeInput("");
                      toast.success("Cart cleared", {
                        description:
                          "All items have been removed from your cart.",
                      });
                    }}
                  >
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
