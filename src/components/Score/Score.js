import styles from './Score.module.css';

const Score = (props) => {
	return (
		<div className={styles.Score}>
			<div
				className={
					props.Answered ? styles.Answered : styles.NotAnswered
				}
			>
				{props.id}
			</div>
		</div>
	);
};

export default Score;
