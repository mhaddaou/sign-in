import React from 'react'
import {GiPencil} from 'react-icons/gi'
function About() {
  return (
    <div className='bg-white  text-slate-700 rounded-md p-5 space-y-3'>
    <div className='flex  justify-between items-center'>
      <h1 className='font-semibold'>About</h1>
      <GiPencil className='w-6 h-6'/>


    </div>
    <div>
      <p className=' text-sm'>I am a dedicated Software Engineering student at 1337 School. With a passion for technology and a strong foundation in programming languages, I possess excellent problem-solving and analytical skills. I am knowledgeable in software development methodologies and demonstrate effective teamwork and communication abilities. I am eager to contribute my skills and pursue a successful career in the software engineering field.</p>
    </div>
</div>
  )
}

export default About