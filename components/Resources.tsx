import Link from 'next/link'
import React from 'react'
import {BsEyeFill} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'


function Resources() {
  return (
        <div className='bg-white text-black rounded-md'>
            <div className='p-5 space-y-2'> 
            <div>
                <h1 className='font-semibold text-lg'>Resources</h1>
                <div className=' opacity-70 flex items-center gap-1'>
                    <BsEyeFill />
                    <p className='text-sm'>Private to you</p>
                </div>
            </div>
            <div className='border-b pb-3'>
                <div className='flex gap-1'>
                    <div className=' opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
                     </svg>
                    </div>
    <Link className='hover:underline hover:text-txt  font-semibold opacity-80' href="#">Creator mode
</Link>
<button className='bg-slate-200 px-2 rounded-md text-sm font-semibold block'>Off</button>
    </div>
    <div>
        <p className='pl-7 text-sm opacity-80'>
        Get discovered, showcase content on your profile, and get access to creator tools
        </p>
    </div>
            </div>
            <div className=' pb-3'>
                <div className='flex gap-1'>
                    <div className=' opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
    </svg>
                    </div>
    <Link className='hover:underline hover:text-txt  font-semibold opacity-80' href="#">My network
</Link>
    </div>
    <div>
        <p className='pl-7 text-sm opacity-80'>
        See and manage your connections and interests.
        </p>
    </div>
            </div>
            
            </div>
            <div className='h-full  w-full hover:bg-stone-200  hover:rounded-b-md cursor-pointer'>
                <div className='  flex items-center border-t py-2 justify-center gap-3 text-slate-600 font-semibold'>
                        <p>Show all 5 resources</p>
                        <BsArrowRightShort className="w-5 h-5 font-semibold" />
                    </div>
                </div>
        </div>
  )
}

export default Resources