import Link from 'next/link'
import React from 'react'
import {BsEyeFill} from 'react-icons/bs'

function AnalyticsAnalytics() {
  return (
    <div className='bg-white text-black rounded-md'>
        <div className='p-5 pb-2 space-'>
        <div className='pb-3'>
                <h1 className='font-semibold text-lg'>Analytics</h1>
                <div className=' opacity-70 flex items-center gap-1'>
                    <BsEyeFill />
                    <p className='text-sm'>Private to you</p>
                </div>
            </div>
            <div className='flex gap-5'>
            <div className=' w-1/3  pb-3'>
                <div className='flex gap-1'>
                    <div className=' opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
    </svg>                    </div>
    <Link className='hover:underline hover:text-txt  font-semibold opacity-80' href="#">63 profile views
</Link>
    </div>
    <div>
        <p className='pl-7 text-sm opacity-80'>
        Discover who's viewed your profile.
        </p>
    </div>
            </div>
            <div className=' w-1/3  pb-3'>
                <div className='flex gap-1'>
                    <div className=' opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
    </svg>
                    </div>
    <Link className='hover:underline hover:text-txt  font-semibold opacity-80' href="#">168 post impressions
</Link>
    </div>
    <div>
        <p className='pl-7 text-sm opacity-80'>
        Check out who's engaging with your posts.
        </p>
    </div>
            </div>
            <div className=' w-1/3  pb-3'>
                <div className='flex gap-1'>
                    <div className=' opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
    </svg>
                    </div>
    <Link className='hover:underline hover:text-txt  font-semibold opacity-80' href="#">18 search appearances
</Link>
    </div>
    <div>
        <p className='pl-7 text-sm opacity-80'>
        See how often you appear in search results.
        </p>
    </div>
            </div>
           
            </div>
        </div>
    </div>
  )
}

export default AnalyticsAnalytics