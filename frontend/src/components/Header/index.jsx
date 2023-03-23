import React from 'react';
import './styles.css';
import { json, Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from "react";




const Header = () => {
    const [Books, setBooks] = useState([]);
    const [bookTitle, setbookTitle] = useState("");

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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="./main">Library</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex" role="search">
            <input 
            class="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
             onChange={(e)=>{
                setbookTitle(e.target.value);
             }}
            />
            <button type="button" class="btn1 btn-primary1 btn-search"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                Search
            </button>
            <div class="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div>

                    <div className="container container-1">
                        {Books.filter(item => item.bookTitle === `${bookTitle}`).map(item => (
                            <div className="col-md-4-1" key={item._id}>
                                <img src={item.imageUrl} className="card-img-top imgt" alt="..." />
                            <div className="card-1 card-set-1">
                                
                                <div className="card-body card-body-1">
                                <br/>
                                <h5 className="card-title1">Title    : {item.bookTitle}</h5><br/>
                                <h5 className="card-title1">Category : {item.bookCategory}</h5><br/>
                                <h5 className="card-title1">Language : {item.language}</h5><br/>
                                <h5 className="card-title1">Reg NO   : {item.bookRegNo}</h5><br/>
                                </div>
                            </div>
                            </div>      
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>





        </form>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" >About</a>
            </li>
            <li class="nav-item contact">
            <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item dropdown">
            <a class="navbar-brand profilepic dropdown" href="#">
                <img src="https://www.transparentpng.com/thumb/man/nl5vMX-man-svg-png-icon-free-download-onlinewebfonts.png" width="30" height="30"/>
            </a>
            </li>
            <li class="nav-item " >
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
            </a>
            <ul class="dropdown-menu droplist">
                <li><a class="dropdown-item" href="#">Acount</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
            </li>
        </ul>
        
        </div>
    </div>
    </nav>
  )
}

export default Header;