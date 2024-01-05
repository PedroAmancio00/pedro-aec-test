import React from 'react';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Cart from '../Cart/Cart';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.title}>
				<h1>Singular Boutique</h1>
				<Cart />
			</div>
			<div>
				<SearchBar />
			</div>
		</header>
	);
};

export default Header;
