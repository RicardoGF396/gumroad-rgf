import React from 'react'
import { founder_link, sponsor_icon, sponsor_link } from '../utils/Image_Links'

function Sponsor() {
  return (
    <div className='items-center justify-center flex-col-1 2xl:flex border-b-2 border-black bg-black py-12' >
        <div className=' 2xl:w-[50%] items-center justify-center flex h-[700px] border-l-2 border-black relative'>
            <div className='relative' >
                <img
                    alt='Start Free'
                    src={sponsor_link}
                    className="w-[600px] h-[600px] "
                />
                <img
                    alt='Start Free'
                    src={sponsor_icon}
                    className='absolute top-0 left-0 '
                />
            </div>
        </div>
        <div className='items-start justify-center text-white 2xl:w-[50%] py-24 2xl:px-24 px-12 flex flex-col 2xl:h-[700px] space-y-12 '>
        <div className='flex items-start justify-start w-full space-x-4'>
        <img
            alt='Sahil Lavingia'
            className='w-24 h-24 object-cover object-center '
            src={founder_link}
        />
        <div className='self-center space-y-2 font-medium' >
            <h1 className="text-2xl font-bold">Sahil Lavingia </h1>
            <p className="xl:w-1/2">
              Gumroad founder, Irregular painter, VC-hating VC, Aspiring Sci-Fi
              author
            </p>
        </div>
        </div>
        <h1 className="lg:text-7xl text-5xl font-medium ">
          Earn from our mistakes
        </h1>
        <h3 className="lg:text-3xl text-2xl leading-snug">
          Here’s no perfect business, just lots of attempts. Learn from
          Gumroad’s founder Sahil Lavingia, in his new book,
          <b className="underline hover:text-[#FF90E8] cursor-pointer font-normal ">
            ”The Minimalist Entrepreneur”
          </b>
          — a manifesto for founders who would rather build great businesses
          than big companies. More on our story here.
        </h3>

        </div>
    </div>
  )
}

export default Sponsor