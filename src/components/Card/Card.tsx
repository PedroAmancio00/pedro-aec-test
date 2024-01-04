import React, { useState } from 'react';
import { Product } from '../../interfaces/Product.interface';
import styles from './Card.module.css';
import Button from '../Button/Button';
import Star from '../../assets/star.png';
import Details from '../Details/Details';

interface CardProps {
	product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
	const [mostrarComponente, setMostrarComponente] = useState(false);
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
						<Button text="Ver Detalhes" onClick={() => setMostrarComponente(true)}></Button>
						{mostrarComponente && <Details product={product} onClose={() => setMostrarComponente(false)} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
