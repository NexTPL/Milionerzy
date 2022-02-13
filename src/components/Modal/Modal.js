import { useSelector, useDispatch } from 'react-redux';
import { StoreSliceActions } from '../../store';
import styles from './Modal.module.css';
import 'animate.css';

const Modal = () => {
	const Win = useSelector((state) => (state.Store.Score === 12 ? true : false));
	const dispatch = useDispatch();
	const ClickHandler = () => {
		dispatch(StoreSliceActions.modal());
		dispatch(StoreSliceActions.generate());
	};

	return (
		<div
			className={`${styles.ModalBG} animate__animated animate__fadeInDown`}
			onClick={ClickHandler}
		>
			<div className={styles.Modal}>
				{Win ? (
					<div className={styles.TextModal}>
						<h1>GRATULACJE</h1>
						<p>Zostałeś wirtualnym milionerem!</p>
					</div>
				) : (
					<div className={styles.TextModal}>
						<h1>ŹLE</h1>
						<p>Spróbuj jeszcze raz!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
