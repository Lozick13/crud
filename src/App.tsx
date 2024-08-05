import { useEffect, useState } from 'react';
import './App.css';
import AddCard from './components/AddCard/AddCard';
import Cards from './components/Cards/Cards';
import UpdateCards from './components/UpdateCards/UpdateCards';
import { ICard } from './ICard';

function App() {
	const [cards, setCards] = useState<ICard[]>([]);

	const getCards = () =>
		fetch('http://localhost:7070/notes')
			.then(response => response.json())
			.then(data => {
				setCards(data);
			})
			.catch(error => console.error('Error:', error));

	const deleteCard = (id: number) => {
		fetch(`http://localhost:7070/notes/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setCards(prevCards => prevCards.filter(card => card.id !== id));
			})
			.catch(error => console.error('Error:', error));
	};

	const addCard = (newCard: ICard) => {
		fetch(`http://localhost:7070/notes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCard),
		})
			.then(() => {
				setCards(prevCards => [...prevCards, newCard]);
			})
			.catch(error => console.error('Error:', error));
	};

	useEffect(() => {
		getCards();
	}, []);
	useEffect(() => {
		console.log(cards);
	}, [cards]);

	return (
		<>
			<UpdateCards updateCards={getCards} />
			<Cards deleteCard={deleteCard} cards={cards} />
			<AddCard addCard={addCard} />
		</>
	);
}

export default App;
