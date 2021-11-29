import React from 'react';
import image1 from '../../images/projects-1.PNG'
import image2 from '../../images/project-2.PNG'
import image3 from '../../images/project-3.PNG'
const Projects = () => {
  return (
    <div>
     <div className="container">
     <h1 className='my-5'>My Recent Projects</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
  <div class="col">
    <div class="card shadow-lg">
      <img src={image1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bold">DESHGHURI</h5>
        <p class="card-text">A complete stack responsive travel website. Here customers will be able to view and order different types of travel packages</p>
      <div className="code">
      <div className="btn btn-outline-secondary"><i class="fab fa-github"></i> <a className='text-dark' href="https://github.com/RHsanto/tourisum-project-client-side" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://tour-the-worlds.netlify.app/" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-lg">
      <img src={image2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bold">MOTORCYCLE</h5>
        <p class="card-text">A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
        <div className="code">
      <div className="btn btn-outline-secondary"><i class="fab fa-github"></i> <a className='text-dark' href="https://github.com/RHsanto/racing-car-project-client-side" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://vibrant-leavitt-6ff91c.netlify.app/" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-lg">
      <img src={image3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bold">TRUST CARE</h5>
        <p class="card-text">This website is a health-related website. This is a responsive site. Users can receive services from here if they want</p>
        <div className="code">
        <div className="btn btn-outline-secondary"><i class="fab fa-github"></i> <a className='text-dark' href="https://github.com/RHsanto/trust-care-projects" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://ecstatic-meitner-95756d.netlify.app/" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
    </div>
  </div>
  
</div>
     </div>
    </div>
  );
};

export default Projects;