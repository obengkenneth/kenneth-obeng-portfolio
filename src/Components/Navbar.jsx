import React, { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='sticky top-0 z-10 flex justify-between items-center mb-4 py-3 px-3 lg:px-10 bg-black shadow-nav shadow-white'>
        <h1 className='text-white text-3xl'>Kenneth</h1>
        <button className='bg-transparent lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className='block bg-white w-[20px] h-[2px] mb-1'></span>
            <span className='block bg-white w-[20px] h-[2px] mb-1'></span>
            <span className='block bg-white w-[20px] h-[2px] mb-1'></span>
        </button>
        <ul className='hidden lg:flex text-xl'>
          <li className='mb-3 md:mx-2 md:mb-3 active:border-b active:border-cyan-500 hover:cursor-pointer hover:text-cyan-500'><a href='/' className='active:text-cyan-500'>Home</a></li>
          <li className='mb-3 md:mx-2 md:mb-3 '><a>About</a></li>
          <li className='mb-3 md:mx-2 md:mb-3'><a>Skills</a></li>
          <li className='mb-3 md:mx-2 '><a>Contact</a></li>
        </ul>
        <div className={`fixed top-0 left-0 text-lg pt-4 pl-10 w-[70%] h-full bg-[#1D1D1D] -translate-x-full transition ease-in-out duration-500 ${isMenuOpen ? ' translate-x-0' : ''} `}>
          <h1 className='text-3xl text-white mb-[3em]'>Kenneth</h1>
          <ul className='text-2xl'>
            <li className='mb-3 md:mx-2 md:mb-3 active:text-cyan-500'>Home</li>
            <li className='mb-3 md:mx-2 md:mb-3'>About</li>
            <li className='mb-3 md:mx-2 md:mb-3'>Skills</li>
            <li className='mb-3 md:mx-2 '>Contact</li>
          </ul>
        </div>
    </nav>
  )
}
