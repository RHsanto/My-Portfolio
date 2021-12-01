// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import useProducts from '../../hooks/useProduct';
// import'./ProjectsDetails.css'

// const ProjectsDetails = () => {
//   const {id}=useParams();
//   console.log(id);
//   const [details]=useProducts();
//   console.log(details);

//   const matchedServices = details.find(detail => detail.id === Number(id));
//   console.log(matchedServices);
//   return (
//     <div className='project-section'>
      
//       <h1>Projects Details{id}</h1>
   
     
//     </div>
//   );
// };

// export default ProjectsDetails;