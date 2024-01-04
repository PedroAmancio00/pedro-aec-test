// src/contexts/FilterContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export interface FilterContextState {
	nameFilter: string;
	categoryFilters: string[];
	setNameFilter: (nameFilter: string) => void;
	setCategoryFilters: (categoryFilters: string[]) => void;
}

export const FilterContext = createContext<FilterContextState | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [nameFilter, setNameFilter] = useState<string>('');
	const [categoryFilters, setCategoryFilters] = useState<string[]>(['']);

	return (
		<FilterContext.Provider value={{ nameFilter, categoryFilters, setNameFilter, setCategoryFilters }}>
			{children}
		</FilterContext.Provider>
	);
};
