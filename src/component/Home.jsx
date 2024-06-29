import React from 'react'
import car from '../assets/car.png';
import GooglePlay from '../assets/GooglePlay.png';
import AppStore from '../assets/AppStore.png';

const Home = () => {
  return (
    <div className='flex justify-between'>
        <div className=''>
            <h1>Find,book and rent a car <span className='text-customBlue'>Easily</span></h1>
            <p>Get a car wherever and whenever you need it with your IOS and Android device</p>
            <div className='flex space-x-6'>
            <img src={GooglePlay} alt=""/>
            <img src={AppStore} alt=""/>
            </div>
         </div>
        <img src={car} alt=""/>
        
    </div>
  )
}

export default Home