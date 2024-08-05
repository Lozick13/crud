import { FC } from 'react';
import { ICard } from '../../ICard';
import Card from '../Card/Card';
import classes from './cards.module.css';

interface IProps {
	cards: ICard[];
	deleteCard: (id: number) => void;
}

const Cards: FC<IProps> = ({ cards, deleteCard }) => {
	return (
		<>
			<section className={classes['cards']}>
				{
					<>
						{cards.map(card => (
							<Card key={card.id} id={card.id} deleteCard={deleteCard}>
								{card.content}
							</Card>
						))}
					</>
				}
			</section>
		</>
	);
};

export default Cards;
