import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
  return (
    <div className='navigation shadow-lg fixed-top '>
      <div className="container ">
      <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid ">
   <NavLink to='/'><h3 className='navbar-brand text-light'>Rakibul</h3> </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse menu " id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <NavLink to='/home'> <li className='nav-link'>Home</li> </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/about'> <li className='nav-link'>About</li> </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/projects'> <li className='nav-link'>Projects</li> </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/blog'> <li className='nav-link'>Blog</li> </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/contact'> <li className='nav-link'>Contact</li> </NavLink>
        </li>
        <li class="nav-item">
         <li className='nav-link '>
         <a className='btns ms-3 ' href="https://drive.google.com/uc?export=download&id=1r6t8GhN25JD4jOrYwv5NRCtZxk_UJary" target='_blank'>
           <i class="fas fa-file-download"></i>   Resume</a>
          </li> 
        </li>
        
      </ul>
   
    </div>
 
    
   
 
  </div>
</nav>
      </div>
    </div>
  );
};

export default Navigation;