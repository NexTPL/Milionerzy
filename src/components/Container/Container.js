import styles from './Container.module.css';
import Answer from '../Answer/Answer.js';
import Question from '../Question/Question.js';

const Container = () => {
	return (
		<div className={styles.Container}>
			<div className={styles.Player_Container}>
				<Question />
				<div className={styles.Answer_Container}>
					<Answer id={0} name={'A'} className={styles.Answer} />
					<Answer id={2} name={'B'} className={styles.Answer} />
					<Answer id={1} name={'C'} className={styles.Answer} />
					<Answer id={3} name={'D'} className={styles.Answer} />
				</div>
			</div>
		</div>
	);
};

export default Container;
