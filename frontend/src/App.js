import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ViewBooks from "./components/ViewBooks";
import About from "./components/About";
import Horizontalscroll from "./components/Horizontalscroll";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/main" exact element={<Main />} />
			<Route path="/viewBooks" exact element={<ViewBooks/>} />
			<Route path="/updateBook" exact element={<updateBook/>} />
			<Route path="/Horizontalscroll" exact element={<Horizontalscroll/>} />
			<Route path="/About" exact element={<About/>} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;