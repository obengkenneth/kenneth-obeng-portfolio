import React from 'react'

export default function Project(props) {
  return (
    <div className='w-[80%] h-[15em] border border-white rounded-xl mx-auto'>
      <div className='w-[100%] h-[80%] object-contain'>{props.img}</div>
      <div className='flex justify-between w-[80%] mx-auto'>
        <div className='border px-1 rounded-lg text-white cursor-pointer'>
          <a href={props.link}>Code</a>
        </div>
        <div className='border px-1 rounded-lg text-white cursor-pointer'>
          <a href={props.link}>Live</a>
        </div>
      </div>
    </div>
  )
}
