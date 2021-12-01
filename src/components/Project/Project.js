// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import useProducts from '../../hooks/useProduct';
// import './Project.css'
// const Project = () => {
//   const [details]=useProducts();
//   console.log(details);
//   const {id} = useParams();
  

// // here find services
//  const matchedServices = details.filter(detail => detail.id === Number(id));
//  useEffect(()=>{
//    fetch('')
//  },[])
//   return (
//     // make single services
//    <div className="project-section">
//       <div className='container '>
//       <div className="row  d-flex justify-content-center align-items-center my-5">
//          <div className="col-lg-4">
//             <div className="card">
//                <img src={matchedServices?.img} className="card-img-top" alt="img"/>
//                 <div className="card-body">
//              <h5 className="card-title fw-bold border-bottom p-2 w-50 mx-auto border-primary border-2"> Name : {matchedServices?.name}</h5>
//             <p className="card-text">{matchedServices?.description}</p>
//            <a href="/" className="btn btn-info">Book now</a>
//         </div>
//      </div>
//     </div>
//   </div>
//  </div>
//    </div>
//   );
// };

// export default Project;