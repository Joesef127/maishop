"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/stores/modal-store";

export interface WriteReviewSubmission {
  name: string;
  rating: number;
  review: string;
}

export interface WriteReviewModalData {
  productTitle?: string;
  onSubmit?: (submission: WriteReviewSubmission) => void;
}

const WriteReviewModal: React.FC<{ data: WriteReviewModalData }> = ({ data }) => {
  const closeModal = useModalStore((state) => state.closeModal);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !review.trim() || rating === 0) {
      setError("Please add your name, a rating, and a short review.");
      return;
    }

    setError(null);
    data.onSubmit?.({ name: name.trim(), rating, review: review.trim() });
    toast.success("Review submitted", {
      description: "Thanks for sharing your feedback!",
    });

    setName("");
    setReview("");
    setRating(0);
    closeModal();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-lg font-bold">Write a Review</DialogTitle>
        <DialogDescription>
          {data.productTitle
            ? `Share your experience with ${data.productTitle}.`
            : "Share your experience with this product."}
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
        <div className="flex flex-col gap-1.5">
          <Label>Your Rating</Label>
          <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(null)}>
            {Array.from({ length: 5 }).map((_, i) => {
              const value = i + 1;
              const isFilled = (hoverRating ?? rating) >= value;
              return (
                <button
                  key={value}
                  type="button"
                  onMouseEnter={() => setHoverRating(value)}
                  onClick={() => setRating(value)}
                  aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
                  className="p-0.5"
                >
                  <Star
                    size={22}
                    className={isFilled ? "fill-yellow-400 text-yellow-400" : "text-foreground/25"}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="review-name">Name</Label>
          <Input
            id="review-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="review-text">Review</Label>
          <Textarea
            id="review-text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="What did you like or dislike?"
            className="min-h-24"
          />
        </div>

        {error && <p className="text-xs text-destructive" role="alert">{error}</p>}

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-1">
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">Submit Review</Button>
        </div>
      </form>
    </>
  );
};

export default WriteReviewModal;
