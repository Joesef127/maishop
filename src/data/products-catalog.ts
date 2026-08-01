import { ProductCardProps, newArrivalsData, topSellingData, additionalProductsData } from "@/data/home-data";
import { suggestedData } from "./product-details-data";

const productMap = new Map<string, ProductCardProps>(
    [...newArrivalsData, ...topSellingData, ...suggestedData, ...additionalProductsData].map((p) => [p.id, p]),
);
const allProducts: ProductCardProps[] = Array.from(productMap.values());

export function getProductById(id: string): ProductCardProps | undefined {
    return productMap.get(id);
}

export function searchProducts(query: string, limit = 5): ProductCardProps[] {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return allProducts
        .filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.type.toLowerCase().includes(q),
        )
        .slice(0, limit);
}

export { allProducts };