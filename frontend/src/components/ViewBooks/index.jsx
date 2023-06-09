//import React from 'react'
import Header from "../Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';
import AddBooks from "../AddBooks";
import ButtonPanel from "../ButtonPanel";


const ViewBooks = () => {
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
  

  function updateData(e){
		e.preventDefault();
		
		const newBook = {
			bookTitle,
			bookCategory, 
			bookRegNo,
			language, 
      imageUrl,
      updateId
		}

  }

  return (
    <div>
      <Header />
      <ButtonPanel/>
      <div className="container container-mar">
        <div className="row row-mar">
          {Books.map(item => (
            <div className="col-md-4" key={item._id}>
              <div className="card card-set">
                <img src={item.imageUrl} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.bookTitle}</h5>
                  <h5 className="card-title">{item.bookCategory}</h5>
                  <p className="card-text card-text-author">{item.language}</p>
                  <p className="card-text card-text-author">{item.bookRegNo}</p>
                </div>
              </div>
            </div>      
          ))}
        </div>
      </div>
    </div>

      

  );
};

export default ViewBooks;



