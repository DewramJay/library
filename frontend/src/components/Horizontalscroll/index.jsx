import './styles.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Horizontalscroll = () => {
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
    <div class="container">
    <div class="row">
        {Books.map(item => (
        <div class="col-md-4" key={item._id}>
            <div class="card">
            <img src={item.imageUrl}y class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{item.bookTitle}</h5>
                <p class="card-text">{item.bookCategory}</p>
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>

  )
}

export default Horizontalscroll