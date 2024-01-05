import React from 'react';
import { Product } from '../../interfaces/Product.interface';
import styles from './Card.module.css';
import Star from '../../assets/star.png';
import Details from '../Details/Details';
import { useProductDetails } from '../../hooks/UseProductDetails';
import { Button } from 'react-bootstrap';
import { useCart } from '../../hooks/UseCart';

interface CardProps {
	product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
	const { setProductDetail, showComponent, setShowComponent } = useProductDetails();
	const { totalCart, setTotalCart } = useCart();

	const handleSeeDetails = () => {
		setProductDetail(product);
		setShowComponent(true);
	};

	const handleSetTotalCart = () => {
		setTotalCart(totalCart + 1);
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
						<Button onClick={() => handleSeeDetails()} variant="outline-secondary" className={styles.details}>
							Ver Detalhes
						</Button>
						{showComponent && <Details />}
						<Button variant="outline-secondary" onClick={() => handleSetTotalCart()}>
							Adicionar ao carrinho
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
