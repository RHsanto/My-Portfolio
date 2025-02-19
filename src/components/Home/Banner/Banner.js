/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
 /* eslint-disable-next-line react/jsx-no-target-blank */

import React from 'react';
import 'animate.css';
import './Banner.css'
import image from '../../../images/template (1).png'
import Type from '../Typical/Type';

const Banner = () => {

  return (
    <div>
      <div 
     data-aos-anchor-placement="center-center" className="container mt-4 ">
        <div className="row  d-flex justify-content-center align-items-center">   
          <div  className="col-lg-6  ">
           <div className="profile-info ">
          <h4 className='fw-bold'> Hi ' <img src="https://emojis.slackmojis.com/emojis/images/1565879801/6181/waving_hand_animated.gif?1565879801" width="35"/></h4>
<h1>I ' m Rakibul Hasan</h1>
<h3> <Type/> </h3>

<div className='d-flex  mt-5 justify-content-center align-items-center button-section  '><a class="resume-button text-dark " target="blank" href="https://www.linkedin.com/in/rakibul-hasan-santo/"> HIRE ME</a> 

 <a className='btns ms-3 ' href="https://drive.google.com/uc?export=download&id=1r6t8GhN25JD4jOrYwv5NRCtZxk_UJary" target='_blank'>
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