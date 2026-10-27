import React from 'react'
import Navbar1 from '../components/common/Navbar1'
import Hero from './Hero'
import Ellipse from '../assets/images/Ellipse.png'


const Pizza1 = () => {
  return (
    <div className='h-screen w-full relative'>
        <img className='hidden xl:block absolute -z-10 right-0 top-0' src={Ellipse} alt="ellipse"/>


    <Navbar1/>
    <Hero/>
    </div>
  )
}

export default Pizza1
