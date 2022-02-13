import Container from './components/Container/Container.js';
import Modal from './components/Modal/Modal.js';
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
	const ShowModal = useSelector((state) => state.Store.Modal);
	return (
		<React.Fragment>
			{ShowModal && <Modal />}
			<Container />
		</React.Fragment>
	);
}
export default App;
