import React from 'react';
import { Product } from '../../interfaces/Product.interface';
import styles from './Card.module.css';

interface CardProps {
	product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
	return (
		<div>
			<div className={styles.card}>
				<img src={product.imageUrl} className={styles.cardImg} />
				<div>
					<h5>{product.description}</h5>
					<p>Preço: R${product.price}</p>
					<div>
						<button>Editar product</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
