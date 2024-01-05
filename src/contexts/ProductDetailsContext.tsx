import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../interfaces/Product.interface';

interface ProductDetailsContextState {
	productDetails: Product | null;
	showComponent: boolean;
	setProductDetail: (product: Product | null) => void;
	setShowComponent: (show: boolean) => void;
}

export const ProductDetailsContext = createContext<ProductDetailsContextState | undefined>(undefined);

export const ProductDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [productDetails, setProductDetail] = useState<Product | null>(null);
	const [showComponent, setShowComponent] = useState(false);

	return (
		<ProductDetailsContext.Provider value={{ productDetails, showComponent, setProductDetail, setShowComponent }}>
			{children}
		</ProductDetailsContext.Provider>
	);
};
