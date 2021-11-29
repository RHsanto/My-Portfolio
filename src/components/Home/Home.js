import React from 'react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from './About/About';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
  return (
    <div>
    <Banner/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;