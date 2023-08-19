import Image from 'next/image'
import React from 'react'
import {GiPencil} from 'react-icons/gi'
import blog3 from '../public/images/financial.jpeg'


function Activity() {
  return (
    <div className='bg-white text-black rounded-md'>
        <div className='p-5 space-'>
        <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-semibold text-lg'>Activity</h1>
                        <p className=' text-sm text-txt hover:underline cursor-pointer font-semibold'>597 followers</p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='text-txt font-semibold border px-4 py-1 hover:border-[2px]  hover:bg-blue-200 rounded-full border-txt'>Create a post</button>
                        <GiPencil />

                    </div>
                </div>
                <div className='flex  gap-2 pt-2'>
                


                    <button className='bg-bttn text-white font-semibold rounded-full px-2 py-1'>Posts</button>
                    <button className='text-slate-600 border hover:border-slate-700 transition  ease-in hover:bg-bg font-semibold rounded-full px-2 py-1'>Comments</button>
                    <button className='text-slate-600 border hover:border-slate-700 transition  ease-in hover:bg-bg font-semibold rounded-full px-3 py-1'>Images</button>
                </div>
                <div className='pt-6 border-b pb-4 border-slate-200'>
                    <div>
                        <p className=' text-xs font-light   `'><span className=' font-semibold text-slate-500'>Mohamed Haddaoui</span> reposted this • 1d</p>
                    </div>
                    <div className='pt-2'>
                        <img className=' w-16 h-16 rounded-lg' src="/images/hiring.jpeg" alt="sd" />
                    </div>
                    <div className='pt-4 flex gap-1'>
                        <img src="/images/suport.svg" alt="" /> <p className='text-sm text-black font-extralight '>1</p>
                    </div>
                </div>
                <div className='pt-4 border-b border-slate-200'>
                    <div>
                        <p className=' text-xs font-light   `'><span className=' font-semibold text-slate-500'>Mohamed Haddaoui</span> posted this • 1w</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='pt-2 w-16 h-16'>
                            <div className='h-16 w-16 rounded-xl scale-100 overflow-hidden '>
                                <img src="/images/financial.jpeg" alt='img' className=' scale-150 w-full h-full  cursor-pointer ease-in-out'/>
                            </div>
                        </div>
                        <div className='space-y-4 pt-4'>
                            <p>📈 Excited to showcase my new responsive Financial App Front-end! 💼💰</p>
                                <p>I &apos; m thrilled to unveil my latest project: a sleek and user-friendly financial app built entirely on th</p>
                        </div>

                    </div>
                    <div className='pt-4 flex gap-1'>
                        <img src="/images/suport.svg" alt="" /> <p className='text-sm text-black font-extralight '>1</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Activity