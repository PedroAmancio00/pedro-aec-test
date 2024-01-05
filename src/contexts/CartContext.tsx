import React, { createContext, useState, ReactNode } from 'react';

export interface CartContextState {
	totalCart: number;
	setTotalCart: (totalCart: number) => void;
}

export const CartContext = createContext<CartContextState | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [totalCart, setTotalCart] = useState<number>(0);

	return <CartContext.Provider value={{ totalCart, setTotalCart }}>{children}</CartContext.Provider>;
};
