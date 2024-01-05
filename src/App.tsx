import Header from './components/Header/Header.tsx';
import './App.css';
import Card from './components/Card/Card.tsx';
import LoadData from './components/LoadData/LoadData.tsx';
import { FilterProvider } from './contexts/FilterContext.tsx';
import { ProductDetailsProvider } from './contexts/ProductDetailsContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';

function App() {
	return (
		<FilterProvider>
			<ProductDetailsProvider>
				<CartProvider>
					<>
						<div>
							<Header />
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
				</CartProvider>
			</ProductDetailsProvider>
		</FilterProvider>
	);
}

export default App;
