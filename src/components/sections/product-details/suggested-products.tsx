import React from 'react';
import {Button} from "@/components/ui/button";
import ProductCard from "@/components/blocks/product-card";
import {newArrivalsData} from "@/data/home-data";

const SuggestedProducts = () => {
    return (
        <section className="flex items-center justify-center">
            <div className="container flex-flex-col items-center justify-center space-y-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">You might also like</h1>
                <div className="overflow-auto no-scrollbar">
                    <div className="overflow-x-scroll w-max xl:w-full grid grid-cols-4 gap-2">

                        {
                            newArrivalsData.map((arr, index) => (
                                <ProductCard key={index} {...arr} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuggestedProducts;
