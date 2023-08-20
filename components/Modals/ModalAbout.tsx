import React, { ChangeEvent, useContext, useState } from 'react'
import Close from '../Close';
import { MyContext } from '../Context';

interface typeAbout{
    isOpen : boolean;
    closeModal : () => void;
}


function ModalAbout({isOpen , closeModal} : typeAbout) {
    const context = useContext(MyContext);
    const [input, setInput] = useState('')
    const handlchange = (e : ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)
    const save = () =>{
        context.setAbout(input)
        closeModal();
    }
  return (
    <div className=' fixed bg-black inset-0    bg-opacity-80 z-50 scroll-smooth '>
        <div className='container bg-white mx-auto w-1/2 my-8 rounded-lg '>
            <div className='border-b flex justify-between pl-7  pr-5 items-center py-2'>
                <h1 className='text-lg font-semibold'>Edit about</h1>
                <button onClick={() => closeModal()}><Close /></button>
            </div>
            <div className='px-5  border-b pt-2'>
                <div className='flex'>
            <p className='border-b-2 border-green-600 px-2 text-eng text-sm font-semibold leading-relaxe tracking-wider leading-loose '> English (Primary profile)</p>

                </div>
            </div>
            <div className='px-7 pt-4'> 
                <p className='  text-sm opacity-80 font-medium leading-relaxed tracking-wide'>
                You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.
                </p>
            </div>
            <div className='px-7 pt-1 pb-6'>
            <textarea value={input} onChange={handlchange} className=" w-full textarea textarea-primary bg-white h-[200px]" placeholder="About"></textarea>
            </div>
            <div className='px-7 py-4 border-t flex  justify-end'>
                <button onClick={save} className='bg-blue-700 hover:bg-blue-900 font-semibold transition-all duration-500  text-white px-4 py-1 rounded-full '>Save</button>
            </div>
        </div>
    </div>
  )
}

export default ModalAbout