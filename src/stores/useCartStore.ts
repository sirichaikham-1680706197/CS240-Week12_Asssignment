import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  changeAmount: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const exists = state.cart.some((item) => item.id === product.id);
          if (exists) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, amount: item.amount + 1 } : item,
              ),
            };
          }
          return { cart: [...state.cart, { ...product, amount: 1 }] };
        }),
      changeAmount: (id, amount) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, amount: Math.max(1, Math.floor(amount || 1)) } : item,
          ),
        })),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" },
  ),
);
