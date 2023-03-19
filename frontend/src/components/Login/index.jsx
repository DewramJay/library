import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/modal';
import Header from "../Header";


const Login = () => {

	
	

	return (
		<div class="container mt-5">
		<div class="row justify-content-center">
		  <div class="col-lg-6 col-md-8">
			<div class="cardlogin">
			  <div class="card-body">
				<h3 class="card-title text-center mb-4">Login</h3>
				<form>
				  <div class="form-floating mb-3">
					<input type="email" class="form-control" id="email" placeholder="name@example.com"/>
					<label for="email">Email address</label>
				  </div>
				  <div class="form-floating mb-3">
					<input type="password" class="form-control" id="password" placeholder="Password"/>
					<label for="password">Password</label>
				  </div>
				  <Link to="../Main"><button type="submit" class="btn btn-primary w-100 mb-3">Login</button></Link>
				  <Link to="/signup"><button type="button" class="btn btn-outline-primary w-100">Sign In</button></Link>
				</form>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default Login;