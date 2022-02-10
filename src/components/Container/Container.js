import styles from './Container.module.css';

import Table from '../Table/Table.js';
import Answer from '../Answer/Answer.js';
import Question from '../Question/Question.js';
import Logo from '../Logo.svg';

const Container = () => {
	return (
		<div className={styles.Container}>
			<Table />
			<div className={styles.Player_Container}>
				<div className={styles.Logo}>
					<img src={Logo} alt='LOGO' />
				</div>
				<Question />
				<div className={styles.Answer_Container}>
					<Answer id={0} className={styles.Answer} />
					<Answer id={2} className={styles.Answer} />
					<Answer id={1} className={styles.Answer} />
					<Answer id={3} className={styles.Answer} />
				</div>
			</div>
		</div>
	);
};

export default Container;
