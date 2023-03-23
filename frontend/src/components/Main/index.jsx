import React from 'react';
import Header from '../Header';
import Horizontalscroll from '../Horizontalscroll';
import BookCategory from '../BookCategory';
import AddBooks from '../AddBooks';
import UpdateBooks from '../UpdateBooks';
import Deletebooks from '../Deletebooks';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from "react";
import './styles.css';


const Main = () => {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    function getBooks() {
      axios
        .get("http://localhost:8070/Book/")
        .then((res) => {
          setBooks(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }
    getBooks();
  }, []);

  const [bookTitle, setbookTitle] = useState("");
	const [bookCategory, setbookCategory] = useState("");
	const [bookRegNo, setbookRegNo] = useState("");
	const [language, setlanguage] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [updateId, setupdateId] = useState("");
	
  return (
    <div >
      <Header/>
      <AddBooks/>

      
      <div class="wrapper">
      {Books.map(item => (
            <div className="col-md-re card-mar" key={item._id}>
              <div className="card card-set ">
                <img src={item.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.bookTitle}</h5>
                  <p className="card-text card-text-author">{item.bookCategory}</p>
                </div>
              </div>
            </div>      
          ))}
      </div>



  
      <Link to="/ViewBooks"><button type="submit" class="btn1 btn-primary1 btn-viewbook" >View Books</button></Link>

      <BookCategory/>

    </div>
  );
};

export default Main;