import styles from './Score.module.css';
import { useSelector } from 'react-redux';

const Score = (props) => {
	const AQuestions = useSelector((state) => state.Store.Score);
	return (
		<div className={styles.Score}>
			<div className={AQuestions >= props.id ? styles.Answered : styles.NotAnswered}>
				{props.id}
			</div>
		</div>
	);
};

export default Score;
