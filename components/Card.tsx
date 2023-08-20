'use client';
import React, { useContext, useEffect } from 'react'
import Pencel from './Pencel'
import Link from 'next/link'
import { MyContext } from './Context';
function Card() {
    const context = useContext(MyContext);
    
    
  return (
    <div className='bg-white rounded-md'>
        <div className='relative z-10 '>
                <div className="bg-[url('/images/mhaddaou.jpeg')] w-full h-28 md:h-52  rounded-t-md bg-no-repeat  bg-center bg-cover"> 

            </div>
            <div className='-bottom-32 -left-10 absolute  rounded-full h-72 w-72 z-10'>
                <img className=' w-full  h-full rounded-full scale-50 border-8 border-white   ' src={context.img} alt=""  />
            </div>
        </div>
        <div className='pt-5   z-10 flex justify-end'>
            <Pencel/>
        </div>
        <div className='w-[90%] z-20 mx-auto'>
            <div>
                <h1 className=' cursor-pointer z-40 text-2xl text-black font-bold'>{context.name}</h1>
               
            </div>
            <div>
                <p className='text-slate-800 opacity-90 w-[65%] font-medium pt-1'>Front End Developer | Software Engineer student at 1337 coding school | I'm looking for an internship</p>
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
                <button className='border rounded-full bg-txt  text-white font-bold  px-4 py-1'>Open to</button>
                <button className='border rounded-full border-txt text-txt font-bold  px-4 py-1'>Add profile section</button>
                <button className='border rounded-full font-bold  px-4 py-1'>More</button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Card