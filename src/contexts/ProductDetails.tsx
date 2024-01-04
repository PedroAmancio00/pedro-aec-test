import React, { createContext, useState, ReactNode } from 'react';

interface ProductDetailsContextState {
	showComponents: boolean;
	setShowComponents: (mostrar: boolean) => void;
}

export const ProductDetailsContext = createContext<ProductDetailsContextState | undefined>(undefined);

export const ProductDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [showComponents, setShowComponents] = useState(false);

	return <ProductDetailsContext.Provider value={{ showComponents, setShowComponents }}>{children}</ProductDetailsContext.Provider>;
};
