"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { MenuItem } from "@/app/data/menu";

// Extend MenuItem to include quantity or just track items directly
export type CartItem = MenuItem & {
    cartId: string; // Unique ID for this instance in cart
};

type CartContextType = {
    items: CartItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (cartId: string) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (item: MenuItem) => {
        const newItem: CartItem = {
            ...item,
            cartId: crypto.randomUUID(),
        };
        setItems((prev) => [...prev, newItem]);
    };

    const removeFromCart = (cartId: string) => {
        setItems((prev) => prev.filter((item) => item.cartId !== cartId));
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartCount = items.length;

    const cartTotal = items.reduce((total, item) => total + item.price, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
