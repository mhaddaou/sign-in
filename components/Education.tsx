import Link from 'next/link'
import React from 'react'
import {GiPencil} from 'react-icons/gi'
import Pencel from './Pencel'
import Plus from './Plus'


function Education() {
  return (
    <div className='bg-white text-black rounded-md'>
            <div className='p-5 space-y-4 '>
            <div className='flex justify-between  items-center '>
                    <div>
                        <h1 className='font-semibold text-lg'>Education</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        {/* <p className='text-4xl font-extralight text-slate-600 cursor-pointer'>+</p> */}
                        <Plus/>
                        <Pencel/>
                    </div>
                </div>
                <div className='flex justify- gap-2 border-b py-4'>
                  <div>
                  <img className=' w-16 xl:w-12  h-12 ' src="/images/1337.jpeg" alt="" />

                  </div>
                  <div className='space-y-3'>
                    <Link className='hover:text-txt hover:underline text-base font-semibold' href="#">1337 Coding School</Link>
                    <p className='text-black  block text-sm'><span className='font-semibold'>Skills:</span> Responsive Web Design · JavaScript · C++ · Front-End Development · Web Components</p>
                  </div>
                </div>
                <div className='flex justify- gap-2  '>
                  <div>
                  <img className=' w-12 h-12' src="/images/mek.jpeg" alt="" />

                  </div>
                  <div className='space-y-'>
                    <Link className='hover:text-txt hover:underline text-base font-semibold' href="#">Université Moulay Ismail Meknès</Link>
                    <p className='text-black  block text-sm'>Physical Sciences</p>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Education