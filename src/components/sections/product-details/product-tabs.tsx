import { ProductDetails } from "@/data/product-details-data";
import React from "react";
import ReviewsTab from "./reviews-tab";
import DetailsTab from "./details-tab";
import FAQsTab from "./faqs-tab";

interface ProductTabsProps {
  product: ProductDetails;
  activeTab: "details" | "reviews" | "faqs";
  setActiveTab: (tab: "details" | "reviews" | "faqs") => void;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  product,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="m-0">
      {/* MIDDLE SECTION: Tabs Navigation */}
      <div className="container pb-8">
        <div className="grid grid-cols-3 text-center">
          {[
            { id: "details", label: "Product Details" },
            { id: "reviews", label: "Rating & Reviews" },
            { id: "faqs", label: "FAQs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id as "details" | "reviews" | "faqs")
              }
              className={`pb-5 text-base sm:text-lg font-medium relative transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground border-b border-foreground/10"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-foreground rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "reviews" && <ReviewsTab product={product} />}
      {activeTab === "details" && <DetailsTab product={product} />}
      {activeTab === "faqs" && <FAQsTab product={product} />}
    </div>
  );
};

export default ProductTabs;
