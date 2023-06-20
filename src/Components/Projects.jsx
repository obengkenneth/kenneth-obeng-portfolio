import React from 'react'
import Project from './Project'
import Blog from '../assets/blogHomepage.png'

export default function Projects() {
  return (
    <div className='w-[80%] h-[20em] mx-auto mb-3'>
      <h1 className='text-white text-3xl md:text-[3em] flex justify-center mb-3'>Projects</h1>
      <div className='flex flex-col md:flex-row'>
        <Project img={Blog} title="My Blog" codeLink="https://github.com/obengkenneth/KenObeng_blog" liveSiteLink="https://ken-obeng-blog.vercel.app/"/>
      </div>
    </div>
  )
}
