import { ProductDetails } from "@/data/product-details-data";
import React from "react";
import { Star, SlidersHorizontal, ChevronDown, MoreHorizontal, CheckCircle2 } from "lucide-react";

interface ReviewsTabProps {
  product: ProductDetails;
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ product }) => {
  return (
    <section className="container">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            All Reviews
          </h2>
          <span className="text-sm text-foreground/60 font-normal">
            ({product.reviews.length})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors"
            title="Filter reviews"
          >
            <SlidersHorizontal size={18} />
          </button>

          <div className="relative hidden sm:block">
            <button className="flex items-center gap-2 bg-muted px-5 py-3 rounded-full text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors">
              <span>Latest</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <button className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      {product.reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {product.reviews.map((review) => (
            <div
              key={review.id}
              className="border border-foreground/10 rounded-[20px] p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#FFC633]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(review.rating)
                            ? "fill-[#FFC633] text-[#FFC633]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <button className="text-foreground/40 hover:text-foreground">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mb-3">
                  <h3 className="font-bold text-foreground text-lg">
                    {review.name}
                  </h3>
                  {review.isVerified && (
                    <CheckCircle2
                      size={18}
                      className="text-[#01AB31] fill-[#01AB31]/10"
                    />
                  )}
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              <p className="text-foreground/60 text-xs font-medium">
                Posted on {review.date}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-foreground/60">
          No reviews yet for this product. Be the first to leave a review!
        </div>
      )}

      {product.reviews.length > 6 && (
        <div className="flex justify-center">
          <button className="border border-foreground/10 bg-background hover:bg-muted text-foreground font-medium px-9 py-3.5 rounded-full transition-all text-sm">
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewsTab;
