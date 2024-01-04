import React from 'react';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';

interface HeaderProps {
	onSearch: (searchTerm: string, descriptionFilter: string[]) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
	return (
		<header className={styles.header}>
			<div className={styles.title}>
				<h1>Singular Boutique</h1>
			</div>
			<div>
				<SearchBar onSearch={onSearch}></SearchBar>
			</div>
		</header>
	);
};

export default Header;
