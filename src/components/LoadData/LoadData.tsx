import React, { useState, useEffect, ReactNode } from 'react';
import data from '../../assets/products.json';
import { Product } from '../../interfaces/Product.interface';

type LoadDataProps = {
	render: (items: Product[]) => ReactNode;
	nameFilter: string;
	categoryFilters: string[];
};

function filterData(data: Product[], nameFilter: string, categoryFilters: string[]) {
	return data.filter((item) => {
		console.log(item);
		const matchesName = nameFilter ? item.name.toLowerCase().includes(nameFilter.toLowerCase()) : true;

		const matchesCategory =
			categoryFilters.length > 0
				? categoryFilters.some((filter) => item.category.toLowerCase().includes(filter.toLowerCase()))
				: true;

		return matchesName && matchesCategory;
	});
}
const DataLoader: React.FC<LoadDataProps> = ({ render, nameFilter, categoryFilters }) => {
	const [items, setItems] = useState<Product[]>([]);

	useEffect(() => {
		const usableData: Product[] = filterData(data.items as Product[], nameFilter, categoryFilters);
		setItems(usableData);
	}, [nameFilter, categoryFilters]);

	return <>{render(items)}</>;
};

export default DataLoader;
