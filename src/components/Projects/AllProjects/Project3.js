import React from 'react';
import ss4 from '../../../images/project-3.PNG'
import ss2 from '../../../images/projects-2_1.PNG'
import ss3 from '../../../images/projects-2_2.PNG'

const Project3 = () => {
  return (
    <div className='project-section '>
    <div className="container">
    <div className='p-title my-5'>
      <h1 ><span className=''>Project Details</span></h1>
      </div>
      <div className="row">
        <div className="col-lg-12 mx-auto">
   <div className="slider w-100">
   <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ss4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ss3} class="d-block w-100" alt="..."/>
    </div>
  
    <div class="carousel-item">
      <img src={ss2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>
        <div class="card shadow-lg mb-5">
      <div class="card-body">
        <h1 class="card-title fw-bold mb-5">TRUST CARE</h1>
        
        <div className="info text-start ms-5">
        <p><li>● Here you will find health services according to your needs  </li>
           <li>● Sign Up by email, google authentication, private page for logged-in users.</li>
           <li> ● There are also a 24-hour emergency doctor and ambulance facilities</li>
           <li> <strong>◆ Technology Used:</strong> Html, CSS, Bootstrap, React js, Firebase authentication,</li> </p>
        </div>
                   <div className="code my-4">
      <div className="btn btn-outline-secondary"><i class="fab fa-github"></i> <a className='text-dark' href="https://github.com/RHsanto/racing-car-project-client-side" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://vibrant-leavitt-6ff91c.netlify.app/" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
    </div>
        </div>
      </div>
  
     {/*  */}
   
     {/*  */}
     </div>
    </div>
  );
};

export default Project3;