import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons/faCircleHalfStroke';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
	const navigate = useNavigate();

	const logoClickHandler = () => {
		console.log('로고클릭');
		navigate('/');
	}

	const {darkMode, setDarkMode} = useContext(ThemeContext);

	const darkmodeHandler = () => {
		setDarkMode(!darkMode);
	}
	

	return (
		<header className={classes.header}>
			<h1 className={classes.logo} onClick={logoClickHandler}>
				<img src="/images/main_logo.png" alt="메인 로고"/>
			</h1>
			<div className={classes.icon_container}>
				<FontAwesomeIcon icon={faCircleHalfStroke} onClick={darkmodeHandler}/>
			</div>
		</header>
	)
}

export default Header;