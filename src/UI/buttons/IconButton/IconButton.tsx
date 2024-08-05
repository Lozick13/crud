import { FC } from 'react';
import classes from './iconbutton.module.css';

interface IProps {
	icon: string;
	color?: string;
	click?: () => void;
}

const IconButton: FC<IProps> = ({ icon, color, click }) => {
	return (
		<>
			<button onClick={click} className={classes['icon-button']}>
				<i
					style={{ fontSize: '40px', color: color }}
					className={'material-icons'}
				>
					{icon}
				</i>
			</button>
		</>
	);
};

export default IconButton;
