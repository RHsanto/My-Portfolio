import React from 'react';
import 'animate.css';
import './Banner.css'
import image from '../../../images/template (1).png'
import Type from '../Typical/Type';

const Banner = () => {

  return (
    <div>
      <div className="container mt-4">
        <div className="row  d-flex justify-content-center align-items-center">   
          <div className="col-lg-6 wow animate__animated animate__fadeInLeft ">
           <div className="profile-info ">
          <h4 className='fw-bold'> Hi ' <img src="https://emojis.slackmojis.com/emojis/images/1565879801/6181/waving_hand_animated.gif?1565879801" width="35"/></h4>
<h1>I ' m Rakibul Hasan</h1>
<h3> <Type/> </h3>

<div className='d-flex  mt-5 justify-content-center align-items-center button-section  '><a class="resume-button text-dark " target="blank" href="https://www.linkedin.com/in/rakibul-hasan-santo/"> HIRE ME</a> 

 <a className='btns ms-3 ' href="https://drive.google.com/file/d/1FN9JumatE5qKHUUsHGGZbKTBk3K7qFk2/view?fbclid=IwAR0kJ3g_zn_MGFjXVbMzYiztBeePxaintMMEVVOhrr5SaeZMeKWoJXEtEPk" target='_blank'>
 <i class="fas fa-file-download"></i>  RESUME</a></div> 
       
           </div>
          </div>
          <div className="col-lg-6 profile wow animate__animated animate__fadeInRight">
           <img src={image} alt="" srcset="" />
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Banner;