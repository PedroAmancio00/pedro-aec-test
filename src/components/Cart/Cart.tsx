import React from 'react';
import { useCart } from '../../hooks/UseCart';
import styles from './Cart.module.css';
import { CartItems } from '../../interfaces/CartItems.interface';

const Cart: React.FC = () => {
	const { totalCart, showComponent, cartItems, setShowComponent, setCartItems, setTotalCart } = useCart();

	const getTotal = () => {
		let total = 0;
		for (let i = 0; i < cartItems.length; i++) {
			total += cartItems[i].total * Number(cartItems[i].price);
		}
		total.toFixed(2);
		return total;
	};

	const multiplyValues = (item: CartItems) => {
		const total = Number(item.price) * item.total;
		return total.toFixed(2);
	};

	const handleSetCartItems = (item: CartItems, add: boolean) => {
		const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
		const newCartItems = [...cartItems];
		let total = Number(totalCart);
		if (add) {
			newCartItems[index].total += 1;
			total += 1;
		} else {
			newCartItems[index].total -= 1;
			total -= 1;
		}
		if (newCartItems[index].total === 0) {
			newCartItems.splice(index, 1);
		}
		setCartItems(newCartItems);
		setTotalCart(total.toFixed(2));
	};

	return (
		<div>
			<button onClick={() => setShowComponent(true)} className={styles.cartButton}>
				Carrinho: {totalCart}
			</button>
			{showComponent && (
				<div className={styles.modal}>
					<div className={styles.card}>
						<div>
							<span className={styles.closeButton} onClick={() => setShowComponent(false)}>
								&times;
							</span>
						</div>
						<div>
							<h2>Carrinho:</h2>
							{cartItems.map((_, index) => (
								<h3 key={cartItems[index].id}>
									{cartItems[index].name}: {cartItems[index].total} - R$: {multiplyValues(cartItems[index])}{' '}
									<span className={styles.button} onClick={() => handleSetCartItems(cartItems[index], true)}>
										+
									</span>
									<span className={styles.button} onClick={() => handleSetCartItems(cartItems[index], false)}>
										-
									</span>
								</h3>
							))}
							<h2>Total: R$ {getTotal()}</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
