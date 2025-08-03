// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  menuOpen: null,
  toggleMenu: (value) =>
    set((state) => ({
      menuOpen: state.menuOpen === value ? "" : value,
    })),
}));

export default useStore;
