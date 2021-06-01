import React from 'react';
import '../../App.css';
import { FaDownload } from 'react-icons/fa';


export default function SignUp() {
  return (
  
  <div className='sign-up'> 

      
        <a href="./cv-adriana.pdf" download="CV-Adriana.pdf">
          <button className="btn"> Download CV <FaDownload /></button>
        </a>
  </div>



  );
}