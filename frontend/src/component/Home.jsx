import React from 'react'

import Searchbar from './Searchbar';
import PopularCars from './PopularCars';
import WorkingStep from './WorkingStep';
import ChooseUs from './ChooseUs';
import Testimonials from './TestiMonials';
import Hero from './Hero';

const Home = () => {
  return (
    <div className='mobile:w-[460px]'>
       <div>
      
        <Hero />
        <Searchbar/>
        <WorkingStep/>
        <ChooseUs/>
        <PopularCars/>
        <Testimonials/>
       </div>
    </div>
  )
}

export default Home