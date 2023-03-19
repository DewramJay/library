import React from 'react';
import Header from '../Header';
import Horizontalscroll from '../Horizontalscroll';
import BookCategory from '../BookCategory';
import AddBooks from '../AddBooks';
import updateBook from '../updateBook';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import './styles.css';


const Main = () => {
  // const [data, setData] = useState({
	// 	bookTitle: "",
	// 	bookCategory: "",
	// 	bookRegNo: "",
	// 	language: "",
	// });
	// const [error, setError] = useState("");
	// const navigate = useNavigate();

	// const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };

	// const handleSubmit = async (e) => {
  //   console.log(data);
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:8070/Book/add";
	// 		const { data: res } = await axios.post(url, data);
	// 		navigate("/Main");
	// 		console.log(res.message);
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.message);
	// 		}
	// 	}
	// };

	


  return (
    <div >
      <Header/>

      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card 1</h5>
                <AddBooks/>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card 2</h5>
                <BookCategory/>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card 3</h5>
                <p class="card-text">This is a sample card.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card 4</h5>
                <p class="card-text">This is a sample card.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <button class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>






      <div class="row">
      <AddBooks/>
      <updateBook/>
 
      <BookCategory/>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;