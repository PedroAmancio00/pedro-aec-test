import React, { useState, useEffect, ReactNode } from 'react';
import data from '../../assets/products.json';
import { Product } from '../../interfaces/Product.interface';

type LoadData = {
	render: (items: Product[]) => ReactNode;
};

const usableData: Product[] = filterData(data.items as Product[], '');

function filterData(data: Product[], filter: string) {
	return data.filter(
		(item) => item.name.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())
	);
}

const DataLoader: React.FC<LoadData> = (props) => {
	const [items, setItems] = useState<Product[]>([]);

	useEffect(() => {
		setItems(usableData);
	}, []);

	return <>{props.render(items)}</>;
};

export default DataLoader;
