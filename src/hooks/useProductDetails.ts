import { useContext } from 'react';
import { ProductDetailsContext } from '../contexts/ProductDetails';

export const useProductDetails = () => {
	const context = useContext(ProductDetailsContext);
	if (!context) {
		throw new Error('Error');
	}
	return context;
};
