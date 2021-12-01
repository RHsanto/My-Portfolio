import React from 'react';
import Typical from 'react-typical'

const Type = () => {
  return (
    <>
       <p className='type-text'>
       I ' m a { ' ' } 
         <Typical
         loop={Infinity}
         wrapper="b"
        steps={[
          'MERN Stak Developer',
           1000,
          'Web Designer',
          1000,
         'Open Sourcer',
         1000,
        
        
        ]}
        
      />
       </p>
    </>
  );
}


export default Type;
