import Header from './components/Header/Header.tsx';
import './App.css';
import Card from './components/Card/Card.tsx';
import LoadData from './components/LoadData/LoadData.tsx';
import { useState } from 'react';

function App() {
	const [nameFilter, setNameFilter] = useState('');
	const [categoryFilters, setCategoryFilters] = useState(['']);

	const handleSearch = (searchTerm: string, categoryFilters: string[]) => {
		setNameFilter(searchTerm);
		setCategoryFilters(categoryFilters);
	};

	return (
		<>
			<div>
				<Header onSearch={handleSearch}></Header>
			</div>
			<div>
				<LoadData
					nameFilter={nameFilter}
					categoryFilters={categoryFilters}
					render={(items) => (
						<div className="row">
							{items.map((item) => (
								<div key={item.id} className="col-md-3 col-sm-4">
									<Card product={item} />
								</div>
							))}
						</div>
					)}
				/>
			</div>
		</>
	);
}

export default App;
