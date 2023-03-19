//import React from 'react'
import Header from "../Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';
import AddBooks from "../AddBooks";

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
		
		axios.put(`http://localhost:8070/Book/update/64156a78630d403ca573a059`,newBook).then(()=>{
			alert("Updated!")
		}).catch((err)=>{

			alert({ newBook })
		})
		
	}

  function deleteData(e){
		e.preventDefault();
	
		
		axios.delete(`http://localhost:8070/Book/update/64143b2defe1d57ca81fad8b`).then(()=>{
			alert("Deleted!")
		}).catch((err)=>{

			alert("error")
		})
		
	}




  return (
    <div>
      <Header />
      <AddBooks/>
      <div className="container">
        <div className="row">
          {Books.map(item => (
            <div className="col-md-4" key={item._id}>
              <div className="card card-set">
                <img src={item.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.bookTitle}</h5>
                  <p className="card-text card-text-author">{item.bookCategory}</p>
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



