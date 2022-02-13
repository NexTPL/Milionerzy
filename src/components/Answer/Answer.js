import styles from './Answer.module.css';
import { useDispatch } from 'react-redux';
import { StoreSliceActions } from '../../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Answer = (props) => {
	const dispatch = useDispatch();
	const [Selected, changeSelected] = useState(false);
	const Set = useSelector((state) => state.Store.Set);
	const Reveal = useSelector((state) => state.Store.Reveal);
	const C = useSelector((state) => state.Store.Question.c);
	const Answer = useSelector((state) => state.Store.Question.a[Set[props.id]]);
	const Select = useSelector((state) => state.Store.Select);
	const Score = useSelector((state) => state.Store.Score);
	const ClickHandler = () => {
		if (Select) return;
		changeSelected(true);
		dispatch(StoreSliceActions.select());
		setTimeout(() => {
			dispatch(StoreSliceActions.stop_audio());
			dispatch(StoreSliceActions.check(Set[props.id]));
			changeSelected(false);
			if (C.includes(Set[props.id])) {
				setTimeout(() => {
					if (Score === 11) {
						dispatch(StoreSliceActions.modal());
					} else {
						dispatch(StoreSliceActions.generate());
					}
				}, 7000);
			} else {
				setTimeout(() => {
					dispatch(StoreSliceActions.modal());
				}, 5000);
			}
		}, 5000);
	};

	return !Reveal ? (
		<div
			className={`${styles.AnswerContainer} ${Selected ? styles.Selected : styles.NotSelected}`}
			onClick={ClickHandler}
		>
			{props.name + '. ' + Answer}
		</div>
	) : (
		<div
			className={`${styles.AnswerContainer} ${
				C.includes(Set[props.id]) ? styles.Good : styles.Bad
			}`}
			onClick={ClickHandler}
		>
			{props.name + '. ' + Answer}
		</div>
	);
};

export default Answer;
