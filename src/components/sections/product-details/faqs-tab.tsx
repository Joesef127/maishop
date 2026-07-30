import { ProductDetails } from "@/data/product-details-data";
import React from "react";

interface FAQsTabProps {
  product: ProductDetails;
}

const FAQsTab: React.FC<FAQsTabProps> = ({ product }) => {
  return (
    <section className="container py-4 mb-16 space-y-4">
      {product.faqs.length > 0 ? (
        product.faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-foreground/10 rounded-[20px] p-6 max-w-5xl mx-auto"
          >
            <h3 className="font-bold text-foreground text-lg mb-2">
              {faq.question}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))
      ) : (
        <div className="text-center py-16 text-foreground/60">
          No FAQs available for this product yet.
        </div>
      )}
    </section>
  );
};

export default FAQsTab;
