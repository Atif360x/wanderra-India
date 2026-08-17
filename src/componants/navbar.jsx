import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='fixed z-50 w-[100vw] flex items-center bg-black/15 md:px-8 backdrop-blur-md'>
            <div className='py-4 w-1/3 flex justify-start'></div>

            <div className='py-4 w-1/3'>
                <p className='text-lg text-white flex justify-center'>WANDERRA india</p>
            </div>
            <div className='hidden md:flex justify-end w-1/3 gap-5 text-white py-4 px-2'>
                <a>Journal</a>
                <a>Destinations</a>
                <a>About</a>
                <a>Plan a Trip</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar