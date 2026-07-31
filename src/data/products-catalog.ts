import { ProductCardProps, newArrivalsData, topSellingData } from "@/data/home-data";
import { suggestedData } from "./product-details-data";

const allProducts: ProductCardProps[] = [...newArrivalsData, ...topSellingData, ...suggestedData];

const productMap = new Map(allProducts.map((p) => [p.id, p]));

export function getProductById(id: string): ProductCardProps | undefined {
    return productMap.get(id);
}

export function searchProducts(query: string, limit = 5): ProductCardProps[] {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return allProducts
        .filter((p) => p.title.toLowerCase().includes(q))
        .slice(0, limit);}

export { allProducts };