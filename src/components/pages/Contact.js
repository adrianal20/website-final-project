import React from 'react';
//import '../../App.css';
import './Contact.css';
import { FaPhoneAlt, FaMapMarker, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <div className='contact-me' id="contact-me"> 

      <div className="contact-container">
         
         
          <div className="contact-info">
               <h4 className="h4-inf"> Contact Information </h4>
               <p className="p-text ">  </p>
            
            
             <div className="icon-text">
                 <i className ="icon"><FaPhoneAlt/> </i>
                  <span className="span-text">(0753) 479 109</span>
             </div>

             <div className="icon-text">
                 <i className ="icon"><IoMail/> </i>
                  <span className="span-text"> adrianaramona.lazar@gmail.com</span>
             </div>

             <div className="icon-text">
                 <i className ="icon"><FaMapMarker /> </i>
                  <span className="span-text"> Str. Soporului Nr 5 Cluj-Napoca 400482 </span>
             </div>

            <div className="social-media">
              <a href="https://facebook.com/adriana.lazar.7" className="icon-circle">
                <i className="icon" > <FaFacebook />  </i>
              </a>

              <a href="https://www.instagram.com/vivid.haze" className="icon-circle">
                <i className="icon" > <FaInstagram />  </i>
              </a>

              <a href="https://linkedin.com/in/adriana-lazar" className="icon-circle">
                <i className="icon" > <FaLinkedin /> </i>
              </a>

              <a href="https://github.com/adrianal20" className="icon-circle">
                <i className="icon" > <FaGithub /> </i>
              </a>

           </div>
            </div>
     
           <form className="form-container">


               <label className="fname"> First Name</label>
                    <input type="text" placeholder="Your first name.."></input>

                <label className="lname">Last Name</label>
                     <input type="text" placeholder="Your last name.."></input>


               <label className="subject">Subject</label>
                       <textarea className="textarea-subject"></textarea>

                <input type="submit" className="submit"></input>
          </form>
  </div>
  </div>         

  
);
}