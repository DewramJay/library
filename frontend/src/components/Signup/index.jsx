import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/modal';

const Signup = () => {


	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	function sentData(e){
		e.preventDefault();
		
		const newStudent = {
			firstName,
			lastName,
			email,
			password
		}
		
		axios.post("http://localhost:8070/Student/add",newStudent).then(()=>{
			alert("Acount created")
		}).catch((err)=>{
			alert(err)
		})
		
	}

	return (
			<div class="mar-11">
			<div class="mar-3">
			<div class="col-lg-6 col-md-8">
				<div class="cardsignin">
				<div class="card-body">
					<h3 class="card-title text-center mb-4">Sign In</h3>
					<form onSubmit={sentData}>
					
						
						<div class="form-floating mb-3 ">
							<input 
							type="text" 
							class="form-control" 
							id="first-name" 
							//value={data.firstName}
							placeholder="First Name"
							onChange={(e)=>{
								setfirstName(e.target.value);

							}}/>
							<label for="first-name">First Name</label>
						</div>
						
						<div class="form-floating mb-3 ">
							<input 
							type="text" 
							class="form-control" 
							id="last-name" 
							//value={data.lastName}
							placeholder="Last Name"
							onChange={(e)=>{
								setlastName(e.target.value);

							}}/>
							<label for="last-name">Last Name</label>
						</div>
						
					
					<div class="form-floating mb-3">
						<input 
						type="email" 
						class="form-control" 
						id="email" 
						//value={data.email}
						placeholder="name@example.com"
						onChange={(e)=>{
							setemail(e.target.value);

						}}/>
						<label for="email">Email address</label>
					</div>
					<div class="form-floating mb-3">
						<input 
						type="password" 
						class="form-control" 
						id="password" 
						//value={data.password}
						placeholder="Password"
						onChange={(e)=>{
							setpassword(e.target.value);

						}}/>
						<label for="password">Password</label>
					</div>
					<Link to="http://localhost:8070/Student/add"><button type="submit" class="btn btn-primary w-100 mb-3">Sign In</button></Link>
					<Link to="/login"><button type="submit" class="btn btn-outline-primary w-100 mb-3">Login</button></Link>
					</form>
				</div>
				</div>
			</div>
			</div>
			</div>
	);
};

export default Signup;