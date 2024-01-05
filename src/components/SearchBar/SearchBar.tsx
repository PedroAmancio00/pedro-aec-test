import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import styles from './SearchBar.module.css';
import { useFilters } from '../../hooks/UseFilters';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [showCheckboxes, setShowCheckboxes] = useState(false);
	const [checkboxSelections, setCheckboxSelections] = useState<{ [key: string]: boolean }>({});
	const { setNameFilter, setCategoryFilters } = useFilters();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setNameFilter(searchTerm);
		setCategoryFilters(Object.keys(checkboxSelections).filter((key) => checkboxSelections[key]));
	};

	const toggleCheckboxes = () => {
		setShowCheckboxes(!showCheckboxes);
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheckboxSelections({
			...checkboxSelections,
			[event.target.name]: event.target.checked
		});
	};

	return (
		<div>
			<Form onSubmit={handleSubmit} className={styles.formContainer}>
				<InputGroup>
					<button onClick={toggleCheckboxes} className={styles.buttonLeft}>
						Categorias
					</button>
					<FormControl
						type="text"
						placeholder="Digite sua busca"
						value={searchTerm}
						onChange={handleInputChange}
						className={styles.inputGroupButton}
					/>
					<button type="submit" className={styles.buttonRight}>
						Buscar
					</button>
				</InputGroup>
			</Form>
			{showCheckboxes && (
				<div className={styles.checkboxContainer}>
					<label>
						<input
							type="checkbox"
							name="Sapatos"
							checked={checkboxSelections['Sapatos'] || false}
							onChange={handleCheckboxChange}
						/>
						&nbsp; Sapatos
					</label>
					<label>
						<input
							type="checkbox"
							name="Roupas"
							checked={checkboxSelections['Roupas'] || false}
							onChange={handleCheckboxChange}
						/>
						&nbsp; Roupas
					</label>
					<label>
						<input
							type="checkbox"
							name="Chapéus"
							checked={checkboxSelections['Chapéus'] || false}
							onChange={handleCheckboxChange}
						/>
						&nbsp; Chapéus
					</label>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
