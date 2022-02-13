import styles from './Question.module.css';
import { useSelector } from 'react-redux';

const Question = () => {
	const question = useSelector((state) => state.Store.Question.q);
	return <div className={styles.QuestionContainer}>{question}</div>;
};

export default Question;
