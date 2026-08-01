"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/blocks/product-card";
import { ShopFilters } from "@/components/layout/shop-filters";
import { allProducts } from "@/data/products-catalog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const PAGE_SIZE = 9;

const sortOptions = [
  { value: "rating", label: "Top Rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];
const supportedSortValues = new Set<SortValue>(sortOptions.map((option) => option.value));

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const category = searchParams?.get("category");
  const type = searchParams?.get("type");
  const query = searchParams?.get("q")?.toLowerCase().trim() ?? "";
  const colors = useMemo(
    () => searchParams?.get("colors")?.split(",").filter(Boolean) ?? [],
    [searchParams],
  );
  const sizes = useMemo(
    () => searchParams?.get("sizes")?.split(",").filter(Boolean) ?? [],
    [searchParams],
  );
  const parseNumber = (raw: string | null | undefined) => {
    if (!raw) return undefined;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : undefined;
  };
  const min = parseNumber(searchParams?.get("min"));
  const max = parseNumber(searchParams?.get("max"));
  const requestedSort = searchParams?.get("sort");
  const sort: SortValue =
    requestedSort && supportedSortValues.has(requestedSort as SortValue)
      ? (requestedSort as SortValue)
      : "rating";
  const requestedPage = Math.max(1, Math.trunc(parseNumber(searchParams?.get("page")) ?? 1));
  const filtered = useMemo(() => {
    let list = allProducts.filter((p) => p.available !== false);

    if (category) list = list.filter((p) => p.category === category);
    if (type) list = list.filter((p) => p.type === type);
    if (query) list = list.filter((p) => p.title.toLowerCase().includes(query));
    if (colors.length) list = list.filter((p) => p.colors.some((c) => colors.includes(c)));
    if (sizes.length) list = list.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    if (min !== undefined) list = list.filter((p) => p.price >= min);
    if (max !== undefined) list = list.filter((p) => p.price <= max);

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
      default:
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }
    return sorted;
  }, [category, type, query, colors, sizes, min, max, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(requestedPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const heading = category
    ? category
    : type
      ? type.replace(/-/g, " ")
      : query
        ? `Results for "${query}"`
        : "All Products";

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (value === null) params.delete(key);
    else params.set(key, value);
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const rangeStart = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(safePage * PAGE_SIZE, filtered.length);

  return (
    <main className="container py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <ShopFilters />
        </aside>

        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-bold capitalize sm:text-3xl">{heading}</h1>

            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Filters" className="lg:hidden">
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto no-scrollbar p-4">
                <ShopFilters onApplied={() => setFiltersOpen(false)} className="border-none" />
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              {filtered.length === 0
                ? "No products found"
                : `Showing ${rangeStart}-${rangeEnd} of ${filtered.length} Products`}
            </p>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Sort by:</span>
              <Select value={sort} onValueChange={(v) => updateParam("sort", v)}>
                <SelectTrigger size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {paginated.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3">
              {paginated.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-muted-foreground">
              No products match your filters. Try adjusting them.
            </div>
          )}

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    aria-disabled={safePage === 1}
                    tabIndex={safePage === 1 ? -1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      if (safePage > 1) goToPage(safePage - 1);
                    }}
                    className={safePage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      href="#"
                      isActive={p === safePage}
                      onClick={(e) => {
                        e.preventDefault();
                        goToPage(p);
                      }}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    aria-disabled={safePage === totalPages}
                    tabIndex={safePage === totalPages ? -1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      if (safePage < totalPages) goToPage(safePage + 1);
                    }}
                    className={safePage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </section>
      </div>
    </main>
  );
}
