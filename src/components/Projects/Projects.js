/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import image1 from '../../images/projects-1.PNG'
import image2 from '../../images/project-2.PNG'
import image3 from '../../images/project-3.PNG'
import image4 from '../../images/1648315315944.png'
import image5 from '../../images/educal.png'
import image6 from '../../images/1648316818123.png'
import './Projects.css'

const Projects = () => {
  return (
    <div className='project-section '>
     <div className="container">
     <div className='p-title '>
      <h1 className='my-5'><span className='border-bottom border-2 pb-2'>My Recent Projects</span></h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4  ">
    {/* new project add */}
  <div class="col project-card  h-100">
    <div class="card shadow-lg">
      <img src={image4} class="card-img-top " alt="..."/>
      <div class="card-body text-dark">
        <h5 class="card-title fw-bold">DOCY</h5>
        <p class="card-text">The goal of the project is to give facilities to post documentation or blog and give support in making different types of documentation or blog. It allows a user to see anyone’s blog without any restriction.</p>
        <div className="code">
        <div className="code my-4">
      <div className="btn btn-outline-secondary">
        <i class="fab fa-github"></i>
         <a className='text-dark' href="https://github.com/thekawsarhossain/Docs-client-site" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i>
        <a className='text-dark' href="https://docs-client-site.vercel.app" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col project-card">
    <div class="card shadow-lg  h-100">
      <img src={image5} class="card-img-top " alt="..."/>
      <div class="card-body  text-dark">
        <h5 class="card-title fw-bold">EDUCAL</h5>
        <p class="card-text">This project is MERN stack project most emphasis on education.This is an Team project.</p>
        <div className="code">
        <div className="code my-4">
      <div className="btn btn-outline-secondary">
        <i class="fab fa-github"></i>
         <a className='text-dark' href="https://github.com/RHsanto/edual-project" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i>
        <a className='text-dark' href="https://team-education-site.netlify.app" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col project-card">
    <div class="card shadow-lg h-100">
      <img src={image6} class="card-img-top" alt="..."/>
      <div class="card-body text-dark">
        <h5 class="card-title fw-bold">E-TICKET</h5>
        <p class="card-text">This website is a online ticket website. This is a responsive site. Users can receive services from here if they want</p>
        <div className="code">
        <div className="code my-4">
        <div className="btn btn-outline-secondary">
          <i class="fab fa-github"></i> 
          <a className='text-dark' href="https://github.com/RHsanto/myticket-client-side" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://e-tickets.netlify.app/" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
   
    <div class="col project-card">
    <div class="card shadow-lg  h-100">
      <img src={image1} class="card-img-top" alt="..."/>
      <div class="card-body text-dark">
        <h5 class="card-title fw-bold">DESHGHURI</h5>
        <p class="card-text ">A complete stack responsive travel website. Here customers will be able to view and order different types of travel packages</p>
      <div className="code">
      <div className="code my-4">
      <div className="btn btn-outline-secondary">
        <i class="fab fa-github"></i> 
        <a className='text-dark' href="https://github.com/RHsanto/tourisum-project-client-side" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://tour-the-worlds.netlify.app" target='_blank'> Live</a> 
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col project-card  ">
    <div class="card shadow-lg  h-100">
      <img src={image2} class="card-img-top" alt="..."/>
      <div class="card-body text-dark">
        <h5 class="card-title fw-bold">MOTORCYCLE</h5>
        <p class="card-text">A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
        <div className="code">
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
  <div class="col project-card  ">
    <div class="card shadow-lg  h-100">
      <img src={image3} class="card-img-top" alt="..."/>
      <div class="card-body text-dark">
        <h5 class="card-title fw-bold">TRUST CARE</h5>
        <p class="card-text">This website is a health-related website. This is a responsive site. Users can receive services from here if they want</p>
        <div className="code">
        <div className="code my-4">
      <div className="btn btn-outline-secondary">
        <i class="fab fa-github"></i>
         <a className='text-dark' href="https://github.com/RHsanto/Health-care-projects" target='_blank'> Github</a></div>
        <div className="btn btn-warning ms-3">
        <i class="fas fa-eye"></i><a className='text-dark' href="https://ecstatic-meitner-95756d.netlify.app" target='_blank'> Live</a> 
        </div>
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