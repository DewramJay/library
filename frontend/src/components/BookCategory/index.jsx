import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

const BookCategory = () => {
  return (
    <div >
        <Link to="/ViewBooks"><button type="submit" class="btn btn-primary" >View Books</button></Link>
    </div>
 

  )

}

export default BookCategory

