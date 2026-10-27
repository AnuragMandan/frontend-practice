import React from 'react'
import Pizza from '../assets/images/pizza.png'

const Hero = () => {
  return (
    <div className='relative flex flex-col items-center h-full w-full'>
      <img className='hidden lg:block right-5  max-w-[50%] lg:max-w-[100%] absolute top-[110px] lg:top-[39px]' src={Pizza} alt="pizza" />
      <div className='flex flex-col xl:flex-row max-w-[1280px] h-full w-full p-4'>
        <div className='max-w-[516px] w-full flex flex-col items-start mt-[50px] sm:mt-[90px] md:mt-[190px] p-1'>
          <h1 className='text-[60px] sm:text-[150px] md:text-[184px] text-[#B53322] leading-[70%] font-medium'>Pizza <span><h3 className='text-[26px] sm:text-[49px] leading-[100%] mt-[30px] text-[#B53322]' >Perfection Every Time</h3>
</span></h1>
          <p className='font-helvetica-light text-[18px] mt-[15px] text-[#3D3D3D]'>Lorem ipsum dolor sit amet consectetur. Quis imperdiet urna sollicitudin ac nunc pharetra pharetra tincidunt neque.</p>
              <button className='font-Transat mt-10 bg-[#EA5C0B] text-white rounded-[8px] px-3 sm:px-7 py-2 sm:py-4 border-1'>View Our Menu</button>

        </div>
        <img className="block lg:hidden" src={Pizza} alt="pizza" />
      </div>
    </div>
  )
}

export default Hero
