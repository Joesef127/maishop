import React from 'react';
import {Button} from "@/components/ui/button";
import ProductCard from "@/components/blocks/product-card";
import {topSellingData} from "@/data/home-data";
import AutoScrollingList from "@/components/blocks/auto-scrolling-list";
import {useRouter} from "next/navigation";

const TopSelling = () => {
    const router = useRouter();
    return (
        <section className="flex items-center justify-center">
            <div className="container flex-flex-col items-center justify-center space-y-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-12">Top Selling</h1>
                <AutoScrollingList>
                    {
                        topSellingData.map((arr, index) => (
                            <ProductCard key={index} {...arr} />
                        ))
                    }
                </AutoScrollingList>
                <div className="mt-9 w-full flex justify-center">
                    <Button onClick={() => router.push("/shop")} variant="primary" size="custom"
                            className="bg-transparent hover:bg-foreground text-foreground hover:text-background border border-foreground mx-auto">
                        View All
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TopSelling;
