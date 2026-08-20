import { ProductDetails } from "@/data/product-details-data";
import React from "react";
import ReviewsTab from "./reviews-tab";
import DetailsTab from "./details-tab";
import FAQsTab from "./faqs-tab";
import { motion, AnimatePresence } from "motion/react";

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
        <div className="grid grid-cols-3 text-center border-b border-foreground/10 relative">
          {[
            { id: "details", label: "Details" },
            { id: "reviews", label: "Reviews" },
            { id: "faqs", label: "FAQs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id as "details" | "reviews" | "faqs")
              }
              className={`pb-5 text-base sm:text-lg font-medium relative transition-colors ${
                activeTab === tab.id
                  ? "text-foreground font-semibold"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeProductTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-foreground rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeTab === "reviews" && <ReviewsTab product={product} />}
            {activeTab === "details" && <DetailsTab product={product} />}
            {activeTab === "faqs" && <FAQsTab product={product} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductTabs;
