import React from 'react';
import { useDencrypt } from "use-dencrypt-effect";
import 'animate.css';
import './Banner.css'
import image from '../../../images/template (1).png'

const values = ["Full Stack Web Developer", "Competitive Programmer"];


const Banner = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4500);

    return () => clearInterval(action);
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row  d-flex justify-content-center align-items-center">   
          <div className="col-lg-6 animate__animated animate__fadeInLeft ">
           <div className="profile-info">
          <h4> HELLO!!!  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28"/></h4>
<h1>I AM RAKIBUL HASAN</h1>
<h3 className='fw-bold my-3'>{result}</h3>


<div className='d-flex  my-3 justify-content-center align-items-center button-section  '><a class="btns " target="blank" href="https://www.linkedin.com/in/rakibul-hasan-santo/"> HIRE ME</a> 

 <a className='btns ms-3 ' href="https://drive.google.com/file/d/1FN9JumatE5qKHUUsHGGZbKTBk3K7qFk2/view?fbclid=IwAR0kJ3g_zn_MGFjXVbMzYiztBeePxaintMMEVVOhrr5SaeZMeKWoJXEtEPk" target='_blank'>
 <i class="fas fa-file-download"></i>  RESUME</a></div> 
       
           </div>
          </div>
          <div className="col-lg-6 profile animate__animated animate__fadeInRight">
           <img src={image} alt="" srcset="" />
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Banner;