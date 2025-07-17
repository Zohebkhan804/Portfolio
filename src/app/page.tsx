"use client";
import About from "./About/page";
import React from 'react';
import Skills from '../app/Skills/page';
import Resume from '../app/Resume/page';
import Services from '../app/Services/page';
import Contact from '../app/Contact/page';

const page = () => {
  return (
    <div className='md:ml-[300px] ml-0 flex-1'>
      <About />
      <Skills />
      <Resume />
      <Services />
      <Contact />
    </div>
  )
}

export default page