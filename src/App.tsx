import Header from './components/Header/Header.tsx';
import './App.css';
import Card from './components/Card/Card.tsx';
import { Product } from './interfaces/Product.interface.ts';

function App() {
	const product: Product = {
		id: 1,
		name: 'teste',
		description: 'Product 1',
		price: '100.00',
		stars: 4,
		imageUrl: 'https://encurtador.com.br/oqtIN'
	};

	return (
		<>
			<div>
				<Header title="t"></Header>
			</div>
			<div className="main-content">
				<div className="row">
					<div className="col-md-3 col-sm-4">
						<Card product={product} />
					</div>
					<div className="col-md-3 col-sm-4">
						<Card product={product} />
					</div>
					<div className="col-md-3 col-sm-4">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
					<div className="col-md-3">
						<Card product={product} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
