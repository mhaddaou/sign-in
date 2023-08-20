import React, { useState } from 'react'
import {GiPencil} from 'react-icons/gi'
import Pencel from './Pencel'
import ModalAbout from './Modals/ModalAbout'
function About() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='bg-white  text-slate-700 rounded-md p-5 space-y-3'>

      { isOpen &&  <ModalAbout isOpen={isOpen} closeModal={closeModal} />}
    <div className='flex  justify-between items-center'>
      <h1 className='font-semibold text-lg'>About</h1>
      <button onClick={() =>setIsOpen(true)}>

      <Pencel />
      </button>


    </div>
    <div>
      <p className=' text-sm'>I am a dedicated Software Engineering student at 1337 School. With a passion for technology and a strong foundation in programming languages, I possess excellent problem-solving and analytical skills. I am knowledgeable in software development methodologies and demonstrate effective teamwork and communication abilities. I am eager to contribute my skills and pursue a successful career in the software engineering field.</p>
    </div>
</div>
  )
}

export default About