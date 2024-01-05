import React, { createContext, useState, ReactNode } from 'react';
import { CartItems } from '../interfaces/CartItems.interface';

export interface CartContextState {
	totalCart: string;
	showComponent: boolean;
	cartItems: CartItems[];
	setTotalCart: (totalCart: string) => void;
	setCartItems: (cartItems: CartItems[]) => void;
	setShowComponent: (show: boolean) => void;
}

export const CartContext = createContext<CartContextState | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [totalCart, setTotalCart] = useState<string>('0');
	const [cartItems, setCartItems] = useState<CartItems[]>([]);
	const [showComponent, setShowComponent] = useState(false);

	return (
		<CartContext.Provider value={{ totalCart, cartItems, showComponent, setTotalCart, setCartItems, setShowComponent }}>
			{children}
		</CartContext.Provider>
	);
};
