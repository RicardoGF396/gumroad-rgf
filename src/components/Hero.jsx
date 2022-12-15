import React from 'react'
import { brush_link, hero_link } from '../utils/Image_Links'

function Hero() {
  return (
    <div className='item-center justify-between w-full border-b-2 border-black -mt-2 2xl:flex flex-col-1'>
      {/* Left side */}
      <div className='bg-[#FF90E8] 2xl:h-[888px] xl:px-36 px-12 w-full items-start justify-start flex flex-col 2xl:border-r-2 border-black'>
        <div className='w-full items-start py-24 justify-start flex flex-col'>
          <h1
          className='2xl:text-8xl lg:text-7xl text-6xl font-medium py-12 '
          > Go from <br/> Zero to $1</h1>
          <h2 className=' text-2xl pb-12'>
            Occaecat incididunt dolore in adipisicing.
            Aute dolor consequat sit elit esse est dolor.
            <br/>It's that easy
          </h2> 
          <div className='h-[150px] items-start py-3 flex flex-col justify-start '>
              <button className='z-40 hover:-translate-y-3 hover:-translate-x-1 transition-all ease-in-out duration-300 peer selling-btn '>
                Start selling
              </button>
              <button className='selling-btn z-30 bg-[#FF90E8] border border-black -mt-[50px] peer-hover:-translate-y-3 peer-hover:translate-x-1 duration-[700ms] ease-in-out transition-all peer-hover:flex hidden  '>
                Start selling
              </button>
              <button className='selling-btn z-20 bg-[#FFC900] border border-black -mt-[50px] peer-hover:-translate-y-3 peer-hover:translate-x-3 duration-[400ms] ease-in-out transition-all peer-hover:flex hidden  '>
                Start selling
              </button>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className='bg-[#FCC900] py-36 px-24 w-full items-start justify-start hidden 2xl:flex flex-col '>
        <div className='items-start justify-center flex w-full '>
          <img src={hero_link} alt="heroimage" className='w-[600px] h-[600px] object-contain object-center '/>
          <img src={brush_link} alt='brush_link' className='-ml-24' />
        </div>
      </div>

    </div>
  )
}

export default Hero