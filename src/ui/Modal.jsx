import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Modal.module.scss';
import { useEffect } from 'react';

const Modal = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const closeHandler = () => {
		navigate('..');
	}

	useEffect(() => {
		if(location.pathname === '/notFoundPokemon') {
			setTimeout(() => {
				closeHandler();
			}, 1500);
		}
	}, []);

	return (
		<>
			<div className={ classes.backdrop } onClick={ closeHandler }></div>
			<dialog className={classes.modal} open>
				{props.children}
			</dialog>
		</>
	)
}

export default Modal;