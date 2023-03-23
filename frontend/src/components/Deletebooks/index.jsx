import React from 'react'
import axios from 'axios';
import { useState } from "react";

const Deletebooks = () => {
    const [BookTitle, setbookTitle] = useState("");
	const [BookCategory, setbookCategory] = useState("");
	const [BookRegNo, setbookRegNo] = useState("");
	const [Language, setlanguage] = useState("");
    const [ImageUrl, setimageUrl] = useState("");

    function DeleteData(e){
		e.preventDefault();
		
    axios
    .delete(`http://localhost:8070/Book/delete/${BookRegNo}`)
    .then(() => {
      setbookRegNo("");
  
      alert('Item is Deleted successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
      
      
	}


  return (
    <div>
      <button type="button" class="btn1 btn-primary1 btn-book" data-bs-toggle="modal" data-bs-target="#delete-book-modal">
        Delete Books
      </button>

      <div class="modal fade" id="delete-book-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Books</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div class="form-floating mb-3">
              <input
               type="text" 
               class="form-control" 
               placeholder="BookRegNo"
               onChange={(e)=>{
								setbookRegNo(e.target.value);

							}}/>
              <label>Book RegNo</label>
            </div>
            

            <div class="modal-footer">
              <button type="button" onClick={DeleteData} class="btn1 btn-primary1">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Deletebooks