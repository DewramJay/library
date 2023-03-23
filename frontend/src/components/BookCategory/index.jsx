import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './styles.css';

const BookCategory = () => {
  return (
    <div>
      <div class= "wrapper">
        <div class="card card-s">
              <img src="https://i.pinimg.com/originals/08/1c/ec/081cec949b190a8dadc82b55db322df1.png" class="img-s" alt="..."/>
              <div class="card-body card-body-s">
              <Link to="/Fantacy"><button class="btn1 btn-primary1 btn-s">Fantacy</button></Link>
              </div>
        </div>
        <div class="card card-s">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Saturn_-_The_Noun_Project.svg/2048px-Saturn_-_The_Noun_Project.svg.png" class="img-s" alt="..."/>
              <div class="card-body card-body-s">
              <Link to="/Scifi"><button class="btn1 btn-primary1 btn-s">Sci-Fi</button></Link>
              </div>
        </div>
        <div class="card card-s">
              <img src="https://www.svgrepo.com/show/165032/volleyball.svg" class="img-s" alt="..."/>
              <div class="card-body card-body-s">
              <Link to="/Sports"><button class="btn1 btn-primary1 btn-s">Sport</button></Link>
              </div>
        </div>
        <div class="card card-s">
              <img src="https://th.bing.com/th/id/R.3094442ad655c1050fd5572a5419c98b?rik=QkMzEcE3k9Mryw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_327368.png&ehk=RuuRMs2p8bIe8iLEeB%2f7%2fP7tFvzd7iawquc1JpB4%2bj0%3d&risl=&pid=ImgRaw&r=0" class="img-s" alt="..."/>
              <div class="card-body card-body-s">
              <Link to="/Edu"><button class="btn1 btn-primary1 btn-s">Edu</button></Link>
              </div>
        </div>
        <div class="card card-s">
            <img src="https://clipground.com/images/biography-icon-png-6.png" class="img-s" alt="..."/>
            <div class="card-body card-body-s">
            <Link to="/Biographies"><button class="btn1 btn-primary1 btn-s">Biographies</button></Link>
            </div>
        </div>
        <div class="card card-s">
            <img src="https://icon-library.com/images/small-book-icon/small-book-icon-0.jpg" class="img-s" alt="..."/>
            <div class="card-body card-body-s">
            <Link to="/Novel"><button class="btn1 btn-primary1 btn-s">Novel</button></Link>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default BookCategory