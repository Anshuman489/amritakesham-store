
type CartState = {
  items: CartItem[];
  addItem: (item: CartItem, options?: { replace?: boolean }) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  setItems: (items: CartItem[]) => void;
};
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
  size?: string;
};




export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item: CartItem, options?: { replace?: boolean }) => set((state: CartState) => {
        const existing = state.items.find((i: CartItem) => i.id === item.id);
        if (existing) {
          if (options && options.replace) {
            // Replace the quantity with the new one
            return {
              items: state.items.map((i: CartItem) =>
                i.id === item.id ? { ...i, qty: item.qty } : i
              ),
            };
          } else {
            // Add to the existing quantity
            return {
              items: state.items.map((i: CartItem) =>
                i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
              ),
            };
          }
        }
        return { items: [...state.items, item] };
      }),
      removeItem: (id: string) => set((state: CartState) => ({
        items: state.items.filter((i: CartItem) => i.id !== id),
      })),
      updateQty: (id: string, qty: number) => set((state: CartState) => {
        if (qty < 1) {
          return { items: state.items.filter((i: CartItem) => i.id !== id) };
        }
        return {
          items: state.items.map((i: CartItem) =>
            i.id === id ? { ...i, qty } : i
          ),
        };
      }),
      clearCart: () => set({ items: [] }),
      setItems: (items: CartItem[]) => set({ items }),
    }),
    {
      name: 'cart-storage', // name of item in storage
      partialize: (state) => ({ items: state.items }),
    }
  )
);
