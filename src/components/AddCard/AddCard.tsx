import { FC, useState } from 'react';
import { ICard } from '../../ICard';
import IconButton from '../../UI/buttons/IconButton/IconButton';
import classes from './addcard.module.css';

interface IProps {
	addCard: (card: ICard) => void;
}

const AddCard: FC<IProps> = ({ addCard }) => {
	const [data, setData] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addCard({
			id: new Date().getTime(),
			content: data,
		});
		setData('');
	};
	return (
		<>
			<article className={classes['add-card']}>
				<h2>New Note</h2>
				<form onSubmit={handleSubmit} className={classes['add-card__form']}>
					<textarea
						id='data'
						name='data'
						required
						value={data}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setData(e.target.value)
						}
						className={classes['add-card__textarea']}
					/>
					<IconButton icon='send' />
				</form>
			</article>
		</>
	);
};

export default AddCard;
