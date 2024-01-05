import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../../hooks/UseCart';

const Cart: React.FC = () => {
	const { totalCart } = useCart();

	return <Button variant="outline-secondary">Carrinho: {totalCart}</Button>;
};

export default Cart;
