import React from 'react'
import { PizzaLogo } from './Icon'

const Navbar1 = () => {
  return (
    <div className='w-full bg-transparent backdrop-blur-lg'>
      <div className='flex flex-row  justify-between px-4 bg-500 backdrop-blur-lg bg-[#EA5C0B] xl:bg-transparent max-w-[1280px] w-full mx-auto items-center '>
        <span><PizzaLogo/></span>
        <div className='hidden lg:flex font-helvetica gap-[30px] max-w-[302px] w-full text-[16px] leading-[100%] items-center justify-center'>
          <p>About</p>
          <p>Pricing</p>
          <p>Contact </p>
          <p>services</p>
        </div>
        <div className='cursor-pointer border-1 border-white rounded-[8px] max-w-[105px] w-full p-1 sm:p-4 mt-[24px] mb-[24px] flex justify-center items-center'>
          <p className='font-Transat text-[#FFFFFF]  text-[14px] sm:text-[18px] cursor-pointer'>Sign Up</p>
        </div>
      </div>
    </div>

  )
}

export default Navbar1
