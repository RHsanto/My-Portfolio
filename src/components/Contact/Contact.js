import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-section p-5'>
    <div className="container">
    <h1>Contact Me</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="div-1">
            <h2>Phone</h2>
            <p>+08801887403752</p>
          </div>
          <div className="div-2">
            <h2>Email</h2>
            <p>rakibul.hasan888@gmail.com</p>
          </div>
          <div className="div-3">
            <h2>Location</h2>
            <p>Narayongonj, Bangladesh</p>
          </div>
          <div className="div-4"></div>
        </div>
        <div className="col-lg-6">

        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;