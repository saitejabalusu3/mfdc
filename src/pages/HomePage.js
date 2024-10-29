import React from 'react'
import Jumbotron from '../components/Jumbotron';
import Specials from '../components/Specials';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <>
      <Jumbotron />
      <Specials />
      <Testimonials />
      <About />
      
    </>
  )
}

export default HomePage;