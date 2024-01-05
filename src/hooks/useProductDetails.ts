import { useContext } from 'react';
import { ProductDetailsContext } from '../contexts/ProductDetailsContext';

export const useProductDetails = () => {
	const context = useContext(ProductDetailsContext);
	if (!context) {
		throw new Error('Error');
	}
	return context;
};
