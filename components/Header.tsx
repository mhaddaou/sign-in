import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <section >
        <div className=' w-full h-full 0' >
            <div className='flex justify-between h-full w-[70%] px-5 items-center relative'>
                <div className='absolute -top-4  w-full h-16'>
                    <Image id='#' className=' cursor-pointer'  src='/images/logo.png' alt='logo' width={100} height={100} />
                </div>
                <div className='flex justify-between gap-10 items-center'>
                    
                </div>
            </div>    

        </div>

    </section>
  )
}
