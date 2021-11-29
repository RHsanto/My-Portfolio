import React from 'react';

import './Contact.css'
const Contact = () => {
 
  // }
  return (
    <div className='contact-section p-5'>
    <div className="container">
    <h1 className='my-5 text-start'>Lets talk!</h1>
      <div className="row">
        
        <div className="col-lg-6">
        <form action="https://formsubmit.co/rakibu.hasan888@gmail.com" method="POST">
    
            <div class="form-floating mb-3">
              <input type="text"  name="name" required class="form-control" id="floatingInput1" placeholder="Enter Your Name"/>
              <label for="floatingInput1">Your Name</label>
           </div> 
           <div class="form-floating mb-3">
             <input type="email" name="email" required class="form-control" id="floatingInput2" placeholder="name@example.com"/>
             <label for="floatingInput2">Email address</label>
           </div>   
          <div class="form-floating mt-3">
            <textarea class="form-control" name="textarea"  placeholder="Leave a comment here" id="floatingTextarea3"></textarea>
            <label for="floatingTextarea3">Comments</label>
          </div> 
              <button type="submit" className='btn btn-primary my-2 w-25 py-2'>Send</button>
      </form>
        </div>
        <div className="col-lg-6">
        <div className="contact-info">
          <h3><span className='text-primary'>Connect</span> with me</h3>
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