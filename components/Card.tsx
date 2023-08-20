'use client';
import React, { useContext, useEffect, useState } from 'react'
import Pencel from './Pencel'
import Link from 'next/link'
import { MyContext } from './Context';
import ModalCard from './Modals/ModalCard';
function Card() {
    const context = useContext(MyContext);
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    
    
  return (
    <div className='bg-white rounded-md'>
      { isOpen &&  <ModalCard isOpen={isOpen} closeModal={closeModal} />}
        <div className='relative z-10 '>
                <div className="bg-[url('/images/mhaddaou.jpeg')] w-full h-28 md:h-52  rounded-t-md bg-no-repeat  bg-center bg-cover"> 

            </div>
            <div className='-bottom-32 -left-10 absolute  rounded-full h-72 w-72 z-10'>
                <button className='w-full  h-full rounded-full scale-50 border-8 border-white'>
                    {
                        context.img.length === 0 ? 
                            <img className=' w-full h-full rounded-full' src='/images/avatar.jpeg' alt="dsf" height={100} width={100}  />  :
                            <img className=' w-full h-full rounded-full' src={context.img} alt="dsf" height={100} width={100}  />
                    }

                </button>
            </div>
        </div>
        <div className='pt-5 pr-3   z-10 flex justify-end'>
            <button onClick={() =>setIsOpen(true)}>
                <Pencel />
            </button>
        </div>
        <div className='w-[90%] z-20 mx-auto'>
            <div>
                <h1 className=' cursor-pointer z-40 text-2xl text-black font-bold'>{context.name}</h1>
               
            </div>
            <div>
                {
                    context.headline.length > 0 ? 
                <p className='text-slate-800 opacity-90 w-[65%] font-medium pt-1'>{context.headline}</p> : 
                <p className='text-slate-800 opacity-90 w-[65%] font-medium pt-1'>Front End Developer | Software Engineer student at 1337 coding school | I&apos;m looking for an internship</p>

                }
            </div>
            <div className=' text-sm py-2'>
            <p className=' md:inline  text-black opacity-50'>Meknes, Fès-Meknès, Morocco</p> <Link className=' font-semibold text-txt hover:underline' href="#">Contact info</Link>
              
            </div>
        </div>
        <div className='w-[90%] mx-auto'>
            <div >
                <Link className='text-sm text-txt font-bold hover:underline' href="#">500+ connections</Link>
            </div>
            <div className='flex gap-5 py-2'>
                <button className='border rounded-full bg-txt  text-white font-bold  px-4 py-1 hover:bg-blue-800 transition-all duration-300'>Open to</button>
                <button className='border rounded-full border-txt text-txt font-bold  hover:bg-slate-200 hover:border-text transition-all ease-in duration-300  px-4 py-1'>Add profile section</button>
                <button className='border text-slate-800 border-slate-800 opacity-70 hover:bg-slate-200 hover:border-black transition-all ease-in duration-300 rounded-full font-bold  px-4 py-1'>More</button>
            </div>
        </div>
        <div className='w-[90%] mx-auto pt-3 pb-5'>
            <div className='flex gap-4'>
                <div className='w-1/2 rounded-lg relative  text-sm '>
                <div className='p-2 px-3 text-sm z-50 flex items-start w-full'>
                        <div className='text-black  w-full'>
                            <div className='flex justify-between    '>
                            <h1 className='font-semibold'>Open to work</h1>
                            
                            </div>
                            <p className=' font-medium'>Engineer Intern roles</p>
                            <Link className='font-semibold text-txt cursor-pointer ' href="#">Show details</Link>
                        </div>
                        
                    </div>  
                    <div className='absolute top-0 right-0 '>
                        <div className=' p-2 pr-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match text-slate-700" width="16" height="16" focusable="false">
      <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
    </svg>
             

                        </div>
                    </div>
                    <div className='bg-txt opacity-20 top-0 w-full h-full z-0 rounded-lg absolute'>

                    </div>
                    
                </div>
                <div className='w-1/2 rounded-lg border'>
                    <div className='flex text-sm  py-2 px-4'>
                        <div>
                            <p className='text-slate-900'>
                                <span className='font-semibold'>Showcase services</span> you offer so you and your business can be found in search.

                                
                            </p>
                            <Link className='text-txt hover:underline font-semibold' href="#">Get started</Link>
                        </div>
                        <div>
                            <button className='hover:bg-slate-200 transition-all duration-300 p-1 rounded-full '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match text-slate-500" width="16" height="16" focusable="false">
                                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card