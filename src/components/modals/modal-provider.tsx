"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModalStore } from "@/stores/modal-store";
import WriteReviewModal, {
  WriteReviewModalData,
} from "@/components/modals/write-review-modal";

// Single mounted modal shell; add a case here whenever a new modal type is introduced.
const ModalProvider: React.FC = () => {
  const { type, data, isOpen, closeModal } = useModalStore();

  const renderContent = () => {
    switch (type) {
      case "write-review":
        return <WriteReviewModal data={data as WriteReviewModalData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-md">{renderContent()}</DialogContent>
    </Dialog>
  );
};

export default ModalProvider;
