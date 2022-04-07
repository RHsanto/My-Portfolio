import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css'
const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm('service_gnxx015', 'template_irj374h', form.current, 'user_obBqtLaqIjkZn89ZT16xS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Thanks for message')
      form.current.reset();
  };
  return (
    <div className='contact-section p-5'>
    <div className="container">
    <h1 className='title'> <span className='border-2 border-bottom '>Lets talk</span> !</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="col-lg-6 mx-auto " >
      <form ref={form} onSubmit={sendEmail}>
      <div class="form-floating mb-3">
  <input  type="text" name="name"  class="form-control" id="floatingInput1" placeholder="name@example.com"/>
  <label for="floatingInput1">Your Name</label>
</div>
      <div class="form-floating mb-3">
     <input type="email" name="email"  class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
     </div>
     <div class="form-floating">
  <textarea class="form-control"  name="message" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>

      <input type="submit" className='send-btn my-3' value="Send" />
     
    </form>
        </div>
        <div className="col-lg-6 ">
        <div className="contact-info ">
          <h3><span className='title'>Connect</span> with me</h3>
          <p><i class="fas fa-map-marker-alt"></i> Sonargoan, Narayongonj, Dhaka</p>
          <p><i class="fas fa-map-marker-alt"></i> +8801887403752</p>
        </div>
          <div className="div-4"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

