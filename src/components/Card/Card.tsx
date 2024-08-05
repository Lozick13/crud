import { FC, ReactNode } from 'react';
import IconButton from '../../UI/buttons/IconButton/IconButton';
import classes from './card.module.css';

interface IProps {
	children: ReactNode;
	deleteCard: (id: number) => void;
	id: number;
}

const Card: FC<IProps> = ({ children, deleteCard, id }) => {
	return (
		<>
			<article className={classes['card']}>
				<div className={classes['card__delete']}>
					<IconButton
						icon='close'
						color='red'
						click={() => {
							deleteCard(id);
						}}
					/>
				</div>
				<p className={classes['card__content']}>{children}</p>
			</article>
		</>
	);
};

export default Card;
