import React from 'react'
import AddBooks from '../AddBooks';
import UpdateBooks from '../UpdateBooks';
import Deletebooks from '../Deletebooks';

const ButtonPanel = () => {
  return (
    <div class= "wrapper">
        
             <AddBooks/> 
        
        
             <UpdateBooks/> 
        
        
             <Deletebooks/> 
                
    </div>
  )
}

export default ButtonPanel