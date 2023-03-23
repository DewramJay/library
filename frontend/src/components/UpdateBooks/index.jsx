import React from 'react'
import axios from 'axios';
import { useState } from "react";

const UpdateBooks = () => {
    const [BookTitle, setbookTitle] = useState("");
	const [BookCategory, setbookCategory] = useState("");
	const [BookRegNo, setbookRegNo] = useState("");
	const [Language, setlanguage] = useState("");
    const [ImageUrl, setimageUrl] = useState("");

	function UpdateData(e){
		e.preventDefault();
		
        axios.put(`http://localhost:8070/Book/update/${BookRegNo}`, {
            bookTitle: BookTitle,
            bookCategory: BookCategory,
            bookRegNo: BookRegNo,
            language: Language,
            imageUrl:ImageUrl
          }).then(() => {
            alert('Item updated successfully!');
          })
          .catch((err) => {
            alert(err.message);
          });
      
      
	}


  return (
    <div>
      <button type="button" class="btn1 btn-primary1 btn-book" data-bs-toggle="modal" data-bs-target="#update-book-modal">
        Update Book
      </button>

      <div class="modal fade" id="update-book-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update Books</h5>
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
            <hr/>
            <div class="form-floating mb-3">
              <input
               type="text"
               class="form-control" 
               placeholder="Book Title"
               onChange={(e)=>{
								setbookTitle(e.target.value);

							}}/>
              <label>Book Title</label>
            </div>
            <div class="form-floating mb-3">
              <input
               type="text" 
               class="form-control" 
               placeholder="Book Category"
               onChange={(e)=>{
								setbookCategory(e.target.value);

							}}/>
              <label>Book Category</label>
            </div>
            <div class="form-floating mb-3">
              <input
               type="text" 
               class="form-control" 
               placeholder="Language"
               onChange={(e)=>{
								setlanguage(e.target.value);

							}}/>
              <label>Language</label>
            </div>
            <div class="form-floating mb-3">
              <input
               type="text" 
               class="form-control" 
               placeholder="Image URL"
               onChange={(e)=>{
								setimageUrl(e.target.value);

							}}/>
              <label>Image URL</label>
            </div>

            <div class="modal-footer">
              <button type="button" onClick={UpdateData} class="btn1 btn-primary1">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UpdateBooks