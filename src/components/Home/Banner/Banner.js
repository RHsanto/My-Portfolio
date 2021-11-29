import React from 'react';
import './Banner.css'
import image from '../../../images/template (1).png'
const Banner = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row  d-flex justify-content-center align-items-center">   
          <div className="col-lg-6">
           <div className="profile-info">
          <h4> HELLO!!!  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28"/></h4>
<h1>I AM RAKIBUL HASAN</h1>
<h3>MERN stack web Developer</h3>

<div className='d-flex  my-3 justify-content-center align-items-center button-section  '><a class="btns " target="blank" href="https://www.linkedin.com/in/rakibul-hasan-santo/"> HIRE ME</a> 

 <a className='btns ms-3 ' href="https://drive.google.com/file/d/1FN9JumatE5qKHUUsHGGZbKTBk3K7qFk2/view?fbclid=IwAR0kJ3g_zn_MGFjXVbMzYiztBeePxaintMMEVVOhrr5SaeZMeKWoJXEtEPk" target='_blank'>
 <i class="fas fa-file-download"></i>  RESUME</a></div> 
       
           </div>
          </div>
          <div className="col-lg-6 profile">
           <img src={image} alt="" srcset="" />
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Banner;