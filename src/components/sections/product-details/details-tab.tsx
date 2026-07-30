import { ProductDetails } from "@/data/product-details-data";
import React from "react";

interface DetailsTabProps {
  product: ProductDetails;
}

const DetailsTab: React.FC<DetailsTabProps> = ({ product }) => {
  return (
    <section className="container py-4 mb-16">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-foreground/10 pb-4">
          <span className="font-semibold text-foreground">Material</span>
          <span className="sm:col-span-2 text-foreground/70">
            {product.details.material}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-foreground/10 pb-4">
          <span className="font-semibold text-foreground">Fit</span>
          <span className="sm:col-span-2 text-foreground/70">
            {product.details.fit}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-foreground/10 pb-4">
          <span className="font-semibold text-foreground">
            Care Instructions
          </span>
          <span className="sm:col-span-2 text-foreground/70">
            {product.details.careInstructions}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <span className="font-semibold text-foreground">Features</span>
          <ul className="sm:col-span-2 list-disc list-inside space-y-1 text-foreground/70">
            {product.details.features.map((feature: string, i: number) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailsTab;
