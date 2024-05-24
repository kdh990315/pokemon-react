import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RootRayout = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.body.className = darkMode ? 'dark_mode': 'white_mode';
	}, [darkMode])

	return (
		<>
			<ThemeContext.Provider value={{darkMode, setDarkMode}}>
				<Header></Header>
				<Outlet></Outlet>
			</ThemeContext.Provider>
		</>
	);
}

export default RootRayout;