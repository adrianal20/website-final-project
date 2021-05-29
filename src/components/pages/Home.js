import React from 'react';
import '../../App.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


export default function Home() {

  const textRef = useRef();

  useEffect (() => {
    init(textRef.current, {
      showCursor: true,
      backdelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Content Creator"],
    })
  },[]);

  return (
    
      <div className='home' id="home"> 
       
      <div className="home-info"> 

        <div className="text-info">
          <h2>Hi there, I'm </h2>
          <h1>Adriana Lazar</h1>
          <h3> Aspiring <span ref={textRef}></span></h3>
        </div>

       <div className="learn-more">
       <a href="/about" class="next"> Learn More &raquo;</a>
       </div>
      
      </div>
      </div>
    
  );
}