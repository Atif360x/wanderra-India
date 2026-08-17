import React from 'react'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'

function hero() {
  return (
    <main>
        <div className='fixed flex w-[100vw] h-[100vh]'>

            <div className='fixed flex w-[100vw] h-[100vh]'>
            <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero1} alt='hero1' className='w-full h-full object-cover' /></div>
            <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero2} alt='hero2' className='w-full h-full object-cover' /></div>
            <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero3} alt='hero3' className='w-full h-full object-cover' /></div>
            <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero4} alt='hero4' className='w-full h-full object-cover' /></div>
            <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero5} alt='hero5' className='w-full h-full object-cover' /></div>
            </div>

             <div className=' h-[100vh] w-[100vw] flex justify-betweem md:p-10 md:items-end z-10 bg-linear-180 from-black/0 from-[20%] to-black leading-none pointer-events-none'>
                <div className='text-white text-[28px] md:text-[70px]'>
                    <h1 className='mb-2 font-bold font-[Georgia]'>
                        India, your way.
                    </h1>
                    <h2 className='font-[Georgia]'>
                        Every Journey Tells a Story.
                    </h2>
                </div>
                <div></div>
            </div>
        </div>
    </main>
  )
}

export default hero;