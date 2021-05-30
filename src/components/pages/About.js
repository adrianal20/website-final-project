import React from 'react';
import './About.css';
import { FaHandPointDown, FaReact } from 'react-icons/fa';
import { DiCss3, DiJavascript } from "react-icons/di";



export default function About() {
  return (
    <div className='about' id="about"> 

        <div className="about-container">
     
            <div className="about-left"> 
                    <h3>About me <FaHandPointDown color="crimson"/> </h3>
                    <p> Software Consultant with 1-year experience in planning, developing and implementing proprietary software products and integrating documentation projects. Energetic and results-driven professional with 6 years’ experience in customer service area. Strong interpersonal skills, with the ability to relate and empathize with people of varying personalities and from all walks of life.  Possesses strong communication and organizational skills. Demonstrated ability to work both independently and as a team member.  
                </p> 

            </div>


            <div className="nested">
              <div className="card"> 
                 <div className="circle">
                      <div className="bar"></div> 
                     <div className="box"><span>80%</span></div>
                  </div>
                  <div className="text">HTML&CSS <DiCss3 color="white"/> </div>
              </div>
              


              <div className="card"> 
                 <div className="circle">
                      <div className="bar"></div> 
                     <div className="box"><span>65%</span></div>
                  </div>
                  <div className="text">JavaScript <DiJavascript color="white"/></div>
              </div>
              

              <div className="card"> 
                 <div className="circle">
                      <div className="bar"></div> 
                     <div className="box"><span>60%</span></div>
                  </div>
                  <div className="text">React JS <FaReact color="white"/> </div>
              </div>
              
                

               
            </div>

        </div>
    
    </div>
    
  
);
}