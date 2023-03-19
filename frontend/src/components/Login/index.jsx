import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/modal';
import Header from "../Header";


const Login = () => {

	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");	
	const [loggedIn, setLoggedIn] = useState(false);

	async function checkLogin(e){
		e.preventDefault();
		const newStudent = {
			email,
			password
		}

		
try {
	const result = await axios.post("http://localhost:8070/Student/login",newStudent);
	alert("success");
	setLoggedIn(true);
} catch (error) {
	alert("invalid!");
}
		


	}	

	
	if (loggedIn) return <Navigate to="/viewBooks" ></Navigate>;

	return (
		<div class="mar">
		<div class="mar-2">
		  <div class="col-lg-6 col-md-8">
			<div class="cardlogin">
			  <div class="card-body1">
				<h3 class="card-title text-center mb-4">Login</h3>
				<form>
				  <div class="form-floating mb-3">
					<input 
					type="email" 
					class="form-control" 
					id="email" 
					placeholder="name@example.com"
					onChange={(e)=>{
						setemail(e.target.value);

					}}
					/>
					<label for="email">Email address</label>
				  </div>
				  <div class="form-floating mb-3">
					<input 
					type="password" 
					class="form-control" 
					id="password" 
					placeholder="Password"
					onChange={(e)=>{
						setpassword(e.target.value);

					}}
					/>
					<label for="password">Password</label>
				  </div>
				  <button type="submit"  class="btn btn-primary w-100 mb-3" onClick={checkLogin} >Login</button>
				  <Link to="/signup"><button type="button" class="btn btn-outline-primary w-100"  >Sign In</button></Link>
				</form>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default Login;