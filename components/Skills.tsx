import Link from 'next/link'
import React from 'react'
import {GiPencil} from 'react-icons/gi'
import {HiMiniFolder} from 'react-icons/hi2'
import {BsArrowRightShort} from 'react-icons/bs'


function Skills() {
  return (
        <div className='bg-white text-black rounded-md'>
            <div className='px-5 pt-5 space-y-4'> 
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-semibold text-lg'>Skills</h1>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='text-txt font-semibold border px-4 py-1 hover:border-[2px]  hover:bg-blue-200 rounded-full border-txt'>Demonstrate skills</button>
                        <p className='text-4xl font-extralight text-slate-600 cursor-pointer'>+</p>
                        <GiPencil />

                    </div>
                </div>
                <div className=''>
                    <div className='space-y-3 border-b pb-5'>
                        <Link className='hover:text-txt hover:underline font-semibold' href="#">Web Components</Link>
                        <div className='flex items-center gap-5'>
                            <img className='w-7 h-7' src="/images/1337.jpeg" alt="" />
                            <p className=' font-light text-black text-sm'>1337 Future Is Loading</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <HiMiniFolder className="w-7 h-7 text-slate-600" />
                            <p className=' font-light text-black text-sm'>FT_TRANSCENDENCE</p>
                        </div>
                    </div>
                    <div className='space-y-3 border-b py-5'>
                        <Link className='hover:text-txt hover:underline font-semibold' href="#">nextjs</Link>
                       
                        <div className='flex items-center gap-5'>
                            <HiMiniFolder className="w-7 h-7 text-slate-600" />
                            <p className=' font-light text-black text-sm'>FT_TRANSCENDENCE</p>
                        </div>
                    </div>
                    <div className='space-y-3  py-5'>
                        <Link className='hover:text-txt hover:underline font-semibold' href="#">Responsive Web Design</Link>
                        <div className='flex items-center gap-5'>
                            <img className='w-7 h-7' src="/images/1337.jpeg" alt="" />
                            <p className=' font-light text-black text-sm'>1337 Future Is Loading</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <HiMiniFolder className="w-7 h-7 text-slate-600" />
                            <p className=' font-light text-black text-sm'>FT_TRANSCENDENCE</p>
                        </div>
                    </div>
                   
                </div>
            </div>
                <div className='h-full  w-full hover:bg-stone-200  cursor-pointer'>
                <div className='  flex items-center border-t py-2 justify-center gap-3 text-slate-600 font-semibold'>
                        <p>Show all 19 skills</p>
                        <BsArrowRightShort className="w-5 h-5 font-semibold" />
                    </div>
                </div>
        </div>
  )
}

export default Skills