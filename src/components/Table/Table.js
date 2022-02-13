import Score from '../Score/Score';
import styles from './Table.module.css';

const Table = () => {
	return (
		<div className={styles.Table}>
			<Score id={12} />
			<Score id={11} />
			<Score id={10} />
			<Score id={9} />
			<Score id={8} />
			<Score id={7} />
			<Score id={6} />
			<Score id={5} />
			<Score id={4} />
			<Score id={3} />
			<Score id={2} />
			<Score id={1} />
		</div>
	);
};

export default Table;
