import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductDetails } from "@/data/product-details-data";
import React from "react";

interface FAQsTabProps {
  product: ProductDetails;
}

const FAQsTab: React.FC<FAQsTabProps> = ({ product }) => {
  return (
    <section className="container py-4 mb-16">
      {product.faqs.length > 0 ? (
        <Accordion
          type="single"
          collapsible
          className="max-w-5xl mx-auto space-y-4 border-none"
        >
          {product.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={String(faq.id)}
              className="border border-foreground/10 rounded-[20px] px-4 not-last:border-b"
            >
              <AccordionTrigger className="text-foreground tracking-wide text-sm sm:text-base py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-0">
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-16 text-foreground/60">
          No FAQs available for this product yet.
        </div>
      )}
    </section>
  );
};

export default FAQsTab;
