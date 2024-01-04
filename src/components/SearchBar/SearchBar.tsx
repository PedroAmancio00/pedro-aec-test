import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import styles from './SearchBar.module.css';

interface SearchBarProps {
	onSearch: (searchTerm: string, checkboxValues: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [showCheckboxes, setShowCheckboxes] = useState(false);
	const [checkboxSelections, setCheckboxSelections] = useState<{ [key: string]: boolean }>({});

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(
			searchTerm,
			Object.keys(checkboxSelections).filter((key) => checkboxSelections[key])
		);
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
					<Button variant="outline-secondary" onClick={toggleCheckboxes} className={styles.inputGroupButton}>
						Categorias
					</Button>
					<FormControl type="text" placeholder="Digite sua busca" value={searchTerm} onChange={handleInputChange} />
					<Button type="submit" variant="primary">
						Buscar
					</Button>
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
