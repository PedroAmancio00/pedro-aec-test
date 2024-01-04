import React, { useState, useEffect, ReactNode } from 'react';
import data from '../../assets/products.json';
import { Product } from '../../interfaces/Product.interface';
import { useFilters } from '../../hooks/UseFilters';

type LoadDataProps = {
	render: (items: Product[]) => ReactNode;
};

function filterData(data: Product[], nameFilter: string, categoryFilters: string[]) {
	return data.filter((item) => {
		const matchesName = nameFilter ? item.name.toLowerCase().includes(nameFilter.toLowerCase()) : true;
		const matchesCategory =
			categoryFilters.length > 0
				? categoryFilters.some((filter) => item.category.toLowerCase().includes(filter.toLowerCase()))
				: true;
		return matchesName && matchesCategory;
	});
}

const LoadData: React.FC<LoadDataProps> = ({ render }) => {
	const [items, setItems] = useState<Product[]>([]);
	const { nameFilter, categoryFilters } = useFilters();

	useEffect(() => {
		const usableData: Product[] = filterData(data.items as Product[], nameFilter, categoryFilters);
		setItems(usableData);
	}, [nameFilter, categoryFilters]);

	return <>{render(items)}</>;
};

export default LoadData;
