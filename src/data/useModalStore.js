import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isDemoModalOpen: false,
  isGetStartedModalOpen: false,
  openDemoModal: () => set({ isDemoModalOpen: true }),
  closeDemoModal: () => set({ isDemoModalOpen: false }),
  openGetStartedModal: () => set({ isGetStartedModalOpen: true }),
  closeGetStartedModal: () => set({ isGetStartedModalOpen: false }),
}));
