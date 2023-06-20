import React from 'react'

export default function Project(props) {
  return (
    <div className='w-[100%] sm:w-[25em] h-[19em] shadow-sm shadow-white rounded-xl mx-auto'>
      <div className="w-[100%] h-[60%] rounded-xl bg-contain sm:bg-cover sm:rounded-b-none  bg-no-repeat " style={{backgroundImage: `url(${props.img})`}}>
        {/* <img src={props.img} className='h-full w-full'></img> */}
      </div>
      <div className='h-[30%] flex flex-col justify-between'>
        <div className='flex justify-center text-cyan-500 text-2xl'><h2>{props.title}</h2></div>
        <div className='flex justify-between w-[80%] mx-auto'>
          <div className='flex justify-center items-center rounded-full text-white cursor-pointer h-[2em] w-[30%] bg-cyan-500 transition ease-in-out delay-150 hover:-translate-y-1'>
            <a href={props.codeLink} target='_blank'>Code</a>
          </div>
          <div className='flex justify-center items-center rounded-full text-white cursor-pointer h-[2em] w-[30%] bg-cyan-500 transition ease-in-out delay-150 hover:-translate-y-1'>
            <a href={props.liveSiteLink} target='_blank'>Live</a>
          </div>
        </div>
      </div>
    </div>
  )
}
