import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
    <div className='w-[80%] h-[20em] mx-auto'>
      <h1 className='text-white text-3xl md:text-[3em] flex justify-center'>Projects</h1>
      <div className='flex flex-col md:flex-row'>
        <Project />
      </div>
    </div>
  )
}
