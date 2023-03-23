import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import AddBooks from "../AddBooks";
import { Button } from "bootstrap";
import ButtonPanel from "../ButtonPanel";


const Fantacy = () => {
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

  return (
    <div>
      <Header />
      <ButtonPanel/>
      <br/>
      <h1 className="h">Fantacy</h1>
      <div className="container container-mar">
        <div className="row row-mar">
          {Books.filter(item => item.bookCategory === "Fantacy").map(item => (
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



export default Fantacy