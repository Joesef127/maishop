"use client";

import { ProductDetails } from "@/data/product-details-data";
import { ReviewCardProps } from "@/data/home-data";
import React, { useMemo, useState } from "react";
import { Star, SlidersHorizontal, ChevronDown } from "lucide-react";
import ReviewCard from "@/components/blocks/review-card";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { useModalStore } from "@/stores/modal-store";
import { WriteReviewSubmission } from "@/components/modals/write-review-modal";

interface ReviewsTabProps {
  product: ProductDetails;
}

type SortOption = "latest" | "oldest" | "highest" | "lowest";

const SORT_LABELS: Record<SortOption, string> = {
  latest: "Latest",
  oldest: "Oldest",
  highest: "Highest Rated",
  lowest: "Lowest Rated",
};

const VISIBLE_STEP = 6;

const ReviewsTab: React.FC<ReviewsTabProps> = ({ product }) => {
  const [reviews, setReviews] = useState<ReviewCardProps[]>(product.reviews);
  const [sortOption, setSortOption] = useState<SortOption>("latest");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_STEP);

  const openModal = useModalStore((state) => state.openModal);
  const hasActiveFilters = ratingFilter !== null || verifiedOnly;

  const visibleReviews = useMemo(() => {
    const filtered = reviews.filter((review) => {
      if (ratingFilter !== null && Math.round(review.rating) !== ratingFilter) {
        return false;
      }
      if (verifiedOnly && !review.isVerified) {
        return false;
      }
      return true;
    });

    const sorted = filtered.sort((a, b) => {
      switch (sortOption) {
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "highest":
          return b.rating - a.rating;
        case "lowest":
          return a.rating - b.rating;
      }
    });

    return sorted.slice(0, visibleCount);
  }, [reviews, ratingFilter, verifiedOnly, sortOption, visibleCount]);

  const totalFilteredCount = useMemo(() => {
    return reviews.filter((review) => {
      if (ratingFilter !== null && Math.round(review.rating) !== ratingFilter) {
        return false;
      }
      return !(verifiedOnly && !review.isVerified);
    }).length;
  }, [reviews, ratingFilter, verifiedOnly]);

  const handleWriteReview = () => {
    openModal("write-review", {
      productTitle: product.title,
      onSubmit: (submission: WriteReviewSubmission) => {
        setReviews((prev) => [
          {
            id: `review-${Date.now()}`,
            name: submission.name,
            rating: submission.rating,
            review: submission.review,
            isVerified: false,
            date: new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
          },
          ...prev,
        ]);
      },
    });
  };

  return (
    <section className="container">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            All Reviews
          </h2>
          <span className="text-sm text-foreground/60 font-normal">
            ({totalFilteredCount})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors relative",
                  hasActiveFilters
                    ? "bg-foreground text-background"
                    : "bg-muted text-foreground hover:bg-foreground/10"
                )}
                title="Filter reviews"
              >
                <SlidersHorizontal size={18} />
                {hasActiveFilters && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-500" />
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 p-4">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50 mb-2">
                    Rating
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setRatingFilter(null)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                        ratingFilter === null
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground hover:bg-foreground/10"
                      )}
                    >
                      All
                    </button>
                    {[5, 4, 3, 2, 1].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setRatingFilter(ratingFilter === star ? null : star)
                        }
                        className={cn(
                          "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                          ratingFilter === star
                            ? "bg-foreground text-background"
                            : "bg-muted text-foreground hover:bg-foreground/10"
                        )}
                      >
                        {star}
                        <Star size={11} className="fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <Checkbox
                    checked={verifiedOnly}
                    onCheckedChange={(checked) => setVerifiedOnly(!!checked)}
                  />
                  Verified purchases only
                </label>

                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      setRatingFilter(null);
                      setVerifiedOnly(false);
                    }}
                    className="text-xs font-medium text-foreground/60 hover:text-foreground underline self-start"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden sm:flex items-center gap-2 bg-muted px-5 py-3 rounded-full text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors">
                <span>{SORT_LABELS[sortOption]}</span>
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => setSortOption(option)}
                  className={sortOption === option ? "font-medium" : undefined}
                >
                  {SORT_LABELS[option]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={handleWriteReview}
            className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      {visibleReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {visibleReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review.review}
              name={review.name}
              rating={review.rating}
              isVerified={review.isVerified}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-foreground/60">
          {reviews.length === 0
            ? "No reviews yet for this product. Be the first to leave a review!"
            : "No reviews match your current filters."}
        </div>
      )}

      {totalFilteredCount > visibleCount && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + VISIBLE_STEP)}
            className="border border-foreground/10 bg-background hover:bg-muted text-foreground font-medium px-9 py-3.5 rounded-full transition-all text-sm"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewsTab;
