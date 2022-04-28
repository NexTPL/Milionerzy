import styles from './Question.module.css';
import { useSelector } from 'react-redux';

const Question = () => {
	const question = useSelector((state) => state.Store.Question.q);
	return (
		<div className={styles.QuestionContainer}>
			<div className={styles.Line}></div>
			{question.charAt(0).toUpperCase() + question.slice(1)}{' '}
		</div>
	);
};

export default Question;
