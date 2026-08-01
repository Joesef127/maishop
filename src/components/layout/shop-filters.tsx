"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronRight } from "lucide-react";
import { RiCheckLine } from "@remixicon/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { colorPalette, sizeOptions } from "@/data/home-data";

const productTypes: { label: string; value: string }[] = [
  { label: "T-shirts", value: "t-shirts" },
  { label: "Shorts", value: "shorts" },
  { label: "Shirts", value: "shirts" },
  { label: "Hoodie", value: "hoodie" },
  { label: "Jeans", value: "jeans" },
];

const dressStyles: { label: string; value: string }[] = [
  { label: "Casual", value: "casual" },
  { label: "Formal", value: "formal" },
  { label: "Party", value: "party" },
  { label: "Gym", value: "gym" },
];

export const MIN_PRICE = 0;
export const MAX_PRICE = 300;

interface ShopFiltersProps {
  className?: string;
  onApplied?: () => void;
}

export function ShopFilters({ className, onApplied }: ShopFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeType = searchParams?.get("type");
  const activeCategory = searchParams?.get("category");

  const [priceRange, setPriceRange] = useState<[number, number]>(() => [
    Number(searchParams?.get("min") ?? MIN_PRICE),
    Number(searchParams?.get("max") ?? MAX_PRICE),
  ]);
  const [selectedColors, setSelectedColors] = useState<string[]>(
    () => searchParams?.get("colors")?.split(",").filter(Boolean) ?? [],
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    () => searchParams?.get("sizes")?.split(",").filter(Boolean) ?? [],
  );

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") params.delete(key);
      else params.set(key, value);
    });
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    onApplied?.();
  };

  const toggleType = (value: string) => {
    updateParams({ type: activeType === value ? null : value });
  };

  const toggleCategory = (value: string) => {
    updateParams({ category: activeCategory === value ? null : value });
  };

  const toggleColor = (hex: string) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex],
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleApply = () => {
    updateParams({
      min: priceRange[0] === MIN_PRICE ? null : String(priceRange[0]),
      max: priceRange[1] === MAX_PRICE ? null : String(priceRange[1]),
      colors: selectedColors.length ? selectedColors.join(",") : null,
      sizes: selectedSizes.length ? selectedSizes.join(",") : null,
    });
  };

  const handleReset = () => {
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSelectedColors([]);
    setSelectedSizes([]);
    updateParams({
      min: null,
      max: null,
      colors: null,
      sizes: null,
    });
    router.push("/shop")
  };

  return (
    <div className={cn("flex flex-col rounded-3xl border border-border py-6", className)}>
      <div className="flex items-center justify-between px-6 mb-3">
        <h2 className="text-xl font-bold">Filters</h2>
        <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
      </div>

      <ul className="flex flex-col gap-3 px-6 mb-6">
        {productTypes.map((t) => (
          <li key={t.value}>
            <button
              type="button"
              onClick={() => toggleType(t.value)}
              className={cn(
                "flex w-full items-center justify-between text-sm py-1 text-muted-foreground transition-colors hover:text-foreground",
                activeType === t.value && "text-foreground font-semibold",
              )}
            >
              {t.label}
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="h-px bg-border" />

      <Accordion
        type="multiple"
        defaultValue={["price", "colors", "size", "dress-style"]}
        className="border-none bg-background"
      >
        <AccordionItem value="price">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="text-base font-semibold text-foreground">Price</span>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <Slider
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={5}
              value={priceRange}
              onValueChange={(v) => setPriceRange(v as [number, number])}
              className="mt-4"
            />
            <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="text-base font-semibold text-foreground">Colors</span>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="grid grid-cols-5 gap-3 pt-2">
              {colorPalette.map((c) => {
                const isSelected = selectedColors.includes(c.hex);
                return (
                  <button
                    type="button"
                    key={c.hex}
                    title={c.name}
                    aria-label={c.name}
                    onClick={() => toggleColor(c.hex)}
                    className="relative flex size-8 items-center justify-center rounded-full ring-1 ring-border"
                    style={{ backgroundColor: c.hex }}
                  >
                    {isSelected && (
                      <RiCheckLine
                        className={cn(
                          "size-4",
                          c.hex === "#FFFFFF" ? "text-black" : "text-white",
                        )}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="text-base font-semibold text-foreground">Size</span>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="flex flex-wrap gap-2 pt-2">
              {sizeOptions.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={cn(
                    "rounded-full border border-border px-3 py-1.5 text-xs transition-colors",
                    selectedSizes.includes(s)
                      ? "bg-foreground text-background"
                      : "bg-muted/40 hover:bg-muted",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dress-style" className="border-b-0!">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="text-base font-semibold text-foreground">Dress Style</span>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <ul className="flex flex-col gap-3 pt-2">
              {dressStyles.map((d) => (
                <li key={d.value}>
                  <button
                    type="button"
                    onClick={() => toggleCategory(d.value)}
                    className={cn(
                      "flex w-full items-center justify-between text-sm py-1 text-muted-foreground transition-colors hover:text-foreground",
                      activeCategory === d.value && "text-foreground font-semibold",
                    )}
                  >
                    {d.label}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="px-6">
      <Button variant="primary" size="custom" className="w-full justify-center" onClick={handleApply}>
        Apply Filter
      </Button>

      {/*  create a reset filter button */}
      <Button variant="secondary" size="custom" className="w-full justify-center mt-2" onClick={handleReset}>
        Reset Filter
      </Button>

      </div>
    </div>
  );
}
