import { useSelector, useDispatch } from 'react-redux';
import { StoreSliceActions } from '../../store';
import styles from './Modal.module.css';
import 'animate.css';
import React, { useState } from 'react';
import Mod1 from '../../assets/Mod1.svg';
import Mod2 from '../../assets/Mod2.svg';
import Mod3 from '../../assets/Mod3.svg';

const Modal = () => {
	const dispatch = useDispatch();
	const ModsUsed = useSelector((state) => state.Store.ModsUsed);
	const [Animation, SetAnimation] = useState(`animate__fadeInDown`);
	const ExitHandler = () => {
		SetAnimation(`animate__fadeOutUp`);
		setTimeout(() => {
			dispatch(StoreSliceActions.mods());
		}, 1000);
	};
	const Mod1Handler = () => {
		dispatch(StoreSliceActions.mod1());
		ExitHandler();
	};
	const Mod2Handler = () => {
		dispatch(StoreSliceActions.mod2());
		ExitHandler();
	};
	const Mod3Handler = () => {
		dispatch(StoreSliceActions.mod3());
		ExitHandler();
	};

	return (
		<div className={`${styles.Absolute} animate__animated ${Animation}`}>
			<div className={styles.ModalBG} onClick={ExitHandler}></div>
			<div className={styles.Modal}>
				<div className={ModsUsed[0] ? styles.ModOff : styles.ModOn}>
					<img src={Mod1} alt='50/50' className={styles.Img} onClick={Mod1Handler} />
				</div>
				<div className={ModsUsed[1] ? styles.ModOff : styles.ModOn}>
					<img src={Mod2} alt='Klasa' className={styles.Img} onClick={Mod2Handler} />
				</div>
				<div className={ModsUsed[2] ? styles.ModOff : styles.ModOn}>
					<img src={Mod3} alt='Klasa' className={styles.Img} onClick={Mod3Handler} />
				</div>

				{/* <img src={Mod2} alt='Publiczność' />
				<img src={Mod3} alt='Nauczyciel' /> */}
			</div>
		</div>
	);
};

export default Modal;
