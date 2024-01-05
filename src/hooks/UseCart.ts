import { useContext } from 'react';
import { CartContext, CartContextState } from '../contexts/CartContext';

export const useCart = (): CartContextState => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('Error');
	}
	return context;
};
