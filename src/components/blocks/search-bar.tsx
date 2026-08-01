"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { searchProducts } from "@/data/products-catalog";

interface SearchBarProps {
    fullWidth?: boolean;
}

const SearchBar = ({ fullWidth = false }: SearchBarProps) => {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    const suggestions = searchProducts(query);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) return;
        setOpen(false);
        router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    };

    const handleSelect = (id: string) => {
        setOpen(false);
        router.push(`/shop/${id}`);
    };

    return (
        <div ref={containerRef} className="relative w-full">
            <form
                onSubmit={handleSubmit}
                className={`bg-input rounded-full px-4 py-2 flex items-center ${fullWidth ? "w-full" : "w-full min-w-0 xl:min-w-md"}`}
            >
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent border-none outline-none w-full text-sm"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setOpen(true);
                    }}
                    onFocus={() => query && setOpen(true)}
                />
                <button type="submit" aria-label="Search" className="text-gray-500 shrink-0">
                    <SearchIcon className="w-4 sm:w-6 h-4 sm:h-6 text-gray-500 mr-2" />
                </button>
            </form>

            {open && query.trim() ? (
                suggestions.length > 0 ? (
                    <ul className="absolute top-full mt-2 w-full bg-popover rounded-lg shadow-md ring-1 ring-foreground/10 z-50 overflow-hidden">
                        {suggestions.map((p) => (
                            <li key={p.id}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(p.id)}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-muted"
                                >
                                    {p.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="absolute top-full mt-2 w-full bg-popover rounded-lg shadow-md ring-1 ring-foreground/10 z-50 px-4 py-3 text-sm text-muted-foreground">
                        No products found for &quot;{query.trim()}&quot;
                    </div>
                )
            ) : null}
        </div>
    );
};

export default SearchBar;