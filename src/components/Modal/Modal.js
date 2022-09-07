import { useSelector, useDispatch } from 'react-redux';
import { StoreSliceActions } from '../../store';
import styles from './Modal.module.css';
import React, { useState } from 'react';
import 'animate.css';

const Modal = () => {
	const Win = useSelector((state) => (state.Store.Score === 12 ? true : false));
	const [Animation, SetAnimation] = useState(`animate__fadeInDown`);
	const dispatch = useDispatch();
	const ClickHandler = () => {
		SetAnimation(`animate__fadeOutUp`);
		setTimeout(() => {
			dispatch(StoreSliceActions.modal());
			dispatch(StoreSliceActions.generate());
		}, 1000);
	};

	return (
		<div className={`${styles.ModalBG} animate__animated ${Animation}`} onClick={ClickHandler}>
			<div className={styles.Modal}>
				{Win ? (
					<div className={styles.TextModal}>
						<h1>GRATULACJE</h1>
						<p>Zostałeś/aś wirtualnym milionerem!</p>
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
