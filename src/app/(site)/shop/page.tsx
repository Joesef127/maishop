import { Suspense } from "react";
import ShopPage from "@/pages/shop-page";

function Shop() {
    return (
        <Suspense>
            <ShopPage />
        </Suspense>
    );
}

export default Shop;