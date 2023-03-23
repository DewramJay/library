import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ViewBooks from "./components/ViewBooks";
import About from "./components/About";
import Horizontalscroll from "./components/Horizontalscroll";
import BookCategory from "./components/BookCategory"
import Fantacy from "./components/Fantacy";
import Scifi from "./components/Scifi";
import Sports from "./components/Sports";
import Edu from "./components/Edu";
import Biographies from "./components/Biographies";
import Novel from "./components/Novel";
import ButtonPanel from "./components/ButtonPanel";



function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/main" exact element={<Main />} />
			<Route path="/viewBooks" exact element={<ViewBooks/>} />
			<Route path="/bookCategory" exact element={<BookCategory/>} />
			<Route path="/ButtonPanel" exact element={<ButtonPanel/>} />
			<Route path="/Horizontalscroll" exact element={<Horizontalscroll/>} />
			<Route path="/About" exact element={<About/>} />
			<Route path="/Fantacy" exact element={<Fantacy/>} />
			<Route path="/Scifi" exact element={<Scifi/>} />
			<Route path="/Sports" exact element={<Sports/>} />
			<Route path="/Edu" exact element={<Edu/>} />
			<Route path="/Biographies" exact element={<Biographies/>} />
			<Route path="/Novel" exact element={<Novel/>} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;