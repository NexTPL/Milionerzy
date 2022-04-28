import Container from './components/Container/Container.js';
import Modal from './components/Modal/Modal.js';
import Mods from './components/Mods/Modal.js';
import Table from './components/Table/Table.js';
import Logo1 from './assets/Logo1.svg';
import Logo2 from './assets/Logo2.svg';
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreSliceActions } from './store';

function App() {
	const ShowModal = useSelector((state) => state.Store.Modal);
	const ShowMods = useSelector((state) => state.Store.Mods);
	const dispatch = useDispatch();
	const ModsModal = () => {
		dispatch(StoreSliceActions.mods());
	};
	return (
		<React.Fragment>
			{ShowMods && <Mods />}
			{ShowModal && <Modal />}
			<Container />
			<div onClick={ModsModal} className='BG'></div>
			<Table />
			<img src={Logo1} className='Logo' alt='LOGO' />
			<div className='Logo2'>
				<img src={Logo2} className='Rotate' alt='LOGO' />
			</div>
		</React.Fragment>
	);
}
export default App;
