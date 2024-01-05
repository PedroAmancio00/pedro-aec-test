import React from 'react';
import styles from './Details.module.css';
import Star from '../../assets/star.png';
import { useProductDetails } from '../../hooks/UseProductDetails';

const Details: React.FC = () => {
	const { productDetails, setShowComponent } = useProductDetails();

	if (!productDetails) return null;

	const images = Array(productDetails.stars).fill(null);

	return (
		<div className={styles.modal}>
			<div className={styles.card}>
				<div>
					<span className={styles.closeButton} onClick={() => setShowComponent(false)}>
						&times;
					</span>
				</div>
				<img src={productDetails.imageUrl} className={styles.cardImg} />
				<div>
					<h3>Nome: {productDetails.name}</h3>
					<h3>Categoria: {productDetails.category}</h3>
					<h5>Preço: R${productDetails.price}</h5>
					<h5>
						Estrelas:
						{images.map((_, index) => (
							<img key={index} src={Star} className={styles.star} />
						))}
					</h5>
					<h3>Detalhes: {productDetails.description}</h3>
				</div>
			</div>
		</div>
	);
};

export default Details;
