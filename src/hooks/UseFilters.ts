// src/hooks/useFilters.ts
import { useContext } from 'react';
import { FilterContext, FilterContextState } from '../contexts/FilterContext';

export const useFilters = (): FilterContextState => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error('Error');
	}
	return context;
};
