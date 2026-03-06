"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  shoppingCart: CartItem[];
  addCart: (item: CartItem, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [shoppingCart, setCart] = useState<CartItem[]>([]);

  const addCart = (item: CartItem, quantity: number) => {
    const existingItem = shoppingCart.find((currentItem) => currentItem.id === item.id);
    if (existingItem) {
      setCart(
        shoppingCart.map((currentItem) =>
          currentItem.id === item.id
            ? { ...currentItem, quantity: currentItem.quantity + quantity }
            : currentItem
        )
      );
    } else {
      setCart([...shoppingCart, { ...item, quantity }]);
    }
  };
    const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ shoppingCart, addCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}