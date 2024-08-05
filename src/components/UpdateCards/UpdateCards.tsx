import { FC } from 'react';
import IconButton from '../../UI/buttons/IconButton/IconButton';
import classes from './updatecards.module.css';

interface IProps {
	updateCards: () => void;
}

const UpdateCards: FC<IProps> = ({ updateCards }) => {
	return (
		<>
			<header className={classes['update-cards']}>
				<h1>Notes</h1>
				<IconButton
					click={() => {
						updateCards();
						console.log('Updating cards...');
					}}
					icon='cached'
					color='green'
				/>
			</header>
		</>
	);
};

export default UpdateCards;
