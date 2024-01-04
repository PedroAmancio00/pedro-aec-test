import Header from './components/Header/Header.tsx';
import './App.css';
import Card from './components/Card/Card.tsx';
import LoadData from './components/LoadData/LoadData.tsx';

function App() {
	return (
		<>
			<div>
				<Header></Header>
			</div>
			<div>
				<LoadData
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
