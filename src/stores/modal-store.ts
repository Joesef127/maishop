import { create } from "zustand";

// Add new modal keys here as more modals are introduced across the app.
export type ModalType = "write-review";

// Loosely typed bag of props passed to whichever modal is currently active.
export type ModalData = Record<string, unknown>;

interface ModalState {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    openModal: (type: ModalType, data?: ModalData) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    openModal: (type, data = {}) => set({ type, data, isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));
