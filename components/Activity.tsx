import Image from 'next/image'
import React from 'react'
import {GiPencil} from 'react-icons/gi'
import blog3 from '../public/images/financial.jpeg'
import {BsArrowRightShort} from 'react-icons/bs'
import Pencel from './Pencel'


function Activity() {
  return (
    <div className='bg-white text-black rounded-md'>
        <div className='p-5 pb-2 space-'>
        <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-semibold text-lg'>Activity</h1>
                        <p className=' text-sm text-txt hover:underline cursor-pointer font-semibold'>597 followers</p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='text-txt font-semibold border px-4 py-1 hover:border-[2px]  hover:bg-blue-200 rounded-full border-txt'>Create a post</button>
                        <Pencel />

                    </div>
                </div>
                <div className='flex  gap-2 pt-2'>
                


                    <button className='bg-bttn text-white font-semibold rounded-full px-2 py-1'>Posts</button>
                    <button className='text-slate-600 border hover:border-slate-700 transition  ease-in hover:bg-bg font-semibold rounded-full px-2 py-1'>Comments</button>
                    <button className='text-slate-600 border hover:border-slate-700 transition  ease-in hover:bg-bg font-semibold rounded-full px-3 py-1'>Images</button>
                </div>
                <div className='pt-6 border-b pb-4 border-slate-200'>
                    <div>
                        <p className=' text-xs font-light'><span className=' font-semibold text-slate-500'>Mohamed Haddaoui</span> reposted this • 1d</p>
                    </div>
                    <div className='pt-2'>
                        <img className=' w-16 h-16 rounded-lg' src="/images/hiring.jpeg" alt="sd" />
                    </div>
                    <div className='pt-4 flex gap-1'>
                        <img src="/images/suport.svg" alt="" /> <p className='text-sm text-black font-extralight '>1</p>
                    </div>
                </div>
                <div className='pt-4 border- border-slate-200'>
                    <div>
                        <p className=' text-xs font-light'><span className=' font-semibold text-slate-500'>Mohamed Haddaoui</span> posted this • 1w</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='pt-2 w-16 h-16'>
                            <div className='h-16 w-16 rounded-xl scale-100 overflow-hidden '>
                                <img src="/images/financial.jpeg" alt='img' className=' scale-150 w-full h-full  cursor-pointer ease-in-out'/>
                            </div>
                        </div>
                        <div className='space-y-4 pt-4'>
                            <p className='text-sm'>📈 Excited to showcase my new responsive Financial App Front-end! 💼💰</p>
                                <p className='text-sm'>I &apos; m thrilled to unveil my latest project: a sleek and user-friendly financial app built entirely on th  
                                <button className=' opacity-70 hover:text-txt hover:opacity-100'>&nbsp; ...show more</button></p>
                        </div>

                    </div>
                    
                    <div className='pt-4 flex  '>
                        <div className='group flex gap-1'>
                        <div className='group hover:cursor-pointer '>
                            <div className='flex -space-x-1'>
                            <img className='' src="/images/support.svg" alt="" />
                            <img className='' src="/images/jaim.svg" alt="" />
                            <img className='' src="/images/love.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <p className=' text-xs text-black font-extralight group-hover:underline group-hover:text-txt'>8</p>
                        </div>
                        </div>
                        </div>
                </div>
        </div>
        <div className='h-full  w-full hover:bg-stone-200  hover:rounded-b-md cursor-pointer'>
                <div className='  flex items-center border-t py-2 justify-center gap-3 text-slate-600 font-semibold'>
                        <p>Show all posts</p>
                        <BsArrowRightShort className="w-5 h-5 font-semibold" />
                    </div>
                </div>
    </div>
  )
}

export default Activity