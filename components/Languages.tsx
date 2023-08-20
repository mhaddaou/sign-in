import React from 'react'
import {GiPencil} from 'react-icons/gi'
import Plus from './Plus'
import Pencel from './Pencel'
function Languages() {
  return (
    <div className='bg-white text-black rounded-md'>
            <div className='p-5 space-y-4'> 
                <div className='flex justify-between  items-center '>
                    <div>
                        <h1 className='font-semibold text-lg'>Languages</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Plus/>
                        <Pencel/>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div>
                        <h2>Arabic</h2>
                        <p className='text-sm font-extralight border-b pb-2 leading-relaxed'>Native or bilingual proficiency</p>
                    </div>
                    <div>
                        <h2>English</h2>
                        <p className='text-sm font-extralight  leading-relaxed'>Limited working proficiency</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Languages