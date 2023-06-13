import React from 'react'
import Typewriter from 'typewriter-effect';
import likden from '../assets/likden_480x480.jpg'
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';

export default function Hero() {
  return (
    <>
        <div className='flex flex-col lg:flex-row lg:space-between lg:mx-0 w-[90%] lg:w-[100%]  mx-auto lg:mt-[10em]'>
            <div className='order-last lg:hidden   flex justify-between lg:w-5 lg:justify-normal w-[80%] md:w-[50%] mx-auto'>
                <a href='/' target='_blank' className=''>
                    <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                        <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg' width={20} height={20}></img>
                    </div>
                </a>
                <a href='/' target='_blank'>
                    <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                        <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg' width={20} height={20}></img>
                    </div>
                </a>
                <a href='/' target='_blank'>
                    <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                        <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/medium.svg' width={20} height={20}></img>
                    </div>
                </a>
                <a href='mailto:obengkenneth3@gmail.com' target='_blank'>
                    <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                        <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/gmail.svg' width={20} height={20}></img>
                    </div>
                </a>
            </div>
            <div className='flex flex-col items-center lg:w-[45%] '>
                <div className='bg-cyan-500 mb-3 rounded-t-lg rounded-r-lg px-3 w-[6.5em] md:w-[7.5em] md:mb-4 md:h-[1.5em] md:pt-2 md:pl-8 md:text-[2em] mx-auto lg:ml-10 text-lg text-white'>Hello! I am</div>
                <div className='text-white uppercase tracking-wider  md:text-[3em] md:tracking-normal lg:w-[12em] lg:ml-10 mx-auto md:mb-3 text-3xl'>Kenneth Obeng</div>
                <div className='text-lg mb-2 ml-5 lg:-ml-1 md:text-2xl lg:w-[20em] '>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter.typeString('A creative and ')
                            .pauseFor(2500)
                            .typeString('passionate software developer.')
                            .start();
                    }} 
                /></div>
                <div className='hidden lg:flex lg:-ml-32 space-x-8 '>
                    <a href='/' target='_blank' >
                        <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                            <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg' width={20} height={20}></img>
                        </div>
                    </a>
                    <a href='/' target='_blank'>
                        <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                            <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg' width={20} height={20}></img>
                        </div>
                    </a>
                    <a href='/' target='_blank'>
                        <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                            <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/medium.svg' width={20} height={20}></img>
                        </div>
                    </a>
                    <a href='mailto:obengkenneth3@gmail.com' target='_blank'>
                        <div className='h-[36px] w-[36px] md:h-[55px] md:w-[55px] bg-cyan-500 hover:bg-white pt-2 rounded-full'>
                            <img className='mx-auto invert hover:invert-0 md:mt-1 md:w-[30px] md:[30px]' src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/gmail.svg' width={20} height={20}></img>
                        </div>
                    </a>
                </div>
            </div>
            <div className='hidden lg:flex lg:w-[45%] lg:ml-20 lg:-mt-4 lg:justify-center lg:items-center'>
                <div className='border animate-move relative h-[26rem]  w-[26rem] rounded-full  shadow-cyan-500/50'>
                    <span className='flex justify-center items-center w-[3rem] h-[3rem] text-white bg-[#1D1D1D] shadow-custom shadow-white rounded-full absolute -top-[2rem] left-[calc(50%_-_2rem)]'><DesignServicesSharpIcon /></span>
                    <span className='flex justify-center items-center w-[3rem] h-[3rem] text-white bg-[#1D1D1D] shadow-custom shadow-white rounded-full absolute top-[calc(50%_-_2rem)] -right-[2rem]'><CodeSharpIcon /></span>
                    <span className='flex justify-center items-center w-[3rem] h-[3rem] text-white bg-[#1D1D1D] shadow-custom shadow-white rounded-full absolute top-[calc(50%-2rem)] -left-[2rem]'><CodeOffSharpIcon /></span>
                    <span className='flex justify-center items-center w-[3rem] h-[3rem] text-white bg-[#1D1D1D] shadow-custom shadow-white rounded-full absolute left-[calc(50%-2rem)] -bottom-[1.5rem]'><DesignServicesSharpIcon /></span>
                </div>
                <div className='w-[20rem] h-[20rem] rounded-full absolute'>
                    <img className='rounded-full mx-auto mt-0' alt="a headshot of Kenneth Obeng" src={likden} height={350} width={350}></img>
                </div>
            </div>
            <div className='order-first z-0 mb-5 sm:w-[80%] md:w-[70%] mx-auto lg:hidden'>
                <img className='rounded-2xl md:rounded-full animate-pulse' src={likden}></img>
            </div>
        </div>
    </>
  )
}
