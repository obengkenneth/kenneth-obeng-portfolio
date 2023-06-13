import React from 'react';
import Aboutpic from '../assets/about.webp';

export default function About() {
  return (
    <div className='flex flex-col items-center mt-4'>
        <h1 className='text-white text-3xl md:text-[3em] mb-5'>About Me</h1>
        <div className='w-[90%] flex flex-col space-y-4 md:flex-row md:space-x-5'>
            <div>
                <img src={Aboutpic}></img>
            </div>
            <div>
                <p>I am Kenneth Obeng, a graduate from Openlabs Ghana(formerly NIIT).
                    I am a creative, hardworking and passionate software developer proficient in frontend development whilst 
                    consistently building up my backend skills.
                </p><br />
                <p>My passion for software development was born out of a curiosity to know what goes into 
                    creating software that provide real world value so I am constantly learning because I know that
                    software developement is a fast-paced field. I really enjoy making software that solves problems and needs.
                </p>
            </div>
        </div>
    </div>
  )
}
