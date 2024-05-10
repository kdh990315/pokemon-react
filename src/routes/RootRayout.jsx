import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootRayout = () => {
	return (
		<>
			<Header></Header>
			<Outlet></Outlet>
		</>
	);
}

export default RootRayout;