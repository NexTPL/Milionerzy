import Score from '../Score/Score';
import styles from './Table.module.css';

const Table = () => {
	return (
		<div className={styles.Table}>
			<Score id={12} Money={1000000} />
			<Score id={11} Money={500000} />
			<Score id={10} Money={250000} />
			<Score id={9} Money={125000} />
			<Score id={8} Money={75000} />
			<Score id={7} Money={40000} />
			<Score id={6} Money={20000} />
			<Score id={5} Money={10000} />
			<Score id={4} Money={5000} />
			<Score id={3} Money={2000} />
			<Score id={2} Money={1000} />
			<Score id={1} Money={500} Answered={true} />
		</div>
	);
};

export default Table;
