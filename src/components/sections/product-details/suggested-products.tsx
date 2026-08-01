import React from 'react';
import ProductCard from "@/components/blocks/product-card";
import AutoScrollingList from "@/components/blocks/auto-scrolling-list";
import {suggestedData} from "@/data/product-details-data";

const SuggestedProducts = () => {
    return (
        <section className="flex items-center justify-center">
            <div className="container flex-flex-col items-center justify-center space-y-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">You might also like</h1>
                <AutoScrollingList>
                        {
                            suggestedData.map((arr, index) => (
                                <ProductCard key={index} {...arr} />
                            ))
                        }
                </AutoScrollingList>
            </div>
        </section>
    );
};

export default SuggestedProducts;
