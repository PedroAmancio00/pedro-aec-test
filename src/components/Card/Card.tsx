import React from 'react';
import { Product } from '../../interfaces/Product.interface';
import styles from './Card.module.css';
import Button from '../Button/Button';

interface CardProps {
	product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
	return (
		<div>
			<div className={styles.card}>
				<img src={product.imageUrl} className={styles.cardImg} />
				<div>
					<h5>{product.name}</h5>
					<p>Preço: R${product.price}</p>
					<div>
						<Button text="Ver Detalhes" onClick={() => null}></Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
