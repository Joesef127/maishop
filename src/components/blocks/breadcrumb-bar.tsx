"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { navItems } from "@/data/header-data";
import { productDetailsData } from "@/data/product-details-data";

const findLabel = (segment: string) => {
    const match = navItems.find((item) => item.link === `/${segment}`);
    if (match) return match.title;

    // If the segment is a known product id, show its title instead of the raw id/slug.
    const product = productDetailsData[segment];
    if (product) return product.title;

    return segment.replace(/-/g, " ");
};

function BreadcrumbTrail() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const segments = pathname?.split("/").filter(Boolean) || [];

    if (segments.length === 0) return null;

    // Reflect the active dress-style filter on the shop page (e.g. Home > Casual).
    const category = pathname === "/shop" ? searchParams?.get("category") : null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const isLast = index === segments.length - 1;
                    const label = isLast && category ? category : findLabel(segment);
                    const isProductLabel = Boolean(productDetailsData[segment]);

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className={isProductLabel ? "" : "capitalize"}>
                                        {label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link
                                            href={href}
                                            className={isProductLabel ? "" : "capitalize"}
                                        >
                                            {label}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export function DynamicBreadcrumb() {
    return (
        <Suspense fallback={null}>
            <BreadcrumbTrail />
        </Suspense>
    );
}