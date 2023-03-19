import React from 'react';
import axios from 'axios';
import { useState } from "react";

const AddBooks
 = () => {

  const [bookTitle, setbookTitle] = useState("");
	const [bookCategory, setbookCategory] = useState("");
	const [bookRegNo, setbookRegNo] = useState("");
	const [language, setlanguage] = useState("");
  const [imageUrl, setimageUrl] = useState("");

	function sentData(e){
		e.preventDefault();
		
		const newBook = {
			bookTitle,
			bookCategory,
			bookRegNo,
			language,
      imageUrl
		}
		
		axios.post("http://localhost:8070/Book/add",newBook).then(()=>{
			alert("Book created")
		}).catch((err)=>{
			alert(err)
		})
		
	}


  return (
    <div>
      <button type="button" class="btn btn-primary btn-addbook"  data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Books
      </button>

      <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Books</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

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
               placeholder="BookRegNo"
               onChange={(e)=>{
								setbookRegNo(e.target.value);

							}}/>
              <label>Book RegNo</label>
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
              <button type="button" onClick={sentData} class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddBooks
