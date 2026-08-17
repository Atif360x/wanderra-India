import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import img1 from '../assets/img1.png'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 5,
          pin: true,
        },
      })

      tl.to("#text", {
        y: '-100vh',
        ease: 'none',
      }).to(".fade", {
        delay: 0.2,
        opacity: 0
      }, '<').from("#white", {
        y:"100vh"
      },'<')

     

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <div ref={containerRef} className='flex w-[100vw] h-[100vh]'>

        <div className='relative flex w-[100vw] h-[100vh]'>
          <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero1} alt='hero1' className='w-full h-full object-cover' /></div>
          <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero2} alt='hero2' className='w-full h-full object-cover' /></div>
          <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero3} alt='hero3' className='w-full h-full object-cover' /></div>
          <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero4} alt='hero4' className='w-full h-full object-cover' /></div>
          <div className='m-0 h-full w-[20vw] transition-all duration-300 md:hover:w-[28vw] border border-[#111] overflow-hidden'><img src={hero5} alt='hero5' className='w-full h-full object-cover' /></div>
        </div>

        <div className='fade absolute h-[100vh] w-[100vw] flex justify-betweem md:p-10 md:items-end z-10 bg-linear-180 from-black/0 from-[20%] to-black leading-none pointer-events-none'>
          <div id='text' className='text-white text-[28px] md:text-[70px]'>
            <h1 className='mb-2 font-bold font-[Georgia]'>
              India, your way.
            </h1>
            <h2 className='font-[Georgia]'>
              Every Journey Tells a Story.
            </h2>
          </div>
          <div></div>
        </div>
        <div id='white' className='absolute flex items-end bg-black/60 backdrop-blur-md h-[100vh] w-[100vw]'>
            
        </div>

      </div>
    </main>
  )
}

export default Hero;