import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
	const navigate = useNavigate();

	const logoClickHandler = () => {
		console.log('로고클릭');
		navigate('/');
	}

	return (
		<header className={classes.header}>
			<h1 className={classes.logo} onClick={logoClickHandler}>
				<img src="/images/main_logo.png" alt="메인 로고"/>
			</h1>
		</header>
	)
}

export default Header;