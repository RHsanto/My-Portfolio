import React from 'react';
import './About.css'
import AboutImg from '../../../images/template.png'
const About = () => {
  return (
    <div className='about-section p-5'>
       <div className='p-title my-5'>
      <h1 ><span className='border-bottom border-2'>About Me</span></h1>
      </div>
      
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 wow animate__animated animate__slideInLeft">
            <img src={AboutImg} alt="" className='w-75'/>
          </div>
          <div className="col-lg-6  text-start about-info wow animate__animated animate__slideInRight">
            <p >Hello! I'm Rakibul, a programmer with a good level of expertise in Front-End Web Development. I'm currently studying at Titumir College of BBA on Finance & Banking. I'm a tech lover. I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.
           
             </p>  
             <p>
             I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun-loving, and caring as well</p> 
                 </div>  
              </div>
                   </div>             
    </div>
  );
};

export default About;