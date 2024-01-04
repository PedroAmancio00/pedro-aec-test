import React from 'react';
import { Product } from '../../interfaces/Product.interface';
import styles from './Details.module.css';
import Star from '../../assets/star.png';

interface DetailsProps {
	product: Product;
	onClose: () => void;
}

const Details: React.FC<DetailsProps> = ({ product, onClose }) => {
	const images = Array(product.stars).fill(null);

	return (
		<div className={styles.modal}>
			<div className={styles.card}>
				<div>
					<span className={styles.closeButton} onClick={onClose}>
						&times;
					</span>
				</div>
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
					<h3>Detalhes: {product.description}</h3>
				</div>
			</div>
		</div>
	);
};

export default Details;
