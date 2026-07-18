import React from 'react';
import {Button} from "@/components/ui/button";
import ProductCard from "@/components/blocks/product-card";
import {newArrivalsData} from "@/data/home-data";

const NewArrivals = () => {
    return (
        <section className="flex items-center justify-center">
            <div className="container flex-flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">New Arrivals</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {
                        newArrivalsData.map((arr, index) => (
                            <ProductCard key={index} {...arr} />
                        ))
                    }
                </div>
                <div className="mt-9 w-full flex justify-center">
                    <Button variant="primary" size="custom"
                            className="bg-transparent hover:bg-foreground text-foreground hover:text-background border border-foreground mx-auto">
                        View All
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
