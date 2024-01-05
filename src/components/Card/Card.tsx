import React from 'react';
import { Product } from '../../interfaces/Product.interface';
import styles from './Card.module.css';
import Star from '../../assets/star.png';
import Details from '../Details/Details';
import { useProductDetails } from '../../hooks/UseProductDetails';
import { useCart } from '../../hooks/UseCart';

interface CardProps {
	product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
	const { setProductDetail, showComponent, setShowComponent } = useProductDetails();
	const { totalCart, cartItems, setTotalCart, setCartItems } = useCart();

	const handleSeeDetails = () => {
		setProductDetail(product);
		setShowComponent(true);
	};

	const handleSetTotalCart = (product: Product) => {
		const totalCartNumber = Number(totalCart);
		setTotalCart(String(totalCartNumber + 1));
		if (cartItems.length === 0) {
			setCartItems([...cartItems, { id: product.id, total: 1, name: product.name, price: product.price }]);
		}
		if (cartItems.length > 0) {
			const index = cartItems.findIndex((item) => item.id === product.id);
			if (index === -1) {
				setCartItems([...cartItems, { id: product.id, total: 1, name: product.name, price: product.price }]);
			} else {
				const newCartItems = [...cartItems];
				newCartItems[index].total += 1;
				setCartItems(newCartItems);
			}
		}
	};

	const images = Array(product.stars).fill(null);

	return (
		<div>
			<div className={styles.card}>
				<img src={product.imageUrl} className={styles.cardImg} />
				<div>
					<h3>Nome: {product.name}</h3>
					<h3>Categoria: {product.category}</h3>
					<h5>Preço: R${product.price}</h5>
					<h5>
						Estrelas:
						{images.map((_, index) => (
							<img key={index} src={Star} className={styles.star} />
						))}
					</h5>
					<div>
						<button onClick={() => handleSeeDetails()} className={styles.buttonLeft}>
							Ver Detalhes
						</button>
						{showComponent && <Details />}
						<button onClick={() => handleSetTotalCart(product)} className={styles.button}>
							Adicionar ao carrinho
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
